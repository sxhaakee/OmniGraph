from typing import TypedDict, Annotated, Sequence
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage
from langgraph.graph import StateGraph, END
import json

# Define the state for LangGraph
class ImpactState(TypedDict):
    messages: Sequence[BaseMessage]
    raw_text: str
    channel_context: str
    intent: str
    confidence: float
    time_spent_minutes: int
    needs_human_review: bool

def classify_intent(state: ImpactState):
    """
    Model: GPT-4o
    Input: Raw message text + channel context
    Output: intent and confidence
    """
    # Mock classification
    text = state['raw_text'].lower()
    if 'help' in text or 'debug' in text:
        intent = 'invisible_work'
        confidence = 0.85
    else:
        intent = 'social'
        confidence = 0.90
        
    needs_review = confidence < 0.70
    
    return {
        "intent": intent, 
        "confidence": confidence,
        "needs_human_review": needs_review
    }

def extract_metrics(state: ImpactState):
    """
    Model: GPT-4o function calling
    Extracts time_spent_minutes from the thread.
    """
    # Mock extraction
    time_spent = 30 # Default
    if 'hours' in state['raw_text'].lower():
        time_spent = 120
        
    # Cap at 4 hours
    time_spent = min(time_spent, 240)
    
    return {"time_spent_minutes": time_spent}

def route_next_step(state: ImpactState):
    if state['needs_human_review']:
        return "human_review"
    if state['intent'] == 'invisible_work':
        return "extract_metrics"
    return END

# Build the LangGraph
workflow = StateGraph(ImpactState)

# Add nodes
workflow.add_node("classify", classify_intent)
workflow.add_node("extract_metrics", extract_metrics)
workflow.add_node("human_review", lambda state: state) # Mock human review node

# Add edges
workflow.set_entry_point("classify")
workflow.add_conditional_edges(
    "classify",
    route_next_step,
    {
        "human_review": "human_review",
        "extract_metrics": "extract_metrics",
        END: END
    }
)
workflow.add_edge("extract_metrics", END)
workflow.add_edge("human_review", END)

# Compile the graph
impact_app = workflow.compile()

# Example Usage
if __name__ == "__main__":
    initial_state = {
        "raw_text": "I spent 2 hours debugging the redis cache issue with the junior devs.",
        "channel_context": "#engineering"
    }
    result = impact_app.invoke(initial_state)
    print(json.dumps(result, indent=2))

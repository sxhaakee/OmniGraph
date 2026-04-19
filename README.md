<div align="center">
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Database.svg" alt="OmniGraph Logo" width="80" height="80">

  <h1 align="center">OmniGraph AI Suite</h1>

  <p align="center">
    <strong>The Operating System for Corporate Knowledge & Value</strong>
    <br />
    <br />
    <a href="https://github.com/sxhaakee/OmniGraph/issues">Report Bug</a>
    ·
    <a href="https://github.com/sxhaakee/OmniGraph/issues">Request Feature</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/FastAPI-0.110.0-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
    <img src="https://img.shields.io/badge/Supabase-pgvector-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/LangGraph-AI-FF9900?style=for-the-badge&logo=openai&logoColor=white" alt="LangGraph" />
    <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
  </p>
</div>

<hr />

## 🌟 Overview

Enterprise teams lose thousands of hours annually due to fragmented knowledge and invisible labor. **OmniGraph AI Suite** unifies unstructured corporate data spanning Slack, GitHub, Google Drive, and CRMs into a single intelligent layer.

This shared knowledge foundation powers two revenue-generating product lines:
1. **🚀 Revenue Engine:** Automates complex RFP (Request for Proposal) responses, reducing completion time from weeks to under 60 seconds with strict RAG and cross-encoder re-ranking.
2. **📈 Impact Engine:** Surfaces invisible employee contributions (mentorship, peer debugging, coordination) via NLP to ensure equitable HR performance reviews and prevent burnout.

---

## ✨ Features

### 1. Revenue Engine
- **Intelligent RFP Automation:** Drag-and-drop Excel/CSV vendor questionnaires.
- **Cross-Encoder Re-Ranking:** Ensures only the highest-fidelity context is used for LLM generation.
- **Confidence Scoring:** Automatically flags generated answers with a confidence score < 60% and routes them to a human review queue.

### 2. Impact Engine
- **Invisible Labor Analytics:** LangGraph-based pipelines classify Slack threads to quantify time spent on mentorship, debugging, and cross-team coordination.
- **Velocity Visualization:** Beautiful scatter plots mapping raw engineering output (PRs merged) against invisible contributions to identify your true 10x collaborators (and those at risk of burnout).

### 3. Unified Ingestion
- **Privacy-First Processing:** Advanced Regex + NER-based PII scrubbers redact emails, API keys, and phone numbers before embedding generation.
- **Multi-Source Webhooks:** Native ingestion pipelines for Slack, GitHub, and G-Drive via Celery.

---

## 🏗️ Architecture & Tech Stack

OmniGraph is built as a highly scalable, modular monorepo.

*   **Frontend (UI Layer):** Next.js 14 (App Router), Tailwind CSS v4, Framer Motion, Lenis Smooth Scroll, Lucide React.
*   **Backend (API & AI):** FastAPI, Python 3.11, Celery, LangGraph, LangChain, OpenAI (`text-embedding-3-large` & GPT-4o).
*   **Database:** Supabase (PostgreSQL) heavily utilizing `pgvector` for semantic cosine similarity search and HNSW indexing.

---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18+)
*   Python 3.11+
*   Supabase Local CLI (or remote project)
*   Redis (for Celery workers)

### 1. Clone the Repository
```bash
git clone https://github.com/sxhaakee/OmniGraph.git
cd OmniGraph
```

### 2. Quick Start
We've included a streamlined startup script to boot both the Next.js frontend and the FastAPI backend simultaneously.

```bash
chmod +x start.sh
./start.sh
```

Alternatively, you can start them manually:

**Start the Frontend:**
```bash
cd frontend
npm install
npm run dev
```
*Frontend runs on `http://localhost:3000`*

**Start the Backend:**
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```
*Backend API runs on `http://localhost:8000`*

---

## 🔒 Security & RLS
OmniGraph is designed for multi-tenant enterprise deployment. Supabase Row Level Security (RLS) enforces strict `org_id` isolation. No cross-tenant data leakage can occur at the application layer. All JWT validation happens securely in Next.js Middleware and FastAPI dependency injection.

---

## 📄 License
This project is proprietary and confidential.

<div align="center">
  <i>Built with ❤️ by the OmniGraph Team.</i>
</div>

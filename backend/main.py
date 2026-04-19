from fastapi import FastAPI, Depends, HTTPException, Header
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
import os

app = FastAPI(title="OmniGraph API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

async def verify_token(authorization: Optional[str] = Header(None)):
    if not authorization:
        raise HTTPException(status_code=401, detail="Missing authorization header")
    token = authorization.replace("Bearer ", "")
    # In a real app, verify the Supabase JWT here
    # For now, we mock the dependency
    return {"user_id": "mock_user", "org_id": "mock_org"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

# We will include routers later
# app.include_router(rfp.router, prefix="/api/v1/rfp", dependencies=[Depends(verify_token)])
# app.include_router(impact.router, prefix="/api/v1/impact", dependencies=[Depends(verify_token)])
# app.include_router(ingest.router, prefix="/api/v1/ingest", dependencies=[Depends(verify_token)])

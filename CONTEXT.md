# OmniGraph AI Suite Context

## Overview
OmniGraph AI Suite is an enterprise-grade, modular AI platform unifying corporate knowledge. It has two main product lines:
1. **Revenue Engine**: Automates RFP responses.
2. **Impact Engine**: Surfaces invisible employee contributions.

## Tech Stack
- **Frontend**: Next.js 14 (App Router), Vanilla CSS/Tailwind (per preference), Supabase JS Client.
- **Backend**: FastAPI, LangGraph, Python.
- **Database**: Supabase (PostgreSQL with pgvector for embeddings).

## Directory Structure
- `/frontend` - Next.js 14 application.
- `/backend` - FastAPI application and LangGraph pipelines.
- `/supabase` - Database migrations, schema setup.

## Roadmap for "Build All"
1. **Initial Setup**: Scaffold Next.js and FastAPI projects.
2. **Supabase Schema**: Write SQL migrations for core tables (`users`, `organizations`, `documents`, `rfp_jobs`, `employee_contributions`, `audit_events`).
3. **Backend Foundation**: Set up FastAPI server, routing, Supabase auth dependency.
4. **Ingestion Pipeline**: Create basic background task for document ingestion and embedding.
5. **LangGraph Workflows**: Implement Impact Engine and Revenue Engine agentic workflows.
6. **Frontend App**: Implement UI layer using Next.js, including dashboards for Sales and HR, and API integration.

This file will serve as the single source of truth for the ongoing implementation.

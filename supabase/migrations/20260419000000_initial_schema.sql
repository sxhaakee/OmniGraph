-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- 1. users table
CREATE TABLE users (
    id UUID PRIMARY KEY, -- Maps to auth.users.id
    email VARCHAR UNIQUE NOT NULL,
    org_id UUID NOT NULL,
    role VARCHAR NOT NULL CHECK (role IN ('admin', 'manager', 'sales_rep', 'hr_partner', 'employee')),
    full_name VARCHAR,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_login TIMESTAMPTZ
);

-- 2. organizations table
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR NOT NULL,
    domain VARCHAR UNIQUE,
    subscription_tier VARCHAR DEFAULT 'enterprise',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Foreign key for users -> organizations
ALTER TABLE users ADD CONSTRAINT fk_users_org FOREIGN KEY (org_id) REFERENCES organizations(id);

-- 3. documents table
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    org_id UUID NOT NULL REFERENCES organizations(id),
    source_type VARCHAR NOT NULL CHECK (source_type IN ('slack', 'github', 'gdrive', 'crm', 'manual')),
    source_id VARCHAR NOT NULL,
    content TEXT NOT NULL,
    metadata JSONB,
    embedding VECTOR(3072),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    author_id UUID REFERENCES users(id)
);

-- HNSW Index for efficient vector search
CREATE INDEX ON documents USING hnsw (embedding vector_cosine_ops);

-- 4. rfp_jobs table
CREATE TABLE rfp_jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    org_id UUID NOT NULL REFERENCES organizations(id),
    user_id UUID NOT NULL REFERENCES users(id),
    status VARCHAR NOT NULL CHECK (status IN ('queued', 'processing', 'completed', 'failed')),
    total_questions INTEGER NOT NULL,
    completed_questions INTEGER DEFAULT 0,
    file_url VARCHAR,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ
);

-- 5. employee_contributions table
CREATE TABLE employee_contributions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    org_id UUID NOT NULL REFERENCES organizations(id),
    contributor_id UUID NOT NULL REFERENCES users(id),
    type VARCHAR NOT NULL CHECK (type IN ('mentorship', 'debugging', 'coordination', 'knowledge_sharing')),
    description TEXT,
    confidence_score FLOAT,
    time_spent_minutes INTEGER,
    source_thread_id VARCHAR,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. audit_events table
CREATE TABLE audit_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    org_id UUID NOT NULL REFERENCES organizations(id),
    user_id UUID REFERENCES users(id),
    action VARCHAR NOT NULL,
    resource_type VARCHAR NOT NULL,
    resource_id VARCHAR NOT NULL,
    details JSONB,
    timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE rfp_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE employee_contributions ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_events ENABLE ROW LEVEL SECURITY;

-- Core RLS Policy Example (enforce org_id isolation)
CREATE POLICY "Users can only access their org's data" ON documents
    FOR ALL
    USING (org_id = (SELECT org_id FROM users WHERE id = auth.uid()));

CREATE POLICY "Users can only access their org's rfp_jobs" ON rfp_jobs
    FOR ALL
    USING (org_id = (SELECT org_id FROM users WHERE id = auth.uid()));

CREATE POLICY "Users can only access their org's employee_contributions" ON employee_contributions
    FOR ALL
    USING (org_id = (SELECT org_id FROM users WHERE id = auth.uid()));

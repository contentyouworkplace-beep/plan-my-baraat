-- ─── CRM SQL SCHEMA ─────────────────────────────────────────────────────────

-- Enable UUID extension if not enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Cities Table
CREATE TABLE IF NOT EXISTS crm_cities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL UNIQUE,
    state VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Categories Table
CREATE TABLE IF NOT EXISTS crm_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Vendor Packages Table
CREATE TABLE IF NOT EXISTS crm_vendor_packages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    price NUMERIC,
    features TEXT,
    type VARCHAR(20) DEFAULT 'customer' CHECK (type IN ('vendor', 'customer')),
    items JSONB,
    vendor_cost NUMERIC,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Backfill columns for existing installs (safe to re-run)
ALTER TABLE crm_vendor_packages ADD COLUMN IF NOT EXISTS type VARCHAR(20) DEFAULT 'customer';
ALTER TABLE crm_vendor_packages ADD COLUMN IF NOT EXISTS items JSONB;
ALTER TABLE crm_vendor_packages ADD COLUMN IF NOT EXISTS vendor_cost NUMERIC;

-- 4. Vendors Table
CREATE TABLE IF NOT EXISTS crm_vendors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    mobile VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    city_id UUID REFERENCES crm_cities(id) ON DELETE SET NULL,
    category_id UUID REFERENCES crm_categories(id) ON DELETE SET NULL,
    package_id UUID REFERENCES crm_vendor_packages(id) ON DELETE SET NULL,
    status VARCHAR(50) DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Interested', 'Converted', 'Lost')),
    remarks TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Customer Leads Table
CREATE TABLE IF NOT EXISTS crm_customer_leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name VARCHAR(255) NOT NULL,
    mobile VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    city_id UUID REFERENCES crm_cities(id) ON DELETE SET NULL,
    requirement TEXT,
    event_date DATE,
    package_discussed VARCHAR(255),
    status VARCHAR(50) DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Interested', 'Converted', 'Lost')),
    remarks TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Notes Table
CREATE TABLE IF NOT EXISTS crm_notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    entity_type VARCHAR(50) NOT NULL CHECK (entity_type IN ('vendor', 'lead')),
    entity_id UUID NOT NULL,
    content TEXT NOT NULL,
    created_by VARCHAR(255) DEFAULT 'Admin',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. Uploaded Files Table
CREATE TABLE IF NOT EXISTS crm_uploaded_files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    entity_type VARCHAR(50) NOT NULL CHECK (entity_type IN ('vendor', 'lead')),
    entity_id UUID NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    file_type VARCHAR(100),
    file_size INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. Baraat Package Enquiries Table (separate module from Customer Leads)
CREATE TABLE IF NOT EXISTS crm_baraat_enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name VARCHAR(255) NOT NULL,
    event_name VARCHAR(255) NOT NULL,
    mobile VARCHAR(50) NOT NULL,
    package_name VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Interested', 'Converted', 'Lost')),
    remarks TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ─── ROW LEVEL SECURITY (RLS) POLICIES ──────────────────────────────────────

-- Enable RLS on all tables
ALTER TABLE crm_cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE crm_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE crm_vendor_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE crm_vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE crm_customer_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE crm_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE crm_uploaded_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE crm_baraat_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous or authenticated access for easy testing (as requested, prepare structure)
DROP POLICY IF EXISTS "Allow all access for cities" ON crm_cities;
CREATE POLICY "Allow all access for cities" ON crm_cities FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all access for categories" ON crm_categories;
CREATE POLICY "Allow all access for categories" ON crm_categories FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all access for packages" ON crm_vendor_packages;
CREATE POLICY "Allow all access for packages" ON crm_vendor_packages FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all access for vendors" ON crm_vendors;
CREATE POLICY "Allow all access for vendors" ON crm_vendors FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all access for leads" ON crm_customer_leads;
CREATE POLICY "Allow all access for leads" ON crm_customer_leads FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all access for notes" ON crm_notes;
CREATE POLICY "Allow all access for notes" ON crm_notes FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all access for files" ON crm_uploaded_files;
CREATE POLICY "Allow all access for files" ON crm_uploaded_files FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all access for baraat enquiries" ON crm_baraat_enquiries;
CREATE POLICY "Allow all access for baraat enquiries" ON crm_baraat_enquiries FOR ALL USING (true) WITH CHECK (true);

-- ─── STORAGE BUCKET CREATION ────────────────────────────────────────────────
-- (Note: Run this inside Supabase SQL editor to create the crm-files bucket)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('crm-files', 'crm-files', true) ON CONFLICT (id) DO NOTHING;
-- CREATE POLICY "Allow public storage upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'crm-files');
-- CREATE POLICY "Allow public storage select" ON storage.objects FOR SELECT USING (bucket_id = 'crm-files');
-- CREATE POLICY "Allow public storage delete" ON storage.objects FOR DELETE USING (bucket_id = 'crm-files');

-- ─── DEMO SEED DATA ─────────────────────────────────────────────────────────

-- Seed Cities
INSERT INTO crm_cities (id, name, state) VALUES
('a3b7d1e2-0000-0000-0000-000000000001', 'Mumbai', 'Maharashtra'),
('a3b7d1e2-0000-0000-0000-000000000002', 'Delhi', 'Delhi'),
('a3b7d1e2-0000-0000-0000-000000000003', 'Jaipur', 'Rajasthan'),
('a3b7d1e2-0000-0000-0000-000000000004', 'Goa', 'Goa')
ON CONFLICT (id) DO NOTHING;

-- Seed Categories
INSERT INTO crm_categories (id, name, description) VALUES
('b4c8e2f3-0000-0000-0000-000000000001', 'Band & Ghodi', 'Traditional brass bands, bagpipers, and wedding carriages/horses.'),
('b4c8e2f3-0000-0000-0000-000000000002', 'Dhol Players', 'Energetic Punjabi Dhol and Nashik Dhol groups.'),
('b4c8e2f3-0000-0000-0000-000000000003', 'Safa & Pagri', 'Turban tying artists and fancy wedding turbans.'),
('b4c8e2f3-0000-0000-0000-000000000004', 'Vintage Cars', 'Classic and luxury wedding cars for the groom and family.')
ON CONFLICT (id) DO NOTHING;

-- Seed Packages
INSERT INTO crm_vendor_packages (id, name, description, price, features) VALUES
('c5d9f3a4-0000-0000-0000-000000000001', 'Silver Package', 'Basic listing, 5 photos upload, lead notifications.', 15000, 'Basic listing, 5 photos upload, lead notifications'),
('c5d9f3a4-0000-0000-0000-000000000002', 'Gold Package', 'Featured listing, 15 photos, verified badge, direct lead access.', 35000, 'Featured listing, 15 photos, verified badge, direct lead access'),
('c5d9f3a4-0000-0000-0000-000000000003', 'Diamond Package', 'Premium top-tier placement, video upload, custom route simulation integration, dedicated account support.', 75000, 'Premium placement, video upload, route simulation, dedicated account support')
ON CONFLICT (id) DO NOTHING;

-- Seed Vendors
INSERT INTO crm_vendors (id, company_name, contact_person, mobile, email, city_id, category_id, package_id, status, remarks) VALUES
(
    'd6e0a4b5-0000-0000-0000-000000000001',
    'Jeet Ghodi & Brass Band',
    'Jeetendra Singh',
    '+91 9811223344',
    'jeetghodi@example.com',
    'a3b7d1e2-0000-0000-0000-000000000002', -- Delhi
    'b4c8e2f3-0000-0000-0000-000000000001', -- Band & Ghodi
    'c5d9f3a4-0000-0000-0000-000000000002', -- Gold
    'Converted',
    'Highly professional. Has a white mare and 11-member band team. Verified deposit received.'
),
(
    'd6e0a4b5-0000-0000-0000-000000000002',
    'Royal Safa Bandhni',
    'Tejabhai Patel',
    '+91 9822334455',
    'tejasafa@example.com',
    'a3b7d1e2-0000-0000-0000-000000000003', -- Jaipur
    'b4c8e2f3-0000-0000-0000-000000000003', -- Safa & Pagri
    'c5d9f3a4-0000-0000-0000-000000000003', -- Diamond
    'Interested',
    'Interested in premium diamond package. Needs custom safe selector tool training.'
),
(
    'd6e0a4b5-0000-0000-0000-000000000003',
    'Goa Dhol & Events',
    'Francis D''Souza',
    '+91 9833445566',
    'goadhol@example.com',
    'a3b7d1e2-0000-0000-0000-000000000004', -- Goa
    'b4c8e2f3-0000-0000-0000-000000000002', -- Dhol Players
    'c5d9f3a4-0000-0000-0000-000000000001', -- Silver
    'Contacted',
    'Sent initial presentation. Awaiting callback.'
)
ON CONFLICT (id) DO NOTHING;

-- Seed Customer Leads
INSERT INTO crm_customer_leads (id, customer_name, mobile, email, city_id, requirement, event_date, package_discussed, status, remarks) VALUES
(
    'e7f1b5c6-0000-0000-0000-000000000001',
    'Amit Sharma',
    '+91 9911223344',
    'amit.sharma@example.com',
    'a3b7d1e2-0000-0000-0000-000000000002', -- Delhi
    'Wants vintage wedding car (Rolls Royce or similar) and premium Rajasthani Dhol team for Baraat entry.',
    '2026-11-20',
    'Vintage Gold Package',
    'Converted',
    'Deposit of ₹10,000 received. Booked rolls royce and dhol team.'
),
(
    'e7f1b5c6-0000-0000-0000-000000000002',
    'Rohan Mehta',
    '+91 9922334455',
    'rohan.mehta@example.com',
    'a3b7d1e2-0000-0000-0000-000000000001', -- Mumbai
    'Wants Ghodi with premium royal look, bagpipers band, and 200 safas/turbans for guest family.',
    '2026-12-15',
    'Custom Diamond package',
    'Interested',
    'Very interested. Negotiating rates for safa tying artists.'
)
ON CONFLICT (id) DO NOTHING;

-- Seed some notes
INSERT INTO crm_notes (entity_type, entity_id, content, created_by) VALUES
('vendor', 'd6e0a4b5-0000-0000-0000-000000000001', 'Called client. Discussed rates and details.', 'Tejabhai'),
('vendor', 'd6e0a4b5-0000-0000-0000-000000000001', 'Sent payment link for token amount.', 'Admin'),
('lead', 'e7f1b5c6-0000-0000-0000-000000000002', 'Shared quotes for Mumbai based vendors.', 'Tejabhai');

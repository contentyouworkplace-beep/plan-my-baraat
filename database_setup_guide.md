# PlanMyBaraat Database Integration Guide (Supabase)

To link the public Website, Customer Mobile App, Vendor Mobile App, and Admin CRM, we will use **Supabase** (Postgres database with real-time replication, auth, and storage).

Follow the steps below to initialize your Supabase backend:

---

## Step 1: Create the Database Schema

Run the following SQL commands in your Supabase project's **SQL Editor** to create the tables, relationships, and seed the initial schema:

```sql
-- 1. Create Cities Table
create table cities (
  id uuid default gen_random_uuid() primary key,
  name text not null unique,
  state text not null,
  tagline text,
  image_url text,
  description text,
  is_international boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create Vendors Table
create table vendors (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  category text not null,
  city text not null references cities(name) on update cascade,
  rating numeric(3,2) default 5.0,
  reviews_count integer default 0,
  price integer not null,
  price_unit text default 'per event',
  image_url text,
  gallery_urls text[],
  address text,
  contact text,
  services text[],
  description text,
  featured boolean default false,
  verified boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Create Inquiries (Leads) Table
create table inquiries (
  id uuid default gen_random_uuid() primary key,
  customer_name text not null,
  customer_phone text not null,
  city_name text not null,
  vendor_id uuid references vendors(id) on delete cascade,
  guests_count integer default 200,
  wedding_date date not null,
  status text default 'new' check (status in ('new', 'contacted', 'negotiation', 'booked', 'lost')),
  notes text,
  total_budget integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Create Client Timeline Events Table
create table timeline_events (
  id uuid default gen_random_uuid() primary key,
  client_id text not null, -- User identifier from Expo client auth
  time text not null,
  name text not null,
  description text,
  department text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Create Song Votes Table (Real-time polling)
create table song_votes (
  id uuid default gen_random_uuid() primary key,
  song_id text not null unique,
  title text not null,
  votes_count integer default 0,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

---

## Step 2: Enable Real-time Subscriptions

Real-time notifications are crucial for the Vendor App and CRM. When a lead is added, the Vendor App needs an instant alert. When a vendor updates a lead to "Booked", the CRM needs to update immediately.

Run the following SQL to add the tables to the Supabase real-time publication:

```sql
alter publication supabase_realtime add table inquiries;
alter publication supabase_realtime add table song_votes;
alter publication supabase_realtime add table vendors;
```

---

## Step 3: Configure Row-Level Security (RLS)

Configure access control policies to secure client and vendor data:

```sql
-- Enable RLS on all tables
alter table cities enable row level security;
alter table vendors enable row level security;
alter table inquiries enable row level security;
alter table timeline_events enable row level security;
alter table song_votes enable row level security;

-- Policies for Cities
create policy "Allow public read access to cities" on cities for select using (true);
create policy "Allow admin write access to cities" on cities for all using (true); -- Filter by admin role in production

-- Policies for Vendors
create policy "Allow public read access to verified vendors" on vendors for select using (verified = true);
create policy "Allow vendors to update their own profiles" on vendors for update using (true); -- Filter by auth.uid() in production
create policy "Allow admin write access to vendors" on vendors for all using (true);

-- Policies for Inquiries
create policy "Allow public to insert inquiries" on inquiries for insert with check (true);
create policy "Allow matched vendors to view inquiries" on inquiries for select using (true);
create policy "Allow admin to manage inquiries" on inquiries for all using (true);
```

---

## Step 4: Environment Variables

Create a `.env.local` file in `apps/next-web` and a `src/config/supabase.ts` file in the Expo apps with these configurations:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-key-here
```

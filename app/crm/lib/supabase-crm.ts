import { createClient } from '@supabase/supabase-js';
import type {
  City, Category, VendorPackage,
  Vendor, VendorFormData, VendorFilters, VendorStats,
  CustomerLead, LeadFormData, LeadFilters, LeadStats,
  BaraatEnquiry, BaraatEnquiryFilters,
  Note, UploadedFile
} from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-url.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const crmSupabase = createClient(supabaseUrl, supabaseAnonKey);

let useFallback = false;

// Auto-detect if Supabase is unconfigured (using default placeholder values)
const isConfigured = !!(
  process.env.NEXT_PUBLIC_SUPABASE_URL && 
  !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder-url")
);

if (!isConfigured) {
  useFallback = true;
}

// Resilient wrapper to run queries
async function runQuery<T>(supabaseFn: () => Promise<T>, fallbackFn: () => T | Promise<T>): Promise<T> {
  if (useFallback) {
    return await fallbackFn();
  }
  try {
    return await supabaseFn();
  } catch (error) {
    console.warn("Supabase fetch failed. Falling back to browser LocalStorage database for live demo. Error:", error);
    useFallback = true;
    return await fallbackFn();
  }
}

// ─── LocalStorage Database Fallback Implementation ──────────────────────────

function getList<T>(key: string, initial: T[]): T[] {
  if (typeof window === 'undefined') return initial;
  const val = localStorage.getItem(key);
  if (!val) {
    localStorage.setItem(key, JSON.stringify(initial));
    return initial;
  }
  try {
    return JSON.parse(val);
  } catch {
    return initial;
  }
}

function setList<T>(key: string, data: T[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

// Initial Demo Seed Data
const INITIAL_CITIES: City[] = [
  { id: 'a3b7d1e2-0000-0000-0000-000000000001', name: 'Mumbai', state: 'Maharashtra', created_at: new Date().toISOString() },
  { id: 'a3b7d1e2-0000-0000-0000-000000000002', name: 'Delhi', state: 'Delhi', created_at: new Date().toISOString() },
  { id: 'a3b7d1e2-0000-0000-0000-000000000003', name: 'Jaipur', state: 'Rajasthan', created_at: new Date().toISOString() },
  { id: 'a3b7d1e2-0000-0000-0000-000000000004', name: 'Goa', state: 'Goa', created_at: new Date().toISOString() }
];

const INITIAL_CATEGORIES: Category[] = [
  { id: 'b4c8e2f3-0000-0000-0000-000000000001', name: 'Band & Ghodi', description: 'Traditional brass bands, bagpipers, and wedding carriages/horses.', created_at: new Date().toISOString() },
  { id: 'b4c8e2f3-0000-0000-0000-000000000002', name: 'Dhol Players', description: 'Energetic Punjabi Dhol and Nashik Dhol groups.', created_at: new Date().toISOString() },
  { id: 'b4c8e2f3-0000-0000-0000-000000000003', name: 'Safa & Pagri', description: 'Turban tying artists and fancy turbans.', created_at: new Date().toISOString() },
  { id: 'b4c8e2f3-0000-0000-0000-000000000004', name: 'Vintage Cars', description: 'Classic and luxury wedding cars.', created_at: new Date().toISOString() }
];

const INITIAL_PACKAGES: VendorPackage[] = [
  { id: 'c5d9f3a4-0000-0000-0000-000000000001', name: 'Silver Package', description: 'Basic listing, 5 photos upload, lead notifications.', price: 15000, features: 'Basic listing, 5 photos upload, lead notifications', created_at: new Date().toISOString() },
  { id: 'c5d9f3a4-0000-0000-0000-000000000002', name: 'Gold Package', description: 'Featured listing, 15 photos, verified badge, direct lead access.', price: 35000, features: 'Featured listing, 15 photos, verified badge, direct lead access', created_at: new Date().toISOString() },
  { id: 'c5d9f3a4-0000-0000-0000-000000000003', name: 'Diamond Package', description: 'Premium top-tier placement, video upload, custom route simulation integration, dedicated account support.', price: 75000, features: 'Premium placement, video upload, route simulation, dedicated support', created_at: new Date().toISOString() }
];

const INITIAL_VENDORS: Vendor[] = [
  {
    id: 'd6e0a4b5-0000-0000-0000-000000000001',
    company_name: 'Jeet Ghodi & Brass Band',
    contact_person: 'Jeetendra Singh',
    mobile: '+91 9811223344',
    email: 'jeetghodi@example.com',
    city_id: 'a3b7d1e2-0000-0000-0000-000000000002',
    category_id: 'b4c8e2f3-0000-0000-0000-000000000001',
    package_id: 'c5d9f3a4-0000-0000-0000-000000000002',
    status: 'Converted',
    remarks: 'Highly professional. Has a white mare and 11-member band team. Verified deposit received.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'd6e0a4b5-0000-0000-0000-000000000002',
    company_name: 'Royal Safa Bandhni',
    contact_person: 'Tejabhai Patel',
    mobile: '+91 9822334455',
    email: 'tejasafa@example.com',
    city_id: 'a3b7d1e2-0000-0000-0000-000000000003',
    category_id: 'b4c8e2f3-0000-0000-0000-000000000003',
    package_id: 'c5d9f3a4-0000-0000-0000-000000000003',
    status: 'Interested',
    remarks: 'Interested in premium diamond package. Needs custom safe selector tool training.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'd6e0a4b5-0000-0000-0000-000000000003',
    company_name: 'Goa Dhol & Events',
    contact_person: 'Francis D\'Souza',
    mobile: '+91 9833445566',
    email: 'goadhol@example.com',
    city_id: 'a3b7d1e2-0000-0000-0000-000000000004',
    category_id: 'b4c8e2f3-0000-0000-0000-000000000002',
    package_id: 'c5d9f3a4-0000-0000-0000-000000000001',
    status: 'Contacted',
    remarks: 'Sent initial presentation. Awaiting callback.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const INITIAL_BARAAT_ENQUIRIES: BaraatEnquiry[] = [];

const INITIAL_LEADS: CustomerLead[] = [
  {
    id: 'e7f1b5c6-0000-0000-0000-000000000001',
    customer_name: 'Amit Sharma',
    mobile: '+91 9911223344',
    email: 'amit.sharma@example.com',
    city_id: 'a3b7d1e2-0000-0000-0000-000000000002',
    requirement: 'Wants vintage wedding car (Rolls Royce or similar) and premium Rajasthani Dhol team for Baraat entry.',
    event_date: '2026-11-20',
    package_discussed: 'Vintage Gold Package',
    status: 'Converted',
    remarks: 'Deposit of ₹10,000 received. Booked rolls royce and dhol team.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'e7f1b5c6-0000-0000-0000-000000000002',
    customer_name: 'Rohan Mehta',
    mobile: '+91 9922334455',
    email: 'rohan.mehta@example.com',
    city_id: 'a3b7d1e2-0000-0000-0000-000000000001',
    requirement: 'Wants Ghodi with premium royal look, bagpipers band, and 200 safas for guest family.',
    event_date: '2026-12-15',
    package_discussed: 'Custom Diamond package',
    status: 'Interested',
    remarks: 'Very interested. Negotiating rates for safa tying artists.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const INITIAL_NOTES: Note[] = [
  { id: 'n1', entity_type: 'vendor', entity_id: 'd6e0a4b5-0000-0000-0000-000000000001', content: 'Called client. Discussed rates and details.', created_by: 'Tejabhai', created_at: new Date().toISOString() },
  { id: 'n2', entity_type: 'vendor', entity_id: 'd6e0a4b5-0000-0000-0000-000000000001', content: 'Sent payment link for token amount.', created_by: 'Admin', created_at: new Date().toISOString() },
  { id: 'n3', entity_type: 'lead', entity_id: 'e7f1b5c6-0000-0000-0000-000000000002', content: 'Shared quotes for Mumbai based vendors.', created_by: 'Tejabhai', created_at: new Date().toISOString() }
];

const INITIAL_FILES: UploadedFile[] = [];

// ─── Cities ──────────────────────────────────────────────────────────────────

export async function getCities(): Promise<City[]> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase.from('crm_cities').select('*').order('name');
      if (error) throw error;
      return data ?? [];
    },
    () => getList('crm_cities', INITIAL_CITIES).sort((a, b) => a.name.localeCompare(b.name))
  );
}

export async function createCity(name: string, state: string): Promise<City> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase.from('crm_cities').insert({ name, state }).select().single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_cities', INITIAL_CITIES);
      const city: City = { id: `city-${Date.now()}`, name, state, created_at: new Date().toISOString() };
      setList('crm_cities', [...list, city]);
      return city;
    }
  );
}

export async function updateCity(id: string, name: string, state: string): Promise<City> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase.from('crm_cities').update({ name, state }).eq('id', id).select().single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_cities', INITIAL_CITIES);
      const index = list.findIndex(c => c.id === id);
      if (index === -1) throw new Error("City not found");
      list[index] = { ...list[index], name, state };
      setList('crm_cities', list);
      return list[index];
    }
  );
}

export async function deleteCity(id: string): Promise<void> {
  return runQuery(
    async () => {
      const { error } = await crmSupabase.from('crm_cities').delete().eq('id', id);
      if (error) throw error;
    },
    () => {
      const list = getList('crm_cities', INITIAL_CITIES);
      setList('crm_cities', list.filter(c => c.id !== id));
    }
  );
}

// ─── Categories ───────────────────────────────────────────────────────────────

export async function getCategories(): Promise<Category[]> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase.from('crm_categories').select('*').order('name');
      if (error) throw error;
      return data ?? [];
    },
    () => getList('crm_categories', INITIAL_CATEGORIES).sort((a, b) => a.name.localeCompare(b.name))
  );
}

export async function createCategory(name: string, description: string): Promise<Category> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase.from('crm_categories').insert({ name, description }).select().single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_categories', INITIAL_CATEGORIES);
      const cat: Category = { id: `cat-${Date.now()}`, name, description, created_at: new Date().toISOString() };
      setList('crm_categories', [...list, cat]);
      return cat;
    }
  );
}

export async function updateCategory(id: string, name: string, description: string): Promise<Category> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase.from('crm_categories').update({ name, description }).eq('id', id).select().single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_categories', INITIAL_CATEGORIES);
      const index = list.findIndex(c => c.id === id);
      if (index === -1) throw new Error("Category not found");
      list[index] = { ...list[index], name, description };
      setList('crm_categories', list);
      return list[index];
    }
  );
}

export async function deleteCategory(id: string): Promise<void> {
  return runQuery(
    async () => {
      const { error } = await crmSupabase.from('crm_categories').delete().eq('id', id);
      if (error) throw error;
    },
    () => {
      const list = getList('crm_categories', INITIAL_CATEGORIES);
      setList('crm_categories', list.filter(c => c.id !== id));
    }
  );
}

// ─── Vendor Packages ──────────────────────────────────────────────────────────

export async function getPackages(): Promise<VendorPackage[]> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase.from('crm_vendor_packages').select('*').order('name');
      if (error) throw error;
      return data ?? [];
    },
    () => getList('crm_vendor_packages', INITIAL_PACKAGES).sort((a, b) => a.name.localeCompare(b.name))
  );
}

export async function createPackage(payload: Partial<VendorPackage>): Promise<VendorPackage> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase.from('crm_vendor_packages').insert(payload).select().single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_vendor_packages', INITIAL_PACKAGES);
      const pkg: VendorPackage = {
        ...payload,
        id: `pkg-${Date.now()}`,
        name: payload.name || '',
        description: payload.description || '',
        price: payload.price || 0,
        features: payload.features || '',
        created_at: new Date().toISOString()
      };
      setList('crm_vendor_packages', [...list, pkg]);
      return pkg;
    }
  );
}

export async function updatePackage(id: string, payload: Partial<VendorPackage>): Promise<VendorPackage> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase.from('crm_vendor_packages').update(payload).eq('id', id).select().single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_vendor_packages', INITIAL_PACKAGES);
      const index = list.findIndex(c => c.id === id);
      if (index === -1) throw new Error("Package not found");
      list[index] = { ...list[index], ...payload };
      setList('crm_vendor_packages', list);
      return list[index];
    }
  );
}

export async function deletePackage(id: string): Promise<void> {
  return runQuery(
    async () => {
      const { error } = await crmSupabase.from('crm_vendor_packages').delete().eq('id', id);
      if (error) throw error;
    },
    () => {
      const list = getList('crm_vendor_packages', INITIAL_PACKAGES);
      setList('crm_vendor_packages', list.filter(c => c.id !== id));
    }
  );
}

// ─── Vendors ─────────────────────────────────────────────────────────────────

export async function getVendors(filters?: VendorFilters): Promise<Vendor[]> {
  return runQuery(
    async () => {
      let query = crmSupabase
        .from('crm_vendors')
        .select(`
          *,
          city:crm_cities(id, name, state),
          category:crm_categories(id, name),
          vendor_package:crm_vendor_packages(id, name, price)
        `)
        .order('created_at', { ascending: false });

      if (filters?.search) {
        query = query.or(
          `company_name.ilike.%${filters.search}%,contact_person.ilike.%${filters.search}%,mobile.ilike.%${filters.search}%`
        );
      }
      if (filters?.city_id) query = query.eq('city_id', filters.city_id);
      if (filters?.category_id) query = query.eq('category_id', filters.category_id);
      if (filters?.status) query = query.eq('status', filters.status);

      const { data, error } = await query;
      if (error) throw error;
      return data ?? [];
    },
    () => {
      let list = getList('crm_vendors', INITIAL_VENDORS);
      const cities = getList('crm_cities', INITIAL_CITIES);
      const categories = getList('crm_categories', INITIAL_CATEGORIES);
      const packages = getList('crm_vendor_packages', INITIAL_PACKAGES);

      list = list.map(v => ({
        ...v,
        city: cities.find(c => c.id === v.city_id) || undefined,
        category: categories.find(c => c.id === v.category_id) || undefined,
        vendor_package: packages.find(p => p.id === v.package_id) || undefined
      }));

      if (filters?.search) {
        const search = filters.search.toLowerCase();
        list = list.filter(v =>
          v.company_name.toLowerCase().includes(search) ||
          v.contact_person.toLowerCase().includes(search) ||
          v.mobile.toLowerCase().includes(search)
        );
      }
      if (filters?.city_id) list = list.filter(v => v.city_id === filters.city_id);
      if (filters?.category_id) list = list.filter(v => v.category_id === filters.category_id);
      if (filters?.status) list = list.filter(v => v.status === filters.status);

      return list.sort((a, b) => b.created_at.localeCompare(a.created_at));
    }
  );
}

export async function getVendorById(id: string): Promise<Vendor | null> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase
        .from('crm_vendors')
        .select(`
          *,
          city:crm_cities(id, name, state),
          category:crm_categories(id, name),
          vendor_package:crm_vendor_packages(id, name, price)
        `)
        .eq('id', id)
        .single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_vendors', INITIAL_VENDORS);
      const v = list.find(x => x.id === id);
      if (!v) return null;

      const cities = getList('crm_cities', INITIAL_CITIES);
      const categories = getList('crm_categories', INITIAL_CATEGORIES);
      const packages = getList('crm_vendor_packages', INITIAL_PACKAGES);

      return {
        ...v,
        city: cities.find(c => c.id === v.city_id) || undefined,
        category: categories.find(c => c.id === v.category_id) || undefined,
        vendor_package: packages.find(p => p.id === v.package_id) || undefined
      };
    }
  );
}

export async function createVendor(payload: VendorFormData): Promise<Vendor> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase
        .from('crm_vendors')
        .insert({
          ...payload,
          city_id: payload.city_id || null,
          category_id: payload.category_id || null,
          package_id: payload.package_id || null,
        })
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_vendors', INITIAL_VENDORS);
      const v: Vendor = {
        id: `vendor-${Date.now()}`,
        company_name: payload.company_name,
        contact_person: payload.contact_person,
        mobile: payload.mobile,
        email: payload.email || '',
        city_id: payload.city_id || null,
        category_id: payload.category_id || null,
        package_id: payload.package_id || null,
        status: payload.status || 'New',
        remarks: payload.remarks || '',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      setList('crm_vendors', [...list, v]);
      return v;
    }
  );
}

export async function updateVendor(id: string, payload: Partial<VendorFormData>): Promise<Vendor> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase
        .from('crm_vendors')
        .update({ ...payload, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_vendors', INITIAL_VENDORS);
      const index = list.findIndex(v => v.id === id);
      if (index === -1) throw new Error("Vendor not found");
      list[index] = { ...list[index], ...payload, updated_at: new Date().toISOString() };
      setList('crm_vendors', list);
      return list[index];
    }
  );
}

export async function deleteVendor(id: string): Promise<void> {
  return runQuery(
    async () => {
      const { error } = await crmSupabase.from('crm_vendors').delete().eq('id', id);
      if (error) throw error;
    },
    () => {
      const list = getList('crm_vendors', INITIAL_VENDORS);
      setList('crm_vendors', list.filter(v => v.id !== id));
    }
  );
}

export async function getVendorStats(): Promise<VendorStats> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase.from('crm_vendors').select('status');
      if (error) throw error;
      const vendors = data ?? [];
      return {
        total: vendors.length,
        new: vendors.filter(v => v.status === 'New').length,
        contacted: vendors.filter(v => v.status === 'Contacted').length,
        interested: vendors.filter(v => v.status === 'Interested').length,
        converted: vendors.filter(v => v.status === 'Converted').length,
        lost: vendors.filter(v => v.status === 'Lost').length,
      };
    },
    () => {
      const vendors = getList('crm_vendors', INITIAL_VENDORS);
      return {
        total: vendors.length,
        new: vendors.filter(v => v.status === 'New').length,
        contacted: vendors.filter(v => v.status === 'Contacted').length,
        interested: vendors.filter(v => v.status === 'Interested').length,
        converted: vendors.filter(v => v.status === 'Converted').length,
        lost: vendors.filter(v => v.status === 'Lost').length,
      };
    }
  );
}

// ─── Customer Leads ───────────────────────────────────────────────────────────

export async function getLeads(filters?: LeadFilters): Promise<CustomerLead[]> {
  return runQuery(
    async () => {
      let query = crmSupabase
        .from('crm_customer_leads')
        .select(`
          *,
          city:crm_cities(id, name, state)
        `)
        .order('created_at', { ascending: false });

      if (filters?.search) {
        query = query.or(
          `customer_name.ilike.%${filters.search}%,mobile.ilike.%${filters.search}%,email.ilike.%${filters.search}%`
        );
      }
      if (filters?.city_id) query = query.eq('city_id', filters.city_id);
      if (filters?.status) query = query.eq('status', filters.status);
      if (filters?.event_date_from) query = query.gte('event_date', filters.event_date_from);
      if (filters?.event_date_to) query = query.lte('event_date', filters.event_date_to);

      const { data, error } = await query;
      if (error) throw error;
      return data ?? [];
    },
    () => {
      let list = getList('crm_customer_leads', INITIAL_LEADS);
      const cities = getList('crm_cities', INITIAL_CITIES);

      list = list.map(l => ({
        ...l,
        city: cities.find(c => c.id === l.city_id) || undefined
      }));

      if (filters?.search) {
        const search = filters.search.toLowerCase();
        list = list.filter(l =>
          l.customer_name.toLowerCase().includes(search) ||
          l.mobile.toLowerCase().includes(search) ||
          (l.email && l.email.toLowerCase().includes(search))
        );
      }
      if (filters?.city_id) list = list.filter(l => l.city_id === filters.city_id);
      if (filters?.status) list = list.filter(l => l.status === filters.status);
      if (filters?.event_date_from) list = list.filter(l => l.event_date && l.event_date >= filters.event_date_from!);
      if (filters?.event_date_to) list = list.filter(l => l.event_date && l.event_date <= filters.event_date_to!);

      return list.sort((a, b) => b.created_at.localeCompare(a.created_at));
    }
  );
}

export async function getLeadById(id: string): Promise<CustomerLead | null> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase
        .from('crm_customer_leads')
        .select(`
          *,
          city:crm_cities(id, name, state)
        `)
        .eq('id', id)
        .single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_customer_leads', INITIAL_LEADS);
      const l = list.find(x => x.id === id);
      if (!l) return null;

      const cities = getList('crm_cities', INITIAL_CITIES);
      return {
        ...l,
        city: cities.find(c => c.id === l.city_id) || undefined
      };
    }
  );
}

export async function createLead(payload: LeadFormData): Promise<CustomerLead> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase
        .from('crm_customer_leads')
        .insert({
          ...payload,
          city_id: payload.city_id || null,
          event_date: payload.event_date || null,
        })
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_customer_leads', INITIAL_LEADS);
      const l: CustomerLead = {
        id: `lead-${Date.now()}`,
        customer_name: payload.customer_name,
        mobile: payload.mobile,
        email: payload.email || '',
        city_id: payload.city_id || null,
        requirement: payload.requirement || '',
        event_date: payload.event_date || null,
        package_discussed: payload.package_discussed || '',
        status: payload.status || 'New',
        remarks: payload.remarks || '',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      setList('crm_customer_leads', [...list, l]);
      return l;
    }
  );
}

export async function updateLead(id: string, payload: Partial<LeadFormData>): Promise<CustomerLead> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase
        .from('crm_customer_leads')
        .update({ ...payload, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_customer_leads', INITIAL_LEADS);
      const index = list.findIndex(l => l.id === id);
      if (index === -1) throw new Error("Lead not found");
      list[index] = { ...list[index], ...payload, updated_at: new Date().toISOString() };
      setList('crm_customer_leads', list);
      return list[index];
    }
  );
}

export async function deleteLead(id: string): Promise<void> {
  return runQuery(
    async () => {
      const { error } = await crmSupabase.from('crm_customer_leads').delete().eq('id', id);
      if (error) throw error;
    },
    () => {
      const list = getList('crm_customer_leads', INITIAL_LEADS);
      setList('crm_customer_leads', list.filter(l => l.id !== id));
    }
  );
}

// ─── Baraat Package Enquiries (separate module from Customer Leads) ─────────

export async function getBaraatEnquiries(filters?: BaraatEnquiryFilters): Promise<BaraatEnquiry[]> {
  return runQuery(
    async () => {
      let query = crmSupabase
        .from('crm_baraat_enquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (filters?.search) {
        query = query.or(
          `customer_name.ilike.%${filters.search}%,mobile.ilike.%${filters.search}%,event_name.ilike.%${filters.search}%`
        );
      }
      if (filters?.status) query = query.eq('status', filters.status);

      const { data, error } = await query;
      if (error) throw error;
      return data ?? [];
    },
    () => {
      let list = getList('crm_baraat_enquiries', INITIAL_BARAAT_ENQUIRIES);

      if (filters?.search) {
        const search = filters.search.toLowerCase();
        list = list.filter(e =>
          e.customer_name.toLowerCase().includes(search) ||
          e.mobile.toLowerCase().includes(search) ||
          e.event_name.toLowerCase().includes(search)
        );
      }
      if (filters?.status) list = list.filter(e => e.status === filters.status);

      return list.sort((a, b) => b.created_at.localeCompare(a.created_at));
    }
  );
}

export async function createBaraatEnquiry(payload: {
  customer_name: string;
  event_name: string;
  mobile: string;
  package_name: string;
}): Promise<BaraatEnquiry> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase
        .from('crm_baraat_enquiries')
        .insert({ ...payload, status: 'New' })
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_baraat_enquiries', INITIAL_BARAAT_ENQUIRIES);
      const e: BaraatEnquiry = {
        id: `baraat-${Date.now()}`,
        customer_name: payload.customer_name,
        event_name: payload.event_name,
        mobile: payload.mobile,
        package_name: payload.package_name,
        status: 'New',
        remarks: '',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      setList('crm_baraat_enquiries', [...list, e]);
      return e;
    }
  );
}

export async function updateBaraatEnquiryStatus(id: string, status: BaraatEnquiry['status']): Promise<BaraatEnquiry> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase
        .from('crm_baraat_enquiries')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_baraat_enquiries', INITIAL_BARAAT_ENQUIRIES);
      const index = list.findIndex(e => e.id === id);
      if (index === -1) throw new Error("Enquiry not found");
      list[index] = { ...list[index], status, updated_at: new Date().toISOString() };
      setList('crm_baraat_enquiries', list);
      return list[index];
    }
  );
}

export async function deleteBaraatEnquiry(id: string): Promise<void> {
  return runQuery(
    async () => {
      const { error } = await crmSupabase.from('crm_baraat_enquiries').delete().eq('id', id);
      if (error) throw error;
    },
    () => {
      const list = getList('crm_baraat_enquiries', INITIAL_BARAAT_ENQUIRIES);
      setList('crm_baraat_enquiries', list.filter(e => e.id !== id));
    }
  );
}

export async function getLeadStats(): Promise<LeadStats> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase.from('crm_customer_leads').select('status, event_date');
      if (error) throw error;
      const leads = data ?? [];
      const today = new Date().toISOString().split('T')[0];
      return {
        total: leads.length,
        new: leads.filter(l => l.status === 'New').length,
        contacted: leads.filter(l => l.status === 'Contacted').length,
        interested: leads.filter(l => l.status === 'Interested').length,
        converted: leads.filter(l => l.status === 'Converted').length,
        lost: leads.filter(l => l.status === 'Lost').length,
        upcoming_events: leads.filter(l => l.event_date && l.event_date >= today).length,
      };
    },
    () => {
      const leads = getList('crm_customer_leads', INITIAL_LEADS);
      const today = new Date().toISOString().split('T')[0];
      return {
        total: leads.length,
        new: leads.filter(l => l.status === 'New').length,
        contacted: leads.filter(l => l.status === 'Contacted').length,
        interested: leads.filter(l => l.status === 'Interested').length,
        converted: leads.filter(l => l.status === 'Converted').length,
        lost: leads.filter(l => l.status === 'Lost').length,
        upcoming_events: leads.filter(l => l.event_date && l.event_date >= today).length,
      };
    }
  );
}

// ─── Notes ───────────────────────────────────────────────────────────────────

export async function getNotes(entityType: 'vendor' | 'lead', entityId: string): Promise<Note[]> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase
        .from('crm_notes')
        .select('*')
        .eq('entity_type', entityType)
        .eq('entity_id', entityId)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
    () => {
      const notes = getList('crm_notes', INITIAL_NOTES);
      return notes
        .filter(n => n.entity_type === entityType && n.entity_id === entityId)
        .sort((a, b) => b.created_at.localeCompare(a.created_at));
    }
  );
}

export async function createNote(
  entityType: 'vendor' | 'lead',
  entityId: string,
  content: string,
  createdBy?: string
): Promise<Note> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase
        .from('crm_notes')
        .insert({ entity_type: entityType, entity_id: entityId, content, created_by: createdBy ?? 'Admin' })
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_notes', INITIAL_NOTES);
      const note: Note = {
        id: `note-${Date.now()}`,
        entity_type: entityType,
        entity_id: entityId,
        content,
        created_by: createdBy ?? 'Admin',
        created_at: new Date().toISOString()
      };
      setList('crm_notes', [...list, note]);
      return note;
    }
  );
}

export async function deleteNote(id: string): Promise<void> {
  return runQuery(
    async () => {
      const { error } = await crmSupabase.from('crm_notes').delete().eq('id', id);
      if (error) throw error;
    },
    () => {
      const list = getList('crm_notes', INITIAL_NOTES);
      setList('crm_notes', list.filter(n => n.id !== id));
    }
  );
}

// ─── File Uploads ─────────────────────────────────────────────────────────────

export async function getUploadedFiles(entityType: 'vendor' | 'lead', entityId: string): Promise<UploadedFile[]> {
  return runQuery(
    async () => {
      const { data, error } = await crmSupabase
        .from('crm_uploaded_files')
        .select('*')
        .eq('entity_type', entityType)
        .eq('entity_id', entityId)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
    () => {
      const files = getList('crm_uploaded_files', INITIAL_FILES);
      return files
        .filter(f => f.entity_type === entityType && f.entity_id === entityId)
        .sort((a, b) => b.created_at.localeCompare(a.created_at));
    }
  );
}

export async function uploadFile(
  entityType: 'vendor' | 'lead',
  entityId: string,
  file: File
): Promise<UploadedFile> {
  return runQuery(
    async () => {
      const ext = file.name.split('.').pop();
      const fileName = `${entityType}/${entityId}/${Date.now()}-${file.name}`;

      const { error: uploadError } = await crmSupabase.storage
        .from('crm-files')
        .upload(fileName, file, { upsert: false });
      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = crmSupabase.storage
        .from('crm-files')
        .getPublicUrl(fileName);

      const { data, error } = await crmSupabase
        .from('crm_uploaded_files')
        .insert({
          entity_type: entityType,
          entity_id: entityId,
          file_name: file.name,
          file_url: publicUrl,
          file_type: file.type || ext,
          file_size: file.size,
        })
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    () => {
      const list = getList('crm_uploaded_files', INITIAL_FILES);
      const f: UploadedFile = {
        id: `file-${Date.now()}`,
        entity_type: entityType,
        entity_id: entityId,
        file_name: file.name,
        file_url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&q=80',
        file_type: file.type || 'document',
        file_size: file.size,
        created_at: new Date().toISOString()
      };
      setList('crm_uploaded_files', [...list, f]);
      return f;
    }
  );
}

export async function deleteUploadedFile(id: string, fileUrl: string): Promise<void> {
  return runQuery(
    async () => {
      const url = new URL(fileUrl);
      const pathParts = url.pathname.split('/crm-files/');
      if (pathParts.length > 1) {
        await crmSupabase.storage.from('crm-files').remove([pathParts[1]]);
      }
      const { error } = await crmSupabase.from('crm_uploaded_files').delete().eq('id', id);
      if (error) throw error;
    },
    () => {
      const list = getList('crm_uploaded_files', INITIAL_FILES);
      setList('crm_uploaded_files', list.filter(f => f.id !== id));
    }
  );
}

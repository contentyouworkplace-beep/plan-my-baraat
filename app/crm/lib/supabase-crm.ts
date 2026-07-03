import { createClient } from '@supabase/supabase-js';
import type {
  City, Category, VendorPackage,
  Vendor, VendorFormData, VendorFilters, VendorStats,
  CustomerLead, LeadFormData, LeadFilters, LeadStats,
  Note, UploadedFile
} from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-url.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const crmSupabase = createClient(supabaseUrl, supabaseAnonKey);

// ─── Cities ──────────────────────────────────────────────────────────────────

export async function getCities(): Promise<City[]> {
  const { data, error } = await crmSupabase
    .from('crm_cities')
    .select('*')
    .order('name');
  if (error) throw error;
  return data ?? [];
}

export async function createCity(name: string, state: string): Promise<City> {
  const { data, error } = await crmSupabase
    .from('crm_cities')
    .insert({ name, state })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updateCity(id: string, name: string, state: string): Promise<City> {
  const { data, error } = await crmSupabase
    .from('crm_cities')
    .update({ name, state })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteCity(id: string): Promise<void> {
  const { error } = await crmSupabase.from('crm_cities').delete().eq('id', id);
  if (error) throw error;
}

// ─── Categories ───────────────────────────────────────────────────────────────

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await crmSupabase
    .from('crm_categories')
    .select('*')
    .order('name');
  if (error) throw error;
  return data ?? [];
}

export async function createCategory(name: string, description: string): Promise<Category> {
  const { data, error } = await crmSupabase
    .from('crm_categories')
    .insert({ name, description })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updateCategory(id: string, name: string, description: string): Promise<Category> {
  const { data, error } = await crmSupabase
    .from('crm_categories')
    .update({ name, description })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteCategory(id: string): Promise<void> {
  const { error } = await crmSupabase.from('crm_categories').delete().eq('id', id);
  if (error) throw error;
}

// ─── Vendor Packages ──────────────────────────────────────────────────────────

export async function getPackages(): Promise<VendorPackage[]> {
  const { data, error } = await crmSupabase
    .from('crm_vendor_packages')
    .select('*')
    .order('name');
  if (error) throw error;
  return data ?? [];
}

export async function createPackage(payload: Partial<VendorPackage>): Promise<VendorPackage> {
  const { data, error } = await crmSupabase
    .from('crm_vendor_packages')
    .insert(payload)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updatePackage(id: string, payload: Partial<VendorPackage>): Promise<VendorPackage> {
  const { data, error } = await crmSupabase
    .from('crm_vendor_packages')
    .update(payload)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deletePackage(id: string): Promise<void> {
  const { error } = await crmSupabase.from('crm_vendor_packages').delete().eq('id', id);
  if (error) throw error;
}

// ─── Vendors ─────────────────────────────────────────────────────────────────

export async function getVendors(filters?: VendorFilters): Promise<Vendor[]> {
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
}

export async function getVendorById(id: string): Promise<Vendor | null> {
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
}

export async function createVendor(payload: VendorFormData): Promise<Vendor> {
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
}

export async function updateVendor(id: string, payload: Partial<VendorFormData>): Promise<Vendor> {
  const { data, error } = await crmSupabase
    .from('crm_vendors')
    .update({ ...payload, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteVendor(id: string): Promise<void> {
  const { error } = await crmSupabase.from('crm_vendors').delete().eq('id', id);
  if (error) throw error;
}

export async function getVendorStats(): Promise<VendorStats> {
  const { data, error } = await crmSupabase
    .from('crm_vendors')
    .select('status');
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
}

// ─── Customer Leads ───────────────────────────────────────────────────────────

export async function getLeads(filters?: LeadFilters): Promise<CustomerLead[]> {
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
}

export async function getLeadById(id: string): Promise<CustomerLead | null> {
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
}

export async function createLead(payload: LeadFormData): Promise<CustomerLead> {
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
}

export async function updateLead(id: string, payload: Partial<LeadFormData>): Promise<CustomerLead> {
  const { data, error } = await crmSupabase
    .from('crm_customer_leads')
    .update({ ...payload, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteLead(id: string): Promise<void> {
  const { error } = await crmSupabase.from('crm_customer_leads').delete().eq('id', id);
  if (error) throw error;
}

export async function getLeadStats(): Promise<LeadStats> {
  const { data, error } = await crmSupabase
    .from('crm_customer_leads')
    .select('status, event_date');
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
}

// ─── Notes ───────────────────────────────────────────────────────────────────

export async function getNotes(entityType: 'vendor' | 'lead', entityId: string): Promise<Note[]> {
  const { data, error } = await crmSupabase
    .from('crm_notes')
    .select('*')
    .eq('entity_type', entityType)
    .eq('entity_id', entityId)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function createNote(
  entityType: 'vendor' | 'lead',
  entityId: string,
  content: string,
  createdBy?: string
): Promise<Note> {
  const { data, error } = await crmSupabase
    .from('crm_notes')
    .insert({ entity_type: entityType, entity_id: entityId, content, created_by: createdBy ?? 'Admin' })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteNote(id: string): Promise<void> {
  const { error } = await crmSupabase.from('crm_notes').delete().eq('id', id);
  if (error) throw error;
}

// ─── File Uploads ─────────────────────────────────────────────────────────────

export async function getUploadedFiles(entityType: 'vendor' | 'lead', entityId: string): Promise<UploadedFile[]> {
  const { data, error } = await crmSupabase
    .from('crm_uploaded_files')
    .select('*')
    .eq('entity_type', entityType)
    .eq('entity_id', entityId)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function uploadFile(
  entityType: 'vendor' | 'lead',
  entityId: string,
  file: File
): Promise<UploadedFile> {
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
}

export async function deleteUploadedFile(id: string, fileUrl: string): Promise<void> {
  const url = new URL(fileUrl);
  const pathParts = url.pathname.split('/crm-files/');
  if (pathParts.length > 1) {
    await crmSupabase.storage.from('crm-files').remove([pathParts[1]]);
  }
  const { error } = await crmSupabase.from('crm_uploaded_files').delete().eq('id', id);
  if (error) throw error;
}

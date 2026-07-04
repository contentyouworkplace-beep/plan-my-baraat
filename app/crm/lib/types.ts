// ─── CRM TypeScript Types ───────────────────────────────────────────────────

export type CrmStatus = 'New' | 'Contacted' | 'Interested' | 'Converted' | 'Lost';

// ─── Master Data ─────────────────────────────────────────────────────────────

export interface City {
  id: string;
  name: string;
  state: string | null;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
}

export interface PackageItem {
  category_id: string;
  category_name: string;
  vendor_cost: number;
  selling_price: number;
}

export interface VendorPackage {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  features: string | null;
  type?: 'vendor' | 'customer';
  items?: PackageItem[] | null;
  vendor_cost?: number | null;
  created_at: string;
}

// ─── Vendors ─────────────────────────────────────────────────────────────────

export interface Vendor {
  id: string;
  company_name: string;
  contact_person: string;
  mobile: string;
  email: string | null;
  city_id: string | null;
  category_id: string | null;
  package_id: string | null;
  status: CrmStatus;
  remarks: string | null;
  created_at: string;
  updated_at: string;
  // joined
  city?: City;
  category?: Category;
  vendor_package?: VendorPackage;
}

export interface VendorFormData {
  company_name: string;
  contact_person: string;
  mobile: string;
  email: string;
  city_id: string;
  category_id: string;
  package_id: string;
  status: CrmStatus;
  remarks: string;
}

// ─── Customer Leads ───────────────────────────────────────────────────────────

export interface CustomerLead {
  id: string;
  customer_name: string;
  mobile: string;
  email: string | null;
  city_id: string | null;
  requirement: string | null;
  event_date: string | null;
  package_discussed: string | null;
  status: CrmStatus;
  remarks: string | null;
  created_at: string;
  updated_at: string;
  // joined
  city?: City;
}

export interface LeadFormData {
  customer_name: string;
  mobile: string;
  email: string;
  city_id: string;
  requirement: string;
  event_date: string;
  package_discussed: string;
  status: CrmStatus;
  remarks: string;
}

// ─── Notes ───────────────────────────────────────────────────────────────────

export interface Note {
  id: string;
  entity_type: 'vendor' | 'lead';
  entity_id: string;
  content: string;
  created_by: string | null;
  created_at: string;
}

// ─── Uploaded Files ───────────────────────────────────────────────────────────

export interface UploadedFile {
  id: string;
  entity_type: 'vendor' | 'lead';
  entity_id: string;
  file_name: string;
  file_url: string;
  file_type: string | null;
  file_size: number | null;
  created_at: string;
}

// ─── Dashboard Stats ─────────────────────────────────────────────────────────

export interface VendorStats {
  total: number;
  new: number;
  contacted: number;
  interested: number;
  converted: number;
  lost: number;
}

export interface LeadStats {
  total: number;
  new: number;
  contacted: number;
  interested: number;
  converted: number;
  lost: number;
  upcoming_events: number;
}

// ─── Filters ─────────────────────────────────────────────────────────────────

export interface VendorFilters {
  search: string;
  city_id: string;
  category_id: string;
  status: string;
}

export interface LeadFilters {
  search: string;
  city_id: string;
  status: string;
  event_date_from: string;
  event_date_to: string;
}

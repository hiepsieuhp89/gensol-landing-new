// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'gensol',
  TEMPLATE_ID: 'template_h4ujx2t',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'c5-m-CpcOTJ2b0CU2',
};

// Email template parameters interface
export interface EmailTemplateParams {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  to_email: string;
  company_name: string;
  company_email: string;
  website_link: string;
  [key: string]: string; // Index signature for EmailJS compatibility
}

// Service options for the contact form
export const SERVICE_OPTIONS = [
  { value: 'software', label: 'Phát triển phần mềm' },
  { value: 'it-consulting', label: 'Tư vấn IT' },
  { value: 'hardware', label: 'Thiết bị & Linh kiện' },
  { value: 'hr', label: 'Nhân sự & Tuyển dụng' },
  { value: 'logistics', label: 'Logistics & Vận tải' },
  { value: 'other', label: 'Khác' },
];

// Company information
export const COMPANY_INFO = {
  name: 'GENSOL',
  email: 'contact@gensol.com.vn',
  phone: '+84 (0) 123 456 789',
  address: '16, Đường 27, Phường Long Thạnh Mỹ, T.P Thủ Đức, T.P Hồ Chí Minh, Việt Nam',
  website: 'https://gensol-beta.vercel.app',
  fullName: 'Công ty TNHH GENSOL',
  taxCode: '[Mã số thuế]',
  workingHours: '8:00 - 17:00 (Thứ 2 - Thứ 6)',
}; 
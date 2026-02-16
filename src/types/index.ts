export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}
 
export interface PriceItem {
  service: string;
  price: string;
  details?: string;
}
 
export interface PriceTable {
  id: string;
  title: string;
  items: PriceItem[];
}
 
export interface ContactInfo {
  type: string;
  icon: string;
  title: string;
  value: string;
  link?: string;
}

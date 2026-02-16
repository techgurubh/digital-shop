import { Service, PriceTable, ContactInfo } from "@/types";
 
export const services: Service[] = [
  {
    id: "xerox-printing",
    title: "Xerox & Printing",
    description: "High-quality document printing and photocopying services for all your needs.",
    icon: "Printer",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop",
  },
  {
    id: "photo-printing",
    title: "Photo Printing",
    description: "Professional photo printing services with various size options and high quality output.",
    icon: "Camera",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop",
  },
  {
    id: "pvc-card",
    title: "PVC Card Printing",
    description: "Custom PVC card printing for ID cards, membership cards, and business cards.",
    icon: "CreditCard",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
  },
  {
    id: "ticket-booking",
    title: "Ticket Booking",
    description: "Book train, bus, and flight tickets easily. Quick and reliable booking services.",
    icon: "Ticket",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&auto=format&fit=crop",
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    description: "Find and book hotels across India at the best prices. Hassle-free reservations.",
    icon: "Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
  },
  {
    id: "online-work",
    title: "Online Work",
    description: "Complete online form filling, data entry, and various digital services.",
    icon: "Globe",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  },
  {
    id: "job-apply",
    title: "Job Apply",
    description: "Assistance with job applications, resume creation, and online job portal registration.",
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop",
  },
  {
    id: "certificate-apply",
    title: "Certificate Apply",
    description: "Apply for various government certificates - birth, caste, income, and more.",
    icon: "FileText",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
  },
  {
    id: "digital-shop",
    title: "Digital Shop",
    description: "One-stop digital services including bill payments, recharges, and online shopping assistance.",
    icon: "ShoppingCart",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
  },
  {
    id: "pan-card",
    title: "PAN Card Apply",
    description: "Quick PAN card application and correction services. Easy and fast processing.",
    icon: "IdCard",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop",
  },
];
 
export const priceTables: PriceTable[] = [
  {
    id: "documents",
    title: "Documents Services & Price",
    items: [
      { service: "Black & White Print/Xerox", price: "₹2 per page" },
      { service: "Color Print", price: "₹10 per page" },
      { service: "Photo Print (4x6)", price: "₹10 per print" },
      { service: "Photo Print (5x7)", price: "₹20 per print" },
      { service: "Scanning", price: "₹5 per page" },
      { service: "Lamination (A4)", price: "₹20 per sheet" },
      { service: "Spiral Binding", price: "₹30-50" },
    ],
  },
  {
    id: "pvc-cards",
    title: "PVC Card and Lamination Price",
    items: [
      { service: "PVC Card Single Side", price: "₹50 per card" },
      { service: "PVC Card Double Side", price: "₹80 per card" },
      { service: "ID Card with Photo", price: "₹100 per card" },
      { service: "Lamination (Small)", price: "₹10" },
      { service: "Lamination (Medium)", price: "₹20" },
      { service: "Lamination (Large)", price: "₹30" },
    ],
  },
  {
    id: "booking",
    title: "Booking Services Price",
    items: [
      { service: "Train Ticket Booking", price: "₹20-50", details: "Based on ticket value" },
      { service: "Bus Ticket Booking", price: "₹20-40" },
      { service: "Flight Ticket Booking", price: "₹100-200", details: "Based on ticket value" },
      { service: "Hotel Booking", price: "₹50-100", details: "Based on booking value" },
    ],
  },
  {
    id: "online-services",
    title: "Online Services Price",
    items: [
      { service: "PAN Card Application", price: "₹100" },
      { service: "Passport Application Assist", price: "₹500" },
      { service: "Voter ID Application", price: "₹50" },
      { service: "Birth Certificate", price: "₹100" },
      { service: "Income Certificate", price: "₹100" },
      { service: "Caste Certificate", price: "₹100" },
      { service: "Job Application Assist", price: "₹50-200" },
      { service: "Online Form Filling", price: "₹50-300", details: "Based on complexity" },
    ],
  },
];
 
export const contactInfo: ContactInfo[] = [
  {
    type: "phone",
    icon: "Phone",
    title: "Call Us",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    type: "email",
    icon: "Mail",
    title: "Email Us",
    value: "info@cscassam.in",
    link: "mailto:info@cscassam.in",
  },
  {
    type: "address",
    icon: "MapPin",
    title: "Visit Us",
    value: "Main Road, Guwahati, Assam - 781001",
  },
  {
    type: "hours",
    icon: "Clock",
    title: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 7:00 PM",
  },
];
 
export const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&auto=format&fit=crop",
    title: "Welcome to CSC Assam",
    subtitle: "Your Digital Service Partner",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop",
    title: "All Government Services",
    subtitle: "Under One Roof",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&auto=format&fit=crop",
    title: "Fast & Reliable",
    subtitle: "Professional Service at Your Doorstep",
  },
];

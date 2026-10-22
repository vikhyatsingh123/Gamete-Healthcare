import EfficacyIcon from "./assets/icons/efficacy.png";
import TransparencyIcon from "./assets/icons/transparency.png";
import ReliabilityIcon from "./assets/icons/reliability.png";
import { Building2, Globe2, Rocket, Sprout } from "lucide-react";

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Careers", to: "/careers" },
  { label: "Contact us", to: "/contact" },
];

export const countries = [
  {
    id: 1,
    name: "India",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  },
  {
    id: 2,
    name: "Nepal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
  },
  {
    id: 3,
    name: "Bhutan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
  },
  {
    id: 4,
    name: "Dubai",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
  },
  {
    id: 4,
    name: "Indonesia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
  },
];

export const socialLinks = [
  { label: "LinkedIn", short: "in", href: "https://www.linkedin.com/" },
  { label: "Facebook", short: "fb", href: "https://www.facebook.com/" },
  { label: "Instagram", short: "ig", href: "https://www.instagram.com/" },
  { label: "YouTube", short: "yt", href: "https://www.youtube.com/" },
];

export const footerGroups = {
  quickLinks: navigation,
};

export const homeStats = [
  { value: "3+", label: "Decades Of market presence" },
  { value: "500+", label: "Pharmaceutical product ranges" },
  { value: "10+", label: "Lakhs of patients served" },
  { value: "300+", label: "Healthcare and channel partners" },
];

export const storyHighlights = [
  {
    icon: "Care",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    title: "Integrated healthcare approach",
    text: "Gamete Healthcare aligns product planning, packaging clarity, and commercial communication around long-term market trust.",
  },
  {
    icon: "Science",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    title: "Science-led presentation",
    text: "Every brand touchpoint is designed to reflect disciplined quality, therapeutic relevance, and confident pharmaceutical positioning.",
  },
  {
    icon: "Scale",
    image:
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1200&q=80",
    title: "Scalable portfolio storytelling",
    text: "From flagship SKUs to wider therapeutic ranges, the platform is shaped to support future product discovery and business development.",
  },
];

export const manufacturingPillars = [
  {
    icon: "QC",
    title: "Quality consistency",
    text: "Every formulation program is approached with repeatable manufacturing discipline, documentation readiness, and category-specific quality intent.",
  },
  {
    icon: "OTD",
    title: "Timely delivery",
    text: "Our supply promise is built around dependable timelines, responsive coordination, and confidence for distributors and institutional buyers.",
  },
  {
    icon: "Reg",
    title: "Regulatory compliance",
    text: "Compliance-first thinking supports how the company communicates quality, market readiness, and healthcare responsibility.",
  },
];

export const productCategories = [
  {
    id: "01",
    image:
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1200&q=80",
    title: "Nutraceuticals & Herbal Supplements",
    text: "Preventive wellness and nutrition-driven formulations positioned for daily health support.",
  },
  {
    id: "02",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80",
    title: "Cardiovascular System",
    text: "Therapy concepts designed for heart health, long-term care, and patient adherence.",
  },
  {
    id: "03",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    title: "Orthopedic & Pain Care",
    text: "Mobility, inflammation, and recovery-focused solutions aligned to fast-moving demand.",
  },
  {
    id: "04",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80",
    title: "Dermatology & Topicals",
    text: "Clinical skin, cosmetic care, and topical recovery products for modern portfolios.",
  },
  {
    id: "05",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1200&q=80",
    title: "General Wellness",
    text: "Everyday health products designed to support retail, institutional, and distribution programs.",
  },
  {
    id: "06",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    title: "Women’s Health",
    text: "Focused wellness and care formulations positioned for category-led healthcare growth.",
  },
  {
    id: "07",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
    title: "Respiratory & Anti-Allergic",
    text: "Supportive therapies designed for seasonal, chronic, and recovery-focused respiratory needs.",
  },
  {
    id: "08",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
    title: "Gastro & Digestive Care",
    text: "Digestive and metabolic wellness solutions positioned for routine care and broad pharmacy relevance.",
  },
];

export const products = [
  {
    name: "Gamete Q10 Plus",
    category: "Cardio Wellness",
    image:
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=1200&q=80",
    form: "Softgel Capsules",
    summary:
      "Coenzyme Q10, omega support, and antioxidant care for heart health routines.",
    description:
      "A premium wellness softgel crafted for adults needing sustained cardiovascular support, energy metabolism care, and daily antioxidant balance.",
    pack: "3 x 10 softgels",
    focus: "Heart health and cellular energy",
    benefits: [
      "Supports routine cardiovascular wellness programs",
      "Designed for improved daily tolerance and compliance",
      "Useful as an adjunct wellness formulation for active lifestyles",
    ],
    accent: "blue",
  },
  {
    name: "OrthoRelief MR",
    category: "Pain Management",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
    form: "Tablets",
    summary:
      "A joint and muscle care tablet positioned for mobility, inflammation, and recovery.",
    description:
      "Built for orthopedic and general practice portfolios, this formulation fits acute musculoskeletal discomfort and movement restoration requirements.",
    pack: "10 x 10 tablets",
    focus: "Muscle relaxation and pain relief",
    benefits: [
      "Supports faster comfort restoration in everyday mobility issues",
      "Suitable for ortho-led and general wellness product baskets",
      "Clean positioning for pharmacy and distribution communication",
    ],
    accent: "teal",
  },
  {
    name: "DermaCline Gel",
    category: "Dermatology",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200&q=80",
    form: "Topical Gel",
    summary:
      "Lightweight dermatology gel for targeted skin recovery and visible calmness.",
    description:
      "A patient-friendly gel texture formulated for improved spreadability and category-ready positioning in derma and cosmetic care lines.",
    pack: "20 g laminated tube",
    focus: "Skin clarity and irritation support",
    benefits: [
      "Non-greasy topical experience for better patient acceptance",
      "Positioned for modern derma and personal care portfolios",
      "Shelf-ready packaging concept for premium brand presentation",
    ],
    accent: "blue",
  },
  {
    name: "ImmunEdge C-Zn",
    category: "Preventive Care",
    image:
      "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80",
    form: "Effervescent Tablets",
    summary:
      "Vitamin C and zinc support created for seasonal immunity and daily resilience.",
    description:
      "A bright, fast-dissolving immunity format that suits preventive wellness programs, retail visibility, and repeat-use convenience.",
    pack: "20 effervescent tablets",
    focus: "Immunity and recovery support",
    benefits: [
      "Convenient format for modern, on-the-go wellness users",
      "Clear benefit communication for retail and export markets",
      "Built to strengthen preventive healthcare assortments",
    ],
    accent: "teal",
  },
  {
    name: "RespiraSure LS",
    category: "Respiratory Care",
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?auto=format&fit=crop&w=1200&q=80",
    form: "Syrup",
    summary:
      "Respiratory support syrup concept created for cough relief, airway comfort, and recovery care.",
    description:
      "A portfolio-ready respiratory syrup positioned for pharmacy visibility, patient acceptability, and everyday prescriber relevance.",
    pack: "100 ml bottle",
    focus: "Airway support and comfort",
    benefits: [
      "Supports category expansion into routine respiratory management",
      "Patient-friendly syrup format for easier positioning",
      "Useful for retail-led and seasonal care product programs",
    ],
    accent: "blue",
  },
  {
    name: "NutraMom Dha",
    category: "Women’s Wellness",
    image:
      "https://images.unsplash.com/photo-1511174511562-5f97f4f4a95f?auto=format&fit=crop&w=1200&q=80",
    form: "Softgel Capsules",
    summary:
      "Maternal wellness softgel concept designed for nutritional balance and modern women’s care programs.",
    description:
      "A premium women’s health softgel built for category diversification, better shelf presence, and long-term wellness positioning.",
    pack: "3 x 10 softgels",
    focus: "Nutritional and women’s wellness support",
    benefits: [
      "Expands portfolio depth in women’s health segments",
      "Supports premium healthcare packaging and brand-family storytelling",
      "Fits retail, clinic, and partner-facing wellness conversations",
    ],
    accent: "teal",
  },
] as const;

export const valuePillars = [
  {
    icon: "Q",
    title: "Quality",
    text: "A disciplined quality philosophy strengthens trust across healthcare professionals, partners, and end-market conversations.",
  },
  {
    icon: "A",
    title: "Affordability",
    text: "Accessible healthcare positioning helps create stronger relevance across diverse patient and distribution ecosystems.",
  },
  {
    icon: "Reach",
    title: "Accessibility",
    text: "From portfolio structure to outreach readiness, the business is positioned to reach buyers, distributors, and institutions more effectively.",
  },
];

export const exportModel = [
  {
    icon: "Entry",
    title: "Market entry support",
    text: "Support franchise, distribution, and private-label conversations with a sharper commercial and brand-facing foundation.",
  },
  {
    icon: "Docs",
    title: "Brand registration readiness",
    text: "Packaging consistency, documentation preparedness, and structured positioning help support expansion into regulated markets.",
  },
  {
    icon: "SCM",
    title: "Supply chain visibility",
    text: "Clearer communication around logistics and commercial coordination creates stronger confidence in execution capability.",
  },
];

export const newsCards = [
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    title:
      "Preventive healthcare remains a growth driver for modern wellness portfolios",
    tag: "Industry insight",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    title:
      "How packaging clarity can improve trust across retail and institutional channels",
    tag: "Brand strategy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1200&q=80",
    title:
      "Building pharmaceutical websites that help distributors understand the range faster",
    tag: "Digital experience",
  },
];

export const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    quote:
      "Gamete Healthcare communicates like a modern pharmaceutical company should: clinical, reliable, and easy to trust.",
    author: "Dr. Arjun Malhotra",
    role: "General Physician, Delhi NCR",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
    quote:
      "The product presentation is clean and distributor-friendly. It helps us explain the range quickly during meetings.",
    author: "Sonia Verma",
    role: "Channel Partner, Chandigarh",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    quote:
      "Strong wellness positioning paired with a disciplined pharma look is exactly what this market responds to.",
    author: "Ritesh Khanna",
    role: "Institutional Procurement Lead",
  },
];

export const tags = [
  "Established 1998",
  "Quality Driven",
  "Strong Distribution Network",
  "Ethical Business Practices",
];

export const whatWeStandFor = [
  {
    icon: EfficacyIcon,
    title: "Efficacy",
    text: "We maintain a strong focus on quality across products, partners and supply.",
  },
  {
    icon: TransparencyIcon,
    title: "Transparency",
    text: "We believe in clear communication, honest information and visibility throughout our business relationships.",
  },
  {
    icon: ReliabilityIcon,
    title: "Reliability",
    text: "We aim to be a dependable partner through consistent execution and responsive support.",
  },
];

export const journey = [
  {
    year: "1998",
    title: "Gamete Healthcare Established",
    description:
      "Our pharmaceutical industry foundation begins with the establishment of Gamete Healthcare Pvt. Ltd.",
    icon: Building2,
    side: "left",
  },
  {
    year: "2020",
    title: "Helik Healthcare Established",
    description:
      "Helik Healthcare Pvt. Ltd. begins its journey as a healthcare product company, building on the experience and industry understanding developed over the years.",
    icon: Sprout,
    side: "right",
  },
  {
    year: "TODAY",
    title: "Growing Products & Partnerships",
    description:
      "Helik is expanding its healthcare portfolio, manufacturing network and international business through strong product and business partnerships.",
    icon: Globe2,
    side: "left",
  },
  {
    year: "NEXT",
    title: "Building Helik Products & Brands",
    description:
      "Our focus is to develop a stronger portfolio of Helik products and brands for India and international markets.",
    icon: Rocket,
    side: "right",
  },
];

export const openRoles = [
  {
    icon: "BD",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    title: "Senior Marketing Manager",
    description:
      "Lead regional marketing strategy, sales growth, and team development across Purvanchal.",
    experience: "15+ years",
    type: "Full time",
    location: "Purvanchal Region",
  },
  {
    icon: "RA",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    title: "Technical Representative",
    description:
      "Promote product awareness, maintain customer relationships, and support field activities across the assigned territory.",
    experience: "Freshers",
    type: "Full time",
    location: "Purvanchal Region",
  },
  {
    icon: "GD",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    title: "Graphic Designer",
    description:
      "Design marketing creatives, product visuals, promotional materials, and digital content for the company.",
    experience: "Freshers",
    type: "Full time",
    location: "Purvanchal Region",
  },
];

export const hiringSteps = [
  {
    icon: "Screen",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    title: "Application review",
    text: "We review your qualifications, experience, and suitability for the role.",
  },
  {
    icon: "Meet",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    title: "Interview",
    text: "Shortlisted candidates discuss their skills, experience, and role expectations with our team.",
  },
  {
    icon: "Join",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    title: "Selection and onboarding",
    text: "Selected candidates receive an offer and guidance through the joining process.",
  },
];

export const cultureStats = [
  { value: "4", label: "Core growth teams" },
  { value: "12+", label: "Functional collaboration points" },
  { value: "100%", label: "Focus on quality mindset" },
];

export const contactCards = [
  {
    title: "Call us",
    primary: "+91 8840703781",
    secondary: "Monday to Saturday, 10:00 AM to 6:00 PM",
  },
  {
    title: "Email us",
    primary: "info@gametehealthcare.com",
    secondary: "For products, business partnerships, and corporate inquiries",
  },
];

export const contactCards2 = [
  {
    title: "Visit us",
    primary: "286, Karpatri State, Dharamsang Complex, Durgakund",
    secondary: "Corporate office address",
  },
  {
    title: "Visit us",
    primary: "87/3, Behind Heritage Housing, Bhagwanpur, Lanka",
    secondary: "Main Office",
  },
  {
    title: "Visit us",
    primary: "Noida Sector-44, Uttar Pradesh",
    secondary: "Delhi office",
  },
];

export const responseSteps = [
  {
    icon: "01",
    title: "Initial response",
    text: "Your request is reviewed for business, product, partnership, or career relevance.",
  },
  {
    icon: "02",
    title: "Team routing",
    text: "The right internal owner takes over to move the conversation with context and clarity.",
  },
  {
    icon: "03",
    title: "Next-step discussion",
    text: "We align on samples, documents, meetings, or onboarding requirements as needed.",
  },
];

export const regionalPresence = [
  "Delhi NCR commercial coordination",
  "North India distribution relationships",
  "Institutional and partner support channels",
  "Export-ready brand communication structure",
];

export const dosageForms = [
  {
    title: "Tablets and capsules",
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Softgels and effervescents",
    image:
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Topical gels and creams",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sachets and nutrition blends",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Liquid oral formats",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Specialized wellness packs",
    image:
      "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const productPrograms = [
  {
    icon: "Therapy",
    title: "Therapy-led grouping",
    text: "Group the range in a way that helps doctors, distributors, and procurement teams understand therapeutic logic faster.",
  },
  {
    icon: "Family",
    title: "Brand-family presentation",
    text: "Present related SKUs, pack sizes, and brand extensions through a more premium and coherent portfolio story.",
  },
  {
    icon: "Fit",
    title: "Retail to institutional fit",
    text: "Build product narratives that hold up across pharmacy retail, hospital introductions, and export-facing conversations.",
  },
];

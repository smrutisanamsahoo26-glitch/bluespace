import { Building, ShieldCheck, Sparkles, UsersRound } from "lucide-react";

export const company = {
  name: "BlueSpace",
  tagline: "Future-ready infrastructure for ambitious institutions.",
  email: "bluespaceofficial@mail.com",
  phone: "+91 98765 43210",
  address: "BlueSpace HQ, Bengaluru, India",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "X", href: "https://x.com" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const serviceHighlights = [
  {
    title: "Renovation Expertise",
    description:
      "Turnkey civil, electrical, and interior upgrades tailored for schools, colleges, and institutional campuses.",
    icon: Building,
  },
  {
    title: "Smart Hardware Supply",
    description:
      "End-to-end supply of laptops, desktops, projectors, CCTV, networking, and smart classroom solutions.",
    icon: Sparkles,
  },
  {
    title: "Trusted Delivery",
    description:
      "Govt. empanelled teams, vetted labor, and QA-led execution for on-time handovers.",
    icon: ShieldCheck,
  },
  {
    title: "Human-first Support",
    description:
      "Dedicated project managers, on-site supervision, and proactive maintenance guidance.",
    icon: UsersRound,
  },
];

export const renovationServices = [
  "School renovation programs",
  "College campus modernization",
  "Government building improvements",
  "Institutional repair & retrofit",
  "Civil, electrical & interior works",
];

export const hardwareServices = [
  {
    title: "Laptop Supply",
    description: "Fleet procurement, imaging, and AMC for labs & faculty.",
    icon: "Laptop",
  },
  {
    title: "Desktop Supply",
    description: "High-performance systems for labs, libraries, and admin.",
    icon: "Monitor",
  },
  {
    title: "Projectors",
    description: "Laser/LED projection with screens, mounts, and calibration.",
    icon: "Presentation",
  },
  {
    title: "CCTV Installation",
    description: "Tiered surveillance, NVR setup, and compliance-ready storage.",
    icon: "Shield",
  },
  {
    title: "Networking & Cables",
    description: "Structured cabling, racks, Wi-Fi 6, and secure switching.",
    icon: "Network",
  },
  {
    title: "Smart Classroom",
    description: "Interactive panels, audio, IoT sensors, and automation.",
    icon: "Sparkles",
  },
];

export const stats = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Cities Covered", value: "18" },
  { label: "Avg. Delivery Time", value: "45 days" },
  { label: "Client Satisfaction", value: "4.9/5" },
];


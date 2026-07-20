export const company = {
  name: "Star Borewell",
  tagline: "Professional Borewell Drilling Services",
  phoneDisplay: "098433 46773",
  phoneRaw: "+919843346773",
  whatsappRaw: "919843346773",
  email: "info@starborewell.in",
  address: "Sivakasi Main Road, Sivakasi, Virudhunagar District, Tamil Nadu – 626123",
  areasServed: "Sivakasi, Virudhunagar, Kovilpatti & surrounding districts",
  hoursWeekday: "Mon – Sat: 7:00 AM – 8:00 PM",
  hoursSunday: "Sunday: 8:00 AM – 2:00 PM (Emergency service 24/7)",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31363.0!2d77.7972!3d9.4491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjYnNTYuOCJOIDc3wrA0Nyc0OS45IkU!5e0!3m2!1sen!2sin!4v1700000000000",
};

export const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Borewells Completed" },
  { value: 24, suffix: "/7", label: "Emergency Service" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
];

export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  description: string;
  benefits: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "borewell-drilling",
    title: "Borewell Drilling",
    icon: "Drill",
    short: "Precision drilling with advanced rotary rigs for guaranteed water yield.",
    description:
      "Our core expertise — full-scale borewell drilling using modern DTH rotary rigs operated by seasoned technicians. We combine geological survey insights with high-torque machinery to reach optimal water tables quickly and safely, minimizing disruption to your property.",
    benefits: [
      "Advanced DTH rotary drilling rigs",
      "Accurate geological water point survey",
      "Deep drilling up to 1000+ feet",
      "Clean, disciplined work site",
    ],
    image: "/images/gallery-machine.jpg",
  },
  {
    slug: "agricultural-borewell",
    title: "Agricultural Borewell",
    icon: "Wheat",
    short: "Dependable irrigation borewells built for farmland yield and longevity.",
    description:
      "We understand every farmer's dependency on consistent water supply. Our agricultural borewell service is engineered for high-yield irrigation, helping farmers across Sivakasi, Virudhunagar and Kovilpatti secure reliable water for crops, livestock and greenhouses.",
    benefits: [
      "High-yield irrigation-focused drilling",
      "Affordable farmer-friendly pricing",
      "Casing pipe protection against collapse",
      "Free site inspection before drilling",
    ],
    image: "/images/gallery-agri.jpg",
  },
  {
    slug: "residential-borewell",
    title: "Residential Borewell",
    icon: "Home",
    short: "Clean, compact drilling solutions for homes and gated communities.",
    description:
      "Get uninterrupted water supply for your home with our residential borewell drilling service. We use compact rigs suitable for narrow plots, ensuring minimal mess, quick turnaround and complete peace of mind for house owners and apartment associations.",
    benefits: [
      "Compact rigs for narrow home plots",
      "Fast 1-day drilling turnaround",
      "Complete pipe & motor setup available",
      "Doorstep consultation & quotation",
    ],
    image: "/images/gallery-residential.jpg",
  },
  {
    slug: "industrial-borewell",
    title: "Industrial Borewell",
    icon: "Factory",
    short: "High-capacity borewell systems for factories and commercial plants.",
    description:
      "Industries demand uninterrupted large-volume water supply. Our industrial borewell drilling delivers high-discharge bore points engineered for manufacturing units, textile plants, and commercial complexes, backed by yield testing and compliance documentation.",
    benefits: [
      "High-discharge industrial-grade bores",
      "Yield testing & documentation",
      "Scalable multi-point drilling",
      "Dedicated project engineer support",
    ],
    image: "/images/gallery-industrial.jpg",
  },
  {
    slug: "compressor-cleaning",
    title: "Compressor Cleaning",
    icon: "Wind",
    short: "Restore borewell output with high-pressure compressor flushing.",
    description:
      "Over time, sand and silt reduce borewell yield. Our high-pressure air compressor cleaning service flushes out sediment build-up, restoring your borewell's original water discharge without the cost of a new drilling.",
    benefits: [
      "Restores lost water yield",
      "High-pressure air jetting technology",
      "Cost-effective vs new drilling",
      "Same-day service availability",
    ],
    image: "/images/gallery-machine.jpg",
  },
  {
    slug: "motor-installation",
    title: "Motor Installation",
    icon: "Cog",
    short: "Expert installation of single-phase & three-phase borewell motors.",
    description:
      "Choosing and fitting the right motor is critical to borewell performance. Our technicians install and calibrate single-phase and three-phase motors matched precisely to your borewell depth and household or industrial load requirements.",
    benefits: [
      "Correct motor sizing & calibration",
      "Single & three-phase expertise",
      "Genuine branded motor options",
      "Warranty-backed installation",
    ],
    image: "/images/gallery-pump.jpg",
  },
  {
    slug: "submersible-pump-installation",
    title: "Submersible Pump Installation",
    icon: "Waves",
    short: "Reliable submersible pump fitting for consistent daily water flow.",
    description:
      "We supply and install high-efficiency submersible pumps suited to your borewell depth, water table and usage needs — from homes to apartments to large-scale industrial complexes — ensuring smooth, long-lasting operation.",
    benefits: [
      "Depth-matched pump selection",
      "Energy-efficient pump models",
      "Leak-proof pipe jointing",
      "Post-installation performance check",
    ],
    image: "/images/gallery-pump.jpg",
  },
  {
    slug: "pipeline-installation",
    title: "Pipeline Installation",
    icon: "PipeIcon",
    short: "Durable HDPE & PVC pipeline laying for water distribution.",
    description:
      "From the borewell head to your storage tank, we design and install robust pipeline networks using quality HDPE and PVC materials, engineered to withstand pressure and last for decades with minimal maintenance.",
    benefits: [
      "ISI-marked pipe materials",
      "Pressure-tested jointing",
      "Underground & surface laying",
      "Custom layout planning",
    ],
    image: "/images/gallery-pipeline.jpg",
  },
  {
    slug: "borewell-repair",
    title: "Borewell Repair",
    icon: "Wrench",
    short: "Rapid diagnosis and repair for motor, pipe & yield issues.",
    description:
      "A non-functioning borewell can bring your home, farm or business to a halt. Our rapid-response repair team diagnoses motor failures, pipe blockages, casing damage and yield drops — restoring your water supply fast.",
    benefits: [
      "24/7 emergency breakdown support",
      "Motor rewinding & replacement",
      "Pipe fishing & retrieval",
      "Transparent repair estimates",
    ],
    image: "/images/gallery-machine.jpg",
  },
  {
    slug: "water-yield-testing",
    title: "Water Yield Testing",
    icon: "FlaskConical",
    short: "Scientific yield & quality testing before you invest.",
    description:
      "Avoid costly guesswork. We conduct professional water yield testing and quality analysis before and after drilling, giving builders, industries and institutions verified data to plan water usage confidently.",
    benefits: [
      "Accurate discharge rate measurement",
      "Water quality assessment",
      "Detailed test reports",
      "Ideal for builders & institutions",
    ],
    image: "/images/gallery-industrial.jpg",
  },
  {
    slug: "maintenance",
    title: "Annual Maintenance",
    icon: "ShieldCheck",
    short: "Scheduled maintenance plans to maximize borewell lifespan.",
    description:
      "Prevent costly breakdowns with our annual maintenance contracts — periodic inspection of motors, pipelines and yield performance to keep your borewell system running at peak efficiency year-round.",
    benefits: [
      "Scheduled preventive inspections",
      "Priority breakdown response",
      "Extended equipment lifespan",
      "Flexible AMC plans",
    ],
    image: "/images/gallery-pump.jpg",
  },
];

export type GalleryItem = {
  image: string;
  title: string;
  category: "Projects" | "Machinery" | "Completed";
};

export const gallery: GalleryItem[] = [
  { image: "/images/hero-rig.jpg", title: "Heavy-Duty Drilling Rig on Site", category: "Machinery" },
  { image: "/images/gallery-residential.jpg", title: "Residential Borewell Drilling", category: "Projects" },
  { image: "/images/gallery-agri.jpg", title: "Agricultural Irrigation Borewell", category: "Projects" },
  { image: "/images/gallery-industrial.jpg", title: "Industrial Plant Borewell Setup", category: "Projects" },
  { image: "/images/gallery-machine.jpg", title: "Rotary Drill Head Close-Up", category: "Machinery" },
  { image: "/images/gallery-pump.jpg", title: "Submersible Pump Installation", category: "Completed" },
  { image: "/images/gallery-pipeline.jpg", title: "HDPE Pipeline Laying", category: "Completed" },
  { image: "/images/about-team.jpg", title: "Our Expert Field Team", category: "Machinery" },
];

export type Testimonial = {
  name: string;
  role: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Muthuraman K.",
    role: "House Owner, Sivakasi",
    rating: 5,
    text: "Star Borewell drilled our house borewell in a single day. The team was punctual, professional, and the pricing was exactly as quoted — no hidden charges. Highly recommend for any home owner.",
  },
  {
    name: "Palanivel S.",
    role: "Farmer, Kovilpatti",
    rating: 5,
    text: "We were struggling with low water yield for our fields for years. Star Borewell's team identified the right point using proper survey and got us excellent water flow. Truly experts in agricultural borewells.",
  },
  {
    name: "Arun Textiles Pvt Ltd",
    role: "Industrial Client, Virudhunagar",
    rating: 5,
    text: "As a textile unit, uninterrupted water supply is critical for us. Star Borewell installed a high-capacity industrial borewell with complete yield testing documentation. Professional from start to finish.",
  },
  {
    name: "Meenakshi R.",
    role: "Apartment Association, Sivakasi",
    rating: 5,
    text: "Our apartment complex needed a reliable borewell with a strong motor setup. Their engineers handled everything — drilling, pump installation and pipeline — with great coordination and clean execution.",
  },
  {
    name: "St. Xavier's School",
    role: "Institution, Kovilpatti",
    rating: 5,
    text: "We contacted Star Borewell for our school's water requirement. They responded within hours, completed the work on schedule, and the after-service support has been excellent.",
  },
  {
    name: "Dr. Selvakumar",
    role: "Hospital Administrator, Virudhunagar",
    rating: 5,
    text: "Hospitals cannot afford water downtime. Star Borewell's 24/7 emergency repair service saved us during a critical motor failure. Fast, reliable and technically sound team.",
  },
];

export const faqs = [
  {
    q: "How long does borewell drilling usually take?",
    a: "For residential borewells, drilling is typically completed within 4-8 hours depending on depth and soil conditions. Agricultural and industrial borewells may take 1-2 days due to greater depth requirements.",
  },
  {
    q: "How deep do you drill borewells in Sivakasi, Virudhunagar and Kovilpatti?",
    a: "Depending on the local water table and geological survey, we typically drill between 300 to 1000+ feet. Our team conducts a site assessment to recommend the optimal depth for guaranteed yield.",
  },
  {
    q: "Do you provide a free site inspection before quoting?",
    a: "Yes, we offer a free on-site inspection and consultation to assess soil type, water table depth and access before providing a transparent, no-obligation quotation.",
  },
  {
    q: "What is the cost of borewell drilling?",
    a: "Cost depends on drilling depth, casing pipe requirement, pump and motor specification, and site accessibility. Call us at 098433 46773 for a customized, transparent quote with no hidden charges.",
  },
  {
    q: "What if no water is found during drilling?",
    a: "Our experienced team uses proven geological survey techniques to identify high-probability water points before drilling begins, significantly reducing the risk of a dry bore. We are transparent about site conditions upfront.",
  },
  {
    q: "Do you offer emergency borewell repair services?",
    a: "Yes, we provide 24/7 emergency repair services for motor failure, pipe blockages and sudden yield drops across Sivakasi, Virudhunagar and Kovilpatti.",
  },
  {
    q: "Which areas do you serve?",
    a: "We primarily serve Sivakasi, Virudhunagar, Kovilpatti and surrounding villages and towns, with select projects across Tamil Nadu for large industrial and institutional clients.",
  },
  {
    q: "What types of motors and pumps do you install?",
    a: "We install single-phase and three-phase submersible pumps and motors from trusted brands, sized precisely to your borewell depth and water usage requirements.",
  },
  {
    q: "How do I know which pump capacity I need?",
    a: "Our technicians calculate the right pump capacity based on borewell depth, static water level, and your daily water requirement, ensuring efficient energy use and longevity.",
  },
  {
    q: "Do you provide warranty on drilling and installation work?",
    a: "Yes, we provide workmanship warranty on drilling, casing and installation services, along with manufacturer warranty on pumps and motors supplied.",
  },
  {
    q: "Can you drill borewells in narrow or compact spaces?",
    a: "Yes, we use compact rig equipment specifically suited for narrow residential plots, apartment compounds and constrained industrial sites.",
  },
  {
    q: "Do you clean or restore old, low-yield borewells?",
    a: "Yes, our compressor cleaning service uses high-pressure air jetting to remove silt and sediment build-up, often restoring yield without needing a new borewell.",
  },
  {
    q: "What documentation do you provide for industrial or institutional borewells?",
    a: "We provide yield testing reports, water quality analysis and completion certificates suitable for builders, industries, schools and hospitals requiring compliance documentation.",
  },
  {
    q: "How much does agricultural borewell drilling cost for farmers?",
    a: "We offer farmer-friendly pricing plans for agricultural borewells. Contact us for a customized quote based on your farm size, crop type and water requirement.",
  },
  {
    q: "How quickly can your team reach our site?",
    a: "For sites within Sivakasi, Virudhunagar and Kovilpatti, our team can typically schedule a visit within 24-48 hours, with priority scheduling for emergency repairs.",
  },
  {
    q: "Do you handle borewell pipeline installation to overhead tanks?",
    a: "Yes, we design and install complete pipeline networks from the borewell head to your storage or overhead tank using durable HDPE/PVC piping.",
  },
  {
    q: "What safety measures do you follow on-site?",
    a: "Our crew follows strict safety protocols including protective gear, site barricading, and equipment inspection checklists to ensure safe operations for your family, staff or workers.",
  },
  {
    q: "Do you offer annual maintenance contracts (AMC)?",
    a: "Yes, we offer flexible AMC plans covering periodic inspection, motor checks and priority breakdown support to extend the lifespan of your borewell system.",
  },
  {
    q: "How can I get an instant quote?",
    a: "You can call us directly at 098433 46773, message us on WhatsApp, or fill out our contact form for a fast, free quotation within the same day.",
  },
  {
    q: "Why should I choose Star Borewell over other companies?",
    a: "With 20+ years of experience, 5000+ successfully completed borewells, modern rig machinery, transparent pricing and a 24/7 responsive team, Star Borewell is a trusted name across Sivakasi, Virudhunagar and Kovilpatti.",
  },
];

export const whyChooseUs = [
  {
    icon: "Truck",
    title: "Latest Machinery",
    text: "Modern DTH rotary rigs and compressors for faster, more precise drilling with minimal site disruption.",
  },
  {
    icon: "HardHat",
    title: "Experienced Operators",
    text: "A skilled crew with 20+ years of field expertise handling residential, agricultural and industrial projects.",
  },
  {
    icon: "IndianRupee",
    title: "Affordable Pricing",
    text: "Transparent, honest quotations with zero hidden charges — premium service at fair, competitive rates.",
  },
  {
    icon: "Zap",
    title: "Fast Service",
    text: "Rapid site visits and quick turnaround times, with 24/7 emergency response for urgent breakdowns.",
  },
  {
    icon: "BadgeCheck",
    title: "Quality Work",
    text: "Rigorous quality checks at every stage — from survey to yield testing — for long-lasting results.",
  },
  {
    icon: "Users",
    title: "5000+ Happy Clients",
    text: "Trusted by house owners, farmers, builders, industries, schools and hospitals across the region.",
  },
];

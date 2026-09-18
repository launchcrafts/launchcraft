const BASE = "https://madhusdhan.vercel.app/static/media";

const imageHashes: Record<number, string> = {
  1:  "099e170a6e53cd15a3b5",
  7:  "ccea968da61346de14e4",
  8:  "7066cb6a83fcd61d4e30",
  9:  "61e9a52e12cac721c56a",
  10: "b7da9dfeef4c40223df8",
  11: "389f673dc79444fcbe5c",
  13: "dcf5930e49da2c427272",
  14: "772cf420d7ee77815149",
  15: "66c1b8ade9ddf6331f4c",
  16: "ed1e490bfebb5dd9c403",
  17: "f2c61568ed7cd5bf4d76",
  19: "4d404e8fa04030a8de82",
  20: "981b4f962f737bd2f492",
  21: "b6c9c09c84fa46d40229",
  22: "017d90fb2853a7d5ff02",
  23: "8b20316f7cdb81dca4b8",
  24: "fa7f322c29b44847880b",
  26: "0ad92c28c7f83ce1578e",
  27: "bfde67d0a6c680d252cc",
  28: "cd24bce51faa6d88296e",
  29: "ff69c5da16f886857f30",
  30: "7ef999d2587dfe3ca2c9",
  31: "332cddb50bec3259fbb8",
  32: "cc9c76c437a6fabccec3",
  33: "473cbe9c30f221efd247",
  34: "4db331715820a7c83519",
};

function getImageUrl(id: number) {
  const hash = imageHashes[id];
  return hash ? `${BASE}/project${id}.${hash}.png` : "";
}

export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  category: string;
}

// ── 1. International / UK Projects ────────────────────────────────────────────

const international: Project[] = [
  {
    id: 35,
    image: "/assets/fillers-skin.png",
    title: "Fillers Skin",
    description: "Professional dermal filler clinic website showcasing non-surgical facial treatments, lip fillers, and skin rejuvenation services. Features treatment guides, pricing, and consultation booking.",
    tags: ["Medical Aesthetics", "Next.js", "SEO"],
    link: "https://fillers.skin",
    category: "Medical Aesthetics",
  },
  {
    id: 36,
    image: "/assets/aptos-uk.png",
    title: "Aptos UK",
    description: "Specialist thread lift clinic website featuring Aptos thread treatments for facial rejuvenation. Includes treatment information, before/after results, and patient consultation booking.",
    tags: ["Medical Aesthetics", "Thread Lifts", "Next.js"],
    link: "https://aptosuk.com",
    category: "Medical Aesthetics",
  },
  {
    id: 37,
    image: "/assets/botox-uk.png",
    title: "Botox UK",
    description: "Dedicated Botox treatment platform offering anti-wrinkle injections and facial aesthetics services. Features treatment areas, pricing guides, and practitioner profiles.",
    tags: ["Medical Aesthetics", "Botox", "Next.js"],
    link: "https://botoxuk.com",
    category: "Medical Aesthetics",
  },
  {
    id: 38,
    image: "/assets/buttock-lift-uk.png",
    title: "Buttock Lift UK",
    description: "Specialist body contouring clinic website for non-surgical buttock lift treatments. Features procedure details, expected results, and patient journey information.",
    tags: ["Medical Aesthetics", "Body Contouring", "Next.js"],
    link: "https://buttocklift.uk",
    category: "Medical Aesthetics",
  },
];

// ── 2. Other Official Domains (India) ─────────────────────────────────────────

const otherOfficial: Project[] = [
  {
    id: 22,
    image: getImageUrl(22),
    title: "MCR CMS",
    description: "Agricultural management platform specifically designed for Mulkanoor village farming community. Built with React.js featuring crop management systems, agricultural resource sharing, and farming schedules.",
    tags: ["Agriculture", "Village Platform", "Crop Management", "React.js"],
    link: "https://mcrcms.coop/",
    category: "Agriculture",
  },
  {
    id: 23,
    image: getImageUrl(23),
    title: "Maharashtra Agro",
    description: "Comprehensive agricultural platform serving Maharashtra farmers and agribusiness community with market price updates.",
    tags: ["Agriculture", "Market Platform"],
    link: "https://maharashtraagro.in",
    category: "Agriculture",
  },
  {
    id: 10,
    image: getImageUrl(10),
    title: "Sacred Relm",
    description: "Spiritual e-commerce platform offering sacred items and religious products. Features elegant design, secure payments, and category-based product organization for spiritual and religious merchandise.",
    tags: ["E-commerce", "Spiritual", "React.js"],
    link: "https://sacredrelm.com",
    category: "E-commerce",
  },
  {
    id: 11,
    image: getImageUrl(11),
    title: "Sri Astro Veda",
    description: "Professional astrology services platform with multi-language support (Telugu, Hindi, English). Features Razorpay payment integration, WhatsApp API notifications, horoscope reports, and comprehensive astrology consultation services.",
    tags: ["Astrology", "Payment Integration", "WhatsApp API"],
    link: "https://sriastroveda.com",
    category: "Services",
  },
  {
    id: 16,
    image: getImageUrl(16),
    title: "Surya Media",
    description: "Professional media company website showcasing digital marketing services, content creation, and brand development solutions. Features portfolio showcase, service listings, and client testimonials.",
    tags: ["Media", "Digital Marketing", "Portfolio"],
    link: "https://suryamedia.co.in",
    category: "Media & Agency",
  },
  {
    id: 21,
    image: getImageUrl(21),
    title: "Lakshmi Nilayam",
    description: "Professional real estate platform specializing in apartment sales and housing solutions. Built with React.js featuring property listings, virtual tours, price comparisons, and inquiry management system.",
    tags: ["Real Estate", "Property Sales", "React.js", "Apartments"],
    link: "https://lakshminilayam.com/",
    category: "Real Estate",
  },
];

// ── 3. Local Healthcare Projects (India) ──────────────────────────────────────

const localHealthcare: Project[] = [
  {
    id: 7,
    image: getImageUrl(7),
    title: "Dr Joints",
    description: "A comprehensive e-commerce platform for natural joint pain relief products. Built with React.js and featuring customer testimonials, and optimized product catalog for health and wellness solutions.",
    tags: ["E-commerce", "React.js", "Health"],
    link: "https://drjoints.in",
    category: "Healthcare & Medicine",
  },
  {
    id: 9,
    image: getImageUrl(9),
    title: "Sampoorna Rogya",
    description: "Complete healthcare solutions platform providing comprehensive health services and products. Built with React.js featuring appointment booking, product catalog for diverse customer base.",
    tags: ["Healthcare", "Next.js", "Booking System"],
    link: "https://sampoornarogya.com",
    category: "Healthcare & Medicine",
  },
  {
    id: 14,
    image: getImageUrl(14),
    title: "Diafree Ayush",
    description: "Specialized healthcare platform for diabetes management through Ayurvedic solutions. Features product recommendations, health tracking capabilities, and educational content for diabetes care.",
    tags: ["Healthcare", "Ayurvedic", "Diabetes Management"],
    link: "https://diafreeayush.com",
    category: "Healthcare & Medicine",
  },
  {
    id: 15,
    image: getImageUrl(15),
    title: "Dr Alco Free",
    description: "Dedicated platform for alcohol addiction recovery and support. Built with React.js offering treatment programs, consultation booking, and resource materials for addiction recovery solutions.",
    tags: ["Healthcare", "Recovery", "Consultation"],
    link: "https://dralcofree.com",
    category: "Healthcare & Medicine",
  },
  {
    id: 8,
    image: getImageUrl(8),
    title: "Beyond Slim",
    description: "A modern weight management and wellness e-commerce platform offering natural health products. Features responsive design, product filtering, and integrated payment gateway for seamless customer experience.",
    tags: ["E-commerce", "Health", "Payment Gateway"],
    link: "https://beyondslim.in",
    category: "Healthcare & Medicine",
  },
];

// ── 4. Sample E-commerce & Web Apps (Non-Domain) ──────────────────────────────

const sampleEcommerce: Project[] = [
  {
    id: 39,
    image: "/assets/rr-athleisure.png",
    title: "RR Athleisure",
    description: "Premium sportswear e-commerce platform engineered for champions. Features new collections, men's and women's categories, and a modern shopping experience with promotional offers.",
    tags: ["E-commerce", "Sportswear", "React.js"],
    link: "https://rrathleisure.vercel.app",
    category: "E-commerce",
  },
  {
    id: 13,
    image: getImageUrl(13),
    title: "Glow Glaz",
    description: "Comprehensive ayurvedic e-commerce platform featuring natural health and wellness products. Built with React.js offering ayurvedic medicines, herbal supplements, beauty products, and traditional remedies.",
    tags: ["Ayurvedic", "E-commerce", "Health", "React.js"],
    link: "https://glowglazecommerce.vercel.app",
    category: "E-commerce",
  },
  {
    id: 32,
    image: getImageUrl(32),
    title: "ISN Electronics",
    description: "Electronics product showcase platform featuring modern design and comprehensive product information.",
    tags: ["E-commerce", "Electronics"],
    link: "https://isn-ele.vercel.app",
    category: "E-commerce",
  },
  {
    id: 1,
    image: getImageUrl(1),
    title: "UPGRADE ENGLISH",
    description: "This innovative web application, built on Next.js and styled with Tailwind CSS, empowers users to enhance their English speaking skills through a seamless process of speech recording, AI-powered transcription, and intelligent analysis.",
    tags: ["Next.js", "Javascript", "2024"],
    link: "https://upgrade-english.vercel.app/",
    category: "Web Application",
  },
  {
    id: 20,
    image: getImageUrl(20),
    title: "Agent Sigma",
    description: "Specialized call center platform designed for agents to efficiently manage multiple client orders and process payments. Built with React.js featuring client database management, order placement interface, payment gateway integration, and real-time order tracking.",
    tags: ["Call Center", "Order Management", "Payment Processing", "React.js"],
    link: "https://agent-sigma-livid.vercel.app/",
    category: "Web Application",
  },
  {
    id: 26,
    image: getImageUrl(26),
    title: "RG Pack",
    description: "Corporate website for packaging company showcasing industrial packaging solutions and company services.",
    tags: ["Corporate", "Manufacturing"],
    link: "https://rgpack.vercel.app",
    category: "Corporate",
  },
  {
    id: 24,
    image: getImageUrl(24),
    title: "Teamworks Digital",
    description: "Creative video production service landing page showcasing professional video editing and content creation capabilities for businesses.",
    tags: ["Video Production", "Creative Services"],
    link: "https://teamworksdigital-b594.vercel.app",
    category: "Landing Page",
  },
  {
    id: 27,
    image: getImageUrl(27),
    title: "Teamwork Digital Agency",
    description: "Digital marketing agency platform featuring service offerings and portfolio. Project 70% complete (discontinued).",
    tags: ["Digital Marketing", "Agency"],
    link: "https://teamwork-hazel.vercel.app",
    category: "Agency",
  },
];

// ── 5. Sample Single Product / Landing Pages (Non-Domain) ─────────────────────

const sampleSingleProduct: Project[] = [
  {
    id: 17,
    image: getImageUrl(17),
    title: "Rice Cooker",
    description: "Interactive kitchen appliance showcase platform built with React.js. Features product demonstrations, specifications comparison, and modern responsive design for home appliance marketing and sales.",
    tags: ["React.js", "Product Showcase", "Responsive"],
    link: "https://rice-cooker-kappa.vercel.app/",
    category: "Single Product",
  },
  {
    id: 19,
    image: getImageUrl(19),
    title: "Mother",
    description: "Dedicated platform for mother and child care services. Features parenting resources, health tracking, appointment scheduling, and community support built with modern React.js architecture and responsive design.",
    tags: ["Healthcare", "React.js", "Community"],
    link: "https://mother-nu.vercel.app/",
    category: "Single Product",
  },
  {
    id: 28,
    image: getImageUrl(28),
    title: "Glow Glaz",
    description: "Single product showcase landing page highlighting beauty product features and benefits with clean design.",
    tags: ["E-commerce", "Beauty"],
    link: "https://glowglaz-vert.vercel.app",
    category: "Single Product",
  },
  {
    id: 29,
    image: getImageUrl(29),
    title: "Lakshmi Real Estate",
    description: "Real estate campaign landing page designed to generate leads and showcase property investment opportunities.",
    tags: ["Real Estate", "Lead Generation"],
    link: "https://lakshminewlandingpage.vercel.app",
    category: "Landing Page",
  },
  {
    id: 30,
    image: getImageUrl(30),
    title: "Projector Store",
    description: "E-commerce landing page for projector sales featuring product specifications, pricing, and integrated checkout system.",
    tags: ["E-commerce", "Electronics"],
    link: "https://projector-opal.vercel.app",
    category: "Single Product",
  },
  {
    id: 31,
    image: getImageUrl(31),
    title: "Vlog Camera Store",
    description: "Product landing page for vlogging cameras with detailed specifications, pricing, and seamless checkout experience.",
    tags: ["E-commerce", "Electronics", "Photography"],
    link: "https://vlog-camera.vercel.app",
    category: "Single Product",
  },
  {
    id: 33,
    image: getImageUrl(33),
    title: "D-52 Diabetes Care",
    description: "Health product landing page focused on diabetes management solutions with clear product benefits and information.",
    tags: ["E-commerce", "Healthcare"],
    link: "https://d-52.vercel.app",
    category: "Single Product",
  },
  {
    id: 34,
    image: getImageUrl(34),
    title: "Premium Shilajit",
    description: "Single-page product showcase for authentic shilajit with compressed content design, clear benefits, and compelling product presentation.",
    tags: ["E-commerce", "Wellness", "Ayurveda"],
    link: "https://shilajit-gamma.vercel.app",
    category: "Single Product",
  },
];

export const allProjects: Project[] = [
  ...international,
  ...otherOfficial,
  ...localHealthcare,
  ...sampleEcommerce,
  ...sampleSingleProduct,
];

export const projectsByDivision = {
  international,
  otherOfficial,
  localHealthcare,
  "sample-ecommerce": sampleEcommerce,
  "sample-single-product": sampleSingleProduct,
};

export type NavLink = { label: string; href: string; tag?: string };

export const navLinks: NavLink[] = [
  { label: "Anatomy", href: "#anatomy", tag: "3D HUD" },
  { label: "Role Matrix", href: "#matrix", tag: "Kits" },
  { label: "Fleet ROI", href: "#roi", tag: "Calculator" },
  { label: "Products", href: "#products" },
  { label: "Hub Dispatch", href: "#dispatch", tag: "48h SLA" },
  { label: "Verify SANS", href: "#verify", tag: "Live" },
  { label: "Pricing", href: "#pricing" },
];

export const clientLogos = [
  { name: "AngloTrans Mining", sector: "Heavy Extraction" },
  { name: "Sasol Integrated Energy", sector: "Petrochemical" },
  { name: "Eskom Transmission Div", sector: "High Voltage" },
  { name: "Transnet Port Terminals", sector: "Maritime Freight" },
  { name: "WBHO Infrastructure", sector: "Structural Civil" },
  { name: "Mondi Heavy Pulp", sector: "Industrial Processing" },
  { name: "ArcelorMittal Steel", sector: "Smelting & Foundry" },
  { name: "Glencore Chrome Ops", sector: "Sub-Surface Mining" },
];

// Exploded anatomy inspection layers
export type AnatomyLayer = {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  material: string;
  specs: { label: string; value: string }[];
  description: string;
  standards: string[];
  hotspots: { x: number; y: number; title: string; detail: string }[];
};

export const anatomyLayers: AnatomyLayer[] = [
  {
    id: "shell",
    name: "01 // Carbon-Polymer Exoshell",
    subtitle: "High-impact ballistic shell with thermal deflection coating",
    tag: "IMPACT RESISTANCE",
    material: "Nano-reinforced Carbon-Kevlar Composite",
    specs: [
      { label: "Impact Deflection", value: "14.8 kN peak" },
      { label: "Thermal Tolerance", value: "-40°C to +150°C" },
      { label: "Dielectric Rating", value: "20,000 V Proof" },
      { label: "Total Mass", value: "385 grams" },
    ],
    description:
      "Hydro-formed aerodynamic shell engineered to deflect kinetic debris at up to 120 m/s without puncturing or transferring rotational force to the cervical spine.",
    standards: ["SANS 1372:2018", "EN 397 Class E", "ANSI Z89.1 Type II"],
    hotspots: [
      { x: 38, y: 28, title: "Kinetic Deflection Apex", detail: "Ridge angle sheds falling rocks up to 5kg at terminal velocity" },
      { x: 62, y: 35, title: "Dielectric Crown", detail: "Zero-conductive polymer rated up to 20kV electrical flashover" },
      { x: 25, y: 65, title: "Quick-Lock Brim Interface", detail: "Patented magnetic clip for earmuffs, face visors & headlamps" },
    ],
  },
  {
    id: "lattice",
    name: "02 // 3D Elastomeric Damping Lattice",
    subtitle: "Cellular energy absorption matrix replacing obsolete styrofoam",
    tag: "G-FORCE CUSHION",
    material: "DLS Photopolymer Voronoi Elastomer",
    specs: [
      { label: "Rotational Accel Drop", value: "-52% MIPS" },
      { label: "Ventilation Airflow", value: "+340% CFM" },
      { label: "Fatigue Resistance", value: "10,000 cycles" },
      { label: "Weight", value: "115 grams" },
    ],
    description:
      "Variable-density 3D printed lattice matrix. Deforms progressively under blunt acceleration to dissipate g-force before shock reaches the worker's skull.",
    standards: ["ISO 12312-1", "EN 12492 Clause 4.2", "SANS 1397 Annex C"],
    hotspots: [
      { x: 50, y: 48, title: "Multi-Zone Voronoi Matrix", detail: "Densest at vertex point, progressive elasticity along temporal lobes" },
      { x: 42, y: 72, title: "Continuous Micro-Channelling", detail: "Passive airflow keeps cranial core 3.4°C cooler in deep shaft mines" },
    ],
  },
  {
    id: "sensor",
    name: "03 // Telemetry & Bio-Telemetry Core",
    subtitle: "Autonomous environmental hazard & impact logging module",
    tag: "IOT SAFETY NODE",
    material: "IP68 Hermetic Sealed PEEK Housing",
    specs: [
      { label: "Gas Detection", value: "CO, H2S, CH4, O2" },
      { label: "Impact Telemetry", value: "3-Axis 200g Gyro" },
      { label: "Battery Endurance", value: "96 hours continuous" },
      { label: "Mesh Protocol", value: "LoRaWAN + Sub-GHz" },
    ],
    description:
      "Embedded telemetry module continuously monitors atmospheric gas spikes, heat exhaustion vitals, and logs un-reported micro-impacts to your OHS cloud dashboard.",
    standards: ["SANS 10108 Hazardous Areas", "ATEX Zone 0 Ex ia", "IECEx Certified"],
    hotspots: [
      { x: 55, y: 55, title: "Sub-GHz LoRa Mesh Transceiver", detail: "Transmits through 80m of solid granite back to shaft head control" },
      { x: 32, y: 42, title: "Optical Pulse & Fatigue Sensor", detail: "Monitors cranial skin temp and heat exhaustion onset in real time" },
    ],
  },
  {
    id: "visor",
    name: "04 // Polarized Electro-Optic Visor",
    subtitle: "High-velocity ballistic face guard with anti-fog iridium tint",
    tag: "OPTICAL DEFENSE",
    material: "Grade 1 Optical Polycarbonate + Sapphire Anti-Scratch",
    specs: [
      { label: "Impact Class", value: "High Energy (190 m/s)" },
      { label: "UV Absorption", value: "99.9% UV400" },
      { label: "Arc-Flash Rating", value: "12 cal/cm² ATPV" },
      { label: "Anti-Fog Coating", value: "Permanent Hydrophilic" },
    ],
    description:
      "Optically flawless visor with panoramic peripheral range. Integrated magnetic latch flips upward seamlessly with heavy gloved hands.",
    standards: ["SANS 1386:2019", "EN 166 1B T K N", "NFPA 70E Arc Hazard"],
    hotspots: [
      { x: 48, y: 38, title: "Hydrophilic Molecular Anti-Fog", detail: "Guaranteed zero fogging in 99% RH underground humidity" },
      { x: 68, y: 50, title: "Quick-Swap Neodymium Latches", detail: "Swap from clear to shade 5 cutting glass in under 3 seconds" },
    ],
  },
];

// Role-based PPE Matrix Bundles for Companies
export type RoleBundle = {
  id: string;
  role: string;
  industry: string;
  riskProfile: "EXTREME" | "HIGH" | "HAZARDOUS" | "HEAVY INDUSTRIAL";
  recommendedWorkerRatio: string;
  bundleWeight: string;
  sansCertifications: string[];
  unitCost: number;
  items: {
    category: string;
    product: string;
    spec: string;
    compliance: string;
  }[];
  primaryHazards: string[];
};

export const roleBundles: RoleBundle[] = [
  {
    id: "deep-mining",
    role: "Deep-Shaft Extraction & Rock Engineer",
    industry: "Underground Mining & Gold/Platinum Reef",
    riskProfile: "EXTREME",
    recommendedWorkerRatio: "42% of mine roster",
    bundleWeight: "4.8 kg total kit",
    sansCertifications: ["SANS 1372", "SANS 12702", "SANS 2237", "SANS 10382", "EN 388:4544FP"],
    unitCost: 2840,
    items: [
      { category: "Head", product: "K30 Apex-Mining Caplamp Ready", spec: "Integrated bracket, battery harness, 14.8kN shell", compliance: "SANS 1372 Type 2" },
      { category: "Body", product: "Graphene-Weave Flame & Acid Conti", spec: "Class 3 360° reflective, double gusset crotch", compliance: "SANS 12702 Class 3" },
      { category: "Feet", product: "Ironstep Metatarsal Armor S3", spec: "Internal Poron XRD met-guard, nitrile slip sole", compliance: "SANS 2237 / EN ISO 20345" },
      { category: "Hands", product: "ForgeCut Level-F Anti-Impact", spec: "Kevlar lining, high-vis TPR back-of-hand exos", compliance: "EN 388:2016 4X44FP" },
      { category: "Respiratory", product: "AeroGuard P3 Dust & Radon Cartridge", spec: "Silicone face seal, speech diaphragm, twin P3", compliance: "SANS 10382 / EN 149" },
    ],
    primaryHazards: ["Rockfall impact", "Crystalline silica dust", "Crush pinch-points", "Extreme heat index", "Low visibility shafts"],
  },
  {
    id: "high-voltage",
    role: "High-Voltage Substation & Arc-Flash Specialist",
    industry: "Power Utilities & Renewable Grid Transmission",
    riskProfile: "EXTREME",
    recommendedWorkerRatio: "18% of electrical crew",
    bundleWeight: "3.9 kg total kit",
    sansCertifications: ["IEC 61482-2", "NFPA 70E", "SANS 1372 Class E", "EN 50365"],
    unitCost: 3450,
    items: [
      { category: "Head", product: "K30 ArcShield 40-Cal Helmet & Shroud", spec: "40 cal/cm² transparent nanofiber chin shield", compliance: "NFPA 70E / ASTM F2178" },
      { category: "Body", product: "Nomex III-A 40 cal/cm² Switch Coat & Bib", spec: "Inherently flame-resistant multi-layer knit", compliance: "IEC 61482-2 APC 2" },
      { category: "Hands", product: "Dielectric Class 4 Rubber + Leather Protector", spec: "Tested to 36,000V AC working voltage", compliance: "SANS 60903 / IEC 60903" },
      { category: "Feet", product: "VoltStop 20kV Dielectric Composite Boot", spec: "Zero metal parts, ASTM F2413 EH rated outsole", compliance: "ASTM F2413 EH / SANS 2237" },
      { category: "Eye", product: "Optix TrueColor Arc-Deflect Goggle", spec: "Distortion-free true color recognition", compliance: "EN 166 2C-1.2 1B 8" },
    ],
    primaryHazards: ["Arc-flash blast (up to 40 cal)", "Direct 33kV contact", "Molten metal spatter", "Concussive acoustic pulse"],
  },
  {
    id: "petrochem",
    role: "Petrochemical HAZMAT & Tank Entry Specialist",
    industry: "Refineries, Chemical Processing & Gas Handling",
    riskProfile: "HAZARDOUS",
    recommendedWorkerRatio: "25% of refinery staff",
    bundleWeight: "3.4 kg total kit",
    sansCertifications: ["SANS 10382", "EN 14605 Type 3/4", "EN 1149-5 Anti-static", "EN 374-1"],
    unitCost: 2980,
    items: [
      { category: "Respiratory", product: "AeroGuard Full-Face Multi-Gas APR", spec: "Organic vapour, acidic gas, ammonia filter", compliance: "SANS 10382 / EN 136 Class 3" },
      { category: "Body", product: "ChemGuard Barrier Coverall Type 3-B", spec: "Liquid-tight heat-sealed seams, dissipative", compliance: "EN 14605 / SANS 1511" },
      { category: "Hands", product: "SolventShield Extended Gauntlet", spec: "Butyl-nitrile laminate 0.7mm, textured palm", compliance: "EN ISO 374-1:2016 Type A" },
      { category: "Feet", product: "AcidProof S5 Chemical Safety Wellingtons", spec: "Hydrocarbon & nitric acid resistant polyurethane", compliance: "EN ISO 20345 S5 SRC" },
      { category: "Eye", product: "VapourSeal Pressure Equalized Goggle", spec: "Gas-tight closed foam perimeter, anti-scratch", compliance: "EN 166 3 4 5 BT" },
    ],
    primaryHazards: ["Benzene & hydrocarbon vapours", "Corrosive chemical splashes", "Static discharge in explosive zones", "Asphyxiation in confined spaces"],
  },
  {
    id: "structural-civil",
    role: "Structural Steel & High-Altitude Rigging Crew",
    industry: "Mega Infrastructure & Civil Construction",
    riskProfile: "HIGH",
    recommendedWorkerRatio: "55% of construction workforce",
    bundleWeight: "4.1 kg total kit",
    sansCertifications: ["SANS 50361", "SANS 12702", "SANS 1372", "EN 388"],
    unitCost: 2420,
    items: [
      { category: "Fall Arrest", product: "AeroHarness 5-Point Structural Fall Kit", spec: "Twin elasticated shock-absorbing lanyards, scaffold hooks", compliance: "SANS 50361 / EN 361" },
      { category: "Head", product: "K30 Vertex Climber with 4-Point Y-Strap", spec: "Chin-strap retention >50daN for fall arrest", compliance: "EN 12492 / EN 397" },
      { category: "Body", product: "Hi-Vis Heavy Ripstop 320gsm Boilersuit", spec: "Reinforced knee-pad inserts, tool holster loops", compliance: "SANS 12702 Class 2" },
      { category: "Hands", product: "RiggerGrip Heavy Cable Handling Glove", spec: "Double cow-split leather with Kevlar thread", compliance: "EN 388:2016 3243X" },
      { category: "Feet", product: "SteelClimb S3 High-Ankle Support Boot", spec: "Puncture plate, torsion control shank", compliance: "SANS 2237 / EN ISO 20345" },
    ],
    primaryHazards: ["High-altitude drops", "Swinging structural steel loads", "Rebar puncture injuries", "Blunt crane rigging impact"],
  },
  {
    id: "fleet-logistics",
    role: "Automated Logistics & Heavy Freight Operator",
    industry: "Ports, Intermodal Rail & Distribution Centers",
    riskProfile: "HEAVY INDUSTRIAL",
    recommendedWorkerRatio: "70% of logistics hubs",
    bundleWeight: "2.3 kg total kit",
    sansCertifications: ["SANS 12702", "EN ISO 20345", "EN 388"],
    unitCost: 1680,
    items: [
      { category: "Body", product: "Reflex-Max Breathable Hi-Vis Softshell", spec: "Day/night high-contrast chevrons, radio clip", compliance: "SANS 12702 Class 2" },
      { category: "Feet", product: "AirStep Composite S1P Speed Lacer", spec: "Ultra-lightweight 420g, anti-fatigue PU insole", compliance: "EN ISO 20345 S1P SRC" },
      { category: "Hands", product: "TouchFlex Nitrile Micro-Foam Touchscreen", spec: "Precision barcode scanner dexterity, 18-gauge", compliance: "EN 388:2016 4131A" },
      { category: "Head", product: "BumpCap ErgoVent Polycarbonate Insert", spec: "Washable outer cap, 25mm EVA shock crown", compliance: "EN 812:2012" },
      { category: "Eye", product: "Optix UltraClear Anti-Scratch Spectacle", spec: "Frameless aerodynamic temple grip, 22g", compliance: "SANS 1386 / EN 166" },
    ],
    primaryHazards: ["Heavy forklift collision", "Pallet crush hazards", "Driver repetitive fatigue", "Container terminal weather exposure"],
  },
];

// Product Catalogue for Interactive Showcase
export type CatalogItem = {
  id: string;
  name: string;
  code: string;
  category: "HEAD" | "EYE" | "BODY" | "HANDS" | "FEET" | "RESPIRATORY";
  hazardFocus: string;
  sansStandard: string;
  unitPrice: number;
  bulkDiscountPrice: number;
  image: string;
  specs: string[];
  keyHighlight: string;
};

export const catalogItems: CatalogItem[] = [
  {
    id: "k30-apex-helmet",
    name: "K30 Apex-400 Industrial Shell",
    code: "SKU-H400-AMB",
    category: "HEAD",
    hazardFocus: "Blunt Impact & 20kV Dielectric",
    sansStandard: "SANS 1372:2018",
    unitPrice: 285,
    bulkDiscountPrice: 228,
    image: "/images/prod-head.jpg",
    specs: ["14.8 kN impact tolerance", "4-point ratchet wheel harness", "Quick-mount earmuff slots", "Zero conductive rivets"],
    keyHighlight: "Over 400,000 units deployed in South African platinum & diamond operations with 0 mechanical structural failures.",
  },
  {
    id: "k30-hivis-armour",
    name: "Halo-470 Hi-Vis Modular Jacket",
    code: "SKU-J470-VIS",
    category: "BODY",
    hazardFocus: "Low Visibility & Thermal Abrasion",
    sansStandard: "SANS 12702:2018",
    unitPrice: 420,
    bulkDiscountPrice: 336,
    image: "/images/prod-hivis.jpg",
    specs: ["Class 3 360° silver reflective tape", "Waterproof 10,000mm hydrostatic head", "Reinforced Cordura elbows", "Dual gas-monitor shoulder tabs"],
    keyHighlight: "Compliant with Department of Mineral Resources and Energy mandatory high-visibility underground visibility mandate.",
  },
  {
    id: "k30-optix-shield",
    name: "Optix-VRX Ballistic Visor Goggle",
    code: "SKU-G100-OPT",
    category: "EYE",
    hazardFocus: "High-Velocity Spatter & Dust",
    sansStandard: "SANS 1386:2019",
    unitPrice: 145,
    bulkDiscountPrice: 116,
    image: "/images/prod-eye.jpg",
    specs: ["EN 166 Grade B (120 m/s impact)", "Hydrophobic molecular anti-fog", "UV400 spectral blocking", "OTG (over prescription glasses) fit"],
    keyHighlight: "Permanent anti-fog molecular coating won't wash off under extreme humidity or pressure washing.",
  },
  {
    id: "k30-aeroguard-p3",
    name: "AeroGuard Twin-Cartridge Half-Mask",
    code: "SKU-R300-RES",
    category: "RESPIRATORY",
    hazardFocus: "Silica, Asbestos & Toxic Vapour",
    sansStandard: "SANS 10382:2012",
    unitPrice: 235,
    bulkDiscountPrice: 188,
    image: "/images/prod-respiratory.jpg",
    specs: ["Medical-grade hypoallergenic silicone", "Low breathing resistance exhalation valve", "Sweat-drainage chin channel", "99.95% particulate capture"],
    keyHighlight: "Conforms to National Institute for Occupational Health silica dust exposure guidelines for quartz drilling.",
  },
  {
    id: "k30-forgecut-glove",
    name: "ForgeCut Level-F Graphene Glove",
    code: "SKU-GL90-CUT",
    category: "HANDS",
    hazardFocus: "Razor Sheet Metal & Crushing",
    sansStandard: "EN 388:2016 4X44FP",
    unitPrice: 165,
    bulkDiscountPrice: 132,
    image: "/images/prod-hands.jpg",
    specs: ["Graphene-engineered knit core", "Thermo-plastic rubber (TPR) back metacarpal shield", "Micro-cup sandy nitrile oil grip", "Touchscreen enabled fingertips"],
    keyHighlight: "Stops 30 Newtons of blade shear pressure — 300% above conventional leather welding gloves.",
  },
  {
    id: "k30-ironstep-boot",
    name: "Ironstep S3 Composite Combat Boot",
    code: "SKU-B800-MET",
    category: "FEET",
    hazardFocus: "Heavy Falling Objects & Sole Puncture",
    sansStandard: "SANS 2237 / EN ISO 20345",
    unitPrice: 1380,
    bulkDiscountPrice: 1104,
    image: "/images/prod-feet.jpg",
    specs: ["200J non-magnetic composite toe", "Kevlar anti-perforation midsole (1100N)", "300°C HRO heat-resistant rubber sole", "Poron XRD flexible metatarsal guard"],
    keyHighlight: "Airport & security scanner safe with composite architecture — saves 18 minutes per shift at security gates.",
  },
];

// Cryptographic SANS Certificate Verification Data
export type SansRecord = {
  code: string;
  standard: string;
  accreditedLab: string;
  issueDate: string;
  renewalDate: string;
  status: "VALID & VERIFIED" | "ACTIVE AUDIT";
  hash: string;
  scope: string;
};

export const sansRecords: Record<string, SansRecord> = {
  "SANS-1372": {
    code: "SANS-1372:2018",
    standard: "Industrial Safety Helmets for Mining & Construction",
    accreditedLab: "SABS Testing Laboratories (Pretoria)",
    issueDate: "2024-01-14",
    renewalDate: "2027-01-14",
    status: "VALID & VERIFIED",
    hash: "0x8F3A29B1E408573D8C2B7E1A6F0945D2",
    scope: "Impact absorption, penetration resistance, 20kV electrical insulation, flame resistance",
  },
  "SANS-12702": {
    code: "SANS-12702:2018",
    standard: "High-Visibility Warning Clothing for Industrial & Highway",
    accreditedLab: "National Metrology Institute of South Africa (NMISA)",
    issueDate: "2023-11-02",
    renewalDate: "2026-11-02",
    status: "VALID & VERIFIED",
    hash: "0x3D72B9A10F4C8E5192847B0E6A21359C",
    scope: "Photometric retroreflective coefficient, chromaticity coordinates after 50 wash cycles",
  },
  "SANS-2237": {
    code: "SANS 20345 / SANS 2237",
    standard: "Personal Protective Equipment — Safety Footwear S3",
    accreditedLab: "Footwear Testing Institute South Africa (Durban)",
    issueDate: "2024-03-19",
    renewalDate: "2027-03-19",
    status: "VALID & VERIFIED",
    hash: "0x5E1C82D7F49A03B56182903C4B8271AF",
    scope: "Toe cap 200J energy impact, 15kN compression, nail puncture resistance, SRC slip test",
  },
  "SANS-10382": {
    code: "SANS 10382:2012",
    standard: "Respiratory Protective Devices — Half Masks & Particle Filters",
    accreditedLab: "CSIR Materials Characterization Facility",
    issueDate: "2023-08-11",
    renewalDate: "2026-08-11",
    status: "VALID & VERIFIED",
    hash: "0x9182AB34CD56EF78091234567890ABCD",
    scope: "Paraffin oil particulate penetration (<0.05%), inward leakage, CO2 build-up resistance",
  },
  "ISO-9001": {
    code: "ISO 9001:2015",
    standard: "Quality Management Systems for PPE Manufacturing & Dispatch",
    accreditedLab: "TÜV Rheinland South Africa",
    issueDate: "2024-06-01",
    renewalDate: "2027-06-01",
    status: "VALID & VERIFIED",
    hash: "0xABCD1234EF567890A1B2C3D4E5F60718",
    scope: "Batch traceability, automated warehouse dispatch SLA compliance, returns processing",
  },
};

// Regional Dispatch Hub Telemetry
export const dispatchHubs = [
  {
    hub: "Hub 01 // Gauteng Central",
    location: "Johannesburg (Elandsfontein Logistic Corridor)",
    coords: "26°12'S 28°02'E",
    coverage: "Gauteng, Mpumalanga Coalfields, Limpopo Bushveld Complex",
    inventoryUnits: "420,000 SKUs",
    sla: "24h Metro / 48h Mines",
    status: "NOMINAL // 100% DISPATCH RUNNING",
    statusColor: "text-cyber-emerald",
  },
  {
    hub: "Hub 02 // Port & Heavy Freight",
    location: "Durban (Bayhead Logistics Port Zone)",
    coords: "29°52'S 31°01'E",
    coverage: "KwaZulu-Natal, Richards Bay Port, Free State Mining Basin",
    inventoryUnits: "280,000 SKUs",
    sla: "24h Port / 48h Provincial",
    status: "NOMINAL // ZERO BOTTLENECK",
    statusColor: "text-cyber-emerald",
  },
  {
    hub: "Hub 03 // Maritime & Renewable Basin",
    location: "Cape Town (Montague Gardens Tech Hub)",
    coords: "33°51'S 18°30'E",
    coverage: "Western Cape, Saldanha Deepwater, Northern Cape Solar/Wind",
    inventoryUnits: "240,000 SKUs",
    sla: "24h Metro / 48h Remote",
    status: "NOMINAL // SOLAR DISPATCH ACTIVE",
    statusColor: "text-cyber-emerald",
  },
];

// Pricing tiers
export const enterpriseTiers = [
  {
    id: "tier-essentials",
    name: "FLEET TACTICAL",
    subtitle: "For operations with 50 – 250 active workers",
    ratePerWorker: 185,
    billedCycle: "per worker / month",
    badge: "RAPID DEPLOY",
    highlight: false,
    sla: "48-Hour Hub Dispatch",
    features: [
      "Core 4-piece certified kit (Head, Hi-Vis, Gloves, Boots)",
      "Automated digital sizing portal via worker mobile",
      "Cryptographic batch certificates inside every carton",
      "Instant damage replacement within 48 hours",
      "Consolidated single monthly tax invoice",
    ],
    ctaText: "Configure Tactical Fleet",
  },
  {
    id: "tier-continuous",
    name: "CONTINUOUS COMPLIANCE // PRO",
    subtitle: "Our flagship program for 250 – 1,500 active workforce",
    ratePerWorker: 320,
    billedCycle: "per worker / month",
    badge: "MOST DEPLOYED BY HSE DIRECTORS",
    highlight: true,
    sla: "24-Hour Metro / 48-Hour Remote Guaranteed",
    features: [
      "Full 5-layer customized role-based PPE matrices",
      "Quarterly auto-refills aligned with wear-out telemetry",
      "Dedicated On-Site Safety Engineer for risk mapping",
      "100% Department of Labour Inspection-Ready digital pack",
      "Co-branded heat-press and embroidery with enterprise logo",
      "Direct API sync into SAP, Oracle & NetSuite ERP",
      "Zero dead stock: we take back unused sizes at zero penalty",
    ],
    ctaText: "Deploy Continuous Compliance",
  },
  {
    id: "tier-defense",
    name: "ENTERPRISE CONSIGNMENT // COMMAND",
    subtitle: "For enterprise mining groups with 1,500+ workers across multiple sites",
    ratePerWorker: null,
    billedCycle: "Custom SLA & Consignment Credit",
    badge: "ZERO STOCKOUT GUARANTEE",
    highlight: false,
    sla: "Same-Shift Instant Smart Lockers On Site",
    features: [
      "On-site intelligent automated PPE vending & consignment cage",
      "Workers badge in with RFID to draw replacement gear instantly",
      "Billed purely on consumption — zero capital tied up in inventory",
      "Custom ballistic and chemical fabric development",
      "60-day enterprise commercial credit terms",
      "Executive quarterly risk & cost variance presentations to Board",
      "24/7 dedicated critical incident emergency logistics line",
    ],
    ctaText: "Initiate Executive Briefing",
  },
];

export const faqItems = [
  {
    q: "How does the K30 continuous subscription model prevent mine shutdowns under the Mine Health and Safety Act?",
    a: "Under the MHSA and OHS Act 85 of 1993, any worker found on an active face without certified, intact PPE leads to an immediate Section 54 work-stoppage order, costing up to R2.5 million per shift. K30 guarantees 100% compliance through automated wear-out reorders, on-site contingency buffer stock, and digital inspection packs loaded with SANS test hashes before the inspector steps on site.",
  },
  {
    q: "Can K30 co-brand high-visibility gear with our corporate colors and logos without voiding SANS 12702 certification?",
    a: "Yes. SANS 12702 strictly dictates the minimum surface area of fluorescent background fabric and retroreflective tape. Applying badges in non-compliant zones invalidates certification. Our engineering team calculates exact photometric tolerances for embroidery and FR heat-seal logos so that every piece remains 100% certified under South African law.",
  },
  {
    q: "How does the digital sizing scanner work across remote sites with limited connectivity?",
    a: "Workers or shift supervisors scan an offline-capable QR code on their smartphone. A 60-second guided sizing survey captures footwear dimensions, chest, inseam, and head size. The telemetry syncs as soon as connection is detected, eliminating returns and ensuring every worker's personalized kit arrives pre-labeled with their name and clock number.",
  },
  {
    q: "How do you integrate with our existing ERP (SAP, Sage, Oracle, NetSuite)?",
    a: "We provide an enterprise REST API and EDI (Electronic Data Interchange) gateway. Your procurement team generates a single Blanket PO; our system transmits electronic delivery notes, batch certificate links, and itemized invoice line items directly into your accounts payable workflow without manual data capture.",
  },
  {
    q: "What is your emergency dispatch protocol for sudden expansion or unplanned shut-downs?",
    a: "With over 940,000 certified units held across our Johannesburg, Durban, and Cape Town regional hubs, we maintain dedicated disaster-reserve stock. In shutdown situations, our emergency freight partners deliver up to 500 complete kits anywhere in South Africa within 18 to 36 hours.",
  },
];

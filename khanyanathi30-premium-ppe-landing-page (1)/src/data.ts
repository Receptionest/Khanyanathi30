export type CategoryId = "footwear" | "hearing" | "eyewear" | "headface" | "workwear" | "respiratory";

export type Category = { id: CategoryId; label: string; blurb: string };

export const categories: Category[] = [
  { id: "footwear", label: "Safety Footwear", blurb: "Profit range · ISO 20345:2011 · Sizes 2–15" },
  { id: "hearing", label: "Hearing", blurb: "Honeywell Howard Leight · SNR 30–35" },
  { id: "eyewear", label: "Eyewear", blurb: "Anti-scratch polycarbonate · Goggles & specs" },
  { id: "headface", label: "Head & Face", blurb: "Hard hats, shields & welding helmets" },
  { id: "workwear", label: "Protective Wear", blurb: "Hi-vis, overalls, aprons & welding leather" },
  { id: "respiratory", label: "Respiratory", blurb: "Dust masks & half-mask respirators · on request" },
];

export const categoryImage: Record<CategoryId, string> = {
  footwear: "/images/prod-feet.jpg",
  hearing: "/images/prod-hands.jpg",
  eyewear: "/images/prod-eye.jpg",
  headface: "/images/prod-head.jpg",
  workwear: "/images/prod-hivis.jpg",
  respiratory: "/images/prod-respiratory.jpg",
};

export type Product = {
  code: string;
  name: string;
  category: CategoryId;
  desc: string;
  specs: string[];
  sizes: string;
  standard: string;
  tag?: string;
};

export const products: Product[] = [
  { code: "JS03-B · HOBO-B", name: "Hobo-B Econo Safety Boot — Black", category: "footwear", desc: "Entry-level unisex black safety boot. Tough daily driver for crews.", specs: ["200J steel toe cap", "Wide fit", "Dual-density PU sole (black/grey)"], sizes: "3 – 15 (Unisex)", standard: "ISO 20345:2011", tag: "Best value" },
  { code: "JS04 · GOLIATH", name: "Goliath Safety Boot — Stone", category: "footwear", desc: "Stone boot with sports mesh lining and ankle support.", specs: ["200J steel toe", "Ext. PU toe bump cap", "Heel + ankle support + insole"], sizes: "2 – 15 (Unisex)", standard: "ISO 20345:2011" },
  { code: "JS06 / JS07", name: "Assassin (Brown) / Bagheera (Black) Chelsea", category: "footwear", desc: "Slip-on Chelsea with pull tabs. On and off in seconds.", specs: ["200J steel toe", "Slip + abrasion resistant", "Dual-density PU + toe bump"], sizes: "2 – 15 (Unisex)", standard: "ISO 20345:2011", tag: "Slip-on" },
  { code: "JS05 · TARANTULA", name: "Tarantula Ankle Weatherboot — Tan / Black", category: "footwear", desc: "Ankle weatherboot for heat and harsh ground.", specs: ["200J steel toe", "Kevlar penetration midsole", "300°C heat resistant"], sizes: "3 – 13", standard: "ISO 20345:2011" },
  { code: "NJS01 · PARSON", name: "Parson Black Safety Boot", category: "footwear", desc: "Classic black lace-up with D-ring lacing and antistatic.", specs: ["Steel toe + steel midsole", "Antistatic", "Dual-density sole"], sizes: "3 – 15 (Unisex)", standard: "ISO 20345:2011" },
  { code: "MR01 · SHAMROCK", name: "Shamrock Metatarsal Boot — Male", category: "footwear", desc: "Metatarsal protection plus penetration resistance.", specs: ["Plastic metatarsal guard", "Steel midsole", "Dual-density PU / rubber"], sizes: "3 – 15 (Male)", standard: "ISO 20345:2011" },
  { code: "JS02 · LYNX", name: "Lynx Black Safety Shoe", category: "footwear", desc: "Low-cut unisex shoe for warehouse crews.", specs: ["Wide comfort fit", "Antistatic", "Slip + abrasion resistant"], sizes: "2 – 15 (Unisex)", standard: "ISO 20345:2011" },
  { code: "LS01 / LS02", name: "Scarlet Boot / Charlotte Shoe — Ladies", category: "footwear", desc: "Women's fit black boot and shoe.", specs: ["Kevlar midsole", "300°C heat resistant", "Dual-density PU sole"], sizes: "3 – 9 (Ladies)", standard: "ISO 20345:2011", tag: "Ladies fit" },

  { code: "EP-DR090C", name: "Reusable Tri-Flange Earplug — Lime, Corded", category: "hearing", desc: "Dromex fluorescent green mushroom plug. Washable.", specs: ["Tri-flange corded", "High-visibility green", "Reusable"], sizes: "One size", standard: "SNR 30" },
  { code: "303L · BILSOM", name: "Bilsom 303L Disposable Earplug", category: "hearing", desc: "Howard Leight by Honeywell single-use foam.", specs: ["Soft foam", "Single-use", "Uncorded"], sizes: "One size", standard: "SNR 33" },
  { code: "304L · BILSOM", name: "Bilsom 304L Corded Earplug", category: "hearing", desc: "Corded disposable foam for high-movement work.", specs: ["Blue cord", "Disposable foam", "Easy checks"], sizes: "One size", standard: "SNR 33" },
  { code: "LL-1 · LASER-LITE", name: "Laser-Lite LL-1 Uncorded", category: "hearing", desc: "High-visibility pink/yellow. Highest attenuation.", specs: ["Highly visible", "Self-adjusting foam", "Disposable"], sizes: "One size", standard: "SNR 35", tag: "Max SNR" },
  { code: "LL-30 · LASER-LITE", name: "Laser-Lite LL-30 Corded", category: "hearing", desc: "Corded LL-1 for dusty work.", specs: ["Yellow cord", "Disposable foam", "High visibility"], sizes: "One size", standard: "SNR 35" },
  { code: "SMARTFIT", name: "SmartFit Corded — Reusable", category: "hearing", desc: "Howard Leight reusable conforming fit.", specs: ["Reusable", "Washable", "Corded"], sizes: "One size", standard: "SNR 30" },

  { code: "026 · EUROSPEC", name: "Eurospec Spectacle — Anti-Scratch + Anti-Fog", category: "eyewear", desc: "Vinyl-frame spectacle, Clear Anti-Fog available.", specs: ["Anti-scratch polycarbonate", "Clear / Grey / Green / Amber", "Vinyl frame"], sizes: "One size", standard: "Polycarbonate" },
  { code: "DV-12 · SPORT", name: "Sport Spectacle — Hardcoated Mirror", category: "eyewear", desc: "Sport frame, mirror suits indoor / outdoor.", specs: ["Anti-Fog", "Clear / Grey / Green / Amber", "Mirror option"], sizes: "One size", standard: "Polycarbonate" },
  { code: "WRAPAROUND", name: "Wraparound Spectacle", category: "eyewear", desc: "Wrap frame for side coverage.", specs: ["Clear / Amber / Green", "Side coverage", "Anti-scratch"], sizes: "One size", standard: "Polycarbonate" },
  { code: "DV-11", name: "Direct Vent Goggle — Clear", category: "eyewear", desc: "Wide-vision with direct mesh vent.", specs: ["Wide vision", "Direct mesh vent", "Clear lens"], sizes: "One size", standard: "Direct vent" },
  { code: "DV-21", name: "Indirect Vent Goggle — Clear", category: "eyewear", desc: "Sealed indirect vents for dust and splash.", specs: ["Indirect dual vents", "Wide vision", "Vinyl frame"], sizes: "One size", standard: "Indirect vent", tag: "Dust + splash" },

  { code: "HARD HAT", name: "Hard Hat", category: "headface", desc: "Site-standard shell. Pairs with all shields and straps.", specs: ["Pairs with face shield", "2 or 4-point strap ready", "Colours on request"], sizes: "Adjustable", standard: "Head protection", tag: "Core" },
  { code: "BROW GUARD", name: "Brow Guard", category: "headface", desc: "Blue carrier for faceshield lenses.", specs: ["Lightweight", "Faceshield carrier", "Hard-hat compatible"], sizes: "One size", standard: "Face carrier" },
  { code: "1MM LENS", name: "Replacement Lens 1mm — Clear / Green", category: "headface", desc: "Spare 1mm lens. Keep crews going.", specs: ["Clear / Green", "1mm", "Quick swap"], sizes: "One size", standard: "Faceshield lens" },
  { code: "CHIN STRAP", name: "Chin Strap — 2 or 4 Point", category: "headface", desc: "Keeps hats on in wind and at height.", specs: ["2 or 4 point", "Adjustable", "Chin cup"], sizes: "One size", standard: "Retention" },
  { code: "FACE SHIELD", name: "Face Shield for Hard Hat", category: "headface", desc: "Clear shield for grinding and cutting.", specs: ["Clear visor", "Hard-hat mount", "Full coverage"], sizes: "One size", standard: "Face protection" },
  { code: "FLIP-FRONT", name: "Flip-Front Welding Helmet", category: "headface", desc: "Flip-front with adjustable headgear.", specs: ["Adjustable headgear", "Flip front", "Spares available"], sizes: "Adjustable", standard: "Welding" },
  { code: "WELD LENS", name: "Replacement Lens — Flip-Front, Clear", category: "headface", desc: "Clear spares for flip-front helmets.", specs: ["Clear", "Pack spares", "Quick fit"], sizes: "One size", standard: "Welding lens" },

  { code: "SA16 · EN4", name: "Reflective Jacket with ID — Lime", category: "workwear", desc: "125gsm vest with ID pouch, 5cm tape, zip.", specs: ["ID pouch", "5cm tape", "Zip + piping"], sizes: "S – 3XL", standard: "EN4", tag: "Hi-vis" },
  { code: "SA10 · EN4", name: "Reflective Jacket with ID — Mesh", category: "workwear", desc: "Solid mesh zip vest. Cooler for summer.", specs: ["Solid mesh", "ID pouch", "Lime / Orange"], sizes: "S – 3XL", standard: "EN4" },
  { code: "BIB STD", name: "Reflective Bib — 32×56cm", category: "workwear", desc: "Maxi bib for visitors.", specs: ["Solid mesh", "Lime / Orange", "Pull-on"], sizes: "S – 3XL", standard: "Hi-vis bib" },
  { code: "PW-DISPOA-M", name: "Disposable Overall — 50gsm", category: "workwear", desc: "Non-woven for shutdowns and visitors.", specs: ["50gsm polypropylene", "Elasticised", "Hooded option"], sizes: "M – 3XL", standard: "Disposable" },
  { code: "WELDERS HOOD", name: "Welders Hood + Skull Caps", category: "workwear", desc: "Flame-site hoods in blue / orange.", specs: ["Welders hood", "Skull caps", "Blue / Orange"], sizes: "One size", standard: "Welding accessory" },
  { code: "PW-APVCW450", name: "White PVC Apron — 110×70cm", category: "workwear", desc: "450gsm coated PVC for washdown.", specs: ["450gsm coated", "Eyelets + laces", "110×70cm"], sizes: "One size", standard: "Washdown" },
  { code: "BLOOD+FAT", name: "Blood & Fat Resistant Apron", category: "workwear", desc: "Food-safe for abattoirs.", specs: ["Blood + fat resistant", "70×110", "Wipe-clean"], sizes: "One size", standard: "Food industry" },
  { code: "JADA LEATHER", name: "Jada Welding — Spats / Jackets / Apron", category: "workwear", desc: "Leather welding protection. Custom sizes.", specs: ["Spats + jackets + aprons", "Custom sizes", "Buckles / straps"], sizes: "Various + custom", standard: "Welding leather" },
  { code: "MORELLI 28–62", name: "Morelli Overalls — Jacket & Pants", category: "workwear", desc: "Triple-stitched conti set.", specs: ["Tripler stitch", "Jacket + pants", "Blue gear"], sizes: "28 – 62", standard: "Workwear", tag: "Heavy duty" },
  { code: "PW-EKB,S / CLB", name: "Kidney + Lamp Belt + Consumables", category: "workwear", desc: "Support, lamp belts, mopcaps and covers.", specs: ["Kidney belt S–2XL", "Cap lamp belt", "Mopcaps + shoe covers"], sizes: "S – 2XL", standard: "Consumables" },

  { code: "RESP-FFP2", name: "FFP2 Dust Mask — Disposable", category: "respiratory", desc: "Disposable particulate mask for dust and grinding. Confirm stock on quote.", specs: ["Disposable", "Nose clip + head straps", "Dust / particulate"], sizes: "One size", standard: "On request", tag: "On request" },
  { code: "RESP-HALF", name: "Half-Mask Respirator — Twin Cartridge", category: "respiratory", desc: "Reusable half-mask with replaceable cartridges. Confirm stock on quote.", specs: ["Reusable body", "Twin cartridges", "Adjustable harness"], sizes: "One size", standard: "On request", tag: "On request" },
];

/* ---------------- PER-PRODUCT 3-LAYER INSPECTOR ---------------- */
export type InspectHotspot = { x: number; y: number; title: string; detail: string };
export type InspectLayer = {
  id: string;
  name: string;
  tag: string;
  blurb: string;
  specs: { label: string; value: string }[];
  hotspots: InspectHotspot[];
};
export type Inspectable = {
  code: string;
  name: string;
  category: CategoryId;
  image: string;
  layers: InspectLayer[];
};

export const inspectables: Inspectable[] = [
  {
    code: "JS04 · GOLIATH",
    name: "Goliath Safety Boot — Stone",
    category: "footwear",
    image: "/images/prod-feet.jpg",
    layers: [
      {
        id: "outer", name: "01 // Outer", tag: "IMPACT ZONE",
        blurb: "Stone leather upper with extended PU toe bump cap taking the first hit.",
        specs: [{ label: "Toe Cap", value: "200J steel" }, { label: "Upper", value: "Stone leather" }, { label: "Bump Cap", value: "Extended PU" }, { label: "Fit", value: "Wide" }],
        hotspots: [
          { x: 24, y: 58, title: "200J Steel Toe Cap", detail: "Rated to 200 joules — the SA site standard for falling objects." },
          { x: 46, y: 42, title: "Extended PU Bump Cap", detail: "Wraps over the toe to stop scuffing wearing through the leather." },
          { x: 72, y: 34, title: "Ankle Support Collar", detail: "Padded collar with integrated heel + ankle support system." },
        ],
      },
      {
        id: "core", name: "02 // Core", tag: "COMFORT + SHIFT",
        blurb: "Sports mesh lining and comfort insole — the reason crews actually keep them on.",
        specs: [{ label: "Lining", value: "Sports mesh" }, { label: "Insole", value: "Comfort" }, { label: "Support", value: "Heel + ankle" }, { label: "Sizes", value: "2 – 15" }],
        hotspots: [
          { x: 55, y: 52, title: "Sports Mesh Lining", detail: "Breathes through a full shift — cuts heat build-up and sweat." },
          { x: 40, y: 66, title: "Comfort Insole", detail: "Cushioned footbed for crews standing on concrete all day." },
        ],
      },
      {
        id: "ground", name: "03 // Ground", tag: "GRIP",
        blurb: "Dual-density PU outsole — slip and abrasion resistant.",
        specs: [{ label: "Sole", value: "Dual-density PU" }, { label: "Grip", value: "Slip resistant" }, { label: "Wear", value: "Abrasion resistant" }, { label: "Standard", value: "ISO 20345" }],
        hotspots: [
          { x: 50, y: 84, title: "Dual-Density PU Outsole", detail: "Soft comfort layer bonded to a hard-wearing tread layer." },
          { x: 76, y: 78, title: "Heel Strike Zone", detail: "Reinforced heel for ladder rungs and uneven ground." },
        ],
      },
    ],
  },
  {
    code: "JS05 · TARANTULA",
    name: "Tarantula Ankle Weatherboot",
    category: "footwear",
    image: "/images/prod-feet.jpg",
    layers: [
      {
        id: "outer", name: "01 // Outer", tag: "WEATHER + HEAT",
        blurb: "Tan or black weatherboot built for hot surfaces and rough ground.",
        specs: [{ label: "Toe Cap", value: "200J steel" }, { label: "Heat", value: "300°C rated" }, { label: "Build", value: "Ankle boot" }, { label: "Sizes", value: "3 – 13" }],
        hotspots: [
          { x: 24, y: 58, title: "200J Steel Toe", detail: "Full impact rating in a lighter ankle-height profile." },
          { x: 70, y: 32, title: "Weatherproof Ankle", detail: "Higher cut keeps debris and water out on open ground." },
        ],
      },
      {
        id: "core", name: "02 // Core", tag: "PENETRATION",
        blurb: "Kevlar midsole — the layer that stops nails and rebar.",
        specs: [{ label: "Midsole", value: "Kevlar" }, { label: "Conductivity", value: "Non-conductive" }, { label: "Weight", value: "Lightweight" }, { label: "Sole", value: "Rubber / PU" }],
        hotspots: [
          { x: 48, y: 70, title: "Kevlar Penetration Midsole", detail: "Flexible anti-puncture layer — no steel plate stiffness." },
          { x: 62, y: 62, title: "Non-Conductive Build", detail: "Safe around live electrical work where steel plates aren't." },
        ],
      },
      {
        id: "ground", name: "03 // Ground", tag: "300°C",
        blurb: "Dual-density rubber/polyurethane sole rated to 300°C.",
        specs: [{ label: "Sole", value: "Rubber / PU" }, { label: "Heat", value: "300°C contact" }, { label: "Grip", value: "Slip resistant" }, { label: "Wear", value: "Abrasion resistant" }],
        hotspots: [
          { x: 50, y: 85, title: "300°C Heat Resistant Sole", detail: "Walk hot surfaces, slag and fresh welds without sole melt." },
        ],
      },
    ],
  },
  {
    code: "MR01 · SHAMROCK",
    name: "Shamrock Metatarsal Boot",
    category: "footwear",
    image: "/images/prod-feet.jpg",
    layers: [
      {
        id: "outer", name: "01 // Outer", tag: "METATARSAL",
        blurb: "External metatarsal guard covering the bones a toe cap can't.",
        specs: [{ label: "Guard", value: "Plastic metatarsal" }, { label: "Toe", value: "Steel cap" }, { label: "Fit", value: "Wide" }, { label: "Sizes", value: "3 – 15 (Male)" }],
        hotspots: [
          { x: 42, y: 40, title: "Metatarsal Protector", detail: "Shields the upper foot — critical where heavy items get dropped." },
          { x: 24, y: 58, title: "Steel Toe Cap", detail: "Standard toe protection under the metatarsal shield." },
        ],
      },
      {
        id: "core", name: "02 // Core", tag: "MIDSOLE",
        blurb: "Steel midsole offering penetration resistance underfoot.",
        specs: [{ label: "Midsole", value: "Steel" }, { label: "Resistance", value: "Penetration" }, { label: "Lining", value: "Padded" }, { label: "Standard", value: "ISO 20345" }],
        hotspots: [
          { x: 48, y: 72, title: "Steel Penetration Midsole", detail: "Stops nails and sharp scrap on demolition and yard work." },
        ],
      },
      {
        id: "ground", name: "03 // Ground", tag: "DUAL DENSITY",
        blurb: "Dual-density PU / rubber sole for grip and durability.",
        specs: [{ label: "Sole", value: "PU / rubber" }, { label: "Grip", value: "Slip resistant" }, { label: "Wear", value: "Abrasion resistant" }, { label: "Build", value: "Dual density" }],
        hotspots: [
          { x: 50, y: 84, title: "PU / Rubber Outsole", detail: "Rubber contact layer for grip, PU midlayer for comfort." },
        ],
      },
    ],
  },
  {
    code: "LS01 / LS02",
    name: "Scarlet Boot / Charlotte Shoe — Ladies",
    category: "footwear",
    image: "/images/prod-feet.jpg",
    layers: [
      {
        id: "outer", name: "01 // Outer", tag: "LADIES FIT",
        blurb: "Proper women's last — not a shrunken men's boot.",
        specs: [{ label: "Fit", value: "Ladies last" }, { label: "Sizes", value: "3 – 9" }, { label: "Options", value: "Boot or shoe" }, { label: "Colour", value: "Black / pink trim" }],
        hotspots: [
          { x: 30, y: 50, title: "Women's Specific Last", detail: "Narrower heel and correct instep — stops rubbing and blisters." },
          { x: 68, y: 36, title: "Boot or Shoe Option", detail: "LS01 boot for site, LS02 shoe for plant and warehouse." },
        ],
      },
      {
        id: "core", name: "02 // Core", tag: "PENETRATION",
        blurb: "Kevlar midsole in a lighter women's build.",
        specs: [{ label: "Midsole", value: "Kevlar" }, { label: "Heat", value: "300°C" }, { label: "Conductivity", value: "Non-conductive" }, { label: "Weight", value: "Lightweight" }],
        hotspots: [
          { x: 48, y: 70, title: "Kevlar Midsole", detail: "Same penetration protection as the men's range." },
        ],
      },
      {
        id: "ground", name: "03 // Ground", tag: "GRIP",
        blurb: "Dual-density polyurethane sole, slip and abrasion resistant.",
        specs: [{ label: "Sole", value: "Dual-density PU" }, { label: "Grip", value: "Slip resistant" }, { label: "Heat", value: "300°C" }, { label: "Standard", value: "ISO 20345" }],
        hotspots: [
          { x: 50, y: 85, title: "Dual-Density PU Sole", detail: "Lightweight grip without adding fatigue over a shift." },
        ],
      },
    ],
  },
  {
    code: "DV-21",
    name: "Indirect Vent Goggle — Clear",
    category: "eyewear",
    image: "/images/prod-eye.jpg",
    layers: [
      {
        id: "lens", name: "01 // Lens", tag: "OPTICS",
        blurb: "Wide-vision clear polycarbonate for full peripheral sight.",
        specs: [{ label: "Lens", value: "Polycarbonate" }, { label: "Vision", value: "Wide panoramic" }, { label: "Finish", value: "Anti-scratch" }, { label: "Tint", value: "Clear" }],
        hotspots: [
          { x: 50, y: 44, title: "Wide Vision Lens", detail: "Panoramic field so crews don't lift goggles to see sideways." },
          { x: 30, y: 52, title: "Anti-Scratch Coating", detail: "Survives grinding sparks and pocket abuse far longer." },
        ],
      },
      {
        id: "frame", name: "02 // Frame", tag: "SEAL",
        blurb: "Vinyl frame that conforms to the face and fits over specs.",
        specs: [{ label: "Frame", value: "Soft vinyl" }, { label: "Fit", value: "Over-specs" }, { label: "Seal", value: "Full perimeter" }, { label: "Comfort", value: "Flexible" }],
        hotspots: [
          { x: 22, y: 62, title: "Conforming Vinyl Frame", detail: "Flexes to different face shapes for a genuine dust seal." },
          { x: 78, y: 40, title: "Adjustable Headband", detail: "Elastic band adjusts over hard hats and beanies." },
        ],
      },
      {
        id: "vent", name: "03 // Vent", tag: "INDIRECT",
        blurb: "Indirect dual vents — airflow in, splash and dust out.",
        specs: [{ label: "Vent", value: "Indirect dual" }, { label: "Blocks", value: "Dust + splash" }, { label: "Airflow", value: "Baffled" }, { label: "Use", value: "Grinding / chemical" }],
        hotspots: [
          { x: 66, y: 66, title: "Indirect Dual Vents", detail: "Baffled path lets air through but blocks liquid splash and fine dust." },
          { x: 36, y: 74, title: "Anti-Fog Airflow", detail: "Constant low airflow keeps the lens clear without direct exposure." },
        ],
      },
    ],
  },
  {
    code: "026 · EUROSPEC",
    name: "Eurospec Spectacle",
    category: "eyewear",
    image: "/images/prod-eye.jpg",
    layers: [
      {
        id: "lens", name: "01 // Lens", tag: "ANTI-FOG",
        blurb: "Anti-scratch polycarbonate in four tints including Clear Anti-Fog.",
        specs: [{ label: "Lens", value: "Polycarbonate" }, { label: "Tints", value: "Clear/Grey/Green/Amber" }, { label: "Coating", value: "Anti-scratch" }, { label: "Option", value: "Anti-Fog" }],
        hotspots: [
          { x: 50, y: 44, title: "Four Tint Options", detail: "Clear indoors, grey outdoors, amber for low light, green for heat." },
          { x: 28, y: 50, title: "Anti-Fog Version", detail: "Clear Anti-Fog spec for humid and cold-store environments." },
        ],
      },
      {
        id: "frame", name: "02 // Frame", tag: "VINYL",
        blurb: "Lightweight vinyl frame for all-day wear.",
        specs: [{ label: "Frame", value: "Vinyl" }, { label: "Weight", value: "Light" }, { label: "Fit", value: "Universal" }, { label: "Style", value: "Spectacle" }],
        hotspots: [
          { x: 74, y: 42, title: "Vinyl Temple Arms", detail: "Light enough that crews keep them on instead of pushing them up." },
        ],
      },
      {
        id: "use", name: "03 // Use", tag: "DAILY ISSUE",
        blurb: "The everyday-issue spec — cheapest way to keep eye compliance at 100%.",
        specs: [{ label: "Issue", value: "Daily / bulk" }, { label: "Sizes", value: "One size" }, { label: "Best for", value: "General site" }, { label: "Pairs with", value: "Hard hat" }],
        hotspots: [
          { x: 50, y: 70, title: "Bulk Issue Ready", detail: "Low enough cost to issue site-wide and to every visitor." },
        ],
      },
    ],
  },
  {
    code: "HARD HAT",
    name: "Hard Hat + Face Shield System",
    category: "headface",
    image: "/images/prod-head.jpg",
    layers: [
      {
        id: "shell", name: "01 // Shell", tag: "IMPACT",
        blurb: "Site-standard shell — the base of the whole head system.",
        specs: [{ label: "Type", value: "Safety helmet" }, { label: "Colours", value: "On request" }, { label: "Fit", value: "Adjustable" }, { label: "Mounts", value: "Shield + strap" }],
        hotspots: [
          { x: 50, y: 26, title: "Impact Shell Crown", detail: "Takes the falling-object hit and spreads it across the harness." },
          { x: 26, y: 46, title: "Accessory Brim", detail: "Mount point for the face shield carrier and brow guard." },
        ],
      },
      {
        id: "harness", name: "02 // Harness", tag: "RETENTION",
        blurb: "Chin strap options that keep the hat on at height and in wind.",
        specs: [{ label: "Strap", value: "2 or 4 point" }, { label: "Chin cup", value: "Included" }, { label: "Adjust", value: "Full range" }, { label: "Use", value: "Height / wind" }],
        hotspots: [
          { x: 34, y: 66, title: "2 or 4-Point Chin Strap", detail: "4-point for work at height, 2-point for general site wind." },
          { x: 66, y: 60, title: "Adjustable Cradle", detail: "Sized to the individual so it sits level, not tilted back." },
        ],
      },
      {
        id: "face", name: "03 // Face", tag: "SHIELD",
        blurb: "Clear face shield and 1mm replacement lenses for grinding and cutting.",
        specs: [{ label: "Shield", value: "Clear visor" }, { label: "Lens", value: "1mm spare" }, { label: "Tints", value: "Clear / Green" }, { label: "Carrier", value: "Brow guard" }],
        hotspots: [
          { x: 50, y: 62, title: "Full Face Shield", detail: "Covers the whole face for grinding, cutting and chipping." },
          { x: 72, y: 76, title: "1mm Replacement Lens", detail: "Swap the lens, keep the carrier — far cheaper than new shields." },
        ],
      },
    ],
  },
  {
    code: "FLIP-FRONT",
    name: "Flip-Front Welding Helmet",
    category: "headface",
    image: "/images/prod-head.jpg",
    layers: [
      {
        id: "shell", name: "01 // Shell", tag: "WELDING",
        blurb: "Flip-front welding shell for repeated strike-and-inspect cycles.",
        specs: [{ label: "Type", value: "Flip front" }, { label: "Headgear", value: "Adjustable" }, { label: "Use", value: "Welding bay" }, { label: "Spares", value: "Available" }],
        hotspots: [
          { x: 50, y: 30, title: "Flip-Front Mechanism", detail: "Flip up to inspect the bead without removing the helmet." },
          { x: 28, y: 52, title: "Adjustable Headgear", detail: "Ratchet sizing so it stays put through a flip cycle." },
        ],
      },
      {
        id: "lens", name: "02 // Lens", tag: "OPTICS",
        blurb: "Replaceable clear lenses — consumables you keep on the shelf.",
        specs: [{ label: "Lens", value: "Clear spare" }, { label: "Supply", value: "Pack" }, { label: "Fit", value: "Quick swap" }, { label: "Cost", value: "Consumable" }],
        hotspots: [
          { x: 52, y: 60, title: "Clear Replacement Lens", detail: "Spatter-pitted lens swaps out in seconds — helmet stays in service." },
        ],
      },
      {
        id: "support", name: "03 // Support", tag: "HOT WORK",
        blurb: "Pairs with Jada leather and welders hoods for full hot-work cover.",
        specs: [{ label: "Pairs with", value: "Jada leather" }, { label: "Hood", value: "Welders hood" }, { label: "Cap", value: "Skull cap" }, { label: "Boots", value: "Tarantula 300°C" }],
        hotspots: [
          { x: 40, y: 80, title: "Full Hot-Work Kit", detail: "Helmet + hood + leather apron + 300°C boots covers the whole bay." },
        ],
      },
    ],
  },
  {
    code: "SA16 · EN4",
    name: "Reflective Jacket with ID — Lime",
    category: "workwear",
    image: "/images/prod-hivis.jpg",
    layers: [
      {
        id: "fabric", name: "01 // Fabric", tag: "VISIBILITY",
        blurb: "125gsm lime fluorescent base — the colour the eye catches fastest.",
        specs: [{ label: "Weight", value: "125 gsm" }, { label: "Colour", value: "Lime fluoro" }, { label: "Cut", value: "Sleeveless" }, { label: "Sizes", value: "S – 3XL" }],
        hotspots: [
          { x: 42, y: 34, title: "Fluorescent Lime Base", detail: "Peak daylight visibility — seen sooner by plant operators." },
          { x: 64, y: 30, title: "Sleeveless Cut", detail: "Goes over overalls or a jacket without restricting arms." },
        ],
      },
      {
        id: "tape", name: "02 // Tape", tag: "NIGHT",
        blurb: "5cm reflective tape returning headlight and torch light.",
        specs: [{ label: "Tape", value: "5 cm" }, { label: "Return", value: "Retroreflective" }, { label: "Standard", value: "EN4" }, { label: "Layout", value: "Body bands" }],
        hotspots: [
          { x: 50, y: 56, title: "5cm Reflective Bands", detail: "Bounces vehicle headlights straight back — night shift critical." },
          { x: 30, y: 62, title: "EN4 Conformity", detail: "Meets the EN4 warning-clothing spec for your safety file." },
        ],
      },
      {
        id: "features", name: "03 // Features", tag: "ID + ZIP",
        blurb: "ID card pouch, zip front and black piping — site access built in.",
        specs: [{ label: "ID", value: "Card pouch" }, { label: "Front", value: "Zip" }, { label: "Trim", value: "Black piping" }, { label: "Variant", value: "SA10 mesh" }],
        hotspots: [
          { x: 62, y: 46, title: "ID Card Pouch", detail: "Access cards stay visible at the gate — no more lanyard hunting." },
          { x: 46, y: 70, title: "Zip Front + Piping", detail: "Zip closure and black piping resist the usual first-week damage." },
        ],
      },
    ],
  },
  {
    code: "RESP-HALF",
    name: "Half-Mask Respirator — Twin Cartridge",
    category: "respiratory",
    image: "/images/prod-respiratory.jpg",
    layers: [
      {
        id: "filter", name: "01 // Filter", tag: "CARTRIDGE",
        blurb: "Twin replaceable cartridges sized to the hazard on site.",
        specs: [{ label: "Cartridges", value: "Twin" }, { label: "Type", value: "Replaceable" }, { label: "Use", value: "Dust / vapour" }, { label: "Status", value: "On request" }],
        hotspots: [
          { x: 28, y: 56, title: "Twin Cartridge Mounts", detail: "Balanced breathing load and easy swap-out when spent." },
          { x: 72, y: 56, title: "Hazard-Matched Filters", detail: "Tell us the hazard and we spec the correct cartridge grade." },
        ],
      },
      {
        id: "seal", name: "02 // Seal", tag: "FACE SEAL",
        blurb: "Soft face seal — the part that decides whether it actually protects.",
        specs: [{ label: "Seal", value: "Soft perimeter" }, { label: "Fit", value: "Adjustable" }, { label: "Valve", value: "Exhalation" }, { label: "Body", value: "Reusable" }],
        hotspots: [
          { x: 52, y: 62, title: "Face Seal Perimeter", detail: "A respirator only works if the seal is intact — fit check every shift." },
          { x: 50, y: 78, title: "Exhalation Valve", detail: "Dumps warm breath so the mask stays comfortable and goggles stay clear." },
        ],
      },
      {
        id: "fit", name: "03 // Fit", tag: "HARNESS",
        blurb: "Adjustable head harness that works under a hard hat.",
        specs: [{ label: "Harness", value: "Adjustable" }, { label: "Under", value: "Hard hat OK" }, { label: "Alt", value: "FFP2 disposable" }, { label: "Status", value: "On request" }],
        hotspots: [
          { x: 70, y: 34, title: "Adjustable Head Harness", detail: "Tensions evenly so the seal holds with a hard hat fitted." },
          { x: 34, y: 34, title: "Disposable Alternative", detail: "FFP2 dust mask available where a reusable body isn't needed." },
        ],
      },
    ],
  },
];

/* ---------------- HERO FULL KIT ---------------- */
export const heroKitImage =
  "https://images.pexels.com/photos/5493660/pexels-photo-5493660.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900";

export type KitPin = { x: number; y: number; code: string; label: string; tone: "volt" | "flare" | "ice" };

export const heroKitPins: KitPin[] = [
  { x: 50, y: 9, code: "HARD HAT", label: "Hard Hat + Chin Strap", tone: "volt" },
  { x: 25, y: 20, code: "026", label: "Eurospec Anti-Fog Specs", tone: "ice" },
  { x: 74, y: 22, code: "LL-30", label: "Laser-Lite Corded · SNR 35", tone: "ice" },
  { x: 50, y: 30, code: "RESP-HALF", label: "Respirator Mask", tone: "flare" },
  { x: 28, y: 48, code: "SA16", label: "Hi-Vis + ID Pouch · EN4", tone: "volt" },
  { x: 72, y: 56, code: "MORELLI", label: "Morelli Overalls 28–62", tone: "volt" },
  { x: 40, y: 72, code: "JADA", label: "Jada Welding Leather", tone: "flare" },
  { x: 58, y: 90, code: "JS04", label: "Goliath Boot · 200J", tone: "volt" },
];

/* ---------------- SITE CHROME ---------------- */
export const navLinks = [
  { label: "Kits", href: "#kits" },
  { label: "Inspector", href: "#inspector" },
  { label: "Products", href: "#products" },
  { label: "Verify", href: "#verify" },
  { label: "FAQ", href: "#faq" },
];

export const clientLogos = [
  { name: "WBHO Infrastructure", sector: "CIVIL" },
  { name: "Transnet Port Terminals", sector: "FREIGHT" },
  { name: "ArcelorMittal Steel", sector: "FOUNDRY" },
  { name: "Mondi Heavy Pulp", sector: "PROCESSING" },
  { name: "Glencore Chrome Ops", sector: "MINING" },
  { name: "Sasol Energy", sector: "PETROCHEM" },
];

export type RoleBundle = {
  id: string;
  role: string;
  industry: string;
  risk: string;
  blurb: string;
  items: { code: string; name: string; note: string }[];
};

export const roleBundles: RoleBundle[] = [
  {
    id: "mining", role: "Mining & Heavy Ground Crew", industry: "Mining · Quarrying · Foundry", risk: "HIGH IMPACT",
    blurb: "Metatarsal, heat and dust protection for harsh ground.",
    items: [
      { code: "MR01", name: "Shamrock Metatarsal Boot", note: "Upper-foot guard + steel midsole" },
      { code: "JS05", name: "Tarantula Weatherboot", note: "Kevlar + 300°C heat rated" },
      { code: "DV-21", name: "Indirect Vent Goggle", note: "Dust + splash seal" },
      { code: "LL-1", name: "Laser-Lite SNR 35", note: "Max attenuation" },
      { code: "SA16", name: "Hi-Vis + ID Lime", note: "EN4 visibility" },
    ],
  },
  {
    id: "construction", role: "Construction & Civils Crew", industry: "Civils · Steel · Height", risk: "MIXED SITE",
    blurb: "The everyday site kit — boots, hat, eyes, ears, hi-vis.",
    items: [
      { code: "NJS01", name: "Parson Safety Boot", note: "Antistatic + steel midsole" },
      { code: "HARD HAT", name: "Hard Hat + Chin Strap", note: "2 or 4-point retention" },
      { code: "026", name: "Eurospec Spectacle", note: "Anti-scratch + Anti-Fog" },
      { code: "304L", name: "Bilsom Corded SNR 33", note: "Stays on the worker" },
      { code: "MORELLI", name: "Morelli Overalls 28–62", note: "Triple-stitched" },
    ],
  },
  {
    id: "welding", role: "Welding & Hot Work Bay", industry: "Welding · Cutting · Grinding", risk: "HEAT + SPARK",
    blurb: "Leather, flip-front and heat-rated boots.",
    items: [
      { code: "FLIP-FRONT", name: "Flip-Front Welding Helmet", note: "Adjustable headgear" },
      { code: "JADA", name: "Jada Spats / Jacket / Apron", note: "Leather, custom sizes" },
      { code: "JS05", name: "Tarantula Boot", note: "300°C + non-conductive" },
      { code: "DV-11", name: "Direct Vent Goggle", note: "Grinding clear vision" },
      { code: "HOOD", name: "Welders Hood + Skull Cap", note: "Spark coverage" },
    ],
  },
  {
    id: "warehouse", role: "Warehouse, Food & Visitors", industry: "Logistics · Food · Facilities", risk: "LIGHT INDUSTRIAL",
    blurb: "Light, compliant and easy to issue at scale.",
    items: [
      { code: "JS02", name: "Lynx Safety Shoe", note: "Light + antistatic" },
      { code: "JS06/07", name: "Chelsea Slip-On", note: "No laces, fast issue" },
      { code: "SA10", name: "Mesh Hi-Vis + ID", note: "Cooler summer vest" },
      { code: "BIB", name: "Reflective Bib", note: "Visitor compliance" },
      { code: "DISPOA", name: "Disposable Overall", note: "Shutdowns + visitors" },
    ],
  },
];

export const sansRecords: Record<string, { code: string; standard: string; lab: string; scope: string; hash: string; issued: string; renewal: string }> = {
  FOOTWEAR: {
    code: "ISO 20345:2011", standard: "Safety Footwear — 200J Steel Toe", lab: "Profit accredited testing",
    scope: "Impact, compression, penetration, slip and abrasion across JS03 / JS04 / JS05 / JS06 / NJS01 / MR01 / JS02 / LS01",
    hash: "0x8F3A29B1E408573D8C2B7E1A6F0945D2", issued: "2024-01-14", renewal: "2027-01-14",
  },
  HEARING: {
    code: "SNR 30–35", standard: "Hearing Protection — Honeywell Howard Leight", lab: "Honeywell laboratory attestation",
    scope: "EP-DR090C SNR30 · Bilsom 303L/304L SNR33 · Laser-Lite LL-1/LL-30 SNR35 · SmartFit SNR30",
    hash: "0x3D72B9A10F4C8E5192847B0E6A21359C", issued: "2023-11-02", renewal: "2026-11-02",
  },
  "HI-VIS": {
    code: "EN4 · SA16 / SA10", standard: "High-Visibility Warning Clothing", lab: "EN4 conformity",
    scope: "SA16 lime 125gsm + SA10 mesh with ID holder, 5cm tape. Bib STD 32×56cm.",
    hash: "0x5E1C82D7F49A03B56182903C4B8271AF", issued: "2024-03-19", renewal: "2027-03-19",
  },
};

export const dispatchHubs = [
  { hub: "Gauteng Central", location: "Johannesburg — Elandsfontein corridor", coverage: "Gauteng · Mpumalanga · Limpopo", stock: "Full Profit + Plan-It range", sla: "Confirm on quote" },
  { hub: "KZN Port", location: "Durban — Bayhead logistics zone", coverage: "KZN · Free State", stock: "Core footwear + hi-vis", sla: "Confirm on quote" },
  { hub: "Western Cape", location: "Cape Town — Montague Gardens", coverage: "Western + Northern Cape", stock: "Core + welding range", sla: "Confirm on quote" },
];

export const faqs = [
  { q: "How do we order for a full crew with different sizes?", a: "Send your crew list with sizes. Footwear covers 2–15 (ladies 3–9), hi-vis S–3XL and overalls 28–62. We consolidate into one quote and one delivery." },
  { q: "Are these certified for SA site compliance?", a: "Yes. Footwear is ISO 20345:2011 (200J steel toe), hearing is SNR 30–35 (Honeywell), hi-vis is EN4. Every delivery lists codes and standards for your safety file." },
  { q: "Do you deliver to site and how fast?", a: "We dispatch nationally from Gauteng. Tell us your site date in the quote form and we'll confirm stock and lead time before you commit. Flag shutdowns as urgent." },
  { q: "Can we get repeats and spares easily?", a: "Yes. Once sizes are on file, re-orders are one call or email. Lenses, chin straps, earplugs, mopcaps and shoe covers are stocked for top-ups." },
];

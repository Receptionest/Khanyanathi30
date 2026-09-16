import { useEffect, useRef, useState, type ReactNode, type FormEvent } from "react";
import confetti from "canvas-confetti";
import { sound } from "./utils/audio";
import {
  ShieldAlert, Volume2, VolumeX, Menu, X, ArrowRight, Check, Plus,
  Trash2, Send, CheckCircle2, Search, FileCheck2, Truck, MapPin,
  Activity, ScanLine, ChevronDown, Layers, Crosshair, Cpu, Phone, Mail,
  Footprints, Ear, Glasses, HardHat, Shirt, Wind, ShieldCheck, Clock,
  Maximize2, Radio, Flame,
} from "lucide-react";
import {
  categories, products, faqs, navLinks, clientLogos, inspectables,
  roleBundles, sansRecords, dispatchHubs, heroKitImage, heroKitPins,
  type CategoryId, type Product, type Inspectable, type RoleBundle,
} from "./data";

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("is-in"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const catIcons: Record<CategoryId, ReactNode> = {
  footwear: <Footprints className="h-3.5 w-3.5" />,
  hearing: <Ear className="h-3.5 w-3.5" />,
  eyewear: <Glasses className="h-3.5 w-3.5" />,
  headface: <HardHat className="h-3.5 w-3.5" />,
  workwear: <Shirt className="h-3.5 w-3.5" />,
  respiratory: <Wind className="h-3.5 w-3.5" />,
};

const toneMap = {
  volt: { dot: "bg-volt-400", ring: "pin-pulse", text: "text-volt-300", border: "border-volt-400/45" },
  flare: { dot: "bg-flare-400", ring: "pin-pulse-flare", text: "text-flare-300", border: "border-flare-400/45" },
  ice: { dot: "bg-ice-400", ring: "pin-pulse", text: "text-ice-400", border: "border-ice-400/45" },
};

type CartItem = { id: string; name: string; code: string };

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [activePin, setActivePin] = useState<number | null>(3);
  const [activeBundle, setActiveBundle] = useState<RoleBundle>(roleBundles[0]);
  const [insp, setInsp] = useState<Inspectable>(inspectables[0]);
  const [layerIdx, setLayerIdx] = useState(0);
  const [spotIdx, setSpotIdx] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState<CategoryId>("footwear");
  const [inspected, setInspected] = useState<Product | null>(null);
  const [sansKey, setSansKey] = useState("FOOTWEAR");
  const [verifying, setVerifying] = useState(false);
  const [hubIdx, setHubIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    { id: "JS04", name: "Goliath Safety Boot — Stone", code: "JS04 · GOLIATH" },
    { id: "SA16", name: "Reflective Jacket with ID — Lime", code: "SA16 · EN4" },
  ]);
  const [flash, setFlash] = useState<string[]>([]);
  const [wanted, setWanted] = useState<CategoryId[]>(["footwear", "workwear"]);
  const [sent, setSent] = useState(false);
  const [refCode, setRefCode] = useState("");
  const [quoteWorkers, setQuoteWorkers] = useState(60);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", notes: "" });
  const [dock, setDock] = useState(false);

  useEffect(() => {
    const s = () => setDock(window.scrollY > 300);
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);

  const toggleSound = () => setSoundOn(sound.toggle());
  const doFlash = (id: string) => {
    setFlash((p) => [...p, id]);
    setTimeout(() => setFlash((p) => p.filter((x) => x !== id)), 2000);
  };
  const addProduct = (p: Product) => {
    sound.playSuccess();
    setCart((prev) => (prev.some((i) => i.id === p.code) ? prev : [...prev, { id: p.code, name: p.name, code: p.code }]));
    doFlash(p.code);
  };
  const addBundle = (b: RoleBundle) => {
    sound.playSuccess();
    b.items.forEach((it) => setCart((prev) => (prev.some((i) => i.id === it.code) ? prev : [...prev, { id: it.code, name: it.name, code: it.code }])));
    doFlash(b.id);
    setQuoteOpen(true);
  };
  const pickSans = (k: string) => {
    sound.playClick(); setSansKey(k); setVerifying(true); sound.playScan();
    setTimeout(() => setVerifying(false), 420);
  };
  const pickInspect = (i: Inspectable) => {
    sound.playScan(); setInsp(i); setLayerIdx(0); setSpotIdx(0);
  };
  const submitQuote = (e: FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    try { confetti({ particleCount: 110, spread: 75, origin: { y: 0.6 }, colors: ["#C7FF1A", "#FF5E1A", "#38D6FF", "#23D18B"] }); } catch { /* noop */ }
    setRefCode(`K30-RFQ-${Math.floor(1000 + Math.random() * 9000)}-ZA`);
    setSent(true);
  };

  const sans = sansRecords[sansKey];
  const filtered = products.filter((p) => p.category === selectedCat);
  const activeHub = dispatchHubs[hubIdx];
  const layer = insp.layers[layerIdx];

  return (
    <div className="min-h-screen bg-void-950 font-body text-[#F2F6FA]">
      {/* ticker */}
      <div className="hidden border-b border-white/5 bg-void-950/90 font-mono text-[11px] text-steel-400 backdrop-blur-md md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-go-400">
              <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-go-400 opacity-75" /><span className="relative h-2 w-2 rounded-full bg-go-400" /></span>
              STOCK LIVE · PLAN-IT RANGE
            </span>
            <span className="text-white/15">|</span>
            <span className="font-medium text-volt-400">ISO 20345 · SNR 30–35 · EN4</span>
          </div>
          <button onClick={toggleSound} className="flex items-center gap-1.5 rounded px-2 py-0.5 hover:text-white">
            {soundOn ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />} AUDIO {soundOn ? "ON" : "OFF"}
          </button>
        </div>
      </div>

      {/* nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-void-950/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" onClick={() => sound.playClick()} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded bg-gradient-to-br from-volt-400 to-volt-500 shadow-[0_0_22px_rgba(199,255,26,0.35)]">
              <ShieldAlert className="h-5 w-5 text-void-950" />
            </span>
            <span className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-white">KHANYANATHI<span className="text-volt-400">30</span></span>
              <span className="font-mono text-[9.5px] uppercase tracking-[0.25em] text-steel-500">Company PPE Supply</span>
            </span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => sound.playClick()} onMouseEnter={() => sound.playHover()}
                className="rounded px-3.5 py-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.15em] text-steel-300 transition-colors hover:text-volt-300">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => { sound.playClick(); setQuoteOpen(true); }}
              className="flex items-center gap-2 rounded border border-white/15 bg-void-850 px-3.5 py-2 font-mono text-xs font-semibold text-white hover:border-volt-400/60">
              <Layers className="h-4 w-4 text-volt-400" /><span className="hidden sm:inline">LIST</span>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-volt-400 px-1 text-[10px] font-bold text-void-950">{cart.length}</span>
            </button>
            <button onClick={() => { sound.playClick(); setQuoteOpen(true); }}
              className="btn-flare hidden items-center gap-2 rounded px-4 py-2 font-display text-xs font-bold uppercase sm:flex">
              Get quote <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-9 w-9 place-items-center rounded border border-white/10 lg:hidden" aria-label="Menu">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-void-950 px-6 py-5 lg:hidden">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block border-b border-white/5 py-2.5 font-display font-semibold text-white">{l.label}</a>
            ))}
            <button onClick={() => { setMenuOpen(false); setQuoteOpen(true); }} className="btn-flare mt-4 w-full rounded py-3 font-display text-sm font-bold">GET QUOTE</button>
          </div>
        )}
      </header>

      <main id="top">
        {/* ---------------- HERO ---------------- */}
        <section className="tech-grid relative overflow-hidden pb-16 pt-8 lg:pb-24 lg:pt-12">
          <div className="pointer-events-none absolute left-1/4 top-6 h-96 w-96 rounded-full bg-volt-400/10 blur-[130px]" />
          <div className="pointer-events-none absolute right-10 top-40 h-80 w-80 rounded-full bg-flare-500/10 blur-[120px]" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-volt-400/30 bg-volt-400/10 px-3.5 py-1.5 font-mono text-[11px] text-volt-300">
                <Flame className="h-3 w-3" /><span className="font-semibold tracking-wider">PLAN-IT SAFETY RANGE · REAL STOCK</span>
              </div>
              <div className="hidden items-center gap-2 font-mono text-xs text-steel-400 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-go-400" /><span>{products.length} ORDERABLE SKUs · 011 865 5422/3</span>
              </div>
            </div>

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl xl:text-[4.3rem]">
                  KIT THE WHOLE CREW.{" "}
                  <span className="bg-gradient-to-r from-volt-300 via-volt-400 to-volt-500 bg-clip-text text-transparent">HEAD TO TOE.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-steel-300 sm:text-lg">
                  Every item on the worker beside you is a real SKU you can order today — hard hat, specs, earplugs, mask, hi-vis, overalls and boots. One quote. One delivery. One safety file.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button onClick={() => { sound.playClick(); setQuoteOpen(true); }}
                    className="btn-flare flex items-center gap-3 rounded px-7 py-4 font-display text-sm font-bold uppercase tracking-wider">
                    Get my crew quote <ArrowRight className="h-4 w-4" />
                  </button>
                  <a href="#inspector" onClick={() => sound.playClick()}
                    className="flex items-center gap-2.5 rounded border border-white/15 bg-white/[0.04] px-6 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-white hover:border-volt-400/50 hover:text-volt-300">
                    <ScanLine className="h-4 w-4 text-volt-400" /> Inspect any product
                  </a>
                </div>

                <div className="mt-8 grid max-w-lg grid-cols-3 gap-3 border-t border-white/10 pt-6 font-mono">
                  {[["ISO 20345", "200J steel toe"], ["SNR 35", "peak hearing"], ["2 – 15", "incl. ladies"]].map(([v, l]) => (
                    <div key={l}><div className="font-display text-xl font-bold text-volt-400">{v}</div><div className="text-[11px] text-steel-500">{l}</div></div>
                  ))}
                </div>
              </div>

              {/* FULL KIT WORKER */}
              <div className="lg:col-span-6">
                <div className="hud-panel corner-brackets relative mx-auto max-w-[520px] overflow-hidden rounded-md p-2">
                  <div className="flex items-center justify-between border-b border-white/10 bg-void-950 px-3 py-2 font-mono text-[10.5px]">
                    <span className="flex items-center gap-2 text-volt-300"><Activity className="h-3.5 w-3.5" /> FULL KIT — 8 REAL SKUs</span>
                    <span className="rounded bg-flare-400/15 px-1.5 py-0.5 text-[9px] font-bold text-flare-300">TAP A PIN</span>
                  </div>

                  <div className="relative overflow-hidden bg-void-950">
                    <img src={heroKitImage} alt="Worker in complete PPE kit: hard hat, goggles, respirator mask, hi-vis and boots" className="aspect-[4/5] w-full object-cover" />
                    <div className="scanline pointer-events-none absolute inset-0 opacity-30" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void-950 via-transparent to-void-950/50" />

                    {heroKitPins.map((pin, i) => {
                      const t = toneMap[pin.tone];
                      const on = activePin === i;
                      return (
                        <button key={pin.code} style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                          onClick={() => { sound.playClick(); setActivePin(on ? null : i); }}
                          className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                          aria-label={pin.label}>
                          <span className={`block h-3.5 w-3.5 rounded-full border-2 border-void-950 ${t.dot} ${on ? "scale-125" : t.ring} transition-transform`} />
                          {on && (
                            <span className={`absolute left-1/2 top-5 z-40 w-max max-w-[190px] -translate-x-1/2 rounded border ${t.border} bg-void-950/95 px-2.5 py-1.5 text-left backdrop-blur-sm`}>
                              <span className={`block font-mono text-[9px] font-bold ${t.text}`}>{pin.code}</span>
                              <span className="block font-mono text-[10px] leading-tight text-white">{pin.label}</span>
                            </span>
                          )}
                        </button>
                      );
                    })}

                    <div className="absolute inset-x-3 bottom-3 rounded border border-white/15 bg-void-950/92 p-3 backdrop-blur-md">
                      <div className="flex items-center justify-between font-mono text-[10px]">
                        <span className="text-steel-400">KIT COVERAGE</span><span className="font-bold text-volt-400">HEAD · EYES · EARS · LUNGS · BODY · FEET</span>
                      </div>
                      <div className="mt-1.5 flex gap-1">
                        {heroKitPins.map((p, i) => (
                          <button key={p.code} onClick={() => { sound.playClick(); setActivePin(i); }}
                            className={`h-1.5 flex-1 rounded-full transition-all ${activePin === i ? "bg-volt-400" : "bg-white/15 hover:bg-white/30"}`} aria-label={p.label} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="marquee relative mt-16 overflow-hidden border-y border-white/10 bg-void-950/60 py-5" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
              <div className="marquee-track flex w-max items-center gap-12 pr-12">
                {[...clientLogos, ...clientLogos].map((c, i) => (
                  <span key={i} className="flex items-center gap-3 font-display text-base font-bold text-steel-400">
                    {c.name}<span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-steel-500">{c.sector}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- KITS ---------------- */}
        <section id="kits" className="tech-grid scroll-mt-20 border-t border-white/10 bg-void-900 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-volt-400"><Layers className="h-4 w-4" /><span>Crew kits · real SKUs</span></div>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">PICK A CREW. GET THE KIT.</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-4">
              {roleBundles.map((b) => (
                <button key={b.id} onClick={() => { sound.playClick(); setActiveBundle(b); }}
                  className={`rounded border p-4 text-left transition-all ${activeBundle.id === b.id ? "border-volt-400 bg-void-850 shadow-[0_0_25px_rgba(199,255,26,0.2)]" : "border-white/10 bg-void-950/60 hover:border-white/25"}`}>
                  <span className="font-mono text-[9px] uppercase text-steel-500">{b.risk}</span>
                  <span className="mt-2 line-clamp-2 block font-display text-sm font-bold text-white">{b.role}</span>
                  <span className="mt-1 block font-mono text-[11px] text-volt-400">{b.items.length} items</span>
                </button>
              ))}
            </div>
            <Reveal delay={80}>
              <div className="mt-6 rounded-md border border-white/15 bg-void-950 p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-center">
                  <div>
                    <span className="rounded border border-volt-400/30 bg-volt-400/15 px-2.5 py-1 font-mono text-xs font-bold text-volt-300">{activeBundle.risk}</span>
                    <h3 className="mt-3 font-display text-2xl font-bold text-white">{activeBundle.role}</h3>
                    <p className="mt-1 font-mono text-xs text-steel-400">{activeBundle.industry} — {activeBundle.blurb}</p>
                  </div>
                  <button onClick={() => addBundle(activeBundle)}
                    className={`flex items-center gap-2 rounded px-5 py-3 font-display text-xs font-bold uppercase ${flash.includes(activeBundle.id) ? "bg-go-400 text-void-950" : "btn-flare"}`}>
                    {flash.includes(activeBundle.id) ? <><Check className="h-4 w-4" /> Kit added</> : <><Plus className="h-4 w-4" /> Add full kit</>}
                  </button>
                </div>
                <div className="mt-6 grid gap-3 md:grid-cols-3 lg:grid-cols-5">
                  {activeBundle.items.map((it, i) => (
                    <div key={it.code} className="rounded border border-white/10 bg-void-900/80 p-4">
                      <div className="flex justify-between font-mono text-[10.5px]"><span className="font-bold uppercase text-volt-400">{it.code}</span><span className="text-steel-500">0{i + 1}</span></div>
                      <h5 className="mt-2 font-display text-sm font-bold leading-snug text-white">{it.name}</h5>
                      <p className="mt-1 text-xs text-steel-400">{it.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- PER-PRODUCT INSPECTOR ---------------- */}
        <section id="inspector" className="tech-grid-dense scroll-mt-20 border-t border-white/10 bg-void-950 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-volt-400"><Crosshair className="h-4 w-4" /><span>3-layer inspector · {inspectables.length} products</span></div>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">STRIP ANY PRODUCT TO ITS LAYERS.</h2>
              <p className="mt-4 max-w-2xl text-sm text-steel-300 sm:text-base">Pick a product, step through its three layers, and tap the pins to see exactly what each part does on site.</p>
            </Reveal>

            {/* product selector */}
            <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-2">
              {inspectables.map((it) => (
                <button key={it.code} onClick={() => pickInspect(it)}
                  className={`flex shrink-0 items-center gap-2 rounded border px-3.5 py-2.5 font-mono text-[11px] uppercase transition-all ${insp.code === it.code ? "border-volt-400 bg-volt-400/15 text-volt-300" : "border-white/10 bg-void-900/60 text-steel-400 hover:border-white/25"}`}>
                  {catIcons[it.category]} {it.code}
                </button>
              ))}
            </div>

            <div className="mt-5 grid gap-6 lg:grid-cols-12">
              {/* image + pins */}
              <div className="lg:col-span-7">
                <div className="hud-panel corner-brackets overflow-hidden rounded-md p-2">
                  <div className="flex items-center justify-between border-b border-white/10 bg-void-950 px-4 py-2.5 font-mono text-xs">
                    <span className="flex items-center gap-2 text-steel-300"><Cpu className="h-4 w-4 text-volt-400" /> {insp.name}</span>
                    <span className="rounded bg-volt-400/15 px-2 py-0.5 text-[10px] font-bold text-volt-300">{layer.tag}</span>
                  </div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-void-950">
                    <img src={insp.image} alt={insp.name} className="h-full w-full object-cover" />
                    <div className="scanline pointer-events-none absolute inset-0 opacity-25" />
                    <div className="pointer-events-none absolute right-4 top-4 h-20 w-20 overflow-hidden rounded-full border border-volt-400/25"><div className="radar-sweep h-full w-full" /></div>

                    {layer.hotspots.map((s, i) => (
                      <button key={i} style={{ left: `${s.x}%`, top: `${s.y}%` }}
                        onClick={() => { sound.playClick(); setSpotIdx(i); }}
                        className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                        aria-label={s.title}>
                        <span className={`grid h-7 w-7 place-items-center rounded-full font-mono text-xs font-bold transition-all ${spotIdx === i ? "scale-110 bg-volt-400 text-void-950 ring-2 ring-white" : "border border-white/35 bg-void-950/90 text-white pin-pulse hover:border-volt-400"}`}>{i + 1}</span>
                      </button>
                    ))}

                    {spotIdx !== null && layer.hotspots[spotIdx] && (
                      <div className="absolute inset-x-4 bottom-4 rounded-md border border-volt-400/35 bg-void-950/95 p-3.5 backdrop-blur-md">
                        <div className="flex items-start gap-3">
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded bg-volt-400 font-mono text-xs font-bold text-void-950">{spotIdx + 1}</span>
                          <div>
                            <h4 className="font-display text-sm font-bold text-white">{layer.hotspots[spotIdx].title}</h4>
                            <p className="mt-1 text-xs leading-relaxed text-steel-300">{layer.hotspots[spotIdx].detail}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* layers + specs */}
              <div className="lg:col-span-5">
                <div className="flex gap-2">
                  {insp.layers.map((l, i) => (
                    <button key={l.id} onClick={() => { sound.playScan(); setLayerIdx(i); setSpotIdx(0); }}
                      className={`flex-1 rounded border px-3 py-2.5 font-mono text-[10.5px] uppercase transition-all ${layerIdx === i ? "border-volt-400 bg-volt-400/15 text-volt-300" : "border-white/10 bg-void-900/60 text-steel-400 hover:border-white/25"}`}>
                      {l.name}
                    </button>
                  ))}
                </div>

                <div className="mt-4 rounded-lg border border-white/10 bg-void-900/70 p-6">
                  <h3 className="font-display text-xl font-bold text-white">{layer.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-300">{layer.blurb}</p>
                  <div className="mt-5 grid grid-cols-2 gap-3 font-mono">
                    {layer.specs.map((s, i) => (
                      <div key={i} className="rounded border border-white/10 bg-void-950/70 p-3.5">
                        <span className="block text-[10.5px] uppercase text-steel-500">{s.label}</span>
                        <span className="mt-1 block font-display text-base font-bold text-volt-400">{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="font-mono text-[10.5px] uppercase text-steel-500">Hotspots in this layer</p>
                    <div className="mt-2 space-y-1.5">
                      {layer.hotspots.map((s, i) => (
                        <button key={i} onClick={() => { sound.playClick(); setSpotIdx(i); }}
                          className={`flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left font-mono text-[11.5px] transition-colors ${spotIdx === i ? "bg-volt-400/15 text-volt-300" : "text-steel-400 hover:bg-white/5"}`}>
                          <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-white/10 text-[9px]">{i + 1}</span>{s.title}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => { const p = products.find((x) => x.code === insp.code); if (p) addProduct(p); }}
                    className="btn-volt mt-5 flex w-full items-center justify-center gap-2 rounded py-3 font-display text-xs font-bold uppercase">
                    <Plus className="h-4 w-4" /> Add {insp.code} to list
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- PRODUCTS ---------------- */}
        <section id="products" className="tech-grid scroll-mt-20 border-t border-white/10 bg-void-900 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-volt-400"><ScanLine className="h-4 w-4" /><span>Real catalogue · {products.length} SKUs</span></div>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-5xl">EVERYTHING HERE IS ORDERABLE.</h2>
            </Reveal>
            <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-2">
              {categories.map((c) => (
                <button key={c.id} onClick={() => { sound.playClick(); setSelectedCat(c.id); }}
                  className={`flex shrink-0 items-center gap-2 rounded px-4 py-2 font-mono text-xs uppercase transition-all ${selectedCat === c.id ? "bg-volt-400 font-bold text-void-950" : "border border-white/10 bg-void-950 text-steel-400 hover:border-white/25"}`}>
                  {catIcons[c.id]} {c.label}
                </button>
              ))}
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => {
                const canInspect = inspectables.some((i) => i.code === p.code);
                return (
                  <div key={p.code} className="hud-panel corner-brackets flex flex-col rounded-md p-5">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="font-semibold text-volt-400">{p.code}</span>
                      {p.tag && <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold ${p.tag === "On request" ? "bg-ice-400/20 text-ice-400" : "bg-flare-400 text-white"}`}>{p.tag.toUpperCase()}</span>}
                    </div>
                    <h3 className="mt-3 font-display text-[17px] font-bold leading-snug text-white">{p.name}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-steel-300">{p.desc}</p>
                    <ul className="mt-3 space-y-1.5 font-mono text-[11.5px] text-steel-300">
                      {p.specs.map((s, i) => <li key={i} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-volt-400" />{s}</li>)}
                    </ul>
                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[11px]">
                      <span className="text-steel-400">{p.sizes}</span>
                      <span className="rounded border border-go-400/30 bg-go-400/10 px-2 py-0.5 text-go-400">{p.standard}</span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button onClick={() => addProduct(p)}
                        className={`flex flex-1 items-center justify-center gap-1.5 rounded px-3 py-2.5 font-mono text-xs font-bold uppercase ${flash.includes(p.code) ? "bg-go-400 text-void-950" : "btn-volt"}`}>
                        {flash.includes(p.code) ? <><Check className="h-3.5 w-3.5" /> Added</> : <><Plus className="h-3.5 w-3.5" /> Add</>}
                      </button>
                      {canInspect && (
                        <button onClick={() => { const t = inspectables.find((i) => i.code === p.code)!; pickInspect(t); document.getElementById("inspector")?.scrollIntoView({ behavior: "smooth" }); }}
                          className="grid h-[42px] w-[42px] place-items-center rounded border border-volt-400/40 text-volt-400 hover:bg-volt-400/10" title="3-layer inspect">
                          <Crosshair className="h-4 w-4" />
                        </button>
                      )}
                      <button onClick={() => { sound.playScan(); setInspected(p); }} className="grid h-[42px] w-[42px] place-items-center rounded border border-white/15 text-white hover:border-volt-400 hover:text-volt-400" title="Spec sheet">
                        <Maximize2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------- VERIFY ---------------- */}
        <section id="verify" className="tech-grid scroll-mt-20 border-t border-white/10 bg-void-950 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-volt-400"><FileCheck2 className="h-4 w-4" /><span>Compliance file</span></div>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-5xl">CODES FOR YOUR SAFETY FILE.</h2>
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-2">
              {Object.keys(sansRecords).map((k) => (
                <button key={k} onClick={() => pickSans(k)}
                  className={`flex items-center gap-2 rounded px-4 py-2 font-mono text-xs font-semibold uppercase ${sansKey === k ? "bg-volt-400 text-void-950" : "border border-white/10 bg-void-900 text-steel-300 hover:border-white/25"}`}>
                  <Search className="h-3 w-3" />{k}
                </button>
              ))}
            </div>
            <div className="hud-panel corner-brackets mt-6 overflow-hidden rounded-md">
              <div className="flex items-center justify-between border-b border-white/10 bg-void-950 px-4 py-3 font-mono text-xs text-steel-400">
                <span className="text-white">K30-CERT-CONSOLE</span>
                <span className="flex items-center gap-2 text-[10px] text-go-400"><span className="h-1.5 w-1.5 animate-ping rounded-full bg-go-400" />VERIFIED</span>
              </div>
              <div className="p-6 font-mono sm:p-8">
                {verifying ? <p className="py-10 text-center text-sm font-bold text-volt-400">QUERYING RECORDS…</p> : (
                  <div className="grid gap-8 lg:grid-cols-12">
                    <div className="space-y-4 lg:col-span-8">
                      <div className="rounded border border-white/5 bg-void-950 p-4 text-xs">
                        <p className="text-steel-500">$ k30-verify --standard {sans.code}</p>
                        <p className="mt-1 flex items-center gap-1.5 text-go-400"><CheckCircle2 className="h-4 w-4" /> VALID — {sans.standard}</p>
                        <p className="mt-1 text-steel-400">LAB: <span className="text-white">{sans.lab}</span></p>
                        <p className="text-steel-400">HASH: <span className="text-volt-300">{sans.hash}</span></p>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{sans.standard}</h3>
                      <p className="rounded border border-white/5 bg-void-900/60 p-4 text-xs leading-relaxed text-steel-300">{sans.scope}</p>
                    </div>
                    <div className="flex flex-col justify-between rounded-lg border border-volt-400/30 bg-void-950 p-6 lg:col-span-4">
                      <div className="py-4 text-center">
                        <span className="block font-display text-lg font-bold text-white">CERTIFIED COMPLIANT</span>
                        <span className="font-mono text-xs text-go-400">SAFETY-FILE READY</span>
                      </div>
                      <div className="space-y-2 font-mono text-xs text-steel-400">
                        <div className="flex justify-between"><span>Issued:</span><span className="text-white">{sans.issued}</span></div>
                        <div className="flex justify-between"><span>Renewal:</span><span className="text-white">{sans.renewal}</span></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- DISPATCH ---------------- */}
        <section id="dispatch" className="tech-grid scroll-mt-20 border-t border-white/10 bg-void-900 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-volt-400"><Radio className="h-4 w-4" /><span>National dispatch</span></div>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-5xl">ONE DELIVERY. ANY SITE.</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {dispatchHubs.map((h, i) => (
                <button key={h.hub} onClick={() => { sound.playClick(); setHubIdx(i); }}
                  className={`hud-panel corner-brackets rounded-md p-6 text-left ${hubIdx === i ? "hud-panel-active" : "opacity-80"}`}>
                  <span className="font-mono text-xs font-bold text-volt-400">{h.hub.toUpperCase()}</span>
                  <h3 className="mt-2 font-display text-base font-bold text-white">{h.location}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-steel-400"><MapPin className="h-3.5 w-3.5 text-volt-400" />{h.coverage}</p>
                </button>
              ))}
            </div>
            <div className="mt-6 grid gap-8 rounded-lg border border-white/15 bg-void-950 p-6 sm:p-8 lg:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-md border border-white/10">
                <img src="/images/warehouse.jpg" alt="Dispatch warehouse" className="h-full w-full object-cover opacity-55" />
                <div className="scanline pointer-events-none absolute inset-0 opacity-30" />
                <div className="absolute bottom-4 left-4 rounded border border-volt-400/40 bg-void-950/90 p-4 font-mono text-xs backdrop-blur-md">
                  <p className="font-bold text-volt-400">ACTIVE: {activeHub.hub.toUpperCase()}</p>
                  <p className="mt-1 text-white">{activeHub.location}</p>
                </div>
              </div>
              <div className="space-y-3 font-mono">
                <div className="rounded-lg border border-white/10 bg-void-900 p-5">
                  <span className="flex items-center gap-1.5 text-xs uppercase text-steel-500"><Clock className="h-3.5 w-3.5 text-volt-400" /> Lead time</span>
                  <span className="mt-2 block font-display text-xl font-bold text-volt-400">{activeHub.sla}</span>
                  <p className="mt-1 font-body text-xs text-steel-300">Tell us your site date — we confirm stock before you commit.</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-void-900 p-5 text-xs leading-relaxed text-steel-300">
                  <span className="mb-1 block font-mono font-semibold text-volt-400">HOW IT WORKS:</span>
                  Send crew sizes → one consolidated quote with exact codes → one delivery with safety-file paperwork.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- FAQ + CONTACT ---------------- */}
        <section id="faq" className="tech-grid scroll-mt-20 border-t border-white/10 bg-void-950 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-volt-400"><ShieldCheck className="h-4 w-4" /><span>Quick answers</span></div>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">STRAIGHT ANSWERS.</h2>
              <div className="mt-8 space-y-3">
                {faqs.map((f, i) => (
                  <div key={i} className="hud-panel overflow-hidden rounded-md">
                    <button onClick={() => { sound.playClick(); setOpenFaq(openFaq === i ? null : i); }} className="flex w-full items-center justify-between p-5 text-left font-display text-[15px] font-bold text-white">
                      <span>{f.q}</span><ChevronDown className={`h-5 w-5 shrink-0 ${openFaq === i ? "rotate-180 text-volt-400" : "text-steel-400"}`} />
                    </button>
                    {openFaq === i && <p className="border-t border-white/5 bg-void-900/50 p-5 text-sm leading-relaxed text-steel-300">{f.a}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-lg border border-white/15 bg-void-900 p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold text-white">Talk to a real person about sizes.</h3>
                <div className="mt-5 space-y-3">
                  <a href="tel:0118655422" className="flex items-center gap-3 rounded bg-white/5 p-4 hover:bg-white/10">
                    <Phone className="h-5 w-5 text-volt-400" />
                    <span><span className="block font-mono text-[11px] text-steel-400">PHONE</span><span className="font-semibold text-white">011 865 5422/3</span></span>
                  </a>
                  <a href="mailto:sales4@planitsafety.co.za" className="flex items-center gap-3 rounded bg-white/5 p-4 hover:bg-white/10">
                    <Mail className="h-5 w-5 text-volt-400" />
                    <span><span className="block font-mono text-[11px] text-steel-400">EMAIL</span><span className="font-semibold text-white">sales4@planitsafety.co.za</span></span>
                  </a>
                </div>
                <button onClick={() => { sound.playClick(); setQuoteOpen(true); }} className="btn-flare mt-5 flex w-full items-center justify-center gap-2 rounded py-3.5 font-display text-xs font-bold uppercase">
                  Start my quote <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center font-mono text-[11px] text-steel-500">T's & C's APPLY</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-void-950 pb-28 pt-14 font-mono text-xs">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded bg-volt-400 text-void-950"><ShieldAlert className="h-5 w-5" /></span>
                <span className="font-display text-xl font-bold text-white">KHANYANATHI<span className="text-volt-400">30</span></span>
              </div>
              <p className="max-w-md font-body text-sm leading-relaxed text-steel-400">Plan-It Safety range for companies. Footwear, hearing, eyewear, head &amp; face, respiratory and workwear — one quote, one delivery.</p>
            </div>
            <div className="space-y-3 lg:col-span-4">
              <span className="block font-bold tracking-wider text-volt-400">DISPATCH:</span>
              {dispatchHubs.map((h) => (
                <div key={h.hub} className="flex items-start gap-2 text-steel-300"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-volt-400" /><span><span className="font-bold text-white">{h.hub}</span> — {h.location}</span></div>
              ))}
            </div>
            <div className="space-y-2.5 lg:col-span-3">
              <span className="block font-bold tracking-wider text-volt-400">CONTACT:</span>
              <a href="tel:0118655422" className="flex items-center gap-2 text-steel-300 hover:text-volt-400"><Phone className="h-4 w-4 text-volt-400" />011 865 5422/3</a>
              <a href="mailto:sales4@planitsafety.co.za" className="flex items-center gap-2 text-steel-300 hover:text-volt-400"><Mail className="h-4 w-4 text-volt-400" />sales4@planitsafety.co.za</a>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[11px] text-steel-500 sm:flex-row">
            <span>© 2026 KHANYANATHI30 · PLAN-IT SAFETY RANGE · T's &amp; C's APPLY</span>
            <span className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5 text-volt-400" /> COMPANY PPE SUPPLY</span>
          </div>
        </div>
      </footer>

      {/* dock */}
      {dock && !quoteOpen && (
        <div className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2">
          <div className="hud-panel corner-brackets flex items-center gap-2 rounded-full border border-white/20 bg-void-950/92 px-3 py-2 backdrop-blur-xl">
            <button onClick={toggleSound} className={`grid h-8 w-8 place-items-center rounded-full ${soundOn ? "bg-volt-400 text-void-950" : "text-steel-400"}`} title="Audio">
              {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>
            <span className="h-4 w-px bg-white/10" />
            <button onClick={() => { sound.playClick(); setQuoteOpen(true); }} className="btn-flare flex items-center gap-2 rounded-full px-4 py-1.5 font-display text-xs font-bold">
              <Layers className="h-3.5 w-3.5" /> GET QUOTE <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-void-950 px-1 font-mono text-[9px] text-volt-400">{cart.length}</span>
            </button>
          </div>
        </div>
      )}

      {/* spec modal */}
      {inspected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-void-950/85 p-4 backdrop-blur-md">
          <div className="hud-panel corner-brackets relative w-full max-w-2xl rounded-lg p-6">
            <button onClick={() => setInspected(null)} className="absolute right-4 top-4 text-steel-400 hover:text-white"><X className="h-6 w-6" /></button>
            <p className="font-mono text-xs text-volt-400">SPEC SHEET // {inspected.code}</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">{inspected.name}</h3>
            <p className="mt-2 text-sm text-steel-300">{inspected.desc}</p>
            <ul className="mt-4 space-y-1.5 font-mono text-xs text-steel-300">
              {inspected.specs.map((s, i) => <li key={i} className="flex gap-2"><Check className="h-3.5 w-3.5 text-volt-400" />{s}</li>)}
            </ul>
            <div className="mt-4 flex items-center justify-between font-mono text-xs">
              <span className="text-steel-400">{inspected.sizes}</span>
              <span className="rounded bg-volt-400/10 px-2 py-1 text-volt-400">{inspected.standard}</span>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setInspected(null)} className="rounded border border-white/20 px-4 py-2 font-mono text-xs text-white">CLOSE</button>
              <button onClick={() => { addProduct(inspected); setInspected(null); }} className="btn-volt flex items-center gap-2 rounded px-5 py-2 font-display text-xs font-bold"><Plus className="h-3.5 w-3.5" /> ADD</button>
            </div>
          </div>
        </div>
      )}

      {/* quote drawer */}
      {quoteOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-void-950/85 backdrop-blur-md">
          <div className="flex h-full w-full max-w-xl flex-col overflow-y-auto border-l border-white/20 bg-void-950 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded bg-volt-400 text-void-950"><Layers className="h-5 w-5" /></span>
                <div><h3 className="font-display text-lg font-bold text-white">CREW QUOTE</h3><p className="font-mono text-xs text-volt-400">{cart.length} ITEMS</p></div>
              </div>
              <button onClick={() => { sound.playClick(); setQuoteOpen(false); }} className="grid h-9 w-9 place-items-center rounded border border-white/10 text-steel-400 hover:text-white"><X className="h-5 w-5" /></button>
            </div>

            {sent ? (
              <div className="my-auto py-12 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-go-400/40 bg-go-400/20 text-go-400"><CheckCircle2 className="h-8 w-8" /></span>
                <h4 className="mt-6 font-display text-2xl font-bold text-white">REQUEST SENT</h4>
                <p className="mt-2 font-mono text-sm text-volt-400">{refCode}</p>
                <p className="mx-auto mt-4 max-w-sm text-sm text-steel-300">We’ll confirm stock and delivery. Urgent? Call 011 865 5422/3.</p>
                <button onClick={() => { setCart([]); setSent(false); setQuoteOpen(false); }} className="btn-volt mt-8 rounded px-6 py-3 font-display text-xs font-bold uppercase">Done</button>
              </div>
            ) : (
              <form onSubmit={submitQuote} className="mt-6 flex flex-1 flex-col justify-between space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between font-mono text-xs text-steel-400">
                    <span>LIST:</span>{cart.length > 0 && <button type="button" onClick={() => setCart([])} className="text-flare-400 hover:underline">CLEAR</button>}
                  </div>
                  {cart.length === 0 ? (
                    <p className="rounded border border-dashed border-white/10 p-6 text-center font-mono text-xs text-steel-500">NO ITEMS YET — ADD KITS OR PRODUCTS.</p>
                  ) : (
                    <div className="max-h-48 space-y-2 overflow-y-auto pr-1">
                      {cart.map((it) => (
                        <div key={it.id} className="flex items-center justify-between rounded border border-white/5 bg-void-900 p-3 font-mono text-xs">
                          <div><span className="block font-semibold text-white">{it.name}</span><span className="text-[10px] text-volt-400">{it.code}</span></div>
                          <button type="button" onClick={() => setCart((p) => p.filter((x) => x.id !== it.id))} className="text-steel-500 hover:text-flare-400"><Trash2 className="h-3.5 w-3.5" /></button>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 rounded border border-white/10 bg-void-900 p-3.5 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-steel-400">CREW SIZE:</span>
                      <span className="flex items-center gap-2">
                        <input type="number" min={5} max={5000} value={quoteWorkers} onChange={(e) => setQuoteWorkers(Math.max(1, Number(e.target.value)))} className="w-20 rounded border border-white/20 bg-void-950 px-2 py-1 text-center font-bold text-volt-400" />
                        <span className="text-[10px] text-steel-500">WORKERS</span>
                      </span>
                    </div>
                    <div className="mt-3">
                      <span className="mb-2 block text-steel-400">CATEGORIES NEEDED:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {categories.map((c) => (
                          <button type="button" key={c.id} onClick={() => setWanted((p) => (p.includes(c.id) ? p.filter((w) => w !== c.id) : [...p, c.id]))}
                            className={`rounded px-2.5 py-1.5 text-[11px] ${wanted.includes(c.id) ? "bg-volt-400 font-bold text-void-950" : "border border-white/10 text-steel-400"}`}>{c.label}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div><label className="mb-1 block text-steel-500">NAME *</label><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Thabo M." className="w-full rounded border border-white/15 bg-void-900 px-3 py-2 text-white focus:border-volt-400 focus:outline-none" /></div>
                    <div><label className="mb-1 block text-steel-500">COMPANY *</label><input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="(Pty) Ltd" className="w-full rounded border border-white/15 bg-void-900 px-3 py-2 text-white focus:border-volt-400 focus:outline-none" /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div><label className="mb-1 block text-steel-500">PHONE *</label><input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="011 ..." className="w-full rounded border border-white/15 bg-void-900 px-3 py-2 text-white focus:border-volt-400 focus:outline-none" /></div>
                    <div><label className="mb-1 block text-steel-500">EMAIL *</label><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.co.za" className="w-full rounded border border-white/15 bg-void-900 px-3 py-2 text-white focus:border-volt-400 focus:outline-none" /></div>
                  </div>
                  <div><label className="mb-1 block text-steel-500">SIZES / SITE DATE</label><textarea rows={2} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="e.g. 22x boots 6–12, 30x hi-vis S–XXL, Alberton by 30th…" className="w-full rounded border border-white/15 bg-void-900 px-3 py-2 text-white focus:border-volt-400 focus:outline-none" /></div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <button type="submit" className="btn-flare flex w-full items-center justify-center gap-2 rounded py-3.5 font-display text-xs font-bold uppercase">
                    <Send className="h-4 w-4" /> Send my crew quote
                  </button>
                  <p className="mt-3 text-center font-mono text-[10px] text-steel-500">STOCK + LEAD TIME CONFIRMED · T's &amp; C's APPLY</p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

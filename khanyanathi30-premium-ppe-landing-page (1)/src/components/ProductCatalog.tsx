import { useState } from "react";
import { catalogItems, type CatalogItem } from "../data";
import { sound } from "../utils/audio";
import { 
  Package, 
  Plus, 
  Check, 
  FileCheck, 
  Maximize2, 
  X,
  ShieldAlert
} from "lucide-react";

type CatalogProps = {
  onAddToCart: (item: CatalogItem) => void;
  onOpenQuote: () => void;
};

export default function ProductCatalog({ onAddToCart }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [inspectedItem, setInspectedItem] = useState<CatalogItem | null>(null);
  const [addedIds, setAddedIds] = useState<string[]>([]);

  const categories = ["ALL", "HEAD", "BODY", "EYE", "RESPIRATORY", "HANDS", "FEET"];

  const filteredItems = selectedCategory === "ALL"
    ? catalogItems
    : catalogItems.filter((item) => item.category === selectedCategory);

  const handleAdd = (item: CatalogItem) => {
    sound.playSuccess();
    onAddToCart(item);
    setAddedIds((prev) => [...prev, item.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== item.id));
    }, 2200);
  };

  const handleInspect = (item: CatalogItem) => {
    sound.playScan();
    setInspectedItem(item);
  };

  return (
    <section id="products" className="relative scroll-mt-20 overflow-hidden bg-ink-900 py-20 lg:py-32 border-t border-white/10 tech-grid">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal-400">
              <Package className="h-4 w-4" />
              <span>CERTIFIED INVENTORY REPOSITORY</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              PRODUCT CATALOGUE & SKUS
            </h2>
            <p className="mt-4 max-w-2xl font-body text-mist-300 text-sm sm:text-base">
              2,400+ active SANS and EN compliant SKUs maintained in our Gauteng, Durban, and Cape Town regional hubs for immediate 48-hour container and carton dispatch.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-mist-400">
            <span className="h-2 w-2 rounded-full bg-cyber-emerald animate-pulse" />
            <span>DISPATCH STATUS: ALL SKUS STOCKED</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(cat);
                }}
                className={`rounded-sm px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                  isSelected
                    ? "bg-signal-400 text-ink-950 font-bold shadow-[0_0_15px_rgba(255,170,20,0.3)]"
                    : "border border-white/10 bg-ink-950/80 text-mist-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat === "ALL" ? "ALL 2,400+ SKUS" : cat}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const isAdded = addedIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="hud-panel corner-brackets flex flex-col justify-between overflow-hidden rounded-md border border-white/10 bg-ink-950 p-5 transition-all hover:border-signal-400/40"
              >
                <div>
                  {/* Top Bar with Code and Category */}
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-signal-400 font-semibold">{item.code}</span>
                    <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-mist-400 border border-white/10">
                      {item.category}
                    </span>
                  </div>

                  {/* Product Visual Container */}
                  <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded bg-ink-900 border border-white/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 scanline pointer-events-none opacity-20" />

                    <button
                      type="button"
                      onClick={() => handleInspect(item)}
                      className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded bg-ink-950/80 text-white backdrop-blur-md border border-white/20 hover:border-signal-400 hover:text-signal-400 transition-colors"
                      title="Inspect Technical Specs"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </button>

                    <div className="absolute left-2 bottom-2 rounded bg-ink-950/90 px-2 py-0.5 font-mono text-[9.5px] text-cyber-emerald border border-cyber-emerald/30">
                      {item.sansStandard}
                    </div>
                  </div>

                  {/* Title & Hazard Focus */}
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-mist-400 flex items-center gap-1.5">
                    <ShieldAlert className="h-3 w-3 text-signal-400" />
                    <span>DEFENSE: {item.hazardFocus}</span>
                  </p>

                  {/* Spec Bullets */}
                  <ul className="mt-4 space-y-1.5 border-t border-white/5 pt-3 font-mono text-[11px] text-mist-300">
                    {item.specs.slice(0, 3).map((spec, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-signal-400" />
                        <span className="truncate">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action Footer */}
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-mist-500 block uppercase">
                        TRADE BULK RATE
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-xl font-bold text-white">
                          R {item.bulkDiscountPrice.toLocaleString("en-ZA")}
                        </span>
                        <span className="font-mono text-xs text-mist-500 line-through">
                          R {item.unitPrice}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAdd(item)}
                      className={`flex items-center gap-1.5 rounded px-3.5 py-2 font-mono text-xs font-bold uppercase transition-all ${
                        isAdded
                          ? "bg-cyber-emerald text-ink-950"
                          : "bg-signal-400 text-ink-950 hover:bg-signal-300 shadow-[0_0_15px_rgba(255,170,20,0.3)]"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>ADDED</span>
                        </>
                      ) : (
                        <>
                          <Plus className="h-3.5 w-3.5" />
                          <span>ADD TO RFQ</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Detail Modal */}
        {inspectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-md">
            <div className="hud-panel corner-brackets relative w-full max-w-2xl rounded-lg border border-white/20 bg-ink-900 p-6 shadow-2xl">
              <button
                onClick={() => setInspectedItem(null)}
                className="absolute right-4 top-4 text-mist-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex items-center gap-2 font-mono text-xs text-signal-400">
                <FileCheck className="h-4 w-4" />
                <span>TECHNICAL SPECIFICATION SHEET // {inspectedItem.code}</span>
              </div>

              <h3 className="mt-2 font-display text-2xl font-bold text-white">
                {inspectedItem.name}
              </h3>

              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <img
                  src={inspectedItem.image}
                  alt={inspectedItem.name}
                  className="rounded border border-white/10 aspect-video object-cover"
                />
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-mist-500 block">STANDARD CONFORMITY:</span>
                    <span className="text-cyber-emerald font-bold">{inspectedItem.sansStandard}</span>
                  </div>
                  <div>
                    <span className="text-mist-500 block">PRIMARY HAZARDS MITIGATED:</span>
                    <span className="text-white">{inspectedItem.hazardFocus}</span>
                  </div>
                  <div>
                    <span className="text-mist-500 block">ENTERPRISE TRADE RATE:</span>
                    <span className="text-signal-400 font-bold text-base">
                      R {inspectedItem.bulkDiscountPrice} <span className="text-xs text-mist-500">/ unit</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded bg-ink-950 p-3.5 border border-white/5 font-body text-xs text-mist-300 leading-relaxed">
                <span className="font-mono text-signal-400 font-bold block mb-1">FIELD PERFORMANCE HIGHLIGHT:</span>
                {inspectedItem.keyHighlight}
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setInspectedItem(null)}
                  className="rounded border border-white/20 px-4 py-2 font-mono text-xs text-white hover:bg-white/5"
                >
                  CLOSE
                </button>
                <button
                  onClick={() => {
                    handleAdd(inspectedItem);
                    setInspectedItem(null);
                  }}
                  className="flex items-center gap-2 rounded bg-signal-400 px-5 py-2 font-display text-xs font-bold text-ink-950 hover:bg-signal-300"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>ADD TO FLEET QUOTE</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

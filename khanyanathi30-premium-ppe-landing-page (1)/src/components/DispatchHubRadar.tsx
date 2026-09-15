import { useState } from "react";
import { dispatchHubs } from "../data";
import { sound } from "../utils/audio";
import { 
  Radio, 
  MapPin, 
  Truck, 
  Clock, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";

export default function DispatchHubRadar() {
  const [activeHubIndex, setActiveHubIndex] = useState<number>(0);
  const activeHub = dispatchHubs[activeHubIndex];

  const handleSelect = (idx: number) => {
    sound.playClick();
    setActiveHubIndex(idx);
  };

  return (
    <section id="dispatch" className="relative scroll-mt-20 overflow-hidden bg-ink-900 py-20 lg:py-32 border-t border-white/10 tech-grid">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal-400">
              <Radio className="h-4 w-4" />
              <span>REGIONAL DISTRIBUTION COMMAND</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              3-HUB SATELLITE DISPATCH
            </h2>
            <p className="mt-4 max-w-2xl font-body text-mist-300 text-sm sm:text-base">
              Strategically positioned logistics nodes in Johannesburg, Durban, and Cape Town ensuring guaranteed 48-hour ground delivery to any active mine or industrial facility across South Africa’s 9 provinces.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded border border-white/10 bg-ink-950 px-4 py-2 font-mono text-xs text-mist-300">
            <Truck className="h-4 w-4 text-signal-400" />
            <span>940,000+ UNITS BUFFER INVENTORY</span>
          </div>
        </div>

        {/* Hub Selector Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {dispatchHubs.map((hub, idx) => {
            const isSelected = activeHubIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`hud-panel corner-brackets flex flex-col p-6 text-left transition-all rounded-md ${
                  isSelected
                    ? "hud-panel-active"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-signal-400 font-bold">{hub.coords}</span>
                  <span className="flex items-center gap-1.5 text-cyber-emerald text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyber-emerald animate-pulse" />
                    ONLINE
                  </span>
                </div>

                <h3 className="mt-3 font-display text-lg font-bold text-white">
                  {hub.hub}
                </h3>
                <p className="mt-1 font-body text-xs text-mist-400 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-signal-400 shrink-0" />
                  <span>{hub.location}</span>
                </p>

                <div className="mt-4 pt-4 border-t border-white/5 space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-mist-400">
                    <span>Stock Reserve:</span>
                    <span className="text-white font-semibold">{hub.inventoryUnits}</span>
                  </div>
                  <div className="flex justify-between text-mist-400">
                    <span>Dispatch SLA:</span>
                    <span className="text-signal-400 font-bold">{hub.sla}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Hub Interactive Radar Simulation */}
        <div className="mt-8 rounded-lg border border-white/15 bg-ink-950 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Visual Radar Container */}
            <div className="lg:col-span-6 relative aspect-video overflow-hidden rounded-md border border-white/10 bg-ink-900">
              <img
                src="/images/warehouse.jpg"
                alt="Khanyanathi30 automated fulfillment warehouse"
                className="h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 scanline pointer-events-none opacity-30" />

              {/* Radar Sweep Reticle */}
              <div className="pointer-events-none absolute right-6 top-6 h-32 w-32 rounded-full border border-signal-400/30 overflow-hidden">
                <div className="h-full w-full radar-sweep" />
              </div>

              {/* Pin Overlay */}
              <div className="absolute left-8 bottom-8 rounded bg-ink-950/90 p-4 border border-signal-400/40 font-mono text-xs backdrop-blur-md">
                <div className="flex items-center gap-2 text-signal-400 font-bold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>ACTIVE REGIONAL HUB TELEMETRY</span>
                </div>
                <p className="mt-1 text-white text-sm font-display font-semibold">
                  {activeHub.location}
                </p>
                <p className="mt-1 text-mist-400 text-[11px]">
                  COVERAGE: {activeHub.coverage}
                </p>
              </div>
            </div>

            {/* Hub Metrics Sheet */}
            <div className="lg:col-span-6 space-y-4 font-mono">
              <div className="rounded-lg border border-white/10 bg-ink-900/60 p-5">
                <span className="text-xs uppercase text-mist-500 block">
                  PROVINCIAL REACH
                </span>
                <span className="mt-1 block font-display text-lg font-bold text-white">
                  {activeHub.coverage}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/10 bg-ink-900/60 p-4">
                  <span className="text-[11px] uppercase text-mist-500 flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-signal-400" /> DISPATCH SLA
                  </span>
                  <span className="mt-2 block font-display text-xl font-bold text-signal-400">
                    {activeHub.sla}
                  </span>
                </div>

                <div className="rounded-lg border border-white/10 bg-ink-900/60 p-4">
                  <span className="text-[11px] uppercase text-mist-500 flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-cyber-emerald" /> HUB STATUS
                  </span>
                  <span className="mt-2 block font-display text-xs font-bold text-cyber-emerald">
                    {activeHub.status}
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-ink-900/60 p-4 text-xs text-mist-300 font-body leading-relaxed">
                <span className="font-mono text-signal-400 block mb-1 font-semibold">
                  EMERGENCY SHIFT RESTOCK GUARANTEE:
                </span>
                Same-day dedicated courier replenishment available for Tier 2 and Tier 3 enterprise accounts when catastrophic stockouts threaten production.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

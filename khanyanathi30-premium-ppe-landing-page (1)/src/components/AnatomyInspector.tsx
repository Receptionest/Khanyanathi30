import { useState } from "react";
import { anatomyLayers, type AnatomyLayer } from "../data";
import { sound } from "../utils/audio";
import { 
  Cpu, 
  ShieldAlert, 
  Check, 
  Crosshair, 
  Sparkles,
  Info
} from "lucide-react";

export default function AnatomyInspector() {
  const [activeLayer, setActiveLayer] = useState<AnatomyLayer>(anatomyLayers[0]);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);

  const handleLayerSelect = (layer: AnatomyLayer) => {
    sound.playScan();
    setActiveLayer(layer);
    setActiveHotspot(0);
  };

  const handleHotspotClick = (idx: number) => {
    sound.playClick();
    setActiveHotspot(idx);
  };

  return (
    <section id="anatomy" className="relative scroll-mt-20 overflow-hidden bg-ink-950 py-20 lg:py-32 border-t border-white/10">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 tech-grid-dense opacity-40" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-signal-400/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal-400">
              <Crosshair className="h-4 w-4" />
              <span>3D DIGITAL TWIN // ANATOMY SCANNER</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              EXPLODED LAYER ARCHITECTURE
            </h2>
            <p className="mt-4 max-w-2xl font-body text-mist-300 text-sm sm:text-base">
              Inspect how Khanyanathi30 re-engineers conventional industrial PPE from passive plastic into an active, multi-layer shock deflection and telemetry system.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 rounded border border-white/10 bg-ink-900/80 px-4 py-2 font-mono text-xs text-mist-300 backdrop-blur-md">
            <ShieldAlert className="h-4 w-4 text-signal-400" />
            <span>TESTED UNDER SANS 1372:2018 AT SABS PRETORIA</span>
          </div>
        </div>

        {/* Layer Selector Bar */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {anatomyLayers.map((layer) => {
            const isSelected = activeLayer.id === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => handleLayerSelect(layer)}
                className={`flex shrink-0 items-center gap-3 rounded-sm border px-4 py-3 font-mono text-xs uppercase tracking-wider transition-all ${
                  isSelected
                    ? "border-signal-400 bg-signal-400/15 text-signal-300 shadow-[0_0_20px_rgba(255,170,20,0.25)]"
                    : "border-white/10 bg-ink-900/60 text-mist-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${isSelected ? "bg-signal-400 animate-pulse" : "bg-white/20"}`} />
                <span className="font-semibold">{layer.name}</span>
                <span className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] text-mist-400 border border-white/10">
                  {layer.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Inspection Workspace: Left 3D View with Pins, Right Live Telemetry */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left: Exploded 3D Render Canvas with Interactive Hotspots */}
          <div className="lg:col-span-7">
            <div className="hud-panel corner-brackets relative overflow-hidden rounded-md border border-white/15 bg-ink-900 p-2 shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-ink-950 px-4 py-2.5 font-mono text-xs">
                <div className="flex items-center gap-2 text-mist-300">
                  <Cpu className="h-4 w-4 text-signal-400" />
                  <span>LAYER VIEW: {activeLayer.tag}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-mist-400">
                  <span>RES: 4K PHOTOGRAMMETRY</span>
                  <span className="text-signal-400">HOTSPOTS: {activeLayer.hotspots.length}</span>
                </div>
              </div>

              {/* Exploded Render Visual Container */}
              <div className="relative aspect-[16/11] overflow-hidden rounded bg-ink-950">
                <img
                  src="/images/k30-exploded-helmet.jpg"
                  alt="K30 Exploded 3D Industrial Safety Helmet Architecture"
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                />

                {/* Cyber Scanline Overlay */}
                <div className="absolute inset-0 scanline pointer-events-none opacity-30" />

                {/* Laser Grid Coordinate Overlay */}
                <div className="pointer-events-none absolute left-4 bottom-4 font-mono text-[10px] text-mist-500">
                  SYS: K30-APEX // AXIS: [X: 142.2 Y: 89.4 Z: 310.1]
                </div>

                {/* Dynamic Interactive Hotspot Pins */}
                {activeLayer.hotspots.map((spot, idx) => {
                  const isActive = activeHotspot === idx;
                  return (
                    <div
                      key={idx}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30"
                      onClick={() => handleHotspotClick(idx)}
                    >
                      <div className="relative flex items-center justify-center">
                        <span
                          className={`absolute inline-flex h-8 w-8 animate-ping rounded-full ${
                            isActive ? "bg-signal-400 opacity-75" : "bg-white/20 opacity-40"
                          }`}
                        />
                        <button
                          type="button"
                          className={`flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs font-bold transition-all shadow-lg ${
                            isActive
                              ? "bg-signal-400 text-ink-950 scale-110 shadow-[0_0_20px_rgba(255,170,20,0.8)] ring-2 ring-white"
                              : "bg-ink-900/90 text-white border border-white/30 hover:border-signal-400 hover:text-signal-400"
                          }`}
                          aria-label={spot.title}
                        >
                          {idx + 1}
                        </button>
                      </div>

                      {/* Hotspot Hover / Active Label */}
                      {isActive && (
                        <div className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 whitespace-nowrap rounded border border-signal-400/60 bg-ink-950/95 px-3 py-1.5 font-mono text-xs text-white shadow-xl backdrop-blur-md">
                          <p className="font-bold text-signal-400">{spot.title}</p>
                          <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-signal-400" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Active Hotspot Detail Overlay Callout */}
                {activeHotspot !== null && activeLayer.hotspots[activeHotspot] && (
                  <div className="absolute inset-x-4 bottom-4 rounded-md border border-signal-400/30 bg-ink-950/95 p-3.5 backdrop-blur-md shadow-2xl">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-signal-400 font-mono text-xs font-bold text-ink-950">
                        {activeHotspot + 1}
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-bold text-white">
                          {activeLayer.hotspots[activeHotspot].title}
                        </h4>
                        <p className="mt-1 font-body text-xs text-mist-300 leading-relaxed">
                          {activeLayer.hotspots[activeHotspot].detail}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Technical Spec Sheet & Live Telemetry Readout */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              {/* Layer Title & Material */}
              <div className="rounded-lg border border-white/10 bg-ink-900/70 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between font-mono text-xs text-signal-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>LAYER COMPONENT ARCHITECTURE</span>
                  </span>
                  <span>REV: 2026.1</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">
                  {activeLayer.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-mist-400">
                  {activeLayer.subtitle}
                </p>

                <p className="mt-4 font-body text-sm text-mist-300 leading-relaxed">
                  {activeLayer.description}
                </p>

                <div className="mt-5 rounded bg-ink-950/70 p-3 border border-white/5 font-mono text-xs">
                  <span className="text-mist-500 block text-[10.5px]">ENGINEERED SUBSTRATE:</span>
                  <span className="font-semibold text-white">{activeLayer.material}</span>
                </div>
              </div>

              {/* Real-time Telemetry Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono">
                {activeLayer.specs.map((spec, i) => (
                  <div key={i} className="rounded-lg border border-white/10 bg-ink-900/60 p-4">
                    <span className="text-[11px] uppercase text-mist-500 block">
                      {spec.label}
                    </span>
                    <span className="mt-1.5 font-display text-xl font-bold text-signal-400">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Certified Standards Alignment */}
              <div className="rounded-lg border border-white/10 bg-ink-900/60 p-4">
                <div className="flex items-center gap-2 font-mono text-xs text-mist-400">
                  <Info className="h-3.5 w-3.5 text-cyber-emerald" />
                  <span>ACCREDITED STANDARDS CERTIFICATION:</span>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {activeLayer.standards.map((std, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded bg-signal-400/10 px-2.5 py-1 font-mono text-xs text-signal-400 border border-signal-400/30"
                    >
                      <Check className="h-3 w-3" />
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

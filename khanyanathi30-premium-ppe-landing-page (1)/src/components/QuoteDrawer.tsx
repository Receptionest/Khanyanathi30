import { useState, type FormEvent } from "react";
import confetti from "canvas-confetti";
import { sound } from "../utils/audio";
import { 
  X, 
  Trash2, 
  Send, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Layers
} from "lucide-react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  category?: string;
  isBundle?: boolean;
};

type QuoteDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onClear: () => void;
};

export default function QuoteDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClear,
}: QuoteDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");
  const [workerCount, setWorkerCount] = useState<number>(100);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    siteLocation: "Gauteng (JHB Central)",
    notes: "",
  });

  if (!isOpen) return null;

  const totalUnitCost = items.reduce((sum, item) => sum + item.price, 0);
  const estimatedRosterCost = totalUnitCost * workerCount;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sound.playSuccess();

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#FFAA14", "#FFC44D", "#00F0FF", "#10B981"],
      });
    } catch {
      // fallback
    }

    const ref = `K30-RFQ-${Math.floor(1000 + Math.random() * 9000)}-ZA`;
    setReferenceCode(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    onClear();
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-ink-950/80 backdrop-blur-md">
      <div className="hud-panel relative flex h-full w-full max-w-xl flex-col border-l border-white/20 bg-ink-950 p-6 sm:p-8 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-signal-400 text-ink-950">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                FLEET RFQ CONFIGURATOR
              </h3>
              <p className="font-mono text-xs text-signal-400">
                {items.length} ACTIVE SPECIFICATION UNITS LOADED
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="flex h-9 w-9 items-center justify-center rounded border border-white/10 text-mist-400 hover:text-white hover:border-white/25 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          /* Submission Confirmation Card */
          <div className="my-auto py-12 text-center font-mono">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald/40 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="mt-6 font-display text-2xl font-bold text-white">
              FLEET REQUEST TRANSMITTED
            </h4>
            <div className="mt-4 rounded bg-ink-900 p-4 border border-white/10 inline-block text-xs">
              <span className="text-mist-500 block">OFFICIAL ENQUIRY DOCKET REF:</span>
              <span className="text-signal-400 font-bold text-base tracking-widest">{referenceCode}</span>
            </div>
            <p className="mt-4 font-body text-sm text-mist-300 max-w-sm mx-auto leading-relaxed">
              Your RFP has been dispatched to our Johannesburg regional engineering desk. A dedicated safety engineer will confirm batch stock availability and dispatch terms within 24 hours.
            </p>

            <button
              onClick={handleReset}
              className="mt-8 rounded bg-signal-400 px-6 py-3 font-display text-xs font-bold uppercase text-ink-950 hover:bg-signal-300 transition-all"
            >
              RETURN TO PLATFORM
            </button>
          </div>
        ) : (
          /* Main RFQ Form & Cart Details */
          <form onSubmit={handleSubmit} className="mt-6 flex-1 flex flex-col justify-between space-y-6">
            {/* Selected Items Manifest */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-mist-400 mb-2">
                <span>MANIFEST LINE ITEMS:</span>
                {items.length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      onClear();
                    }}
                    className="text-red-400 hover:underline"
                  >
                    CLEAR MANIFEST
                  </button>
                )}
              </div>

              {items.length === 0 ? (
                <div className="rounded border border-dashed border-white/10 p-6 text-center font-mono text-xs text-mist-500">
                  NO HARDWARE UNITS CURRENTLY CONFIGURED. ADD ROLES OR PRODUCTS FROM THE PAGE TO GENERATE PRICING.
                </div>
              ) : (
                <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded bg-ink-900 p-3 border border-white/5 font-mono text-xs"
                    >
                      <div>
                        <span className="text-white font-semibold block">{item.name}</span>
                        <span className="text-[10px] text-signal-400">
                          {item.isBundle ? "ROLE BUNDLE" : "SINGLE SKU"}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-white font-bold">
                          R {item.price.toLocaleString("en-ZA")}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            sound.playClick();
                            onRemoveItem(item.id);
                          }}
                          className="text-mist-500 hover:text-red-400"
                          title="Remove item"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Workforce Headcount Input */}
              <div className="mt-4 rounded bg-ink-900 p-3.5 border border-white/10 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-mist-400">ESTIMATED SITE WORKFORCE:</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="10"
                      max="10000"
                      value={workerCount}
                      onChange={(e) => setWorkerCount(Math.max(1, Number(e.target.value)))}
                      className="w-20 rounded bg-ink-950 px-2 py-1 text-center font-bold text-signal-400 border border-white/20"
                    />
                    <span className="text-mist-500 text-[10px]">WORKERS</span>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5 flex justify-between items-baseline">
                  <span className="text-mist-500 text-[11px]">PROJECTED FLEET BATCH:</span>
                  <span className="text-signal-400 font-display text-lg font-bold">
                    R {estimatedRosterCost.toLocaleString("en-ZA")}
                  </span>
                </div>
              </div>
            </div>

            {/* Corporate Contact Fields */}
            <div className="space-y-3 font-mono text-xs">
              <span className="text-signal-400 block font-bold tracking-wider">
                CORPORATE & SITE CREDENTIALS:
              </span>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-mist-500 block mb-1">OFFICER NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sipho Dlamini"
                    className="w-full rounded bg-ink-900 border border-white/15 px-3 py-2 text-white focus:border-signal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-mist-500 block mb-1">WORK EMAIL *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="officer@company.co.za"
                    className="w-full rounded bg-ink-900 border border-white/15 px-3 py-2 text-white focus:border-signal-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-mist-500 block mb-1">ENTERPRISE NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Mining / Energy Co (Pty) Ltd"
                    className="w-full rounded bg-ink-900 border border-white/15 px-3 py-2 text-white focus:border-signal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-mist-500 block mb-1">CONTACT PHONE *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+27 11 000 0000"
                    className="w-full rounded bg-ink-900 border border-white/15 px-3 py-2 text-white focus:border-signal-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-mist-500 block mb-1">PRIMARY DISPATCH REGION</label>
                <select
                  value={formData.siteLocation}
                  onChange={(e) => setFormData({ ...formData, siteLocation: e.target.value })}
                  className="w-full rounded bg-ink-900 border border-white/15 px-3 py-2 text-white focus:border-signal-400 focus:outline-none"
                >
                  <option value="Gauteng (JHB Central Hub)">Gauteng (Johannesburg Central Hub)</option>
                  <option value="Mpumalanga Coal Basin">Mpumalanga Coal Basin</option>
                  <option value="Limpopo Platinum Bushveld">Limpopo Platinum Bushveld</option>
                  <option value="KwaZulu-Natal (Durban Port Hub)">KwaZulu-Natal (Durban Port Hub)</option>
                  <option value="Western Cape (Cape Town Hub)">Western Cape (Cape Town Maritime Hub)</option>
                  <option value="Northern Cape Renewable / Iron Ore">Northern Cape Renewable / Iron Ore Basin</option>
                </select>
              </div>

              <div>
                <label className="text-mist-500 block mb-1">SPECIAL SITE HAZARDS (OPTIONAL)</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Deep reef temperatures over 38°C, 40-cal substation arc hazards..."
                  className="w-full rounded bg-ink-900 border border-white/15 px-3 py-2 text-white focus:border-signal-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="border-t border-white/10 pt-4">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded bg-signal-400 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-ink-950 shadow-[0_0_25px_rgba(255,170,20,0.4)] hover:bg-signal-300 transition-all"
              >
                <Send className="h-4 w-4" />
                <span>DISPATCH OFFICIAL FLEET RFP</span>
              </button>

              <div className="mt-3 flex items-center justify-center gap-4 text-[10px] font-mono text-mist-500">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> SLA 24H RESPONSE
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FileText className="h-3 w-3" /> SANS VERIFIED
                </span>
                <span>•</span>
                <span>COMMERCIAL NDA PROTECTED</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

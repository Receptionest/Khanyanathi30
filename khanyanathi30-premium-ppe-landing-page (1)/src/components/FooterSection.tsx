import { sound } from "../utils/audio";
import { 
  ShieldAlert, 
  MapPin, 
  Phone, 
  Mail, 
  FileCheck2, 
  Check, 
  ArrowUp,
  Globe
} from "lucide-react";

export default function FooterSection() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-ink-950 border-t border-white/10 pt-16 pb-24 font-mono text-xs">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top Grid */}
        <div className="grid gap-12 lg:grid-cols-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-signal-400 text-ink-950">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                KHANYANATHI<span className="text-signal-400">30</span>
              </span>
            </div>

            <p className="font-body text-sm text-mist-400 max-w-md leading-relaxed">
              Khanyanathi30 (Pty) Ltd is South Africa’s premier industrial PPE and tactical body armour supplier for mining, petrochemical, high-voltage transmission, and mega civil infrastructure operations.
            </p>

            <div className="space-y-1.5 text-mist-400 pt-2 text-[11px]">
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-signal-400" />
                <span>OHS ACT 85 OF 1993 STATUTORY CONFORMITY</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-signal-400" />
                <span>MINE HEALTH & SAFETY ACT SECTION 54 BUFFER ASSURANCE</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-signal-400" />
                <span>SANS 1372 / 12702 / 2237 ACCREDITED TESTING</span>
              </div>
            </div>
          </div>

          {/* Regional Logistics Hubs */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-signal-400 font-bold tracking-wider block">
              REGIONAL DISPATCH HUBS (48H SLA):
            </span>

            <div className="space-y-3 text-mist-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-signal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Johannesburg Central Hub</span>
                  <span className="text-mist-500 text-[10.5px]">
                    14 Elandsfontein Logistics Park, Jet Park, Gauteng 1459
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-signal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Durban Harbour Freight Hub</span>
                  <span className="text-mist-500 text-[10.5px]">
                    Bayhead Container Terminal Zone, Durban Port, KZN 4001
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-signal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Cape Town Maritime & Renewable Hub</span>
                  <span className="text-mist-500 text-[10.5px]">
                    Montague Industrial Corridor, Milnerton, Western Cape 7441
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Communications & Emergency Line */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-signal-400 font-bold tracking-wider block">
              ENTERPRISE DESK:
            </span>

            <div className="space-y-2.5 text-mist-300">
              <a
                href="tel:+27115550330"
                className="flex items-center gap-2.5 hover:text-signal-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-signal-400" />
                <span>+27 11 555 0330 (HQ JHB)</span>
              </a>

              <a
                href="mailto:procurement@khanyanathi30.co.za"
                className="flex items-center gap-2.5 hover:text-signal-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-signal-400" />
                <span>procurement@khanyanathi30.co.za</span>
              </a>

              <div className="pt-2">
                <span className="text-mist-500 block text-[10.5px]">EMERGENCY SHIFT HOTLINE:</span>
                <span className="text-cyber-emerald font-bold">0800-K30-DISPATCH (24/7)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Accreditations */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-mist-500 text-[11px]">
          <div>
            © 2026 KHANYANATHI30 (PTY) LTD · REG: 2019/456780/07 · PROUDLY SOUTH AFRICAN
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-mist-400">
              <FileCheck2 className="h-3.5 w-3.5 text-signal-400" />
              <span>SABS ISO 9001:2015</span>
            </span>
            <span className="flex items-center gap-1.5 text-mist-400">
              <Globe className="h-3.5 w-3.5 text-cyber-cyan" />
              <span>B-BBEE LEVEL 1 CONTRIBUTOR</span>
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-signal-400 hover:underline"
            >
              <span>TOP</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

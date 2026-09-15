import { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnatomyInspector from "./components/AnatomyInspector";
import RoleMatrixConfigurator from "./components/RoleMatrixConfigurator";
import FleetRoiEngine from "./components/FleetRoiEngine";
import ProductCatalog from "./components/ProductCatalog";
import SansVerifierConsole from "./components/SansVerifierConsole";
import DispatchHubRadar from "./components/DispatchHubRadar";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import QuoteDrawer from "./components/QuoteDrawer";
import FloatingHudDock from "./components/FloatingHudDock";
import FooterSection from "./components/FooterSection";
import type { CatalogItem, RoleBundle } from "./data";

type CartItem = {
  id: string;
  name: string;
  price: number;
  category?: string;
  isBundle?: boolean;
};

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "preset-apex",
      name: "K30 Apex-400 Industrial Shell",
      price: 228,
      category: "HEAD",
    },
    {
      id: "preset-halo",
      name: "Halo-470 Hi-Vis Modular Jacket",
      price: 336,
      category: "BODY",
    },
  ]);

  const handleOpenQuote = useCallback(() => {
    setIsQuoteOpen(true);
  }, []);

  const handleCloseQuote = useCallback(() => {
    setIsQuoteOpen(false);
  }, []);

  const handleAddCatalogItem = useCallback((item: CatalogItem) => {
    setCartItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.bulkDiscountPrice,
          category: item.category,
        },
      ];
    });
  }, []);

  const handleAddRoleBundle = useCallback((bundle: RoleBundle) => {
    setCartItems((prev) => {
      const bundleId = `bundle-${bundle.id}`;
      if (prev.some((i) => i.id === bundleId)) return prev;
      return [
        ...prev,
        {
          id: bundleId,
          name: `${bundle.role} (5-Piece Kit)`,
          price: bundle.unitCost,
          isBundle: true,
        },
      ];
    });
  }, []);

  const handleRemoveCartItem = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  return (
    <div className="min-h-screen bg-ink-950 font-body text-bone-50 selection:bg-signal-400 selection:text-ink-950">
      {/* Top Main Navbar */}
      <Navbar
        quoteCount={cartItems.length}
        onOpenQuote={handleOpenQuote}
      />

      <main id="main-content">
        {/* Revolutionary Hero with Mode Comparison & Telemetry Avatar */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 3D Exploded Anatomy Inspector */}
        <AnatomyInspector />

        {/* Enterprise Role Matrix Configurator */}
        <RoleMatrixConfigurator
          onAddRoleToQuote={handleAddRoleBundle}
          onOpenQuote={handleOpenQuote}
        />

        {/* Executive Fleet ROI & Hazard Engine */}
        <FleetRoiEngine onOpenQuote={handleOpenQuote} />

        {/* Certified Product Catalog & SKU Browser */}
        <ProductCatalog
          onAddToCart={handleAddCatalogItem}
          onOpenQuote={handleOpenQuote}
        />

        {/* Cryptographic SANS Certificate Verification Console */}
        <SansVerifierConsole />

        {/* 3-Hub Satellite Dispatch Radar */}
        <DispatchHubRadar />

        {/* Commercial Enterprise Tiers */}
        <PricingSection onOpenQuote={handleOpenQuote} />

        {/* Legal & Regulatory FAQ */}
        <FaqSection onOpenQuote={handleOpenQuote} />
      </main>

      {/* Corporate Compliance Footer */}
      <FooterSection />

      {/* Interactive Bottom Cyber HUD Dock */}
      <FloatingHudDock
        quoteCount={cartItems.length}
        onOpenQuote={handleOpenQuote}
      />

      {/* Slide-over RFQ Drawer */}
      <QuoteDrawer
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        items={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onClear={handleClearCart}
      />
    </div>
  );
}

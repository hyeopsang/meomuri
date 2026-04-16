"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import HeroSection from "./HeroSection";
import RegionSection from "./RegionSection";
import VibeTagFilter from "./VibeTagFilter";
import GuesthouseGrid from "./GuesthouseGrid";
import HostBanner from "./HostBanner";
import Footer from "./Footer";
import { MOCK_GUESTHOUSES } from "../_lib/mock-data";

export default function MainPage() {
  const [activeVibe, setActiveVibe] = useState("전체");

  const filtered =
    activeVibe === "전체"
      ? MOCK_GUESTHOUSES
      : MOCK_GUESTHOUSES.filter((gh) => gh.tags.includes(activeVibe));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <RegionSection />
      <div className="border-t border-gray-100" />
      <VibeTagFilter active={activeVibe} onChange={setActiveVibe} />
      <GuesthouseGrid
        guesthouses={filtered}
        activeVibe={activeVibe}
        onResetVibe={() => setActiveVibe("전체")}
      />
      <HostBanner />
      <Footer />
      <BottomNav />
    </div>
  );
}

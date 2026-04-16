"use client";

import { useState, useCallback } from "react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import SearchHeader from "./SearchHeader";
import ResultGrid from "./ResultGrid";
import FilterSheet from "./FilterSheet";
import { MOCK_GUESTHOUSES } from "../_lib/mock-data";
import { applyFilter } from "../_lib/filter-utils";
import { FilterState, DEFAULT_FILTER } from "@/types/filter";

export default function GuestHousesPage() {
  const [filter, setFilter] = useState<FilterState>(DEFAULT_FILTER);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleFilterChange = useCallback((partial: Partial<FilterState>) => {
    setFilter((prev) => ({ ...prev, ...partial }));
  }, []);

  const handleReset = useCallback(() => {
    setFilter(DEFAULT_FILTER);
  }, []);

  const filtered = applyFilter(MOCK_GUESTHOUSES, filter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SearchHeader filter={filter} onEdit={() => {}} />
      <ResultGrid
        guesthouses={filtered}
        total={MOCK_GUESTHOUSES.length}
        filter={filter}
        showMap={showMap}
        onToggleMap={() => setShowMap((v) => !v)}
        onFilterChange={handleFilterChange}
        onOpenSheet={() => setSheetOpen(true)}
        onReset={handleReset}
      />
      <FilterSheet
        open={sheetOpen}
        filter={filter}
        onChange={handleFilterChange}
        onClose={() => setSheetOpen(false)}
        onReset={handleReset}
      />
      <BottomNav />
    </div>
  );
}

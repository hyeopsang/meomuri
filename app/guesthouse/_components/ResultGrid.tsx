"use client";

import { Map } from "lucide-react";
import GuesthouseCard from "@/components/guesthouse/GuesthouseCard";
import FilterBar from "./FilterBar";
import MapView from "./MapView";
import { Guesthouse } from "@/types/guesthouse";
import { FilterState, SortOption } from "@/types/filter";

interface Props {
  guesthouses: Guesthouse[];
  total: number;
  filter: FilterState;
  showMap: boolean;
  onToggleMap: () => void;
  onFilterChange: (f: Partial<FilterState>) => void;
  onOpenSheet: () => void;
  onReset: () => void;
}

export default function ResultGrid({
  guesthouses,
  total,
  filter,
  showMap,
  onToggleMap,
  onFilterChange,
  onOpenSheet,
  onReset,
}: Props) {
  // SortOption 타입으로 명시적 핸들러
  const handleSortChange = (sort: SortOption) => onFilterChange({ sort });

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <FilterBar
          filter={filter}
          onChange={onFilterChange}
          onOpenSheet={onOpenSheet}
        />

        {/* 모바일·태블릿 필터 버튼 */}
        <button
          onClick={onOpenSheet}
          className="lg:hidden flex items-center gap-2 text-sm font-medium border border-gray-200 rounded-xl px-4 py-2 hover:border-[#4F46E5] hover:text-[#4F46E5] transition-colors shrink-0"
        >
          <span>🎛️</span>
          필터
        </button>

        {/* 지도 토글 — 태블릿 이상 */}
        <button
          onClick={onToggleMap}
          className="hidden md:flex items-center gap-2 text-sm font-semibold border border-gray-200 rounded-xl px-4 py-2 hover:border-[#4F46E5] hover:text-[#4F46E5] transition-colors shrink-0 ml-auto lg:ml-0"
        >
          <Map className="w-4 h-4" />
          {showMap ? "목록" : "지도"}
        </button>
      </div>

      {/* 결과 수 */}
      <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
        <span className="font-semibold text-gray-900">
          {guesthouses.length}개
        </span>
        {guesthouses.length < total && (
          <span className="text-gray-400"> / 전체 {total}개</span>
        )}
        {filter.region && (
          <span className="ml-1 text-gray-400">· {filter.region}</span>
        )}
      </p>

      {showMap ? (
        <MapView />
      ) : guesthouses.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {guesthouses.map((gh) => (
            <GuesthouseCard key={gh.id} gh={gh} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center py-20 text-gray-400">
          <span className="text-5xl mb-4">🔍</span>
          <p className="text-base font-medium text-gray-600 mb-2">
            조건에 맞는 게스트하우스가 없어요
          </p>
          <p className="text-sm text-gray-400 mb-6">필터를 조정해보세요</p>
          <button
            onClick={onReset}
            className="text-sm font-semibold text-white bg-[#4F46E5] px-6 py-3 rounded-xl hover:bg-[#4338CA] transition-colors"
          >
            필터 초기화
          </button>
        </div>
      )}

      {/* 모바일 지도 토글 하단 고정 */}
      <div className="md:hidden fixed bottom-20 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={onToggleMap}
          className="flex items-center gap-2 bg-[#4F46E5] text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-lg hover:bg-[#4338CA] transition-colors"
        >
          <Map className="w-4 h-4" />
          {showMap ? "목록 보기" : "지도 보기"}
        </button>
      </div>
    </main>
  );
}

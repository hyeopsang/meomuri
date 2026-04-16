"use client";

import { Search } from "lucide-react";

export default function MobileSearchBar() {
  return (
    <div className="md:hidden px-4 pb-4">
      <button className="w-full flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm active:shadow-none transition-shadow text-left">
        <div className="w-8 h-8 bg-[#4F46E5] rounded-xl flex items-center justify-center shrink-0">
          <Search className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 leading-none mb-0.5">
            어디로 떠나고 싶으세요?
          </p>
          <p className="text-xs text-gray-400">
            어디든지 · 언제든지 · 게스트 추가
          </p>
        </div>
      </button>
    </div>
  );
}

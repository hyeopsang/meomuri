"use client";

import { Search, X } from "lucide-react";
import { FilterState } from "@/types/filter";

interface Props {
  filter: FilterState;
  onEdit: () => void;
}

export default function SearchHeader({ filter, onEdit }: Props) {
  const hasSearch = filter.region || filter.checkIn || filter.checkOut;

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-200">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-3">
        <button
          onClick={onEdit}
          className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 hover:bg-gray-100 transition-colors w-full md:w-auto text-left"
        >
          <Search className="w-4 h-4 text-[#4F46E5] shrink-0" />
          <div className="flex items-center gap-2 text-sm flex-1 min-w-0">
            {hasSearch ? (
              <>
                <span className="font-semibold text-gray-900 truncate">
                  {filter.region || "전체"}
                </span>
                {filter.checkIn && (
                  <>
                    <span className="text-gray-300">·</span>
                    <span className="text-gray-600 whitespace-nowrap">
                      {filter.checkIn} ~ {filter.checkOut || "?"}
                    </span>
                  </>
                )}
                <span className="text-gray-300">·</span>
                <span className="text-gray-600 whitespace-nowrap">
                  {filter.guests}명
                </span>
              </>
            ) : (
              <span className="text-gray-400">어디로, 언제, 몇 명?</span>
            )}
          </div>
          {hasSearch && (
            <div className="w-6 h-6 rounded-xl border border-gray-300 flex items-center justify-center shrink-0">
              <X className="w-3 h-3 text-gray-500" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

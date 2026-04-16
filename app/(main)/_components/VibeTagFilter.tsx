"use client";

import { VIBE_TAGS } from "../_lib/mock-data";

interface Props {
  active: string;
  onChange: (tag: string) => void;
}

export default function VibeTagFilter({ active, onChange }: Props) {
  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-200">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide py-3">
          {VIBE_TAGS.map((tag) => (
            <button
              key={tag.label}
              onClick={() => onChange(tag.label)}
              className={`flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-xl shrink-0 transition-all text-sm font-medium ${
                active === tag.label
                  ? "bg-[#4F46E5] text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="text-base leading-none">{tag.emoji}</span>
              <span className="text-xs md:text-sm whitespace-nowrap">
                {tag.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { ChevronDown } from "lucide-react";
import { SortOption, SORT_OPTIONS } from "@/types/filter";
import { useState, useRef, useEffect } from "react";

interface Props {
  value: SortOption;
  onChange: (v: SortOption) => void;
}

export default function SortSelect({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = SORT_OPTIONS.find((o) => o.value === value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl px-4 py-2 hover:border-[#4F46E5] hover:text-[#4F46E5] transition-colors"
      >
        {current?.label}
        <ChevronDown className="w-3.5 h-3.5" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-10 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-indigo-50 ${
                  value === opt.value
                    ? "font-semibold text-[#4F46E5]"
                    : "text-gray-600"
                }`}
              >
                {opt.value === value && <span className="mr-2">✓</span>}
                {opt.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

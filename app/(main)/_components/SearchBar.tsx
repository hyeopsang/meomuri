"use client";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

type Field = "region" | "checkin" | "checkout" | "guests" | null;

export default function SearchBar() {
  const [active, setActive] = useState<Field>(null);
  const [region, setRegion] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setActive(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const fieldCls = (field: Field) =>
    `flex flex-col items-start px-4 lg:px-6 py-3 transition-all text-left cursor-pointer rounded-xl ${
      active === field
        ? "bg-white shadow-md ring-2 ring-inset ring-[#4F46E5] z-10"
        : "hover:bg-gray-50"
    }`;

  return (
    <div className="w-full max-w-3xl mx-auto" ref={ref}>
      <div className="flex items-center bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow divide-x divide-gray-200">
        <button
          onClick={() => setActive(active === "region" ? null : "region")}
          className={`flex-1 ${fieldCls("region")}`}
        >
          <span className="text-[10px] lg:text-xs font-bold text-[#4F46E5] tracking-wide uppercase">
            어디로
          </span>
          <span
            className={`text-xs lg:text-sm mt-0.5 truncate w-full ${region ? "text-gray-900" : "text-gray-400"}`}
          >
            {region || "지역 검색"}
          </span>
        </button>

        <button
          onClick={() => setActive(active === "checkin" ? null : "checkin")}
          className={`flex-1 hidden sm:flex flex-col ${fieldCls("checkin")}`}
        >
          <span className="text-[10px] lg:text-xs font-bold text-[#4F46E5] tracking-wide uppercase">
            체크인
          </span>
          <span
            className={`text-xs lg:text-sm mt-0.5 ${checkIn ? "text-gray-900" : "text-gray-400"}`}
          >
            {checkIn || "날짜 선택"}
          </span>
        </button>

        <button
          onClick={() => setActive(active === "checkout" ? null : "checkout")}
          className={`flex-1 hidden sm:flex flex-col ${fieldCls("checkout")}`}
        >
          <span className="text-[10px] lg:text-xs font-bold text-[#4F46E5] tracking-wide uppercase">
            체크아웃
          </span>
          <span
            className={`text-xs lg:text-sm mt-0.5 ${checkOut ? "text-gray-900" : "text-gray-400"}`}
          >
            {checkOut || "날짜 선택"}
          </span>
        </button>

        <div className="flex items-center gap-2 pr-2 pl-2 lg:pl-4">
          <button
            onClick={() => setActive(active === "guests" ? null : "guests")}
            className={`hidden sm:flex flex-col ${fieldCls("guests")} px-3 lg:px-4`}
          >
            <span className="text-[10px] lg:text-xs font-bold text-[#4F46E5] tracking-wide uppercase">
              인원
            </span>
            <span className="text-xs lg:text-sm text-gray-400 mt-0.5">
              {guests}명
            </span>
          </button>
          <button
            aria-label="검색"
            className="w-11 h-11 lg:w-12 lg:h-12 bg-[#4F46E5] hover:bg-[#4338CA] active:scale-95 rounded-xl flex items-center justify-center transition-all shrink-0"
          >
            <Search className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

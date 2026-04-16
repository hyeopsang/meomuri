"use client";

import { X } from "lucide-react";
import {
  FilterState,
  DEFAULT_FILTER,
  TYPE_OPTIONS,
  GENDER_OPTIONS,
  VIBE_OPTIONS,
  SPACE_OPTIONS,
} from "@/types/filter";
import { countActiveFilters } from "../_lib/filter-utils";

interface Props {
  open: boolean;
  filter: FilterState;
  onChange: (f: Partial<FilterState>) => void;
  onClose: () => void;
  onReset: () => void;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-gray-900 mb-3">{children}</h3>
  );
}

function CheckChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-sm px-4 py-2.5 rounded-xl border transition-all ${
        active
          ? "bg-[#4F46E5] text-white border-[#4F46E5]"
          : "bg-white text-gray-700 border-gray-200 hover:border-[#4F46E5] hover:text-[#4F46E5]"
      }`}
    >
      {label}
    </button>
  );
}

function toggleInArray(arr: string[], value: string): string[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export default function FilterSheet({
  open,
  filter,
  onChange,
  onClose,
  onReset,
}: Props) {
  const activeCount = countActiveFilters(filter);

  // DEFAULT_FILTER 기준으로 변경된 항목 수 표시
  const isDefault =
    filter.types.length === DEFAULT_FILTER.types.length &&
    filter.genderPolicy.length === DEFAULT_FILTER.genderPolicy.length &&
    filter.vibes.length === DEFAULT_FILTER.vibes.length &&
    filter.spaces.length === DEFAULT_FILTER.spaces.length &&
    filter.longTerm === DEFAULT_FILTER.longTerm &&
    filter.minPrice === DEFAULT_FILTER.minPrice &&
    filter.maxPrice === DEFAULT_FILTER.maxPrice;

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl max-h-[85vh] flex flex-col">
        {/* 헤더 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <button onClick={onClose} className="p-1">
            <X className="w-5 h-5 text-gray-700" />
          </button>
          <h2 className="text-base font-semibold text-gray-900">필터</h2>
          <button
            onClick={onReset}
            disabled={isDefault}
            className={`text-sm font-medium underline underline-offset-2 transition-colors ${
              isDefault
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            초기화
          </button>
        </div>

        {/* 필터 내용 */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-7">
          <div>
            <SectionTitle>숙박 타입</SectionTitle>
            <div className="flex gap-2 flex-wrap">
              {TYPE_OPTIONS.map((t) => (
                <CheckChip
                  key={t}
                  label={t}
                  active={filter.types.includes(t)}
                  onClick={() =>
                    onChange({ types: toggleInArray(filter.types, t) })
                  }
                />
              ))}
            </div>
          </div>

          <div>
            <SectionTitle>성별 정책</SectionTitle>
            <div className="flex gap-2 flex-wrap">
              {GENDER_OPTIONS.map((g) => (
                <CheckChip
                  key={g.value}
                  label={g.label}
                  active={filter.genderPolicy.includes(g.value)}
                  onClick={() =>
                    onChange({
                      genderPolicy: toggleInArray(filter.genderPolicy, g.value),
                    })
                  }
                />
              ))}
            </div>
          </div>

          <div>
            <SectionTitle>
              1박 가격
              <span className="text-sm font-normal text-gray-500 ml-2">
                ₩{filter.minPrice.toLocaleString()} ~ ₩
                {filter.maxPrice.toLocaleString()}
              </span>
            </SectionTitle>
            <input
              type="range"
              min={DEFAULT_FILTER.minPrice}
              max={DEFAULT_FILTER.maxPrice}
              step={1000}
              value={filter.maxPrice}
              onChange={(e) => onChange({ maxPrice: Number(e.target.value) })}
              className="w-full accent-[#4F46E5]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>₩{DEFAULT_FILTER.minPrice.toLocaleString()}</span>
              <span>₩{DEFAULT_FILTER.maxPrice.toLocaleString()}</span>
            </div>
          </div>

          <div>
            <SectionTitle>분위기</SectionTitle>
            <div className="flex gap-2 flex-wrap">
              {VIBE_OPTIONS.map((v) => (
                <CheckChip
                  key={v.value}
                  label={`${v.emoji} ${v.value}`}
                  active={filter.vibes.includes(v.value)}
                  onClick={() =>
                    onChange({ vibes: toggleInArray(filter.vibes, v.value) })
                  }
                />
              ))}
            </div>
          </div>

          <div>
            <SectionTitle>공용 공간</SectionTitle>
            <div className="flex gap-2 flex-wrap">
              {SPACE_OPTIONS.map((s) => (
                <CheckChip
                  key={s.value}
                  label={`${s.emoji} ${s.value}`}
                  active={filter.spaces.includes(s.value)}
                  onClick={() =>
                    onChange({ spaces: toggleInArray(filter.spaces, s.value) })
                  }
                />
              ))}
            </div>
          </div>

          <div>
            <SectionTitle>장기 투숙</SectionTitle>
            <button
              onClick={() => onChange({ longTerm: !filter.longTerm })}
              className={`flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border transition-all ${
                filter.longTerm
                  ? "border-[#4F46E5] bg-indigo-50"
                  : "border-gray-200"
              }`}
            >
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">
                  장기 할인 있는 곳만
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  7박 이상 할인 제공하는 게스트하우스
                </p>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${
                  filter.longTerm
                    ? "border-[#4F46E5] bg-[#4F46E5]"
                    : "border-gray-300"
                }`}
              >
                {filter.longTerm && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* 적용 버튼 */}
        <div className="px-6 py-4 border-t border-gray-100 shrink-0">
          <button
            onClick={onClose}
            className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold py-4 rounded-2xl transition-colors text-sm"
          >
            {activeCount > 0
              ? `필터 적용 · ${activeCount}개 활성`
              : "필터 적용"}
          </button>
        </div>
      </div>
    </>
  );
}

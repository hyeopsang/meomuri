"use client";

import { SlidersHorizontal } from "lucide-react";
import {
  FilterState,
  TYPE_OPTIONS,
  GENDER_OPTIONS,
  VIBE_OPTIONS,
  SPACE_OPTIONS,
} from "@/types/filter";
import { countActiveFilters } from "../_lib/filter-utils";
import SortSelect from "./SortSelect";

interface Props {
  filter: FilterState;
  onChange: (f: Partial<FilterState>) => void;
  onOpenSheet: () => void;
}

function ToggleChip({
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
      className={`text-sm px-4 py-2 rounded-xl border transition-all whitespace-nowrap ${
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

export default function FilterBar({ filter, onChange, onOpenSheet }: Props) {
  const activeCount = countActiveFilters(filter);

  return (
    <div className="hidden lg:flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1 flex-1">
      {/* 필터 전체 버튼 */}
      <button
        onClick={onOpenSheet}
        className={`flex items-center gap-2 text-sm px-4 py-2 rounded-xl border transition-all whitespace-nowrap shrink-0 ${
          activeCount > 0
            ? "bg-[#4F46E5] text-white border-[#4F46E5]"
            : "bg-white text-gray-700 border-gray-200 hover:border-[#4F46E5] hover:text-[#4F46E5]"
        }`}
      >
        <SlidersHorizontal className="w-3.5 h-3.5" />
        필터
        {activeCount > 0 && (
          <span className="w-5 h-5 bg-white text-[#4F46E5] text-xs rounded-lg flex items-center justify-center font-bold">
            {activeCount}
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-gray-200 shrink-0" />

      {/* 숙박 타입 */}
      {TYPE_OPTIONS.map((t) => (
        <ToggleChip
          key={t}
          label={t}
          active={filter.types.includes(t)}
          onClick={() => onChange({ types: toggleInArray(filter.types, t) })}
        />
      ))}

      <div className="w-px h-6 bg-gray-200 shrink-0" />

      {/* 성별 정책 */}
      {GENDER_OPTIONS.map((g) => (
        <ToggleChip
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

      <div className="w-px h-6 bg-gray-200 shrink-0" />

      {/* 분위기 */}
      {VIBE_OPTIONS.map((v) => (
        <ToggleChip
          key={v.value}
          label={`${v.emoji} ${v.value}`}
          active={filter.vibes.includes(v.value)}
          onClick={() =>
            onChange({ vibes: toggleInArray(filter.vibes, v.value) })
          }
        />
      ))}

      <div className="w-px h-6 bg-gray-200 shrink-0" />

      {/* 공용 공간 */}
      {SPACE_OPTIONS.map((s) => (
        <ToggleChip
          key={s.value}
          label={`${s.emoji} ${s.value}`}
          active={filter.spaces.includes(s.value)}
          onClick={() =>
            onChange({ spaces: toggleInArray(filter.spaces, s.value) })
          }
        />
      ))}

      <div className="w-px h-6 bg-gray-200 shrink-0" />

      {/* 장기 할인 */}
      <ToggleChip
        label="📅 장기 할인"
        active={filter.longTerm}
        onClick={() => onChange({ longTerm: !filter.longTerm })}
      />

      <div className="w-px h-6 bg-gray-200 shrink-0" />

      {/* 데스크톱 정렬 — FilterBar 안에 인라인 */}
      <SortSelect value={filter.sort} onChange={(v) => onChange({ sort: v })} />
    </div>
  );
}

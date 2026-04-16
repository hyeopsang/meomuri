import GuesthouseCard from "@/components/guesthouse/GuesthouseCard";
import { Guesthouse } from "@/types/guesthouse";

interface Props {
  guesthouses: Guesthouse[];
  activeVibe: string;
  onResetVibe: () => void;
}

export default function GuesthouseGrid({
  guesthouses,
  activeVibe,
  onResetVibe,
}: Props) {
  return (
    <section className="max-w-7xl w-full mx-auto px-4 md:px-6 py-6 md:py-8">
      <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
        <span className="font-semibold text-gray-900">
          {guesthouses.length}개
        </span>
        의 게스트하우스
        {activeVibe !== "전체" && (
          <span className="ml-1">
            · <span className="text-[#FF385C]">{activeVibe}</span>
          </span>
        )}
      </p>

      {guesthouses.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {guesthouses.map((gh) => (
            <GuesthouseCard key={gh.id} gh={gh} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center py-16 md:py-24 text-gray-400">
          <span className="text-4xl md:text-5xl mb-4">🔍</span>
          <p className="text-sm md:text-base font-medium text-gray-600 mb-4">
            해당 분위기의 게스트하우스가 없어요
          </p>
          <button
            onClick={onResetVibe}
            className="text-sm font-semibold text-gray-900 underline underline-offset-2"
          >
            전체 보기
          </button>
        </div>
      )}
    </section>
  );
}

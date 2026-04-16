import { REGIONS } from "../_lib/mock-data";

export default function RegionSection() {
  return (
    <section className="px-4 md:px-6 py-6 md:py-8 max-w-7xl w-full mx-auto">
      <h2 className="text-base md:text-xl font-semibold text-gray-900 mb-4 md:mb-5">
        인기 여행지
      </h2>
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {REGIONS.map((r) => (
          <button
            key={r.name}
            className="flex flex-col items-center gap-2 shrink-0 group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-indigo-50 flex items-center justify-center text-2xl md:text-3xl group-hover:bg-indigo-100 group-hover:shadow-md transition-all group-active:scale-95">
              {r.emoji}
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-[#4F46E5] transition-colors">
              {r.name}
            </span>
            <span className="text-[10px] md:text-xs text-gray-400">
              {r.count}개
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

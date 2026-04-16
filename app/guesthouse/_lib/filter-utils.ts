import { Guesthouse } from "@/types/guesthouse";
import { FilterState, SortOption } from "@/types/filter";

export function applyFilter(
  list: Guesthouse[],
  filter: FilterState,
): Guesthouse[] {
  let result = [...list];

  if (filter.region) {
    result = result.filter((gh) => gh.region.includes(filter.region));
  }

  if (filter.types.length > 0) {
    result = result.filter((gh) =>
      filter.types.some((t) => gh.types.includes(t)),
    );
  }

  if (filter.vibes.length > 0) {
    result = result.filter((gh) =>
      filter.vibes.some((v) => gh.tags.includes(v)),
    );
  }

  if (filter.spaces.length > 0) {
    // 실제 연동 시 space 이름으로 매핑 필요
    // 목데이터는 이모지로 저장돼 있어서 일단 스킵
  }

  result = result.filter(
    (gh) => gh.price >= filter.minPrice && gh.price <= filter.maxPrice,
  );

  return applySort(result, filter.sort);
}

function applySort(list: Guesthouse[], sort: SortOption): Guesthouse[] {
  switch (sort) {
    case "price_asc":
      return [...list].sort((a, b) => a.price - b.price);
    case "price_desc":
      return [...list].sort((a, b) => b.price - a.price);
    case "rating":
      return [...list].sort((a, b) => b.reviewCount - a.reviewCount);
    case "newest":
      return [...list].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    default:
      return [...list].sort((a, b) => b.rating - a.rating);
  }
}

export function countActiveFilters(filter: FilterState): number {
  let count = 0;
  if (filter.types.length) count++;
  if (filter.genderPolicy.length) count++;
  if (filter.vibes.length) count++;
  if (filter.spaces.length) count++;
  if (filter.longTerm) count++;
  if (filter.minPrice > 0 || filter.maxPrice < 100000) count++;
  return count;
}

export interface FilterState {
  region: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  types: string[]; // '도미토리' | '개인실'
  genderPolicy: string[]; // 'mixed' | 'female' | 'male'
  vibes: string[];
  spaces: string[];
  minPrice: number;
  maxPrice: number;
  longTerm: boolean;
  sort: SortOption;
}

export type SortOption =
  | "recommended"
  | "price_asc"
  | "price_desc"
  | "rating"
  | "newest";

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "recommended", label: "추천순" },
  { value: "price_asc", label: "가격 낮은 순" },
  { value: "price_desc", label: "가격 높은 순" },
  { value: "rating", label: "후기 많은 순" },
  { value: "newest", label: "최근 등록순" },
];

export const DEFAULT_FILTER: FilterState = {
  region: "",
  checkIn: "",
  checkOut: "",
  guests: 1,
  types: [],
  genderPolicy: [],
  vibes: [],
  spaces: [],
  minPrice: 0,
  maxPrice: 100000,
  longTerm: false,
  sort: "recommended",
};

export const TYPE_OPTIONS = ["도미토리", "개인실"];

export const GENDER_OPTIONS = [
  { value: "mixed", label: "혼성" },
  { value: "female", label: "여성전용" },
  { value: "male", label: "남성전용" },
];

export const VIBE_OPTIONS = [
  { value: "조용한 편", emoji: "🤫" },
  { value: "사교적", emoji: "🤝" },
  { value: "혼행자 친화", emoji: "🎒" },
  { value: "파티 분위기", emoji: "🎉" },
  { value: "한달살기", emoji: "📅" },
  { value: "외국인 많음", emoji: "🌍" },
];

export const SPACE_OPTIONS = [
  { value: "부엌", emoji: "🍳" },
  { value: "라운지", emoji: "🛋️" },
  { value: "루프탑", emoji: "🌇" },
  { value: "바비큐", emoji: "🔥" },
  { value: "세탁기", emoji: "👕" },
  { value: "자전거", emoji: "🚲" },
];

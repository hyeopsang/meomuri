export interface Guesthouse {
  id: string;
  name: string;
  region: string;
  price: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  types: string[];
  spaces: string[];
  isNew: boolean;
  emoji: string;
}

export interface Region {
  name: string;
  count: number;
  emoji: string;
}

export interface VibeTag {
  label: string;
  emoji: string;
}



export interface Highlight {
  name: string;
  value: string;
}

export interface LastReview {
  body: string;
  client_image_url: string;
  client_name: string;
}

export interface Locale {
  country: string;
  price: number;
  currency: string;
}

export interface User {
  first_name: string;
  image_url: string;
}

export interface Hero {
  availability_confirmed: boolean;
  chopped_desc: string;
  highlights: Highlight[];
  favorite: boolean;
  id: number;
  is_superhero: boolean;
  last_review: LastReview;
  locale: Locale;
  rating: number;
  region_address: string;
  reviews_count: number;
  title: string;
  user: User;
}

export interface Heroes extends Array<Hero> {}

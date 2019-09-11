export enum HighlightValue {
  Apartment = 'Apartamento'
}

export enum HighlightName {
  loyal_customers,
  supervision,
  room_type,
}

export enum HighlightText {
  loyal_customers = 'Clientes fiéis',
  supervision = 'Supervisão 24h',
  room_type = '',
}

export enum HighlightIcon {
  loyal_customers = 'repeat-guests',
  supervision = '24h',
  room_type = 'flat',
}

export interface Highlight {
  name: HighlightName;
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

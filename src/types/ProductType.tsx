export type ProductType = {
  id: number;
  image: string;
  price: number;
  title: string;
  starsReviewImage: string;
  review: number;
  oldPrice?: number;
  discount?: string;
  style?: string;
  colors?: [string];
  sizes?: [string];
};

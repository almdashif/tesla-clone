export interface SliderItem {
  name: string;
  image: string;
  bgFrom: string;
  bgTo: string;
  orderHref: string;
  learnHref: string;
  desc: string;
}
export interface SliderProps {
  data: SliderItem[];
}

export interface carItem {
  id: number,
  name: string,
  category: string,
  tagline: string,
  price: number,
  range: number,
  accel: number,
  topSpeed: number,
  colors: string[],
  colorNames: string[],
  images: string[]
}
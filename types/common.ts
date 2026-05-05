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
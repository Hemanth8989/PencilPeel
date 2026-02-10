export interface BannerItem {
  title: string;
  description: string;
}

export interface BannerSectionWithList {
  key: string;
  icon: string;
  gradient: string;
  title: string;
  content: string;     // full intro/paragraph, unchanged
  imageUrl: string;
  items: BannerItem[]; // list of title/description objects
}
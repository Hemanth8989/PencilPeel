export interface FaqCardModel {
  id: string; // Added for unique tracking
  title: string;
  description: string;
  fullDescription: any;
  expanded: boolean;
  image:string;
}
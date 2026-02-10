interface Industry {
  id: string;
  title: string;
  icon: string;
  iconColor: string;
  borderColor: string;
  image: string;
  alt: string;
  colSpan: string;
  services: {
    title: string;
    description: string;
  }[];
}
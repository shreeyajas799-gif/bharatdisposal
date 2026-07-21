export interface ProductCategory {
  title: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  title: string;
  image: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  message: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Highlight {
  title: string;
  description: string;
  icon: string;
}

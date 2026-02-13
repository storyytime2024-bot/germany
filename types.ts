
export interface PricePlan {
  id: string;
  duration: string;
  price: number;
  originalPrice?: number;
  label: string;
  savings?: string;
  featured?: boolean;
}

export interface PricingData {
  [key: number]: PricePlan[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  text: string;
  time: string;
  avatar: string;
  side: 'left' | 'right';
}

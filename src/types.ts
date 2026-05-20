export interface FeedBackItem {
  id: string;
  name: string;
  role: string;
  handle: string;
  content: string;
  rating: number;
  avatar: string;
  viewsGained: string;
  youtubeUrl?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  monthlyRef: string;
  savings: string | null;
  badge: {
    text: string;
    type: 'pink' | 'cyan' | 'gray';
  } | null;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface MockChatMessage {
  id: string;
  user: string;
  message: string;
  time: string;
  isCustom?: boolean;
}

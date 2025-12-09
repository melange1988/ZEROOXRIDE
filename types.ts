export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  category: 'dirt-bike' | 'ride-on';
  image: string;
  rating: number;
  reviews: number;
  specs: {
    speed: string;
    battery: string;
    age: string;
    motor: string;
    seatHeight: string;
    weight: string;
    maxLoad: string;
    dimensions: string;
  };
  features: string[];
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CartItem extends Product {
  quantity: number;
}
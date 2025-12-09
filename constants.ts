import { Product } from './types';

export const PRODUCTS: Product[] = [
  // Dirt Bikes - ZXR Series
  {
    id: 'zxr-12',
    name: 'ZEROOX ZXR-12',
    subtitle: 'The Perfect Entry-Level Bike',
    price: 329.00,
    originalPrice: 399.00,
    category: 'dirt-bike',
    image: 'https://picsum.photos/800/800?random=101',
    rating: 4.8,
    reviews: 45,
    specs: {
      speed: '12 mph',
      battery: '24V Lithium',
      age: '4-7 Years',
      motor: '300W',
      seatHeight: '17 inches',
      weight: '48 lbs',
      maxLoad: '110 lbs',
      dimensions: '43"L x 22"W x 28"H'
    },
    features: ['Easy Twist Throttle', 'Training Wheels Compatible', 'Rear Disc Brake', 'Lightweight Frame'],
    description: 'The ZXR-12 is designed for the youngest riders. With a manageable top speed and lightweight construction, it\'s the safest way to introduce your child to the world of riding.'
  },
  {
    id: 'zxr-16-lite',
    name: 'ZEROOX ZXR-16 Lite',
    subtitle: 'Agile & Fun for Growing Riders',
    price: 549.00,
    category: 'dirt-bike',
    image: 'https://picsum.photos/800/800?random=102',
    rating: 4.9,
    reviews: 82,
    specs: {
      speed: '15 mph',
      battery: '36V Lithium',
      age: '5-9 Years',
      motor: '500W',
      seatHeight: '21.5 inches',
      weight: '55 lbs',
      maxLoad: '135 lbs',
      dimensions: '48"L x 23"W x 30"H'
    },
    features: ['Hydraulic Suspension', 'Safety Speed Switch', 'Knobby Tires', 'Quiet Motor'],
    description: 'Stepping up the game, the ZXR-16 Lite offers more power in a package that is still easy to handle. Perfect for backyard tracks and trails.'
  },
  {
    id: 'zxr-16-pro',
    name: 'ZEROOX ZXR-16 Pro',
    subtitle: 'Track-Ready Performance',
    price: 799.00,
    originalPrice: 899.00,
    category: 'dirt-bike',
    image: 'https://picsum.photos/800/800?random=103',
    rating: 5.0,
    reviews: 156,
    specs: {
      speed: '21 mph',
      battery: '48V Lithium',
      age: '8-12 Years',
      motor: '1000W Brushless',
      seatHeight: '24.5 inches',
      weight: '68 lbs',
      maxLoad: '165 lbs',
      dimensions: '52"L x 25"W x 34"H'
    },
    features: ['Inverted Forks', 'Adjustable Rear Shock', 'Hydraulic Disc Brakes', 'Aluminum Frame'],
    description: 'For the advanced rider who demands the best. The ZXR-16 Pro features top-tier suspension and a powerful brushless motor for serious off-road capability.'
  },

  // Ride On Toys
  {
    id: 'ro-horse-sm',
    name: 'Ride-On Horse (Small)',
    subtitle: 'Enchanted Electric Riding Horse',
    price: 199.00,
    category: 'ride-on',
    image: 'https://picsum.photos/800/800?random=201',
    rating: 4.7,
    reviews: 34,
    specs: {
      speed: '3 mph',
      battery: '12V',
      age: '3-5 Years',
      motor: 'Dual Drive',
      seatHeight: '14 inches',
      weight: '25 lbs',
      maxLoad: '60 lbs',
      dimensions: '28"L x 12"W x 24"H'
    },
    features: ['Soft Plush Fur', 'Easy Foot Pedal', 'Indoor Friendly Wheels', 'Rechargeable'],
    description: 'A magical experience for little ones. This electric ride-on horse moves gently with a foot pedal, featuring soft fur and safe speeds for indoor or outdoor play.'
  },
  {
    id: 'ro-horse-md',
    name: 'Ride-On Horse (Medium)',
    subtitle: 'Premium Electric Riding Horse',
    price: 289.00,
    category: 'ride-on',
    image: 'https://picsum.photos/800/800?random=202',
    rating: 4.9,
    reviews: 67,
    specs: {
      speed: '5 mph',
      battery: '24V',
      age: '5-8 Years',
      motor: 'Quad Drive',
      seatHeight: '18 inches',
      weight: '35 lbs',
      maxLoad: '90 lbs',
      dimensions: '34"L x 14"W x 30"H'
    },
    features: ['Realistic Sounds', 'Leatherette Saddle', 'Grooming Kit Included', 'Sturdy Frame'],
    description: 'The big brother to our pony series. This medium-sized electric horse offers more speed and size for growing cowboys and cowgirls.'
  },
  {
    id: 'ro-atv-quad',
    name: 'ZEROOX Electric ATV',
    subtitle: 'Rugged 4-Wheel Electric Quad',
    price: 499.00,
    originalPrice: 550.00,
    category: 'ride-on',
    image: 'https://picsum.photos/800/800?random=203',
    rating: 4.8,
    reviews: 112,
    specs: {
      speed: '12 mph',
      battery: '36V',
      age: '6-10 Years',
      motor: '800W',
      seatHeight: '20 inches',
      weight: '90 lbs',
      maxLoad: '120 lbs',
      dimensions: '40"L x 24"W x 26"H'
    },
    features: ['Oversized Rubber Tires', 'LED Headlights', 'Reverse Gear', 'Parental Speed Lock'],
    description: 'Conquer any terrain with the Electric ATV. Built with a wide stance for stability and torque to power through grass, gravel, and dirt.'
  }
];

export const FEATURES = [
  {
    title: 'Safety First',
    description: 'Adjustable speed limiters and responsive disc brakes ensure a safe ride every time.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Long-Lasting Battery',
    description: 'High-capacity Lithium-Ion batteries for up to 2 hours of continuous fun per charge.',
    icon: 'BatteryCharging'
  },
  {
    title: 'Built Tough',
    description: 'Durable steel and aluminum frames designed to withstand rough terrain and crashes.',
    icon: 'Hammer'
  },
  {
    title: 'Easy Maintenance',
    description: 'Electric motors mean no gas, no oil, and minimal noise. Just plug and play.',
    icon: 'Wrench'
  }
];
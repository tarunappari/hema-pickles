import gongura from '@/public/assets/category/gongura.png';
import chicken from '@/public/assets/category/chicken.jpeg';
import prawns from '@/public/assets/category/prawns.jpeg';
import avakai from '@/public/assets/category/avakai.png';
import tomato from '@/public/assets/category/tomato.png';
import cashew from '@/public/assets/category/cashew.png';
import prawnsGongura from '@/public/assets/category/prawnsGongura.png';
import redChilli from '@/public/assets/category/redChilli.png';
import fish from '@/public/assets/category/fish.png';
import mutton from '@/public/assets/category/mutton.png';
import love from '@/public/assets/lottie/love.json';
import hundred from '@/public/assets/lottie/hundred.json';
import colors from '@/public/assets/lottie/colors.json';
import customer from '@/public/assets/lottie/customer.json';
import quality from '@/public/assets/lottie/quality.json';
import chemicals from '@/public/assets/lottie/chemicals.json';


// Non-Veg Pickles
export const nonVegProducts = [
  { name: 'Chicken Pickle', image: chicken,price : '600rs - 500G' },
  { name: 'Mutton Pickle', image: mutton,price : '1250rs - 500G' },
  { name: 'Fish Pickle', image: fish,price : '850rs - 500G' },
  { name: 'Prawns Pickle', image: prawns,price : '750rs - 500G' },
  { name: 'Prawns with Gongura', image: prawnsGongura,price : '600rs - 500G' }
];

// Veg Pickles & Powders
export const vegProducts = [
  { name: 'Avakai (Mango Pickle)', image: avakai,price : '300rs - 500G' },
  { name: 'Gongura Pickle', image: gongura,price : '300rs - 500G' },
  { name: 'Tomato Pickle', image: tomato,price : '300rs - 500G' },
  // Add more like Tomato Pickle, Almond-Cashew Powder, Coconut Chili Powder etc.
];

export const powderProducts = [
  { name: 'Coconut with red chilli powder', image: redChilli ,price : '300rs - 500G' },
  { name: 'Almond Cashew nut powder', image: cashew ,price : '300rs - 500G' },
]
//fav
export const favProducts = [
  { name: 'Chicken', image: chicken },
  { name: 'Avakai', image: avakai },
  { name: 'Prawns', image: prawns },
  { name: 'Gongura', image: gongura },
  { name: 'Fish', image: fish },
  { name: 'Mutton', image: mutton },
];

export const features = [
  { icon: hundred, title: '100% Traditional Recipes', desc: 'Every jar is a tribute to age-old methods passed down through generations.' },
  { icon: chemicals, title: 'No Preservatives or Chemicals', desc: 'We believe in purity – zero synthetic preservatives or harmful chemicals.' },
  { icon: colors, title: 'No Added Colors', desc: 'What you see is what you get — the real colors from real ingredients.' },
  { icon: quality, title: 'Premium Quality Ingredients', desc: 'Only handpicked spices, sun-ripened fruits, and fresh meats go into our pickles.' },
  { icon: love, title: 'Made with Love & Care', desc: 'Crafted in small batches by experienced hands, just like your grandma would make.' },
  {
    icon: customer,
    title: 'Customer Satisfaction',
    desc: 'We go the extra mile to deliver not just great pickles, but great experiences — quick service, quality assurance, and happy hearts.'
  }
]

import gongura from "@/public/assets/category/gongura.png";
import chicken from "@/public/assets/category/nonVeg.png";
import prawns from "@/public/assets/category/prawns.jpeg";
import avakai from "@/public/assets/category/avakai.png";
import tomato from "@/public/assets/category/tomato.png";
import cashew from "@/public/assets/category/cashew.png";
import allSeasonalPickleImage from "@/public/assets/category/seasonal.png";
import prawnsGongura from "@/public/assets/category/prawnsGongura.png";
import redChilli from "@/public/assets/category/redChilli.png";
import fish from "@/public/assets/category/fish.png";
import ghee from "@/public/assets/category/ghee.png";
import mutton from "@/public/assets/category/mutton.png";
import love from "@/public/assets/lottie/love.json";
import hundred from "@/public/assets/lottie/hundred.json";
import colors from "@/public/assets/lottie/colors.json";
import customer from "@/public/assets/lottie/customer.json";
import quality from "@/public/assets/lottie/quality.json";
import chemicals from "@/public/assets/lottie/chemicals.json";


//fav
export const favProducts = [
  { name: "Chicken", image: chicken },
  { name: "Avakai", image: avakai },
  { name: "Prawns", image: prawns },
  { name: "Gongura", image: gongura },
  { name: "Fish", image: fish },
  { name: "Mutton", image: mutton },
];

// All Products Combined with detailed information
export const allProducts = [
  // Non-Veg Products
  {
    id: 1,
    name: "Chicken Pickle",
    category: "nonveg",
    tagline:
      "A spicy and tangy delight straight from the heart of Andhra kitchens!",
    description:
      "Savor the bold and fiery flavors of our Chicken Pickle — made from tender chicken pieces, slow-cooked with traditional spices, and sealed with love. Each bite offers a mouth-watering burst of heat and zest that perfectly complements rice, rotis, or even as a spicy snack.",
    ingredients:
      "Fresh chicken, Red chilli powder, Garlic & ginger paste, Mustard & fenugreek seeds, Turmeric & salt, Groundnut oil, Traditional spices",
    caption: "✨ No Preservatives | ❌ No Artificial Colors | ✅ 100% Homemade",
    suggestion:
      "Hot steamed rice and ghee 🍚, Idli, dosa, or chapati 🫓, Curd rice or pongal",
    image: chicken,
    price: {
      '300g': '549',
      '500g' : '849',
      '1kg' : '1399'
    },
    fav: true,
  },
  {
    id: 2,
    name: "Mutton Pickle",
    category: "nonveg",
    tagline: "Premium mutton pickle for the true connoisseurs of taste!",
    description:
      "Indulge in the rich, royal taste of our Mutton Pickle. Succulent mutton pieces are marinated in aromatic spices and slow-cooked in oil to create a pickle that’s bursting with flavor. A must-have for meat lovers who crave spice and depth in every bite.",
    ingredients:
      "Fresh mutton, Red chilli powder, Garlic & ginger paste, Mustard & fenugreek seeds, Turmeric & salt, Groundnut oil, Garam masala",
    caption: "✨ No Preservatives | ❌ No Artificial Colors | ✅ 100% Homemade",
    suggestion: "Biryani rice 🍚, Roti or naan 🫓, Pulao or fried rice",
    image: mutton,
    price: {
      '300g': '849',
      '500g' : '1399',
      '1kg' : '2599'
    },
    fav: true,
  },
  {
    id: 3,
    name: "Fish Pickle",
    category: "nonveg",
    tagline: "Ocean fresh fish pickle with authentic coastal flavors!",
    description:
      "Experience the coastal magic with our Fish Pickle — tender fish pieces immersed in a spicy, tangy blend of traditional masalas. It’s the perfect mix of flavors for those who enjoy a punch of spice with their seafood.",
    ingredients:
      "Fresh fish, Tamarind pulp, Red chilli powder, Garlic & ginger paste, Mustard seeds, Turmeric & salt, Coconut oil",
    caption: "✨ No Preservatives | ❌ No Artificial Colors | ✅ 100% Homemade",
    suggestion: "Steamed rice 🍚, Fish curry and rice, Coconut rice",
    image: fish,
    price: {
      '300g': '799',
      '500g' : '1099',
      '1kg' : '1899'
    },
    fav: true,
  },
  {
    id: 4,
    name: "Prawns Pickle",
    category: "nonveg",
    tagline: "Juicy prawns in a symphony of traditional spices!",
    description:
      "Juicy prawns meet a spicy and tangy masala blend in our Prawns Pickle. Crafted with handpicked spices and fresh prawns, this pickle promises a rich coastal taste with every spoon. A true delight for seafood lovers!",
    ingredients:
      "Fresh prawns, Tamarind pulp, Red chilli powder, Garlic & ginger paste, Mustard & fenugreek seeds, Turmeric & salt, Coconut oil",
    caption: "✨ No Preservatives | ❌ No Artificial Colors | ✅ 100% Homemade",
    suggestion: "Coconut rice 🍚, Prawn curry and rice, Lemon rice",
    image: prawns,
    price: {
      '300g': '599',
      '500g' : '999',
      '1kg' : '1699'
    },
    fav: true,
  },
  {
    id: 5,
    name: "Prawns with Gongura",
    category: "nonveg",
    tagline: "A unique fusion of prawns and tangy gongura leaves!",
    description:
      "Fresh prawns combined with tangy gongura (sorrel) leaves, creating a unique and flavorful pickle that represents the best of Andhra cuisine.",
    ingredients:
      "Fresh prawns, Gongura leaves, Red chilli powder, Garlic & ginger paste, Mustard seeds, Turmeric & salt, Groundnut oil",
    caption: "✨ No Preservatives | ❌ No Artificial Colors | ✅ 100% Homemade",
    suggestion: "Hot rice with ghee 🍚, Gongura rice, Traditional Andhra meals",
    image: prawnsGongura,
    price: {
      '300g': '649',
      '500g' : '1049',
      '1kg' : '1749'
    },
    fav: false,
  },
  // Veg Products
  {
    id: 6,
    name: "Avakai (Mango Pickle)",
    category: "veg",
    tagline: "The king of all pickles - authentic Andhra Avakai!",
    description:
      "Our Mango Pickle brings back the authentic taste of home. Made with carefully selected raw mangoes and a perfect mix of mustard, fenugreek, and red chilli, this pickle is a timeless companion to any meal.",
    ingredients:
      "Raw mangoes, Red chilli powder, Mustard seeds, Fenugreek powder, Turmeric & salt, Groundnut oil, Garlic",
    caption: "✨ No Preservatives | ❌ No Artificial Colors | ✅ 100% Homemade",
    suggestion: "Curd rice 🍚, Hot rice with ghee, Idli and dosa 🫓",
    image: avakai,
    price: {
      '300g': '449',
      '500g' : '549',
      '1kg' : '699'
    },
    fav: true,
  },
  {
    id: 7,
    name: "Gongura Pickle",
    category: "veg",
    tagline: "Tangy gongura leaves in traditional Andhra style!",
    description:
      "Fresh gongura (sorrel) leaves cooked with aromatic spices. This tangy and flavorful pickle is a staple in every Andhra household.",
    ingredients:
      "Fresh gongura leaves, Red chilli powder, Garlic, Mustard & fenugreek seeds, Turmeric & salt, Groundnut oil",
    caption: "✨ No Preservatives | ❌ No Artificial Colors | ✅ 100% Homemade",
    suggestion: "Hot rice with ghee 🍚, Gongura rice, Dal and rice",
    image: gongura,
    price: {
      '300g': '449',
      '500g' : '549',
      '1kg' : '699'
    },
    fav: true,
  },
  {
    id: 8,
    name: "Tomato Pickle",
    category: "veg",
    tagline: "Sweet and tangy tomato pickle bursting with flavors!",
    description:
      "Lovingly prepared using fresh, ripe tomatoes and traditional hand-ground spices, slow-cooked in pure groundnut oil to bring out rich, bold flavors in every spoonful.",
    ingredients:
      "Ripe tomatoes, Garlic & ginger paste, Tamarind pulp, Mustard & fenugreek seeds, Red chilli powder, Turmeric & salt, Groundnut oil",
    caption: "✨ No Preservatives | ❌ No Artificial Colors | ✅ 100% Homemade",
    suggestion:
      "Hot steamed rice and ghee 🍚, Idli, dosa, or chapati 🫓, Curd rice or pongal",
    image: tomato,
    price: {
      '300g': '449',
      '500g' : '549',
      '1kg' : '699'
    },
    fav: false,
  },
  // Powder Products
  {
    id: 10,
    name: "Coconut with Red Chilli Powder",
    category: "powder",
    tagline: "Fiery red chilli powder with aromatic coconut!",
    description:
      "A perfect blend of dried coconut and red chillies, ground to perfection. This versatile powder adds heat and flavor to any dish.",
    ingredients:
      "Dried coconut, Red chillies, Salt, Cumin seeds, Coriander seeds",
    caption: "✨ No Preservatives | ❌ No Artificial Colors | ✅ 100% Homemade",
    suggestion: "Idli and dosa 🫓, Steamed rice, Upma and poha",
    image: redChilli,
    price: {
      '300g': '349',
      '500g' : '399',
      '1kg' : '699'
    },
    fav: false,
  },
  {
    id: 11,
    name: "Almond Cashew Nut Powder",
    category: "powder",
    tagline: "Premium nuts ground to perfection for rich flavors!",
    description:
      "A luxurious blend of roasted almonds and cashews, ground with aromatic spices. This premium powder adds richness and nutrition to your meals.",
    ingredients:
      "Roasted almonds, Roasted cashews, Rock salt, Black pepper, Cardamom",
    caption: "✨ No Preservatives | ❌ No Artificial Colors | ✅ 100% Homemade",
    suggestion: "Hot milk 🥛, Desserts and sweets, Smoothies and shakes",
    image: cashew,
    price: {
      '300g': '349',
      '500g' : '399',
      '1kg' : '699'
    },
    fav: false,
  },
  {
    id: 12,
    name: "Pure Cow Ghee",
    category: "powder",
    tagline: "Golden richness, pure and traditional taste!",
    description:
      "Made from fresh cow’s milk using the traditional method, our Pure Ghee is rich in aroma, flavor, and essential nutrients. Perfect for cooking, puja rituals, or adding a spoonful of health to your meals.",
    ingredients: "100% Pure Cow’s Milk",
    caption: "✨ 100% Natural | ❌ No Preservatives | ✅ Rich Aroma & Taste",
    suggestion: "Daily cooking, Indian sweets, Pooja rituals, Rotis & rice",
    image: ghee,
    price: {
      '300g': '599',
      '500g' : '899',
      '1kg' : '1499'
    },
    fav: true,
  },
];


export const features = [
  {
    icon: hundred,
    title: "100% Traditional Recipes",
    desc: "Every jar is a tribute to age-old methods passed down through generations.",
  },
  {
    icon: chemicals,
    title: "No Preservatives or Chemicals",
    desc: "We believe in purity – zero synthetic preservatives or harmful chemicals.",
  },
  {
    icon: colors,
    title: "No Added Colors",
    desc: "What you see is what you get — the real colors from real ingredients.",
  },
  {
    icon: quality,
    title: "Premium Quality Ingredients",
    desc: "Only handpicked spices, sun-ripened fruits, and fresh meats go into our pickles.",
  },
  {
    icon: love,
    title: "Made with Love & Care",
    desc: "Crafted in small batches by experienced hands, just like your grandma would make.",
  },
  {
    icon: customer,
    title: "Customer Satisfaction",
    desc: "We go the extra mile to deliver not just great pickles, but great experiences — quick service, quality assurance, and happy hearts.",
  },
];

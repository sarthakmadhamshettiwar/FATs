import type { FatProduct } from '../types';

const frequentlyAddedTogether: Record<number, FatProduct[]> = {
  1: [ // Mangoes
    { id: 101, name: "Fresh Bananas", price: 50, image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&q=80" },
    { id: 102, name: "Valencia Oranges", price: 120, image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&q=80" },
    { id: 103, name: "Green Apples", price: 180, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80" }
  ],
  2: [ // Spinach
    { id: 104, name: "Desi Tomato", price: 30, image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?w=400&q=80" },
    { id: 105, name: "Fresh Ginger", price: 20, image: "https://images.unsplash.com/photo-1589615053736-a36c738e4a9c?w=400&q=80" },
    { id: 106, name: "Garlic Pearls", price: 40, image: "https://images.unsplash.com/photo-1594910357428-3741173f3923?w=400&q=80" }
  ],
  3: [ // Brown Bread
    { id: 107, name: "Salted Butter", price: 58, image: "https://images.unsplash.com/photo-1589985273304-8091bb5c06e4?w=400&q=80" },
    { id: 108, name: "Creamy Peanut Butter", price: 150, image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80" },
    { id: 4, name: "Full Cream Milk (1L)", price: 66, image: "https://images.unsplash.com/photo-1563636619-e9107da5a1bb?w=400&q=80" }
  ],
  4: [ // Milk
    { id: 109, name: "Corn Flakes", price: 190, image: "https://images.unsplash.com/photo-1509482793361-9f93922d5d28?w=400&q=80" },
    { id: 110, name: "Muesli (Fruit & Nut)", price: 350, image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&q=80" },
    { id: 7, name: "Instant Roasted Coffee", price: 275, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80" }
  ],
  5: [ // Potato Chips
    { id: 111, name: "Coca-Cola (500ml)", price: 40, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80" },
    { id: 112, name: "Peri Peri Dip", price: 99, image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400&q=80" }
  ],
  6: [ // Avocado
    { id: 113, name: "Sourdough Bread", price: 120, image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=400&q=80" },
    { id: 114, name: "Cherry Tomatoes", price: 75, image: "https://images.unsplash.com/photo-1561131245-c9e7c76a1ec3?w=400&q=80" },
    { id: 115, name: "Extra Virgin Olive Oil", price: 899, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80" }
  ],
  7: [ // Coffee
    { id: 116, name: "Brown Sugar (Sachet)", price: 45, image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=400&q=80" },
    { id: 4, name: "Full Cream Milk (1L)", price: 66, image: "https://images.unsplash.com/photo-1563636619-e9107da5a1bb?w=400&q=80" },
    { id: 117, name: "Digestive Biscuits", price: 35, image: "https://images.unsplash.com/photo-1590080874088-eec64895b423?w=400&q=80" }
  ],
  8: [ // Eggs
    { id: 104, name: "Desi Tomato", price: 30, image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?w=400&q=80" },
    { id: 118, name: "Amul Cheese Slices", price: 145, image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=400&q=80" },
    { id: 3, name: "Whole Wheat Brown Bread", price: 55, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" }
  ],
  9: [ // Apple Juice
    { id: 119, name: "Paper Straws (Pack)", price: 25, image: "https://images.unsplash.com/photo-1591872202319-240e83fb7f9d?w=400&q=80" },
    { id: 5, name: "Classic Salted Potato Chips", price: 20, image: "https://images.unsplash.com/photo-1566478431373-782c9b4b6db1?w=400&q=80" }
  ],
  10: [ // Greek Yogurt
    { id: 120, name: "Crunchy Granola", price: 240, image: "https://images.unsplash.com/photo-1517673138115-6891f755bae4?w=400&q=80" },
    { id: 121, name: "Pure Honey (250g)", price: 160, image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80" },
    { id: 101, name: "Fresh Bananas", price: 50, image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&q=80" }
  ]
};

async function getFrequentlyAddedTogetherForProduct(id: number): Promise<FatProduct[] | undefined> {
  await new Promise(resolve => setTimeout(resolve, 1000)); // to stimulate external API call
  return frequentlyAddedTogether[id];
}

export default getFrequentlyAddedTogetherForProduct;

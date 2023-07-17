/* eslint-disable max-len */
export interface ItemShopData {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

export interface ShopData {
  title: string;
  items: ItemShopData[];
}


export const SHOP_DATA: ShopData[] = [
  {
    title: 'Hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 
        'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/hats/brown-brim.png',
        price: 25,
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 
        'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/hats/blue-beanie.png',
        price: 18,
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 
        'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/hats/brown-cowboy.png',
        price: 35,
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 
        'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/hats/grey-brim.png',
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 
        'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/hats/green-beanie.png',
        price: 18,
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 
        'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/hats/palm-tree-cap.png',
        price: 14,
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 
        'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/hats/red-beanie.png',
        price: 18,
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 
        'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/hats/wolf-cap.png',
        price: 14,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 
        'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/hats/blue-snapback.png',
        price: 16,
      },
    ],
  },
  {
    title: 'Sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 
        'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/sneakers/adidas-nmd.png',
        price: 220,
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/sneakers/yeezy.png',
        price: 280,
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 
        'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/sneakers/black-converse.png',
        price: 110,
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/sneakers/white-nike-high-tops.png',
        price: 160,
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/sneakers/nikes-red.png',
        price: 160,
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/sneakers/nike-brown.png',
        price: 160,
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/sneakers/nike-funky.png',
        price: 190,
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/sneakers/timberlands.png',
        price: 200,
      },
    ],
  },
  {
    title: 'Jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/jackets/black-shearling.png',
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/jackets/blue-jean-jacket.png',
        price: 90,
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/jackets/grey-jean-jacket.png',
        price: 90,
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/jackets/brown-shearling.png',
        price: 165,
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/jackets/brown-trench.png',
        price: 185,
      },
    ],
  },
  {
    title: 'Womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/womens/blue-tank.png',
        price: 25,
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/womens/floral-blouse.png',
        price: 20,
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/womens/floral-skirt.png',
        price: 80,
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/womens/red-polka-dot-dress.png',
        price: 80,
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/womens/striped-sweater.png',
        price: 45,
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/womens/yellow-track-suit.png',
        price: 135,
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/womens/white-vest.png',
        price: 20,
      },
    ],
  },
  {
    title: 'Mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/mens/camo-vest.png',
        price: 325,
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/mens/floral-shirt.png',
        price: 20,
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/mens/long-sleeve.png',
        price: 25,
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/mens/pink-shirt.png',
        price: 25,
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/mens/polka-dot-shirt.png',
        price: 40,
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://raw.githubusercontent.com/HeriYantodotDev/images-list-coolStore/main/imageshop/mens/roll-up-jean-shirt.png',
        price: 25,
      },
    ],
  },
];

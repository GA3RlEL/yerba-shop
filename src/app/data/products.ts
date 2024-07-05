export type Product = {
  id: number;
  image: string;
  price: number;
  type: 'yerba' | 'accessories';
  isDiscount: boolean;
  discountPrice: number | null;
  brand: string;
  weight: number;
  name: string;
};

export const products: Product[] = [
  {
    id: 1,
    image: 'cbse-endulife-con-stevia-500.jpg',
    price: 9.18,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Cbse Endulife Con Stevia',
    brand: 'Cbse',
    weight: 500,
  },
  {
    id: 2,
    image: 'cbse-frutos-tropicales-500.jpg',
    price: 5.64,
    type: 'yerba',
    isDiscount: true,
    discountPrice: 1.82,
    name: 'Cbse Frutos Tropicales',
    brand: 'Cbse',
    weight: 500,
  },
  {
    id: 3,
    image: 'cbse-hierbas-cuyanas-500.jpg',
    price: 2.31,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Cbse Hierbas Cuyanas',
    brand: 'Cbse',
    weight: 500,
  },
  {
    id: 4,
    image: 'cbse-naranja-500.jpg',
    price: 3.66,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Cbse Naranja',
    brand: 'Cbse',
    weight: 500,
  },
  {
    id: 5,
    image: 'cbse-silueta-500.jpg',
    price: 8.88,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Cbse Silueta',
    brand: 'Cbse',
    weight: 500,
  },
  {
    id: 6,
    image: 'pajarito-seleccion-especial-500.jpg',
    price: 1.29,
    type: 'yerba',
    isDiscount: true,
    discountPrice: 1.23,
    name: 'Pajarito Seleccion Especial',
    brand: 'Pajarito',
    weight: 500,
  },
  {
    id: 7,
    image: 'pajarito-seleccion-especial-1000.jpg',
    price: 5.61,
    type: 'yerba',
    isDiscount: true,
    discountPrice: 3.2,
    name: 'Pajarito Seleccion Especial',
    brand: 'Pajarito',
    weight: 1000,
  },
  {
    id: 8,
    image: 'rosamonte-despalada-1000.jpg',
    price: 8.55,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Rosamonte Despalada',
    brand: 'Rosamonte',
    weight: 1000,
  },
  {
    id: 9,
    image: 'rosamonte-elaborada-con-palo-tradicional-500.jpg',
    price: 4.89,
    type: 'yerba',
    isDiscount: true,
    discountPrice: 3.68,
    name: 'Rosamonte Elaborada Con Palo Tradicional',
    brand: 'Rosamonte',
    weight: 500,
  },
  {
    id: 10,
    image: 'rosamonte-elaborada-con-palo-tradicional-1000.jpg',
    price: 5.71,
    type: 'yerba',
    isDiscount: true,
    discountPrice: 3.4,
    name: 'Rosamonte Elaborada Con Palo Tradicional',
    brand: 'Rosamonte',
    weight: 1000,
  },
  {
    id: 11,
    image: 'rosamonte-seleccion-especial-1000.jpg',
    price: 6.58,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Rosamonte Seleccion Especial',
    brand: 'Rosamonte',
    weight: 1000,
  },
  {
    id: 12,
    image: 'rosamonte-suave-1000.jpg',
    price: 2.31,
    type: 'yerba',
    isDiscount: true,
    discountPrice: 1.67,
    name: 'Rosamonte Suave',
    brand: 'Rosamonte',
    weight: 1000,
  },
  {
    id: 13,
    image: 'taragui-con-palo-tradicional-500.jpg',
    price: 6.94,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Taragui Con Palo Tradicional',
    brand: 'Taragui',
    weight: 500,
  },
  {
    id: 14,
    image: 'taragui-con-palo-tradicional-1000.jpg',
    price: 1.99,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Taragui Con Palo Tradicional',
    brand: 'Taragui',
    weight: 1000,
  },
  {
    id: 15,
    image: 'taragui-energia-500.jpg',
    price: 3.74,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Taragui Energia',
    brand: 'Taragui',
    weight: 500,
  },
  {
    id: 16,
    image: 'taragui-sin-palo-500.jpg',
    price: 3.56,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Taragui Sin Palo',
    brand: 'Taragui',
    weight: 500,
  },
  {
    id: 17,
    image: 'yaguar-limon-500.jpg',
    price: 9.54,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Yaguar Limon',
    brand: 'Yaguar',
    weight: 500,
  },
  {
    id: 18,
    image: 'yaguar-maracuya-500.jpg',
    price: 7.72,
    type: 'yerba',
    isDiscount: true,
    discountPrice: 7.68,
    name: 'Yaguar Maracuya',
    brand: 'Yaguar',
    weight: 500,
  },
  {
    id: 19,
    image: 'yaguar-naranja-500.jpg',
    price: 3.63,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Yaguar Naranja',
    brand: 'Yaguar',
    weight: 500,
  },
  {
    id: 20,
    image: 'yaguar-pera-500.jpg',
    price: 9.72,
    type: 'yerba',
    isDiscount: true,
    discountPrice: 7.4,
    name: 'Yaguar Pera',
    brand: 'Yaguar',
    weight: 500,
  },
  {
    id: 21,
    image: 'yaguar-pomelo-500.jpg',
    price: 4.05,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Yaguar Pomelo',
    brand: 'Yaguar',
    weight: 500,
  },
  {
    id: 22,
    image: 'yaguar-silueta-500.jpg',
    price: 6.77,
    type: 'yerba',
    isDiscount: false,
    discountPrice: null,
    name: 'Yaguar Silueta',
    brand: 'Yaguar',
    weight: 500,
  },
  {
    id: 23,
    image: 'cruzdemalta-elaborada-con-palo-500.jpg',
    price: 8.94,
    type: 'yerba',
    isDiscount: true,
    discountPrice: 5.15,
    name: 'Cruzdemalta Elaborada Con Palo',
    brand: 'Cruzdemalta',
    weight: 500,
  },
];

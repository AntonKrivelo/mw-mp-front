export interface Product {
   id: number;
   title: string;
   imgSrc: string;
   priceRegular: number;
   priceDiscounted: number;
   desc: string;
   slug: string;
}

export const products: Product[] = [
   {
      id: 1,
      title: "Nike Air Max 270",
      imgSrc: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8e3e1f1e-5e3c-4c3b-9e7d-8b4f1c2b8c4a/air-max-270-shoes.png",
      priceRegular: 180,
      priceDiscounted: 149,
      desc: "Лёгкие и удобные кроссовки с амортизацией Air для повседневной носки.",
      slug: "nike-air-max-270"
   },
   {
      id: 2,
      title: "Apple AirPods Pro 2",
      imgSrc: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83_AV1?wid=1200&hei=1200&fmt=jpeg&qlt=90&.v=1660803972361",
      priceRegular: 299,
      priceDiscounted: 249,
      desc: "Наушники с активным шумоподавлением и улучшенным пространственным звуком.",
      slug: "apple-airpods-pro-2"
   },
   {
      id: 3,
      title: "Sony PlayStation 5",
      imgSrc: "https://m.media-amazon.com/images/I/51f5V5pRkYL._SL1000_.jpg",
      priceRegular: 699,
      priceDiscounted: 649,
      desc: "Игровая консоль нового поколения с поддержкой 4K и высокой частотой кадров.",
      slug: "sony-playstation-5"
   },
   {
      id: 4,
      title: "Samsung Galaxy S24",
      imgSrc: "https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-s921-sm-s921bzkdmea-539894832?$650_519_PNG$",
      priceRegular: 999,
      priceDiscounted: 899,
      desc: "Флагманский смартфон с мощной камерой и AMOLED‑дисплеем 120 Гц.",
      slug: "samsung-galaxy-s24"
   },
   {
      id: 5,
      title: "MacBook Air M2",
      imgSrc: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=1200&hei=1200&fmt=jpeg&qlt=90&.v=1684340991375",
      priceRegular: 1299,
      priceDiscounted: 1199,
      desc: "Тонкий и мощный ноутбук на чипе Apple M2 с отличной автономностью.",
      slug: "macbook-air-m2"
   }
];

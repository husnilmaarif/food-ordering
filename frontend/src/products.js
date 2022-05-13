const DataProducts = [
  {
    name: "Ikan Salmon",
    varients: ["Kecil", "Sedang", "Besar"],
    prices: [{ Kecil: 30, Sedang: 60, Besar: 90 }],
    category: "ikan",
    image: "https://img-global.cpcdn.com/recipes/dca9fe06d6c8309f/751x532cq70/salmon-panggang-foto-resep-utama.jpg",
    description: "Ikan salmon panggang adalah ikan salmon fillet diberi bumbu marinasi lalu dipanggang. Dimasak hingga berwarna kuning kecoklatan. Sehingga menghasilkan aroma gurih dan rasa yang lezat.",
  },
  {
    name: "Ikan Nila Bakar",
    varients: ["Kecil", "Sedang", "Besar"],
    prices: [{ Kecil: 30, Sedang: 60, Besar: 90 }],
    category: "ikan",
    image: "https://img-global.cpcdn.com/recipes/c615a4a28311a92c/751x532cq70/ikan-nila-bakar-foto-resep-utama.jpg",
    description: "Selain digoreng ikan nila paling enak dibakar. Diolesi bumbu pedas manis hingga kering dan disantap dengan sambal istimewa plus lalapan. Dijamin nagih!",
  },
  {
    name: "Ayam Bali Pedas",
    varients: ["Kecil", "Sedang", "Besar"],
    prices: [{ Kecil: 25, Sedang: 35, Besar: 55 }],
    category: "menu-utama",
    image: "https://img-global.cpcdn.com/recipes/c00d8f0f0df92423/680x482cq70/ayam-bumbu-bali-pedas-foto-resep-utama.jpg",
    description: "Semangkuk menu dari resep ayam bumbu Bali pedas membara.",
  },
  {
    name: "Bebek Panggang",
    varients: ["Kecil", "Sedang", "Besar"],
    prices: [{ Kecil: 25, Sedang: 35, Besar: 55 }],
    category: "menu-utama",
    image: "https://www.sajianlezat.com/media/image/bebek/resep-bebek-panggang-saus-jeruk.jpg",
    description: "Semangkuk menu dari resep bebek panggang yang super enak.",
  },
  {
    name: "Gorengan",
    varients: ["Kecil", "Sedang", "Besar"],
    prices: [{ Kecil: 4, Sedang: 8, Besar: 12 }],
    category: "makanan-ringan",
    image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1616306079/wsfg7e7utv3nhpbvgwsa.jpg",
    description: "Tekstur yang gurih ditambah sambal khasnya, sangat cocok untuk jadi makanan pembuka untuk anda",
  },
  {
    name: "Roti Panggang",
    varients: ["Kecil", "Sedang", "Besar"],
    prices: [{ Kecil: 4, Sedang: 8, Besar: 12 }],
    category: "makanan-ringan",
    image: "https://img-global.cpcdn.com/recipes/788cc62fc3a13ed3/751x532cq70/roti-bakar-bikin-nagih-foto-resep-utama.jpg",
    description: "Roti panggang dengan tekstur yang lembut",
  },
  {
    name: "Keripik",
    varients: ["Kecil", "Sedang", "Besar"],
    prices: [{ Kecil: 4, Sedang: 8, Besar: 12 }],
    category: "makanan-ringan",
    image: "https://img.inews.co.id/media/822/files/inews_new/2020/10/01/IMG_01102020_161709__822_x_430_piksel_.jpg",
    description: "Keripik pisang manis. gurih, renyah dan manis",
  },
  {
    name: "Pudding",
    varients: ["Kecil", "Sedang", "Besar"],
    prices: [{ Kecil: 10, Sedang: 15, Besar: 20 }],
    category: "makanan-manis",
    image: "https://cookingwithdog.com/wp-content/uploads/2017/01/custard-pudding-00.jpg",
    description: "Puding adalah sejenis makanan terbuat dari pati, yang diolah dengan cara merebus, kukus, dan membakar (boiled, steamed, and baked) sehingga menghasilkan gel dengan tekstur yang lembut",
  },
  {
    name: "Sup Labu",
    varients: ["Kecil", "Sedang", "Besar"],
    prices: [{ Kecil: 10, Sedang: 15, Besar: 20 }],
    category: "sup",
    image: "https://cdn-2.tstatic.net/style/foto/bank/images/sup-labu_20180417_185357.jpg",
    description: "Enak dinikmati selagi masih hangat",
  },
  {
    name: "Sup Kacang Merah",
    varients: ["Kecil", "Sedang", "Besar"],
    prices: [{ Kecil: 10, Sedang: 15, Besar: 20 }],
    category: "sup",
    image: "https://mmc.tirto.id/image/otf/1024x535/2020/05/12/istock-1189714906_ratio-16x9.jpg",
    description: "Resep Sup Kacang Merah adalah menu yang sangat populer. Selain lezat, kacang merah kaya serat dan kandungan proteinnya mudah dicerna",
  },
  {
    name: "Gado-gado",
    varients: ["Kecil", "Sedang", "Besar"],
    prices: [{ Kecil: 15, Sedang: 20, Besar: 25 }],
    category: "salad",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Gado_gado_jakarta.jpg",
    description:
      "Gado-gado adalah makanan khas Jakarta berisi sayur-sayuran yang direbus, irisan telur dan tahu, serta ditaburi bawang goreng dan kerupuk. Sayur-sayuran ditambahkan dengan bumbu kacang atau saus dari kacang tanah yang telah dihaluskan yang kemudian diaduk merata",
  },
  {
    name: "Thai Salad",
    varients: ["Kecil", "Sedang", "Besar"],
    prices: [{ Kecil: 15, Sedang: 20, Besar: 25 }],
    category: "salad",
    image: "https://www.culinaryhill.com/wp-content/uploads/2021/05/Rainbow-Thai-Salad-with-Mango-Culinary-Hill-1200x800-1.jpg",
    description: "Salad yang dikenal secara internasional sebagai salad Thailand, dengan beberapa pengecualian, termasuk dalam empat metode persiapan utama. Dalam masakan Thailand ini disebut ubi, tam, pangkuan, dan phla.",
  },
];

export default DataProducts;

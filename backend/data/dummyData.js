// Todo: change datalisted to js date type eventually
// when change to api use uuid module to generate id
// allow users to upload their own images and use data from stock images
const DUMMYLISTINGS = [
  {
    listingId: 1,
    title: "Super Smash Bros. Ultimate",
    image:
      "https://images.nintendolife.com/73b5ee31cad64/super-smash-bros-ultimate-cover.cover_large.jpg",
    platform: "Nintendo Switch",
    dateListed: new Date("January 13, 2020 11:13"),
    description:
      "Newly purchased and in good condition. Prefer to trade with those staying in the North",
    owner: "Joshua",
    ownerID: 1,
    location: "Singapore",
    isTrading: true,
    isRenting: false,
    isSelling: false,
    isTradingFor: ["Pokemon Sword and Shield", "Mario Kart 8 Deluxe"],
    isRentingFor: null,
    isSellingFor: null,
  },
  {
    listingId: 2,
    title: "Animal Crossing: New Horizons",
    image:
      "https://s1.gaming-cdn.com/images/products/4809/271x377/animal-crossing-new-horizons-switch-cover.jpg",
    platform: "Nintendo Switch",
    dateListed: new Date("May 21, 2020 12:35"),
    description: "Interested in trading for other Switch games.",
    owner: "Richard",
    ownerID: 2,
    location: "Singapore",
    isTrading: true,
    isRenting: false,
    isSelling: false,
    isTradingFor: ["Pokemon Sword and Shield", "Super Smash Bros. Ultimate"],
    isRentingFor: null,
    isSellingFor: null,
  },
  {
    listingId: 3,
    title: "Fortnite",
    image:
      "https://livecards.eu/pl/fortnite-deep-freeze-bundle-dlc-ps4-40845.png",
    platform: "PlayStation 4",
    dateListed: new Date("April 12, 2020 22:10"),
    description: "Prices are flexible. Dm me for more details",
    owner: "Marcus",
    ownerID: 3,
    location: "Singapore",
    isTrading: true,
    isRenting: true,
    isSelling: true,
    isTradingFor: ["Grand Theft Auto 5"],
    isRentingFor: 10,
    isSellingFor: 30,
  },
  {
    listingId: 4,
    title: "Grand Theft Auto 5",
    platform: "Xbox One",
    image:
      "https://cdn-products.eneba.com/resized-products/H5Z4EiEfIeHu-8HYGwU_0914wyrR1reVKXYh5G3JsTk_390x400_3x-0.jpeg",
    dateListed: new Date("June 30, 2020 09:42"),
    description: "",
    owner: "Jimmy",
    ownerID: 4,
    location: "Singapore",
    isTrading: true,
    isRenting: false,
    isSelling: true,
    isTradingFor: ["NBA 2K20"],
    isRentingFor: null,
    isSellingFor: 35,
  },
  {
    listingId: 5,
    title: "The Legend of Zelda: Breath of the Wild",
    platform: "Nintendo Switch",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81KGsbq8ekL._AC_SL1500_.jpg",
    dateListed: new Date("March 11, 2020 06:51"),
    description:
      "Selling some games I used to play. Check my inventory for other switch games",
    owner: "thelegend27",
    ownerID: 5,
    location: "Singapore",
    isTrading: false,
    isRenting: false,
    isSelling: true,
    isTradingFor: null,
    isRentingFor: null,
    isSellingFor: 55,
  },
  {
    listingId: 6,
    title: "Kirby's Return to Dream Land",
    platform: "Wii",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Kirbys_return_to_dreamland_boxart.jpg/220px-Kirbys_return_to_dreamland_boxart.jpg",
    dateListed: new Date("July 3, 2020 19:02"),
    description: "",
    owner: "Jimmy",
    ownerID: 4,
    location: "Singapore",
    isTrading: false,
    isRenting: false,
    isSelling: true,
    isTradingFor: null,
    isRentingFor: null,
    isSellingFor: 55,
  },
  {
    listingId: 7,
    title: "Super Smash Bros. Ultimate",
    platform: "Nintendo Switch",
    image:
      "https://images.nintendolife.com/73b5ee31cad64/super-smash-bros-ultimate-cover.cover_large.jpg",
    dateListed: new Date("June 27, 2020 18:01"),
    description: "",
    owner: "Damion",
    ownerID: 6,
    location: "Singapore",
    isTrading: true,
    isRenting: false,
    isSelling: false,
    isTradingFor: ["Animal Crossing: New Horizons"],
    isRentingFor: null,
    isSellingFor: null,
  },
  {
    listingId: 8,
    title: "Stardew Valley",
    platform: "Nintendo Switch",
    image:
      "https://i1.wp.com/limitedgamenews.com/wp-content/uploads/2019/01/stardew-valley-collectors-edition-nintendo-multi-language-switch-cover-limitedgamenews.com_.jpg?ssl=1",
    dateListed: new Date("December 23, 2019 18:20"),
    description: "",
    owner: "John Lee",
    ownerID: 7,
    location: "Singapore",
    isTrading: false,
    isRenting: true,
    isSelling: true,
    isTradingFor: null,
    isRentingFor: 7,
    isSellingFor: 45,
  },
  {
    listingId: 9,
    title: "FIFA 20",
    platform: "Xbox One",
    image: "https://image.smythstoys.com/original/desktop/603882.jpg",
    dateListed: new Date("July 17, 2020 08:24"),
    description:
      "Really want to get Animal Crossing as a present for my friend. Prices and trades are flexible",
    owner: "Chan Ming",
    ownerID: 8,
    location: "Singapore",
    isTrading: true,
    isRenting: false,
    isSelling: 55,
    isTradingFor: ["Animal Crossing: New Horizons"],
    isRentingFor: false,
    isSellingFor: null,
  },
  {
    listingId: 10,
    title: "Resident Evil 3",
    platform: "PlayStation 4",
    image:
      "https://cdn.shopify.com/s/files/1/2540/2134/products/PS4_resident_evil_3_remake_1024x1024.jpg?v=1579065515",
    dateListed: new Date("July 17, 2020 08:27"),
    description:
      "Really want to get Animal Crossing as a present for my friend. Prices and trades are flexible",
    owner: "Chan Ming",
    ownerID: 8,
    location: "Singapore",
    isTrading: true,
    isRenting: false,
    isSelling: true,
    isTradingFor: ["Animal Crossing: New Horizons"],
    isRentingFor: null,
    isSellingFor: 55,
  },
];

module.exports = DUMMYLISTINGS;
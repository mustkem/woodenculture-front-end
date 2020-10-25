export const categories = [
  {
    label: "Bedroom",
    slug: "bedroom",
  },
  {
    label: "Living",
    slug: "living-room",
  },

  {
    label: "Dining",
    slug: "dining",
  },
  {
    label: "Office",
    slug: "office",
  },
  {
    label: "Kids",
    slug: "kids",
  },
  {
    label: "Decor",
    slug: "decor",
  },
  {
    label: "Bar",
    slug: "bar",
  },
];

export const subcategories = [
  {
    label: "Double Bed",
    image_url: "https://woodenculture.s3.us-east-2.amazonaws.com/images/sub-cate-1.jpg",
    popular: true,
    category_slug: "bedroom",
  },
  {
    label: "Almirah",
    image_url: "https://woodenculture.s3.us-east-2.amazonaws.com/images/sub-cate-2.jpg",
    popular: true,
    category_slug: "bedroom",
  },
  {
    label: "Tables",
    image_url: "https://woodenculture.s3.us-east-2.amazonaws.com/images/sub-cate-3.jpg",
    popular: true,
    category_slug: "bedroom",
  },
  {
    label: "Mirrors",
    image_url: "https://woodenculture.s3.us-east-2.amazonaws.com/images/sub-cate-1.jpg",
    popular: true,
    category_slug: "bedroom",
  },
];

const products = [
  {
    images: [
      {
        url:
          "https://woodenculture.s3.us-east-2.amazonaws.com/images/Iglesias%2BCoffee%2BTable.jpg",
      },
    ],
    title: "Iglesias Coffee Table",
    description:
      "Sure to make a statement as a centerpiece in your seating ensemble, this coffee table offers rustic, modern charm in one posh piece! Showcasing.",
    details: {
      Material: "Wood, Glass",
      Customization: "Available",
      "Best Suited For": "Bedroom",
      Prediction:
        "even if you live in the city, this piece will bring the beach feel to your living room!",
    },
    category_slug: "bedroom",
    subcategory_slug: "double-bed",
  },
  {
    images: [
      {
        url:
          "https://woodenculture.s3.us-east-2.amazonaws.com/images/Iglesias%2BCoffee%2BTable.jpg",
      },
    ],
    title: "Iglesias Coffee Table",
    description:
      "Sure to make a statement as a centerpiece in your seating ensemble, this coffee table offers rustic, modern charm in one posh piece! Showcasing.",
    details: {
      Material: "Wood, Glass",
      Customization: "Available",
      "Best Suited For": "Bedroom",
      Prediction:
        "even if you live in the city, this piece will bring the beach feel to your living room!",
    },
    category_slug: "bedroom",
    subcategory_slug: "double-bed",
  },
];

export class DataApi {
  getSubCategories(filters) {
    console.log(filters);
    return subcategories.filter((item) => item.category_slug === filters.category);
  }
  getPopularSubCategories() {
    return subcategories.filter((item) => item.popular);
  }
  getProducts(filters) {
    return products.filter(
      (item) =>
        item.category_slug === filters.category && item.subcategory_slug === filters.subcategory
    );
  }
}

//referenced document
const product = {
  id: "pr2025",
  name: "French Hijab",
  price: 30,
  colors: ["black", "gray", "red"],
};
const reviews = [
  { id: 1, text: "excellent Hijeb", rating: "5", productId: "pr2025" },
  { id: 2, text: "Good Hijeb", rating: "4", productId: "pr2025" },
];
//embedded document
const product2 = {
  id: "prNew2025",
  name: "Robe",
  price: 100,
  colors: ["black", "gray", "red", "white"],
  reviews: [
    { id: 1, text: "excellent Hijeb", rating: "5" },
    { id: 2, text: "Good Hijeb", rating: "4" },
  ],
};

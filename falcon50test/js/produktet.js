// Produktet JSON
const products = [
  {
    id: 1,
    name: "Karrige SENSE7 Spellcaster FUKU XL",
    price: "€149.50",
    description: "Karrige e rehatshme dhe funksionale për zyrë dhe lojë, me mundësi të shumta rregullimi.",
    image: "https://iqq6kf0xmf.gjirafa.net/images/e71d7f23-998b-4aac-b2e9-816c8b053b27/e71d7f23-998b-4aac-b2e9-816c8b053b27.jpeg?w=490",
    category: "Furniture",
  },
  {
    id: 2,
    name: "Tablet Samsung Galaxy Tab A9, 4/64, i hirtë",
    price: "€117.50",
    description: "Tablet me 4GB RAM dhe 64GB memorie, ideal për punë dhe lojë.",
    image: "https://iqq6kf0xmf.gjirafa.net/images/1bec05c2-d751-4257-b259-33a15fecc24c/1bec05c2-d751-4257-b259-33a15fecc24c.jpeg?w=490",
    category: "Tablet",
  },
  // Më shumë produkte mund të shtohen këtu
];

// Shfaq produktet në faqe
const container = document.getElementById("products-container");

products.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-name">${product.name}</div>
    <div class="product-price">${product.price}</div>
    <div class="product-description">${product.description}</div>
  `;
  container.appendChild(productElement);
});

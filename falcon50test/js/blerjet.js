document.addEventListener("DOMContentLoaded", function() {
  const purchasedItems = JSON.parse(localStorage.getItem("purchasedProducts")) || [];
  const purchasedItemsContainer = document.getElementById("purchased-items");

  if (purchasedItems.length === 0) {
      purchasedItemsContainer.innerHTML = "<p>Nuk keni blerje!</p>";
  } else {
      const itemsList = purchasedItems.map((item, index) => `
          <div class="purchased-item">
              <img src="${item.image}" alt="${item.name}" style="max-width: 100px;">
              <h2>${item.name}</h2><br>
              <button class="delete-button" onclick="deleteItem(${index})">
                  <i class="fa-solid fa-trash"></i><br>
              </button>
          </div>
      `).join("");
      purchasedItemsContainer.innerHTML = itemsList;
  }
});

function deleteItem(index) {
  const purchasedItems = JSON.parse(localStorage.getItem("purchasedProducts")) || [];
  purchasedItems.splice(index, 1); // Remove the item at the specified index
  localStorage.setItem("purchasedProducts", JSON.stringify(purchasedItems)); // Update localStorage
  location.reload(); // Reload the page to reflect changes
}
document.addEventListener("DOMContentLoaded", function() {
const purchasedItems = JSON.parse(localStorage.getItem("purchasedProducts")) || [];
const purchasedItemsContainer = document.getElementById("purchased-items");

if (purchasedItems.length === 0) {
purchasedItemsContainer.innerHTML = "<p>Nuk keni blerje!</p>";
} else {
const itemsList = purchasedItems.map((item, index) => `
  <div class="purchased-item" onclick="showOrderDetails(${index})">
      <img src="${item.image}" alt="${item.name}" style="max-width: 100px;">
      <h2>${item.name}</h2>
     
      <button class="delete-button" onclick="deleteItem(event, ${index})">
          <i class="fa-solid fa-trash"></i>
      </button>
  </div>
`).join("");
purchasedItemsContainer.innerHTML = itemsList;
}
});

function showOrderDetails(index) {
const purchasedItems = JSON.parse(localStorage.getItem("purchasedProducts")) || [];
const orderDetails = document.getElementById("order-details");
const item = purchasedItems[index];

// Funksioni për të gjeneruar një numër të rastësishëm me 6 shifra
function generateRandomNumber() {
return Math.floor(100000 + Math.random() * 900000); // Numër i rastësishëm nga 100000 deri në 999999
}

// Gjeneroni numrin e rastësishëm
const randomNumber = generateRandomNumber();

// Kontrolloni nëse detajet e porosisë janë tashmë të dukshme
if (orderDetails.style.display === "block") {
orderDetails.style.display = "none"; // Fshihni detajet e porosisë
} else {
orderDetails.innerHTML = `
<div class="det">
  <h2>Detajet e Porosisë</h2>
  <img src="${item.image}" alt="${item.name}" style="max-width: 300px;">
  <p><strong>Emri:</strong> ${item.name}</p>
  <p><strong>Çmimi për njësi:</strong> ${item.price}</p>
  <p><strong>Shuma:</strong> ${item.quantity}</p>
  <p><strong>Çmimi Final:</strong> ${item.finalPrice} </p>
  <p><strong>Numri i porosise: </strong>#${randomNumber}</p>
  <!-- Shtoni numrin e rastësishëm këtu -->
</div>
`;
orderDetails.style.display = "block"; // Shfaqni detajet e porosisë
}
}

function deleteItem(event, index) {
event.stopPropagation(); // Parandaloni ngjarjen e klikimit që të ngjitet te elementi
const purchasedItems = JSON.parse(localStorage.getItem("purchasedProducts")) || [];
purchasedItems.splice(index, 1); // Hiqni elementin në indeksin e specifikuar
localStorage.setItem("purchasedProducts", JSON.stringify(purchasedItems)); // Përditësoni localStorage
location.reload(); // Rilidhni faqen për të reflektuar ndryshimet
}
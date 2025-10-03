// === Product Array ===
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
  // === Populate Product Dropdown ===
  const productSelect = document.getElementById("productName");
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      productSelect.appendChild(option);
    });
  }

  // === Review Counter on review.html ===
  const reviewCountElement = document.getElementById("reviewCount");
  if (reviewCountElement) {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    if (document.referrer.includes("form.html")) {
      count += 1;
      localStorage.setItem("reviewCount", count);
    }
    reviewCountElement.textContent = count;
  }

  // === Last Modified Date in Footer ===
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    const date = new Date(document.lastModified);
    lastModified.textContent = `Last Modified: ${date.toLocaleString()}`;
  }
});

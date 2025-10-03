// =============================
// Product Review Form Script
// =============================

// === Product Array ===
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
  // =============================
  // 1. Populate Product Dropdown
  // =============================
  const productSelect = document.getElementById("productName");

  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;

      // Capitalize words for better UX
      option.textContent = product.name
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      productSelect.appendChild(option);
    });
  }

  // =============================
  // 2. Review Counter (on review.html)
  // =============================
  const reviewCountElement = document.getElementById("reviewCount");

  if (reviewCountElement) {
    // Retrieve current count or default to 0
    let count = Number(localStorage.getItem("reviewCount")) || 0;

    // Only increment if the user just submitted from form.html
    if (document.referrer.includes("form.html")) {
      count += 1;
      localStorage.setItem("reviewCount", count);
    }

    // Display count
    reviewCountElement.textContent = count;
  }
});

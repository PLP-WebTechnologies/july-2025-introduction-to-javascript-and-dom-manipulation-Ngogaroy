// =============================
// 🎯 Part 1: JavaScript Basics
// =============================
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  let age = document.getElementById("ageInput").value;
  let result = "";

  // Conditional statement
  if (age >= 18) {
    result = "✅ You are eligible to vote!";
  } else if (age > 0) {
    result = "❌ You are not eligible to vote yet.";
  } else {
    result = "⚠️ Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = result;
});

// =============================
// ❤️ Part 2: Functions
// =============================

// Function to show greeting
function showGreeting(name) {
  document.getElementById("functionResult").textContent =
    `Hello, ${name}! Welcome to JavaScript learning 🚀`;
}

// Function to calculate total price
function calculateTotal(quantity, price) {
  let total = quantity * price;
  document.getElementById("functionResult").textContent =
    `Total: $${total}`;
}

// =============================
// 🔁 Part 3: Loops
// =============================
document.getElementById("generateListBtn").addEventListener("click", () => {
  let list = document.getElementById("numberList");
  list.innerHTML = "";

  // For loop example
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number ${i}`;
    list.appendChild(li);
  }
});

// =============================
// 🌐 Part 4: DOM Manipulation
// =============================

// Toggle background color
document.getElementById("toggleColorBtn").addEventListener("click", () => {
  document.body.style.background =
    document.body.style.background === "lightblue" ? "#f4f4f9" : "lightblue";
});

// Change header text
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.querySelector("h1").textContent =
    "🌟 JavaScript DOM is Powerful!";
});

// Add new item to a list
document.getElementById("addItemBtn").addEventListener("click", () => {
  let ul = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = `New item ${ul.children.length + 1}`;
  ul.appendChild(li);
});

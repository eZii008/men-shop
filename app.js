import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// Конфиг Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBkzDni1uR6NaBH1wgglWthWDIN2xpRCUM",
  authDomain: "menshopnew.firebaseapp.com",
  projectId: "menshopnew",
  storageBucket: "menshopnew.firebasestorage.app",
  messagingSenderId: "846808028538",
  appId: "1:846808028538:web:4473be35e367d467ab32c3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Загрузка товаров
async function loadProducts() {
  const catalog = document.getElementById("catalog");
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    const product = doc.data();
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-name">${product.name}</div>
      <div class="product-price">${product.price} сом</div>
    `;
    catalog.appendChild(div);
  });
}

loadProducts();

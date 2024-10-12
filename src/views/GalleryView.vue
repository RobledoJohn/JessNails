<script setup>
import { ref, onMounted } from 'vue';
import { initializeApp } from "firebase/app";
import { getStorage, ref as storageRef, listAll, getDownloadURL } from "firebase/storage";

// Firebase configuration (reemplaza con tu configuración)
const firebaseConfig = {
  apiKey: "AIzaSyAbkrPUS9npVDpq_5OvMmS4XKn9CubrReU",
  authDomain: "nails-b6731.firebaseapp.com",
  projectId: "nails-b6731",
  storageBucket: "nails-b6731.appspot.com",
  messagingSenderId: "691329541150",
  appId: "1:691329541150:web:2a66dea8c58a6877ad3a0f",
  measurementId: "G-V5GF3K0WF2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

// Reactive variables
const images = ref([]);

// Function to fetch images from Firebase Storage
const fetchImages = async () => {
  const imagesRef = storageRef(storage, 'images/'); // Referencia a la carpeta "images"
  const result = await listAll(imagesRef);

  // Obtener la URL de cada imagen y guardarla en el array "images"
  result.items.forEach(async (itemRef) => {
    const url = await getDownloadURL(itemRef);
    images.value.push(url); // Guardar la URL en el array
  });
};

// Fetch images when the component is mounted
onMounted(() => {
  fetchImages();
});
</script>

<template>
  <div class="gallery-container">
    <p class="tittle">Galería</p>
    <div class="gallery">
      <img class="item-gallery" v-for="(image, index) in images" :key="index" :src="image" alt="Uploaded Image"/>
    </div>
  </div>
</template>

<style scoped>

.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px;
}

.item-gallery {
  border-radius: 10px;
  width: 300px;
  height: 300px;
}

</style>
<script setup>
import { ref } from 'vue';
import { initializeApp } from "firebase/app";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Firebase configuration (reemplaza esto con tu configuración)
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

// Variables reactivas
const picture = ref(null);
const pictureUrl = ref(null);

// Métodos
const onFileSelected = (event) => {
  picture.value = event.target.files[0];
};

const onUpload = () => {
  const storageReference = storageRef(storage, `images/${picture.value.name}`);
  const uploadTask = uploadBytesResumable(storageReference, picture.value);

  uploadTask.on('state_changed', snapshot => {
    console.log('snapshot', snapshot);
  }, error => {
    console.log('error', error);
  }, async () => {
    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    pictureUrl.value = downloadURL;
    console.log('File available at', downloadURL);
  });
};
</script>

<template>
  <p class="tittle">Subir Imagen</p>
  <input type="file" @change="onFileSelected" />
  <button @click="onUpload">Subir</button>
  <img v-if="pictureUrl" :src="pictureUrl" width="300" alt="imgUpload" />
</template>

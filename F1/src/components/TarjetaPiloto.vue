<template>
  <div class="contenedor">
    <div
      class="tarjeta"
      v-for="driver in drivers"
      :key="driver.id"
      @click="selectDriver(driver)"
    >
      <div class="tarjetaImagen">
        <img :src="driver.driver.image" alt="imagen piloto" />
      </div>
      <div class="tarjetaInfo">
        <h2>{{ driver.driver.name }}</h2>
        <p><span>Abbr: </span> {{ driver.driver.abbr }}</p>
        <hr />
        <p><span>Numero en Ranking: </span> {{ driver.position }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";

const pilotoExtendido = ref([]);

const props = defineProps({
  drivers: {
    type: Array,
    required: true,
  },
});
const selectDriver = async (driver) => {
  try {
    const response = await fetch(
      "https://f1-api-bs37.onrender.com/pilot?name=" + driver.driver.name
    ); // Ajusta la ruta según la ubicación real de tu archivo
    const data = await response.json();
    console.log(data);
    pilotoExtendido.value = data[0];
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }

  openPopup(pilotoExtendido.value);
};

const openPopup = (pilotoExtendido) => {
  console.log(pilotoExtendido.value);

  // Crear el elemento popup
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
    <div class="popupContent">
      <div class="popupClose">
        <button class="closeButton">&times;</button>
      </div>
      <div class="popupImagen">
        <img src="${pilotoExtendido.image}" alt="imagen piloto" class="popupImagenPiloto">
      </div>
      <div class="popupInfo">
        
          <h2>${pilotoExtendido.name}</h2>
          <p><span>Abbr: </span> ${pilotoExtendido.abbr} </p>
          <hr>
          <p><span>Fecha de nacimiento: </span> ${pilotoExtendido.birthplace} </p>
          <hr>
          <p><span>Fecha de Nacimiento: </span> ${pilotoExtendido.career_points} </p>
          <hr>
          <p><span>Nacionalidad: </span> ${pilotoExtendido.country.name} </p>
          <hr>
          <p><span>Veces competidas: </span> ${pilotoExtendido.grands_prix_entered} </p>
          <hr>
          <p><span>Numero: </span> ${pilotoExtendido.number} </p>
          <hr>
          <p><span>Podiums: </span> ${pilotoExtendido.podiums} </p>
          <hr>
      </div>
    </div>`;

  // Agregar el popup al final del cuerpo del documento
  document.body.appendChild(popup);

  // Agregar un listener al botón de cerrar
  const closeButton = popup.querySelector(".closeButton");
  closeButton.addEventListener("click", () => {
    document.body.removeChild(popup);
  });
};

onMounted(() => {
  const container = ref.container;
  let position = 0;
  setInterval(() => {
    position -= 1;
    container.style.transform = `translateX(${position}px)`;
  }, 10); // La velocidad del desplazamiento, puedes ajustar este valor según tu preferencia
});
</script>

<style>
</style>

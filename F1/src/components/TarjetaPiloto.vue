<template>
  <div class="contenedor">
    <div class="tarjeta" v-for="driver in drivers" :key="driver.id" @click="selectDriver(driver)">
      <div class="tarjetaImagen">
        <img :src="driver.driver.image" alt="imagen piloto">
      </div>
      <div class="tarjetaInfo">
        <h2>{{ driver.driver.name }}</h2>
        <p><span>Abbr: </span> {{ driver.driver.abbr }} </p>
        <hr>
        <p><span>Numero en Ranking: </span> {{ driver.position }} </p>
        <hr>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const pilotoExtendido = ref([]);

const props = defineProps({
  drivers: {
    type: Array,
    required: true
  }
});
const selectDriver = async (driver) => {
  try {
    const response = await fetch('https://f1-api-bs37.onrender.com/pilot?name=' + driver.driver.name); // Ajusta la ruta según la ubicación real de tu archivo
    const data = await response.json();
    console.log(data)
    pilotoExtendido.value = data[0];
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }

  openPopup(pilotoExtendido.value)

};

const openPopup = (pilotoExtendido) => {
  console.log(pilotoExtendido.value);

  // Crear el elemento popup
  const popup = document.createElement('div');
  popup.classList.add('popup');
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
          <p><span>Numero en Ranking: </span> ${pilotoExtendido.position} </p>
          <hr>
          <p><span>Fecha de Nacimiento: </span> ${pilotoExtendido.dateOfBirth} </p>
          <hr>
          <p><span>Nacionalidad: </span> ${pilotoExtendido.nationality} </p>
          <hr>
          <p><span>Equipo: </span> ${pilotoExtendido.team} </p>
          <hr>
          <p><span>Numero: </span> ${pilotoExtendido.number} </p>
          <hr>
          <p><span>Victorias: </span> ${pilotoExtendido.wins} </p>
          <hr>
          <p><span>Podios: </span> ${pilotoExtendido.podiums} </p>
          <hr>
          <p><span>Poles: </span> ${pilotoExtendido.poles} </p>
          <hr>
          <p><span>Fecha de Debut: </span> ${pilotoExtendido.debut} </p>
          <hr>
          <p><span>Fecha de Retiro: </span> ${pilotoExtendido.retire} </p>
          <hr>
          <p><span>Victorias: </span> ${pilotoExtendido.wins} </p>
          <hr>
      </div>
    </div>`;

  // Agregar el popup al final del cuerpo del documento
  document.body.appendChild(popup);

  // Agregar un listener al botón de cerrar
  const closeButton = popup.querySelector('.closeButton');
  closeButton.addEventListener('click', () => {
    document.body.removeChild(popup);
  });
};




</script>
  
<style></style>
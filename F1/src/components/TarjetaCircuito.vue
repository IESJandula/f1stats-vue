<template>
  <div class="contenedor">
    <div class="tarjeta" v-for="race in races" :key="race.id" @click="selectCircuit(race)">
      <div class="tarjetaImagen">
        <img :src="race.circuit.image" alt="mapa circuito">
      </div>
      <div class="tarjetaInfo">
        <h2>{{ race.circuit.name }}</h2>
        <p><span>País: </span> {{ race.competition.location.country }} </p>
        <hr>
        <p><span>Ciudad: </span> {{ race.competition.location.city }} </p>
        <hr>
        <p><span>Kilómetros: </span> {{ race.distance }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from 'vue';

const circuitoExtendido = ref([]);

const props = defineProps({
  races: {
    type: Array,
    required: true
  }
});

const selectCircuit = async (race) => {
  try {
    const response = await fetch('https://f1-api-bs37.onrender.com/circuit?name=' + race.competition.name); // Ajusta la ruta según la ubicación real de tu archivo
    const data = await response.json();
    console.log(data)
    circuitoExtendido.value = data[0];
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }

  openPopup(circuitoExtendido.value)

};

const openPopup = (circuitoExtendido) => {
  console.log(circuitoExtendido.value);

  // Crear el elemento popup
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popupContent">
      <div class="popupClose">
        <button class="closeButton">&times;</button>
      </div>
      <div class="popupImagen">   
        <img src="${circuitoExtendido.circuit.image}" alt="imagen piloto" class="popupImagenPiloto">
      </div>
      <div class="popupInfo">
        
          <h2>${circuitoExtendido.circuit.name}</h2>
          <p><span>País: </span> ${circuitoExtendido.competition.location.country} </p>
          <hr>
          <p><span>Ciudad: </span> ${circuitoExtendido.competition.location.city} </p>
          <hr>
          <p><span>Temporada: </span> ${circuitoExtendido.season} </p>
          <hr>
          <p><span>Laps: </span> ${circuitoExtendido.laps.total} </p>
          <hr>
          <p><span>Distancia: </span> ${circuitoExtendido.distance} </p>
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
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
import { defineProps } from 'vue';

const props = defineProps({
  races: {
    type: Array,
    required: true
  }
});

const selectCircuit = async (race) => {
  try {
    console.log(race.circuit.name)
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
      <div class="popupImagen">
        <button class="closeButton">&times;</button>
        <img src="${circuitoExtendido.image}" alt="imagen piloto" class="popupImagenPiloto">
      </div>
      <div class="popupInfo">
        
          <h2>${circuitoExtendido.name}</h2>
          <p><span>Abbr: </span> ${circuitoExtendido.abbr} </p>
          <hr>
          <p><span>Numero en Ranking: </span> ${circuitoExtendido.position} </p>
          <hr>
          <p><span>Fecha de Nacimiento: </span> ${circuitoExtendido.dateOfBirth} </p>
          <hr>
          <p><span>Nacionalidad: </span> ${circuitoExtendido.nationality} </p>
          <hr>
          <p><span>Equipo: </span> ${circuitoExtendido.team} </p>
          <hr>
          <p><span>Numero: </span> ${circuitoExtendido.number} </p>
          <hr>
          <p><span>Victorias: </span> ${circuitoExtendido.wins} </p>
          <hr>
          <p><span>Podios: </span> ${circuitoExtendido.podiums} </p>
          <hr>
          <p><span>Poles: </span> ${circuitoExtendido.poles} </p>
          <hr>
          <p><span>Fecha de Debut: </span> ${circuitoExtendido.debut} </p>
          <hr>
          <p><span>Fecha de Retiro: </span> ${circuitoExtendido.retire} </p>
          <hr>
          <p><span>Victorias: </span> ${circuitoExtendido.wins} </p>
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
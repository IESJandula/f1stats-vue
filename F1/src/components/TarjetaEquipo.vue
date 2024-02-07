<template>
  <div class="contenedor">
    <div class="tarjeta" v-for="team in teams" :key="team.id" @click="selectTeam(team)">
      <div class="tarjetaImagen">
        <img :src="team.logo" alt="escudo equipo">
      </div>
      <div class="tarjetaInfo">
        <h2>{{ team.name }}</h2>
        <p><span>Base: </span> {{ team.base }} </p>
        <hr>
        <p><span>Campeonatos ganados: </span> {{ team.world_championships }} </p>
        <hr>
        <p><span>Primer año: </span> {{ team.first_team_entry }}</p>
        <hr>
        <p><span>Ranking: </span> {{ team.pole_positions }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from 'vue';
const equipoExtendido = ref([]);

const props = defineProps({
  teams: {
    type: Array,
    required: true
  }
});

const selectTeam = async (team) => {
  try {
    const response = await fetch('https://f1-api-bs37.onrender.com/teams?' + team.name); // Ajusta la ruta según la ubicación real de tu archivo
    const data = await response.json();
    console.log(data)
    equipoExtendido.value = data[0];
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }

  openPopup(equipoExtendido.value)

};


const openPopup = (equipoExtendido) => {
  console.log(equipoExtendido.value);

  // Crear el elemento popup
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popupContent">
      <div class="popupImagen">
        <button class="closeButtonTeam">&times;</button>
        <img src="${equipoExtendido.logo}" alt="logo_equipo" class="popupImagenPiloto">
      </div>
      <div class="popupInfo">
        
          <h2>${equipoExtendido.name}</h2>
          <p><span>Base: </span> ${equipoExtendido.base} </p>
          <hr>
          <p><span>Campeonatos: </span> ${equipoExtendido.world_championships} </p>
          <hr>
          <p><span>Primera entrada a competicion: </span> ${equipoExtendido.first_team_entry} </p>
          <hr>
          <p><span>Posicion en Pole: </span> ${equipoExtendido.pole_positions} </p>
          <hr>
          <p><span>Vuelta mas rapida: </span> ${equipoExtendido.fastest_laps} </p>
          <hr>
          <p><span>Presidente: </span> ${equipoExtendido.president} </p>
          <hr>
          <p><span>Director: </span> ${equipoExtendido.director} </p>
          <hr>
          <p><span>Manager Tecnico: </span> ${equipoExtendido.technical_manager} </p>
          <hr>
          <p><span>Chasis: </span> ${equipoExtendido.chassis} </p>
          <hr>
          <p><span>Motor: </span> ${equipoExtendido.engine} </p>
          <hr>
          <p><span>Neumaticos: </span> ${equipoExtendido.tyres} </p>
          <hr>
          <p><span>Victorias: </span> ${equipoExtendido.wins} </p>
          <hr>
      </div>
    </div>`;

  // Agregar el popup al final del cuerpo del documento
  document.body.appendChild(popup);

  // Agregar un listener al botón de cerrar
  const closeButton = popup.querySelector('.closeButtonTeam');
  closeButton.addEventListener('click', () => {
    document.body.removeChild(popup);
  });
};

</script>
  
<style></style>
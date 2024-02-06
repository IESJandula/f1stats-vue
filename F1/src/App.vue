<template>
  <header>
    <ul>
      <li @click="hacerPeticion"><router-link to="/" class="router-link">Index</router-link></li>
      <li @click="hacerPeticion"><router-link to="/drivers" class="router-link">Pilotos</router-link></li>
      <li @click="hacerPeticion"><router-link to="/circuits" class="router-link">Circuitos</router-link></li>
      <li @click="hacerPeticion"><router-link to="/teams" class="router-link">Equipos</router-link></li>
    </ul>
    <form>
      <input type="text" placeholder="Busca por circuito, equipo o piloto">
    </form>
  </header>

  <div class="index">
    <h2 class="titulos">Pilotos</h2>
    <TarjetaPiloto :drivers="driversData"/>
  </div>

  <div class="circuitos">
    <h2 class="titulos">Circuitos</h2>
    <TarjetaCircuito :races="racesData"/>
  </div>

  <div class="equipos">
    <h2 class="titulos">Equipos</h2>
    <TarjetaEquipo :teams="teamsData"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TarjetaCircuito from './components/TarjetaCircuito.vue';
import TarjetaEquipo from './components/TarjetaEquipo.vue';
import TarjetaPiloto from './components/TarjetaPiloto.vue';

//variables
const racesData = ref([]);
const teamsData = ref([]);
const driversData = ref([]);

//circuitos
const fetchRaceData = async () => {
  try {
    const response = await fetch('https://f1-api-bs37.onrender.com/circuits'); // Ajusta la ruta según la ubicación real de tu archivo
    const data = await response.json();
    racesData.value = data;
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
};

onMounted(fetchRaceData);
//teams
const fetchTeamData = async () => {
  try {
    const response = await fetch('https://f1-api-bs37.onrender.com/teams'); // Ajusta la ruta según la ubicación real de tu archivo
    const data = await response.json();
    teamsData.value = data;
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
};

onMounted(fetchTeamData);

//pilotos
const fetchDriverData = async () => {
  try {
    const response = await fetch('https://f1-api-bs37.onrender.com/ranking'); // Ajusta la ruta según la ubicación real de tu archivo
    const data = await response.json();
    driversData.value = data;
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
};

onMounted(fetchDriverData);

</script>

<style scoped>
/* Estilos específicos del componente si es necesario */
</style>
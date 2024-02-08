<template>
  <header>
    <ul>
      <li @click="hacerPeticion"><router-link to="/index" class="router-link">Index</router-link></li>
      <li @click="hacerPeticion"><router-link to="/drivers" class="router-link">Pilotos</router-link></li>
      <li @click="hacerPeticion"><router-link to="/circuits" class="router-link">Circuitos</router-link></li>
      <li @click="hacerPeticion"><router-link to="/teams" class="router-link">Equipos</router-link></li>
    </ul>
    <form>
      <input type="text" v-model="inputValue" placeholder="Busca por circuito, equipo o piloto" @input="handleSearch">
    </form>
  </header>

  <div class="index" v-if="router.path === '/index'">
    <h2 class="titulos">Mejores Pilotos</h2>
    <TarjetaPiloto :drivers="resultadoFiltradoPilotos && resultadoFiltradoPilotos.length > 0 ? resultadoFiltradoPilotos : driversData"/>
  </div>

<div class="drivers" v-else-if="router.path === '/drivers'">
  <h2 class="titulos">Pilotos</h2>
  <TarjetaPiloto :drivers="resultadoFiltradoPilotos && resultadoFiltradoPilotos.length > 0 ? resultadoFiltradoPilotos : driversData"/>
</div>

<div class="circuitos" v-else-if="router.path === '/circuits'">
  <h2 class="titulos">Circuitos</h2>
  <TarjetaCircuito :races="resultadoFiltradoCircuitos && resultadoFiltradoCircuitos.length > 0 ? resultadoFiltradoCircuitos : racesData"/>
</div>

<div class="equipos" v-else-if="router.path === '/teams'">
  <h2 class="titulos">Equipos</h2>
  <TarjetaEquipo :teams="resultadoFiltradoEquipos && resultadoFiltradoEquipos.length > 0 ? resultadoFiltradoEquipos : teamsData"/>
</div>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import TarjetaCircuito from './components/TarjetaCircuito.vue';
import TarjetaEquipo from './components/TarjetaEquipo.vue';
import TarjetaPiloto from './components/TarjetaPiloto.vue';
import { useRoute } from 'vue-router';

//variables
const racesData = ref([]);
const teamsData = ref([]);
const driversData = ref([]);
const router = useRoute();
const inputValue = ref('');
const resultadoFiltradoPilotos = ref([]);
const resultadoFiltradoEquipos = ref([]);
const resultadoFiltradoCircuitos = ref([]);

// Función para manejar la búsqueda
const handleSearch = () => {
  const terminoBusqueda = new RegExp(`^${inputValue.value}`, 'i');;

  // Filtrar pilotos
   resultadoFiltradoPilotos.value = driversData.value.filter(
    piloto => terminoBusqueda.test(piloto.driver.name)
  );

  // Filtrar equipos
   resultadoFiltradoEquipos.value = teamsData.value.filter(
    equipo => terminoBusqueda.test(equipo.name)
  );

  // Filtrar circuitos
   resultadoFiltradoCircuitos.value = racesData.value.filter(
    circuito => terminoBusqueda.test(circuito.circuit.name)
  );

  // Manejar los resultados filtrados según sea necesario
  console.log('Pilotos:', resultadoFiltradoPilotos.value);
  console.log('Equipos:', resultadoFiltradoEquipos.value);
  console.log('Circuitos:', resultadoFiltradoCircuitos.value);
};


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
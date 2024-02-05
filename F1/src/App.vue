<template>
  <div>
    <h1>Listado de Circuitos:</h1>
    <ul>
      <li v-for="race in racesData" :key="race.id">
        <h2>{{ race.competition.name }}</h2>
        <p>País: {{ race.competition.location.country }}</p>
        <p>Ciudad: {{ race.competition.location.city }}</p>
        <p>Nombre del Circuito: {{ race.circuit.name }}</p>
        <img :src="race.circuit.image" alt="Imagen del Circuito">
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const racesData = ref([]);

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

</script>

<style scoped>
/* Estilos específicos del componente si es necesario */
</style>
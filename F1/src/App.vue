<script setup>
import { computed, ref, onMounted } from 'vue';
import TarjetaCircuito from './components/TarjetaCircuito.vue';
import TarjetaEquipo from './components/TarjetaEquipo.vue';
import TarjetaPiloto from './components/TarjetaPiloto.vue';

const criterio = ref('null');
const asignarCriterio = (nuevoCriterio) => {
  criterio.value = nuevoCriterio;
}
const pilotos = ref(null);

onMounted(async () => {
  try {
    if (localStorage.getItem('todosLosPilotos')) {
      pilotos.value = JSON.parse(localStorage.getItem('todosLosPilotos'));
    } else {
    const url = 'https://api-formula-1.p.rapidapi.com/drivers';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '860914b740msh9672e2660043ce9p14cbf2jsnc01e34f1cde0',
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
      }
    };
    const response = await fetch(url, options);
    pilotos = await response.text();
    console.log(result);
  }
  } catch (error) {
    console.error(error);
  }
  
});

const circuitos = 'pendiente de';
const equipos = 'pendiente de implementar';

</script>

<template>
  <header>
    <ul>
      <li @click="asignarCriterio('index')">Index</li>
      <li @click="asignarCriterio('pilotos')">Pilotos</li>
      <li @click="asignarCriterio('circuitos')">Circuitos</li>
      <li @click="asignarCriterio('equipos')">Equipos</li>
    </ul>
    <form>
      <input type="text" placeholder="Busca por circuito, equipo o piloto">
    </form>
  </header>

  <div class="index" v-if="criterio.value === 'piloto'">
    <TarjetaPiloto v-for="piloto in pilotos" :key="piloto.id" :pilotoProp="piloto" />
  </div>

  <div class="circuitos">
    <TarjetaCircuito></TarjetaCircuito>
  </div>

  <div class="equipos">
    <TarjetaEquipo></TarjetaEquipo>
  </div>
</template>

<style scoped>
/* ... Tus estilos ... */
</style>

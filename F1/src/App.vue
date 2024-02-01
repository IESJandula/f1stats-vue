<script setup>
import { computed ,ref, onMounted} from 'vue';
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
      const response = await axios.get('https://api-formula-1.p.rapidapi.com/drivers');
      console.log(response.data);
      pilotos.value = response.data;
      localStorage.setItem('todosLosPilotos', JSON.stringify(response.data));
    }
  } catch (error) {
    console.error("Error fetching or parsing JSON:", error.message);
    pilotos.value = null; // Retorna null en caso de un error
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

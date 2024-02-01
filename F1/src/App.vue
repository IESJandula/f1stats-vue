<script setup>
import { computed, ref, onMounted } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TarjetaCircuito from './components/TarjetaCircuito.vue';
import TarjetaEquipo from './components/TarjetaEquipo.vue';
import TarjetaPiloto from './components/TarjetaPiloto.vue';
import { useRoute } from 'vue-router';


const router = useRoute();
const pilotos = ref(null);



/*SACAR LOS CIRCUITOS///////////////////////////////////////////////////////*/
const sacarInformacion = async () => {

  const url = 'https://api-formula-1.p.rapidapi.com'.router.path;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '56f9dd9624msh2e1a4a6a24767a5p1d0081jsnfbb7cfd4dcbc',
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

//const circuitos = 'pendiente de';
//const equipos = 'pendiente de implementar';

</script>

<template>
  <header>
    <ul>
      <li @click="sacarInformacion">Index</li>
      <li @click="sacarInformacion">Pilotos</li>
      <li @click="sacarInformacion">Circuitos</li>
      <li @click="sacarInformacion">Equipos</li>
    </ul>
    <form>
      <input type="text" placeholder="Busca por circuito, equipo o piloto">
    </form>
  </header>

  <div class="index" v-if="router.path === '/drivers'">
    <TarjetaPiloto v-for="piloto in pilotos" :key="piloto.id" :pilotoProp="piloto" />
  </div>

  <div class="circuitos"  v-if="router.path === '/circuits'">
    <TarjetaCircuito v-for="circuito in circuitos" :key="circuito.id" />
  </div>

  <div class="equipos"  v-if="router.path === '/teams'">
    <TarjetaEquipo></TarjetaEquipo>
  </div>
</template>

<style scoped>
/* ... Tus estilos ... */
</style>

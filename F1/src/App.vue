<script setup>
import { computed, ref, onMounted } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TarjetaCircuito from './components/TarjetaCircuito.vue';
import TarjetaEquipo from './components/TarjetaEquipo.vue';
import TarjetaPiloto from './components/TarjetaPiloto.vue';
import { useRoute } from 'vue-router';

const router = useRoute();
const pilotos = ref(localStorage.getItem('todosLosPilotos'));
const circuitos = ref(localStorage.getItem('todosLosCircuitos'));
const equipos = ref(localStorage.getItem('todosLosEquipos'));


const hacerPeticion = ()=>{
  if(!localStorage.getItem('todosLosPilotos') && router.path === '/drivers'){
    sacarInformacion();
  }else if(!localStorage.getItem('todosLosCircuitos') && router.path === '/circuits'){
    sacarInformacion();
  }else if(!localStorage.getItem('todosLosEquipos') && router.path === '/teams'){
    sacarInformacion();
  }

}
/*SACAR LOS CIRCUITOS///////////////////////////////////////////////////////*/
const sacarInformacion = async () => {
  
    const url = 'https://api-formula-1.p.rapidapi.com'+ router.path;
    console.log(url);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '56f9dd9624msh2e1a4a6a24767a5p1d0081jsnfbb7cfd4dcbc',
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
      }
  };
      try {
        const response = await fetch(url, options);
        if(!response.ok){
          throw new Error("La solicitud no fue exitosa. Código de estado: " + response.status);
        }
        const result = await response.json();
        switch (router.path) {
          case '/drivers':
            pilotos.value = result.response;
            localStorage.setItem('todosLosPilotos', result.response);
            break;

          case '/circuits':
            circuitos.value = result.response;
            localStorage.setItem('todosLosCircuitos', result.response);
            break;

          case '/teams':
            equipos.value = result;
            localStorage.setItem('todosLosEquipos', result.response);
            break;

          default:
            /* Pendiente de implementar la clase de errores para sacar notificación al usuario en este caso */
            break;
          }
        
        console.log(result.response);
      } catch (error) {
        console.error(error);

      } 
}


</script>

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

  <div class="index" v-if="router.path === '/drivers'">
    <p>esto se muestra solo si es pilotos</p>
    <TarjetaPiloto v-for="piloto in pilotos" :key="piloto.id" :pilotoProp="piloto" />
  </div>

  <div class="circuitos"  v-if="router.path === '/circuits'">
    <p>esto se muestra solo si es circuitos</p>
    <TarjetaCircuito v-for="circuito in circuitos" :key="circuito.id" />
  </div>

  <div class="equipos"  v-if="router.path === '/teams'">
    <p>esto se muestra solo si es equipos</p>
    <TarjetaEquipo></TarjetaEquipo>
  </div>
</template>

<style scoped>
/* ... Tus estilos ... */
</style>
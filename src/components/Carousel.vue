<script setup>
import apiF1 from '@/services/apiF1';
import { onMounted, ref } from 'vue';

const ranking = ref([]);
const team = ref([]);

const firstPlace = ref({});
const secondPlace = ref({});
const thirdPlace = ref({});

const firstPlaceTeam = ref({});
const secondPlaceTeam = ref({});
const thirdPlaceTeam = ref({});

const fetchRanking = async () => {
  try {
    if (localStorage.getItem('pilotos')) {
      const datosPilotos = JSON.parse(localStorage.getItem('pilotos'))
      firstPlace.value = datosPilotos[0]
      secondPlace.value = datosPilotos[1]
      thirdPlace.value = datosPilotos[2]
    } else {
      ranking.value = await apiF1.ranking.getRanking();
      firstPlace.value = ranking.value[0];
      secondPlace.value = ranking.value[1];
      thirdPlace.value = ranking.value[2];
      ranking.value = ranking.value.response
      localStorage.setItem('pilotos', JSON.stringify(ranking.value.response))
    }
  } catch (error) {
    console.log(error);
  }
}

const fetchEquipos = async () => {
  try {
    if (localStorage.getItem('equipos')) {
      const datosEquipos = JSON.parse(localStorage.getItem('equipos'))
      firstPlaceTeam.value = datosEquipos[0]
      console.log(firstPlaceTeam.value);
      secondPlaceTeam.value = datosEquipos[1]
      thirdPlaceTeam.value = datosEquipos[2]
    } else {
      team.value = await apiF1.teams.getTeams();
      firstPlaceTeam.value = team.value[0];
      secondPlaceTeam.value = team.value[1];
      thirdPlaceTeam.value = team.value[2];
      team.value = team.value.response
      localStorage.setItem('equipos', JSON.stringify(team.value.response))
    }
  } catch (error) {
    console.log(error);
  }
} 

onMounted(() => {
  fetchRanking();
  fetchEquipos();
})
</script>

<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner" id="carrusel">
      <div class="carousel-item active">
        <img :src="firstPlace?.driver?.image" id="imgPiloto" class="d-block w-100 imgPilotos" :alt="firstPlace?.driver?.name">
        <div class="carousel-caption d-none d-md-block" >
          <h5 class="letrasIndex">🥇Primer Clasificado</h5>
          <p id="nombrePiloto" class="letrasIndex">{{ firstPlace?.driver?.name }}</p>
          <p id="puntosPiloto" class="letrasIndex">Puntos: {{ firstPlace?.points }}</p>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="secondPlace?.driver?.image" id="imgPiloto2" class="d-block w-100 imgPilotos" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="letrasIndex">🥈Segundo clasificado</h5>
          <p id="nombrePiloto2" class="letrasIndex">{{ secondPlace?.driver?.name }}</p>
          <p id="puntosPiloto2" class="letrasIndex">Puntos: {{ secondPlace?.points }}</p>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="thirdPlace?.driver?.image" id="imgPiloto3" class="d-block w-100 imgPilotos" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="letrasIndex">🥉Tercer clasificado</h5>
          <p id="nombrePiloto3" class="letrasIndex">{{ thirdPlace?.driver?.name }}</p>
          <p id="puntosPiloto3" class="letrasIndex">Puntos: {{ thirdPlace?.points }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- Equipos -->

  <div id="carouselExampleCaptions2" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner" id="carrusel">
      <div class="carousel-item active">
        <img :src="firstPlaceTeam?.team?.logo" id="imgEquipo" class="d-block w-100 imgEquipos" :alt="firstPlaceTeam?.team?.name">
        <div class="carousel-caption d-none d-md-block" >
          <h5 class="letrasIndex">🥇Primer Clasificado</h5>
          <p id="nombreEquipo" class="letrasIndex">{{ firstPlaceTeam?.team?.name }}</p>
          <p id="puntosEquipo" class="letrasIndex">Puntos: {{ firstPlaceTeam?.points }}</p>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="secondPlaceTeam?.team?.logo" id="imgP2" class="d-block w-100 imgEquipos" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="letrasIndex">🥈Segundo clasificado</h5>
          <p id="nombreEquipo2" class="letrasIndex">{{ secondPlaceTeam?.team?.name }}</p>
          <p id="puntosEquipo2" class="letrasIndex">Puntos: {{ secondPlaceTeam?.points }}</p>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="thirdPlaceTeam?.team?.logo" id="imgEquipo3" class="d-block w-100 imgEquipos" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="letrasIndex">🥉Tercer clasificado</h5>
          <p id="nombreEquipo3" class="letrasIndex">{{ thirdPlaceTeam?.team?.name }}</p>
          <p id="puntosEquipo3" class="letrasIndex">Puntos: {{ thirdPlaceTeam?.points }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
    #carouselExampleCaptions, #carouselExampleCaptions2{
    max-width: 600px;
    margin: auto;
    padding-top: 50px;
}

#imgPrueba{
    width: 300px;
    width: auto;
}
</style>
<template>
    <div class="contenedor">
      <div class="tarjeta" v-for="team in teams" :key="team.id">
        <div class="tarjetaImagen">
          <img :src="team.logo" alt="escudo equipo">
        </div>
        <div class="tarjetaInfo">
          <h2>{{ team.name }}</h2>
          <p><span>Base: </span> {{ team.base }} </p>
          <hr>
          <p><span>Campeonatos ganados: </span> {{ team.world_championships }} </p>
          <hr>
          <p><span>Primer año: </span> {{team.first_team_entry}}</p>
          <hr>
          <p><span>Ranking: </span> {{team.pole_positions}}</p>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    teams: {
      type: Array,
      required: true
    }
  });
  
  
  
  </script>
  
  <style></style>
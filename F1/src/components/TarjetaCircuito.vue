<template>
  <div class="contenedor">
    <div class="tarjeta" v-for="race in races" :key="race.id">
      <div class="tarjetaImagen">
        <img :src="race.circuit.image" alt="mapa circuito">
      </div>
      <div class="tarjetaInfo">
        <h2>{{ race.circuit.name }}</h2>
        <p><span>País: </span> {{ race.competition.location.country }} </p>
        <hr>
        <p><span>Ciudad: </span> {{ race.competition.location.city }} </p>
        <hr>
        <p><span>Kilómetros: </span> {{ race.distance }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  races: {
    type: Array,
    required: true
  }
});



</script>

<style></style>
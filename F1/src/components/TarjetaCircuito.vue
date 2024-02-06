<template>
    <!--<div class="tarjeta">
        <div class="tarjetaImagen">
            <img src="#" alt="mapa circuito">
        </div>
        <div class="tarjetaInfo">
            <h2> Nombre del circuito</h2>
            <p><span>País: </span> España </p>
            <hr>
            <p><span>Ciudad: </span> Barcelona </p>
            <hr>
            <p><span>Kilómetros: </span> 50 km</p>
        </div>
    </div>-->
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
import {defineProps} from 'vue';

const props = defineProps({
    race: {
        type: Array,
        required: true
    }
});

</script>

<style>

</style>
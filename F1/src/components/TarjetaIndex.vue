<template>
    <div class="contenedor">
      <div class="tarjeta" v-for="driver in drivers.slice(0, 10)" :key="driver.id">
        <div class="tarjetaImagen">
          <img :src="driver.driver.image" alt="imagen piloto">
        </div>
        <div class="tarjetaInfo">
          <h2>{{ driver.driver.name }}</h2>
          <p><span>Abbr: </span> {{ driver.driver.abbr }} </p>
          <hr>
          <p><span>Numero en Ranking: </span> {{ driver.position }} </p>
          <hr>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    drivers: {
      type: Array,
      required: true
    }
  });
  
  
  
  </script>
  
  <style></style>
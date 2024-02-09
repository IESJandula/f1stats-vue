<script setup>
    import axios from 'axios';
    import { defineProps, ref } from 'vue';

    const circuitoIndividual = ref(null)

    const props = defineProps({
        nombre: {
            type: String,
            required: true
        },

        localizacion: {
            type: String,
            required: true
        },

        distancia: {
            type: Number,
            required: true
        },

        imagen: {
            type: String,
            required: true
        },


    })

    const mostrarInformacionDetallada = async () => {
    // Realizar la solicitud para obtener los datos del piloto
    try {
        const response = await axios.get(`https://f1-api-bs37.onrender.com/circuit?name=${props.nombre}`);
        circuitoIndividual.value = response.data;
        circuitoIndividual.value = circuitoIndividual.value[0];
        console.log(circuitoIndividual.value);
    } catch (error) {
        console.error('Error al obtener el piloto:', error);
    }
}
</script>

<template>
    <div class="card" @click="mostrarInformacionDetallada">
        <img :src="imagen" class="card-img-top" alt="equipo">
        <div class="card-body">
          <h5 class="card-title">{{ nombre }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Localizacion: {{ localizacion }}</li>
          <li class="list-group-item">Distancia: {{ distancia }}</li>
        </ul>
        <ul class="list-group list-group-flush" v-if="circuitoIndividual">
            <li class="list-group-item">Vueltas totales: {{ circuitoIndividual.laps.total }}</li>
            <li class="list-group-item">Tiempo de vuelta rapida: {{ circuitoIndividual.fastest_lap.time }}</li>
            <li class="list-group-item">Zona horaria:  {{ circuitoIndividual.timezone }}</li>
        </ul>
      </div>
</template>

<style scoped>

</style>
<script setup>
import axios from 'axios';
import { defineProps, defineEmits, ref } from 'vue';

const pilotoIndividual = ref(null)

const emit = defineEmits(['mostrar-informacion'])


const props = defineProps({
    nombre: {
        type: String,
        required: true
    },

    equipo: {
        type: String,
        required: true
    },

    posicion: {
        type: Number,
        required: true
    },

    puntos: {
        type: Number,
        required: true
    },

    victorias: {
        type: Number,
        required: true
    },

    imagen: {
        type: String,
        required: true
    },

    numero: {
        type: Number,
        required: false
    }
})


const mostrarInformacionDetallada = async () => {
    // Emitir un evento para notificar al componente principal que se quiere mostrar la información detallada
    emit('mostrar-informacion', props.nombre);

    // Realizar la solicitud para obtener los datos del piloto
    try {
        const response = await axios.get(`https://f1-api-bs37.onrender.com/pilot?name=${props.nombre}`);
        pilotoIndividual.value = response.data;
        console.log(pilotoIndividual.value);
    } catch (error) {
        console.error('Error al obtener el piloto:', error);
    }
};
</script>

<template>
    <div class="card" @click="mostrarInformacionDetallada">
        <img :src="imagen" class="card-img-top" alt="piloto">
        <div class="card-body">
            <h5 class="card-title">{{ nombre }}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Equipo: {{ equipo }}</li>
            <li class="list-group-item">Posición: {{ posicion }}</li>
            <li class="list-group-item">Puntos: {{ puntos }}</li>
            <li class="list-group-item">Victorias: {{ victorias }}</li>
        </ul>
        <ul class="list-group list-group-flush" v-if="pilotoIndividual">
            <li class="list-group-item">Número coche: {{ numero }}</li>
            <li class="list-group-item">Fecha Nacimiento: {{ pilotoIndividual.birthdate }}</li>
            <li class="list-group-item">Lugar Nacimiento: {{ pilotoIndividual.birthplace }}</li>
            <li class="list-group-item">Podiums totales: {{ pilotoIndividual.podiums }}</li>
        </ul>
    </div>
</template>

<style scoped>
.card {
    margin-top: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    font-family: 'Formula 1';
    overflow: hidden;
    width: 22rem;
}

.card:hover {
    border-color: red;
    transform: scale(1.05);
    box-shadow: 0 0 15px 0 rgba(255, 0, 0, 0.5);
}

.card-body {
    text-align: center;
    border-bottom: none;
}

.list-group-item {
    border-bottom: none;
    font-family: 'Formula 1';
}
</style>
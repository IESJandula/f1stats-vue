<script setup>
    import axios from 'axios';
    import { defineProps, ref } from 'vue';

    const arrayPosiciones = ref([])
    const equipoIndividual = ref(null)

    const props = defineProps({
        nombre: {
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

        imagen: {
            type: String,
            required: true
        },

        
    })

    const mostrarInformacionDetallada = async () => {
    // Realizar la solicitud para obtener los datos del piloto
    try {
        const response = await axios.get(`https://f1-api-bs37.onrender.com/team?name=${props.nombre}`);
        equipoIndividual.value = response.data;
        equipoIndividual.value = equipoIndividual.value[0];
        console.log(equipoIndividual.value);
    } catch (error) {
        console.error('Error al obtener el piloto:', error);
    }
};

    arrayPosiciones.value.push(props.posicion);
</script>

<template>
    <div :class="{ 'card': true, 'ferrari': arrayPosiciones.includes(3)}" @click="mostrarInformacionDetallada">
        <img :src="imagen" class="card-img-top" alt="equipo">
        <div class="card-body">
          <h5 class="card-title">{{ nombre }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Posición: {{ posicion }}</li>
          <li class="list-group-item">Puntos: {{ puntos }}</li>
        </ul>
        <ul class="list-group list-group-flush" v-if="equipoIndividual">
            <li class="list-group-item">Director: {{ equipoIndividual.director }}</li>
            <li class="list-group-item">Base: {{ equipoIndividual.base }}</li>
            <li class="list-group-item">Campeonatos Ganados: {{ equipoIndividual.world_championships }}</li>
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

.card.ferrari {
  /* Estilos específicos para 'ferrari' aquí */
  height: 345px !important;
}
</style>
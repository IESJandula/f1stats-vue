<script setup>
    import { defineProps } from 'vue';

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
        }
    })
</script>

<template>
    <div class="card">
        <img :src="imagen" class="card-img-top" alt="equipo">
        <div class="card-body">
          <h5 class="card-title">{{ nombre }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Posición: {{ posicion }}</li>
          <li class="list-group-item">Puntos: {{ puntos }}</li>
        </ul>
      </div>
      <!-- <div v-if="escuderia?.team?.name === 'Scuderia Ferrari'" :class="ferrari"></div> -->
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
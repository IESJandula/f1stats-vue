<script setup>
    import { defineProps } from 'vue';

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
            type: String,
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
        }
    })
</script>

<template>
    <div class="card">
        <img :src="imagen" class="card-img-top" alt="piloto">
        <div class="card-body">
          <h5 class="card-title">{{ nombre }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ equipo }}</li>
          <li class="list-group-item">{{ posicion }}</li>
          <li class="list-group-item">{{ puntos }}</li>
          <li class="list-group-item">{{ victorias }}</li>
        </ul>
    </div>
</template>

<style scoped>

</style>
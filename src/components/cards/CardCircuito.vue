<script setup>
    import { defineProps } from 'vue';

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
        }
    })
</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="imagen" class="card-img-top" alt="equipo">
        <div class="card-body">
          <h5 class="card-title">{{ nombre }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Localizacion: {{ localizacion }}</li>
          <li class="list-group-item">Distancia: {{ distancia }}</li>
        </ul>
      </div>
</template>

<style scoped>

</style>
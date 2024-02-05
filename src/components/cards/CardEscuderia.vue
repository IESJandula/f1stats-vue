<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        nombre: {
            type: String,
            required: true
        },

        presidente: {
            type: String,
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
          <h5 class="card-title">Nombre: {{ nombre }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Presidente: {{ presidente }}</li>
        </ul>
      </div>
</template>

<style scoped>

</style>
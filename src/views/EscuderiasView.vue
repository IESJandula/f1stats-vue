<script setup>
/* import Header from '../components/Header.vue';
import CardEscuderia from '../components/cards/CardEscuderia.vue';
import { onMounted, ref } from 'vue';

const escuderiaData = ref(null);

onMounted(async () => {
    try {
        const response = await fetch('https://f1-api-bs37.onrender.com/teams');
        const data = await response.json();
        escuderiaData.value = data;
    } catch (error) {
        console.error('Error al obtener datos de la API', error);
    }
}) */

</script>

<template>
    <!-- <Header></Header>
    <div class="titulos-header custom-margin">
        <h1>Ranking de escuderias</h1>
        <h4>Season 2023</h4>
    </div>

    <div v-if="escuderiaData">
        <CardEscuderia
        v-for="escuderia in escuderiaData"
        :key="escuderia.id"
        :nombre="escuderia.name"
        :presidente="escuderia.president"
        :imagen="escuderia.logo">
        </CardEscuderia>
    </div> -->
</template>

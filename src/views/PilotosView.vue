<script setup>
import { onMounted, ref } from 'vue';
import apiF1 from '@/services/apiF1';
import HeaderSearch from '../components/HeaderSearch.vue';
import CardPiloto from '../components/cards/CardPiloto.vue';

const pilotos = ref([])
const cartaSeleccionada = ref(null)

const fetchRanking = async () => {
    try {
        if (localStorage.getItem('pilotos')) {
            pilotos.value = JSON.parse(localStorage.getItem('pilotos'))
        } else {
            pilotos.value = await apiF1.ranking.getRanking();
            pilotos.value = pilotos.value.response
            localStorage.setItem('pilotos', JSON.stringify(pilotos.value))
        }
    } catch (error) {
        console.log(error);
    }
}

const mostrarDetalle = (piloto) => {
    cartaSeleccionada.value = piloto;
}

onMounted(() => {
    fetchRanking();
})
</script>

<template>
    <HeaderSearch></HeaderSearch>
    <div class="titulos-header custom-margin">
        <h1>Ranking de pilotos</h1>
        <h4>Season 2023</h4>
    </div>

    <main class="main-pilotos">
        <div class="container mt-4">
            <div v-if="pilotos" class="row">
                <div v-for="piloto in pilotos" :key="piloto.id" class="col-md-4 mb-4">
                <CardPiloto :nombre="piloto?.driver?.name" :imagen="piloto?.driver?.image" :equipo="piloto?.team?.name"
                    :posicion="piloto.position" :puntos="piloto.points" :victorias="piloto.wins" />
            </div>
            </div>
        </div>
    </main>

    <div v-if="cartaSeleccionada">

    </div>
</template>
<script setup>
import HeaderSearch from '../components/HeaderSearch.vue';
import CardEscuderia from '../components/cards/CardEscuderia.vue';
import apiF1 from '@/services/apiF1';
import { onMounted, ref } from 'vue';

const escuderias = ref([])

const fetchEquipos = async () => {
    try {
        if (localStorage.getItem('equipos')) {
            escuderias.value = JSON.parse(localStorage.getItem('equipos'))
        } else {
            escuderias.value = await apiF1.teams.getTeams();
            escuderias.value = escuderias.value.response
            localStorage.setItem('equipos', JSON.stringify(escuderias.value))
        }
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    fetchEquipos();
})

</script>

<template>
    <HeaderSearch></HeaderSearch>
    <div class="titulos-header custom-margin">
        <h1>Ranking de escuderias</h1>
        <h4>Season 2023</h4>
    </div>

    <main class="main-pilotos">
        <div class="container mt-4">
            <div v-if="escuderias" class="row">
                <div v-for="escuderia in escuderias" :key="escuderia.id" class="col-md-4 mb-4" >
                    <CardEscuderia :nombre="escuderia?.team?.name" :imagen="escuderia?.team?.logo" :posicion="escuderia.position" :puntos="escuderia.points" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.ferrari{
    height: 196px !important;
}
</style>

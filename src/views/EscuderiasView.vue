<script setup>
import HeaderSearch from '../components/HeaderSearch.vue';
import CardEscuderia from '../components/cards/CardEscuderia.vue';
import apiF1 from '@/services/apiF1';
import { onMounted, ref, computed } from 'vue';

const escuderias = ref([])
const searchTerm = ref('');
const varEntidad = ref('Escudería');

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

const actualizarBusqueda = (busqueda) => {
    console.log(busqueda);
    // Actualiza el término de búsqueda
    searchTerm.value = busqueda;
}

const equiposFiltrados = computed(() => {
    if (!searchTerm.value.trim()) {
        // Si la búsqueda está vacía, devuelve todos los escuderias
        return escuderias.value;
    } else {
        // Filtra los escuderias por el nombre del conductor
        return escuderias.value.filter(escuderia =>
            escuderia.team.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
    }
});

onMounted(() => {
    fetchEquipos();
})

</script>

<template>
    <HeaderSearch @filtrado="actualizarBusqueda" :entidad="varEntidad"></HeaderSearch>
    <div class="titulos-header custom-margin">
        <h1>Ranking de escuderias</h1>
        <h4>Season 2023</h4>
    </div>

    <main class="main-pilotos">
        <div class="container mt-4">
            <div v-if="equiposFiltrados.length > 0" class="row">
                <div v-for="escuderia in equiposFiltrados" :key="escuderia.id" class="col-md-4 mb-4" >
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

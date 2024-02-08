<script setup>
import HeaderSearch from '../components/HeaderSearch.vue';
import CardCircuito from '../components/cards/CardCircuito.vue';
import apiF1C from '@/services/apiF1Circuits';
import { onMounted, ref, computed } from 'vue';

const circuitos = ref([]);
const searchTerm = ref('');
const varEntidad = ref('Circuito');

const fetchCircuitos = async () => {
    try {
        if (localStorage.getItem('circuitos')) {
            circuitos.value = JSON.parse(localStorage.getItem('circuitos'))
        } else {
            circuitos.value = await apiF1C.circuits.getCircuits();
            localStorage.setItem('circuitos', JSON.stringify(circuitos.value))
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

const circuitosFiltrados = computed(() => {
    if (!searchTerm.value.trim()) {
        // Si la búsqueda está vacía, devuelve todos los circuitos
        return circuitos.value;
    } else {
        // Filtra los circuitos por el nombre del conductor
        return circuitos.value.filter(circuito =>
            circuito.competition.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
    }
});

onMounted(() => {
    fetchCircuitos();
})

</script>

<template>
    <HeaderSearch @filtrado="actualizarBusqueda" :entidad="varEntidad"></HeaderSearch>
    <div class="titulos-header custom-margin">
        <h1>Circuitos</h1>
        <h4>Season 2023</h4>
    </div>

    <main class="main-pilotos">
        <div class="container mt-4">
            <div v-if="circuitosFiltrados.length > 0" class="row">
                <div v-for="circuito in circuitosFiltrados" :key="circuito.id" class="col-md-4 mb-4">
                <CardCircuito :nombre="circuito?.competition?.name" :imagen="circuito?.circuit?.image" :localizacion="circuito?.competition?.location?.country"
                :distancia="circuito?.distance" />
            </div>
            </div>
        </div>
    </main>
</template>

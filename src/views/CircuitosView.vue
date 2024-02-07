<script setup>
import HeaderSearch from '../components/HeaderSearch.vue';
import CardCircuito from '../components/cards/CardCircuito.vue';
import apiF1C from '@/services/apiF1Circuits';
import { onMounted, ref } from 'vue';

const circuitos = ref([]);

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

onMounted(() => {
    fetchCircuitos();
})

</script>

<template>
    <HeaderSearch></HeaderSearch>
    <div class="titulos-header custom-margin">
        <h1>Circuitos</h1>
        <h4>Season 2023</h4>
    </div>

    <main class="main-pilotos">
        <div class="container mt-4">
            <div v-if="circuitos" class="row">
                <div v-for="circuito in circuitos" :key="circuito.id" class="col-md-4 mb-4">
                <CardCircuito :nombre="circuito?.competition?.name" :imagen="circuito?.circuit?.image" :localizacion="circuito?.competition?.location?.country"
                :distancia="circuito?.distance" />
            </div>
            </div>
        </div>
    </main>
</template>

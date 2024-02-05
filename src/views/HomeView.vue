<script setup>
import HeaderC from '../components/Header.vue';
import Carousel from '../components/Carousel.vue';
</script>

<template>
    <header>
        <HeaderC></HeaderC>
        <div class="titulos-header custom-margin">
            <h1>Estadísticas Fórmula 1</h1>
            <h4>Season 2023</h4>
        </div>
    </header>
    <main>
        <Carousel></Carousel>
        <!-- <Carousel :tipo="escuderia"></Carousel> -->
    </main>
</template>

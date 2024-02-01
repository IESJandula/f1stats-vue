<script setup>
import Header from '../components/Header.vue';
import Carousel from '../components/Carousel.vue';
</script>

<template>
    <Header></Header>
    <main>
        <Carousel :tipo="piloto"></Carousel>
        <Carousel :tipo="escuderia"></Carousel>
    </main>
</template>

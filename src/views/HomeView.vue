<script setup>
import HeaderC from '../components/Header.vue';
import Carousel from '../components/Carousel.vue';
</script>

<template>
    <header>
        <HeaderC></HeaderC>
    </header>
    <main>
        <Carousel></Carousel>
        <!-- <Carousel :tipo="escuderia"></Carousel> -->
    </main>
</template>

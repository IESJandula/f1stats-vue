<script setup>
import Header from '../components/Header.vue';
import Carousel from '../components/Carousel.vue';
import {ref} from 'vue'
</script>

<template>
    <Header></Header>
    <main>
        <Carousel :tipo="piloto"></Carousel>
    </main>
</template>

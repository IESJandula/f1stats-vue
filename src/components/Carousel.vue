<script setup>

</script>

<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner" id="carrusel">
      <div class="carousel-item active">
        <img src="../assets/logo.svg" id="imgPiloto" class="d-block w-100 imgPilotos" alt="">
        <div class="carousel-caption d-none d-md-block" >
          <h5 class="letrasIndex">🥇Primer Clasificado</h5>
          <p id="nombrePiloto" class="letrasIndex"></p>
          <p id="puntosPiloto" class="letrasIndex"></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="" id="imgPiloto2" class="d-block w-100 imgPilotos" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="letrasIndex">🥈Segundo clasificado</h5>
          <p id="nombrePiloto2" class="letrasIndex"></p>
          <p id="puntosPiloto2" class="letrasIndex"></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="" id="imgPiloto3" class="d-block w-100 imgPilotos" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="letrasIndex">🥉Tercer clasificado</h5>
          <p id="nombrePiloto3" class="letrasIndex"></p>
          <p id="puntosPiloto3" class="letrasIndex"></p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
    #carouselExampleCaptions, #carouselExampleCaptions2{
    max-width: 600px;
    margin: auto;
    padding-top: 50px;
}

#imgPrueba{
    width: 300px;
    width: auto;
}
</style>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <!-- Imagen a la izquierda del navbar -->
            <img class="icono-navbar d-lg-none img-movil" src="../assets/icono-navbar.png" alt="Fórmula 1">
                <!-- Botón para dispositivos móviles -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto text-center mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" :class="{ 'active': $route.path === '/' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/pilotos" class="nav-link"
                            :class="{ 'active': $route.path === '/pilotos' }">Pilotos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/escuderias" class="nav-link"
                            :class="{ 'active': $route.path === '/escuderias' }">Escuderias</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/circuitos" class="nav-link"
                            :class="{ 'active': $route.path === '/circuitos' }">Circuitos</router-link>
                    </li>
                </ul>
                <!-- Barra search -->
                <form class="d-flex">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input class="form-control me-2" type="search" placeholder="Buscar Circuito" aria-label="Search">
                    </form>
                <!-- Imagen a la derecha del navbar -->
                <img class="icono-navbar icono-navbar-mobile" src="../assets/icono-navbar.png" alt="Fórmula 1">
            </div>
        </div>
    </nav>
</template>
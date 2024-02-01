<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
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
            </div>
        </div>
    </nav>
</template>
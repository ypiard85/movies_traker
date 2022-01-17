<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
          <a class="navbar-brand" href="#">MOVIES_TRACKER</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <router-link class="nav-link active" to="/">Accueil</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/films-sortis-en-2020">Films sortis en 2020</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/films-francais">Films français</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/films-americains">Films americains</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/mieux-notes">Les mieux notés</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/top50">Top 50</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/searchfilms">Rechercher</router-link>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
</template>
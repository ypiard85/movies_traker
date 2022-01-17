import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Singlefilm from '../views/Singlefilm'
import Sortis2020 from '../views/Sortis2020'
import Frenchmovies from '../views/Frenchmovies'
import Americanmovies from '../views/Americanmovies'
import MieuxNotes from '../views/MieuxNotes'
import SearchFilm from '../views/SearchFilm'
import Top50 from '../views/Top50'

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/films-sortis-en-2020',
    name: 'sortis2020',
    component: Sortis2020
  },
  {
    path: '/films-francais',
    name: 'frenchmovies',
    component: Frenchmovies
  },
  {
    path: '/searchfilms',
    name: 'searchfilm',
    component: SearchFilm
  },
  {
    path: '/mieux-notes',
    name: 'mieuxNotes',
    component: MieuxNotes
  },
  {
    path: '/films-americains',
    name: 'americanmovies',
    component: Americanmovies
  },
  {
    path: '/film/:id',
    name: 'singlefilm',
    component: Singlefilm,
  },
  {
    path: '/Top50',
    name: 'top-50',
    component: Top50,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

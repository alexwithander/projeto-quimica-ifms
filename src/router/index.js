import Vue from 'vue'
import VueRouter from 'vue-router'
import AdicionarPostagemView from '../components/AdicionarPostagem.vue'
import HomeView from '../views/Home-View.vue'
import EventosView from '../views/Eventos-View.vue'
import CursoView from '../views/Curso-View.vue'
import EgressosView from '../views/egressos/Egressos-View.vue'
import QtdEgressosView from '../views/egressos/QtdEgressos-View.vue';
import DocentesView from '../views/Docentes-View.vue'
import ContatoView from '../views/informações do curso/Contatos-View.vue'
import PainelAdminView from '../views/PainelAdministrativo-View.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: EventosView
  },
  {
    path: '/curso',
    name: 'curso',
    component: CursoView
  },
  {
    path: '/egressos',
    name: 'egressos',
    component: EgressosView
  },
  {
    path: '/docentes',
    name: 'docentes',
    component: DocentesView
  },
  {
    path: '/contatos',
    name: 'contatos',
    component: ContatoView
  },
  {
    path: '/admin',
    name: 'administracao',
    component: PainelAdminView
  },
  {
    path: '/adicionarpostagem',
    name: 'adicionar',
    component: AdicionarPostagemView
  },
  {
    path: '/qtdegressos',
    name: 'qtdegressos',
    component: QtdEgressosView
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

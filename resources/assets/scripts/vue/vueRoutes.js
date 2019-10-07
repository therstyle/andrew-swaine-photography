import Home from './Home.vue';
import Page404 from './Page404.vue';

export default [
  {path: '/', component: Home},
  {path: '*', component: Page404},
]
import Home from './Home.vue';
import Page from './Page.vue';
import Page404 from './Page404.vue';

export default [
  {path: '/', component: Home, props: true, pageId: 6},
  {path: '/people-photography/', component: Page, props: {pageId: 15}},
  {path: '/people-photography/fashion/', component: Page, props: {pageId: 29}},
  {path: '*', component: Page404},
]
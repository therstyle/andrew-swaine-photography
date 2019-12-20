import Home from './Home.vue';
import Page from './Page.vue';
import Vue from 'vue';

Vue.component('Home', Home);
Vue.component('Page', Page);

const vueRoutes = wp['routes'].map(route => ({
  path: route.path, 
  component: Vue.component(route.component), 
  props: {pageId: parseInt(route.props.pageId)}}));

console.log(vueRoutes);

// export default [
//   {path: '/', component: Home, props: {pageId: 6}},
//   {path: '/people-photography/', component: Page, props: {pageId: 15}},
//   {path: '/people-photography/fashion/', component: Page, props: {pageId: 29}},
//   {path: '/contact', component: Page, props: {pageId: 72}},
//   {path: '*', component: Page, props: {pageType: '404'}},
// ]

//export default wp.routes;



export default vueRoutes;
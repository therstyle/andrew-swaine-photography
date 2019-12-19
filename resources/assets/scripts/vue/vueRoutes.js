import Home from './Home.vue';
import Page from './Page.vue';

const vueRoutes = wp['routes'].map(route => ({path: route.path, component: route.component, props: route.props}));

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
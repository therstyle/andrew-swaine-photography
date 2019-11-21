import Home from './Home.vue';
import Page from './Page.vue';

export default [
  {path: '/', component: Home, props: {pageId: 6}},
  {path: '/people-photography/', component: Page, props: {pageId: 15}},
  {path: '/people-photography/fashion/', component: Page, props: {pageId: 29}},
  {path: '/contact', component: Page, props: {pageId: 72}},
  {path: '*', component: Page, props: {pageType: '404'}},
]
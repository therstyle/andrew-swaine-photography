import Home from './Home.vue';
import Page from './Page.vue';
import Vue from 'vue';

Vue.component('Home', Home);
Vue.component('Page', Page);

const vueRoutes = wp['routes'].map(route => {
  let id = route.props.pageId ? parseInt(route.props.pageId) : null;
  let type = route.props.pageType ? route.props.pageType : null;

  return {
    path: route.path,
    component: Vue.component(route.component),
    props: { pageId: id, pageType: type }
  }
});

export default vueRoutes;
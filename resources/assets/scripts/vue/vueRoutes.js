import Page from './Page.vue';
import Page404 from './Page404.vue';
import Vue from 'vue';

Vue.component('Page', Page);
Vue.component('Page404', Page404);

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
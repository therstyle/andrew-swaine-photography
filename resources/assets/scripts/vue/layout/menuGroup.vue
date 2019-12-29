<template>
  <nav class="menu vertical-menu" :class="{ 'animate': ifAnimate }">
    <ul>
      <li v-for="(menuItem, index) in menu" :key="index">
        <router-link :to="menuItem.slug" active-class="active">{{ menuItem.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'menu-group',
  props: {
    menu: Array,
    ifAnimate: Boolean
  }
}
</script>
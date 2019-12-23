<template>
  <nav class="menu vertical-menu">
    <ul>
      <li v-for="(menuItem, index) in menu" :key="index">
        <router-link :to="menuItem.slug">{{ menuItem.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'menu-group',
  props: {
    menu: Array
  }
}
</script>
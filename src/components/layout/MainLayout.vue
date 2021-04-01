<template>
  <the-nav-bar>
  </the-nav-bar>
  <div class="container with-nav">
    <app-message />
    <router-view />
  </div>
</template>

<script>
import TheNavBar from '../TheNavBar.vue'
import AppMessage from '../ui/AppMessage.vue'
export default {
  components: { TheNavBar, AppMessage }

}
</script>

<style>

</style>

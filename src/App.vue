<template>
  <div id="app">
    <div class="sidebar-wrapper">
      <navigation></navigation>
    </div>
    <div class="page-content-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "./components/navigation/Navigation.vue"
export default {
  components: { Navigation },
  name: "app",
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  min-height: 100vh;
}
</style>

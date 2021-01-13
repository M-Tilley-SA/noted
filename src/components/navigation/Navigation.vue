<template>
  <div class="primary-navigation bg-primary">
    <div class="container display-flex">
      <div class="row align-items-center">
        <div class="col-4">
          <h1>Noted</h1>
        </div>
        <div class="col-8 justify-content-right">
          <ul class="primary-navigation-links">
            <li v-for="routes in links" v-bind:key="routes.id">
              <router-link
                class="spacing color-mine-shaft"
                :to="`${routes.page}`"
                >{{ routes.text }}</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-12">
          <!-- <button type="button" @click="undoLast">Undo</button> -->
          <!-- <button type="button" @click="redoLast">Re - do</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Dashboard",
          page: "/",
        },
      ],
    }
  },
  methods: {
    undoLast() {
      this.$store.commit("undo")
    },
    redoLast() {
      this.$store.undoLast()
    },
  },
}
</script>

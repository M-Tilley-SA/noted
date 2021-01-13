<template>
  <button type="button" class="item-status" @click="toggleItemStatus(noteItem)">
    <font-awesome-icon v-if="fetchItemStatus" icon="check" />
  </button>
</template>

<script>
export default {
  name: "note-item-status-button",
  props: {
    noteItem: {},
    noteParentTimestamp: {},
  },
  methods: {
    toggleItemStatus(item) {
      this.noteItem.completed = item.completed ? false : true
      item.noteParentTimestamp = this.noteParentTimestamp
      this.$store.commit("saveNoteItem", item)
    },
  },
  computed: {
    fetchItemStatus() {
      return this.noteItem.completed
    },
  },
}
</script>

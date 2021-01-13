<template>
  <div class="note-item">
    <div class="note-actions">
      <note-item-status-button
        :noteItem="noteRowItem"
        :noteParentTimestamp="noteParentTimestamp"
      ></note-item-status-button>
    </div>
    <div v-if="noteRowItem != null" class="note-description">
      <p>{{ noteRowItem.value }}</p>
    </div>
  </div>
</template>

<script>
import NoteItemStatusButton from "@/components/note-card/child-components/NoteItemStatusButton.vue"
export default {
  name: "note-item",
  components: {
    NoteItemStatusButton,
  },
  props: {
    noteRowItem: {},
    noteParentTimestamp: {},
  },
}
</script>

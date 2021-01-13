<template>
  <div class="note-single">
    <div class="note-inner">
      <div class="note-header">
        <p class="note-title">{{ note.noteTitle }}</p>
        <div class="note-header-actions">
          <button class="note-edit-button" @click="editNote(note)">
            <font-awesome-icon icon="edit" />
          </button>
          <button class="note-remove-button" @click="removeNote(note)">
            <font-awesome-icon icon="times" />
          </button>
        </div>
      </div>
      <div class="note-items">
        <note-item
          v-for="(noteItem, index) in note.noteItems"
          v-bind:key="index"
          :noteRowItem="noteItem"
          :noteParentTimestamp="note.noteCreated"
        ></note-item>
      </div>
    </div>
  </div>
</template>

<script>
import NoteItem from "@/components/note-card/child-components/NoteItem.vue"
export default {
  name: "note-card",
  props: {
    note: {},
  },
  components: {
    NoteItem,
  },
  methods: {
    editNote(note) {
      this.$router.push({
        name: `editNote`,
        params: { noteCreated: note.noteCreated },
      })
    },
    removeNote() {
      this.$store.commit("removeNote", this.note)
    },
  },
  created: () => {},
}
</script>

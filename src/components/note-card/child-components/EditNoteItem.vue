<template>
  <div class="list-item-wrapper">
    <note-item-status-button
      :noteItem="noteRowItem"
      :noteParentTimestamp="noteParentTimestamp"
    ></note-item-status-button>
    <input
      type="text"
      class="input-edit"
      v-model="noteRowItem.value"
      placeholder="Add an item to this note"
      :disabled="disabled"
    />
    <div class="note-edit-actions">
      <div v-if="disabled">
        <font-awesome-icon icon="edit" @click="editNoteItem()" />
        <font-awesome-icon icon="trash" @click="removeNoteItem()" />
      </div>
      <div v-else>
        <font-awesome-icon icon="check-circle" @click="confirmEdit()" />
        <font-awesome-icon icon="times-circle" @click="cancelEdit()" />
        <font-awesome-icon icon="trash" @click="removeNoteItem()" />
      </div>
    </div>
  </div>
</template>

<script>
import NoteItemStatusButton from "@/components/note-card/child-components/NoteItemStatusButton.vue"
export default {
  name: "edit-note-item",
  data: () => {
    return {
      disabled: true,
      textBeforeEdit: "",
    }
  },
  components: {
    NoteItemStatusButton,
  },
  props: {
    noteRowItem: {},
    noteParentTimestamp: {},
  },
  methods: {
    editNoteItem() {
      this.textBeforeEdit = this.noteRowItem.value
      this.disabled = false
    },
    removeNoteItem() {
      this.$store.commit("removeNoteItem", this.noteRowItem)
    },
    confirmEdit() {
      this.disabled = true
      this.$store.commit("saveNoteItem", this.noteRowItem)
    },
    cancelEdit() {
      this.noteRowItem.value = this.textBeforeEdit
      this.disabled = true
    },
  },
}
</script>

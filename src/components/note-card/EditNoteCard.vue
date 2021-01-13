<template>
  <div>
    <form id="editNoteForm">
      <label>Note Title</label>
      <div class="input-wrapper note-title-wrapper">
        <input
          type="text"
          v-model="noteTitle"
          placeholder="Enter a title for your note"
          :disabled="titleIsDisabled"
        />
        <div class="note-edit-actions">
          <div v-if="titleIsDisabled">
            <font-awesome-icon icon="edit" @click="editNoteTitle()" />
          </div>
          <div v-else>
            <font-awesome-icon icon="check-circle" @click="confirmEdit()" />
            <font-awesome-icon icon="times-circle" @click="cancelEdit()" />
          </div>
        </div>
      </div>
      <label>Note Items</label>
      <div class="input-wrapper list-wrapper">
        <edit-note-item
          v-for="(noteItem, index) in noteItems"
          v-bind:key="index"
          :noteRowItem="noteItems[index]"
          :noteParentTimestamp="noteCreated"
        ></edit-note-item>
      </div>
      <button type="button" @click="addItem()">
        Add Item <font-awesome-icon icon="plus" />
      </button>
    </form>
    <button type="button" @click="saveNote($data)">
      Save Note
    </button>
  </div>
</template>

<script>
import EditNoteItem from "./child-components/EditNoteItem"
export default {
  name: "edit-note-card",
  components: {
    EditNoteItem,
  },
  data: () => {
    return {
      noteTitle: "",
      noteCreated: null,
      completed: false,
      noteItems: [],
      titleIsDisabled: true,
    }
  },
  methods: {
    addItem() {
      this.noteItems.push({
        value: "",
        completed: false,
        disabled: false,
        noteParentTimestamp: this.noteCreated,
      })
    },
    editNoteTitle() {
      this.titleIsDisabled = false
    },
    confirmEdit() {
      this.titleIsDisabled = true
    },
    cancelEdit() {
      this.titleIsDisabled = true
    },
    saveNoteItem() {},
    saveNote(noteObject) {
      this.$store.commit("saveNote", noteObject)
      this.$router.push({ name: `dashboard` })
    },
    populateNote: function() {
      let existingNote = this.$store.getters.fetchNotes.filter(
        note => note.noteCreated == this.$route.params.noteCreated
      )
      Object.assign(this.$data, existingNote[0])
    },
  },
  mounted() {
    this.populateNote()
  },
}
</script>

<style scoped lang="scss">
form {
  border-radius: 5px;
  padding: 20px;
  background-color: #fbfbfb;
  border: 1px solid #ececec;
  margin-bottom: 15px;
}
</style>

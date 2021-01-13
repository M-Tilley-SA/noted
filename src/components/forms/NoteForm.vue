<template>
  <div>
    <form id="noteForm">
      <div class="input-wrapper">
        <label>Note Title</label>
        <input
          type="text"
          v-model="noteTitle"
          placeholder="Enter a title for your note"
        />
      </div>
      <label>Note Items</label>
      <div
        class="input-wrapper"
        v-for="(noteItem, index) in noteItems"
        v-bind:key="index"
      >
        <input
          type="text"
          v-model="noteItem.value"
          placeholder="Add an item to this note"
        />
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
export default {
  name: "note-form",
  props: {
    existingNote: {},
  },
  data: () => {
    return {
      noteTitle: "",
      noteCreated: null,
      completed: false,
      noteItems: [
        {
          value: "",
          completed: false,
        },
      ],
    }
  },
  methods: {
    addItem() {
      this.noteItems.push({
        value: "",
        completed: false,
      })
    },
    saveNote(noteObject) {
      if (this.existingNote == undefined) {
        noteObject.noteCreated = new Date().getTime()
      }
      this.$store.commit("saveNote", noteObject)
    },
    fetchNotes() {
      console.log(this.$store.getters.fetchNotes)
    },
  },
  mounted() {
    if (this.existingNote != undefined) {
      this.$data.noteTitle = this.existingNote[0].noteTitle
      this.$data.noteCreated = this.existingNote[0].noteCreated
      this.$data.noteItems = this.existingNote[0].noteItems
      this.$data.completed = this.existingNote[0].completed
    }
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

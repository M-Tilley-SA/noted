<template>
  <div>
    <form id="addNoteForm" @submit.prevent="saveNote($data)">
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
        class="input-wrapper list-item-wrapper"
        v-for="(noteItem, index) in noteItems"
        v-bind:key="index"
      >
        <input
          type="text"
          v-model="noteItem.value"
          placeholder="Add an item to this note"
        />
        <div class="note-edit-actions">
          <font-awesome-icon icon="trash" @click="removeItem(index)" />
        </div>
      </div>
      <button type="button" @click="addItem()">
        Add Item <font-awesome-icon icon="plus" />
      </button>
      <button type="submit">
        Save Note
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "add-note-card",
  data: () => {
    return {
      noteTitle: "",
      noteCreated: new Date().getTime(),
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
        disabled: false,
        noteParentTimestamp: this.noteCreated,
      })
    },
    removeItem(index) {
      this.noteItems.splice(index,1)
    },
    saveNote(noteObject) {
      this.$store.commit("saveNote", noteObject)
      this.$router.push({ name: `dashboard` })
    },
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

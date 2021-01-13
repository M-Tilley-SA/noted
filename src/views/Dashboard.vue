<template>
  <div class="dashboard">
    <div class="container">
      <h2>Dashboard</h2>
      <div v-if="filteredNotes.length == 0" style="margin-bottom:20px;">
        Let's start by creating a new note!
      </div>
      <select
        v-else
        @change="updateSelectedFilter($event)"
        style="margin-bottom:20px;"
      >
        <option value="date">Date</option>
        <option value="items-to-do">Items left</option>
      </select>
      <div class="note-wrapper" v-if="fetchNotes">
        <note-card
          v-for="(singleNote, index) in filteredNotes"
          v-bind:key="index"
          :note="singleNote"
        ></note-card>
      </div>
      <div class="row">
        <div class="col-12">
          <button @click="addNoteButton">
            New Note <font-awesome-icon icon="plus" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import NoteCard from "@/components/note-card/NoteCard.vue"
import store from "@/store/index.js"

export default {
  name: "Dashboard",
  data() {
    return {
      notes: [],
      selectedFilter: "date",
    }
  },
  components: {
    NoteCard,
  },
  computed: {
    fetchNotes: () => {
      return store.getters.fetchNotes
    },
    filteredNotes() {
      return this.notes.sort((a, b) => {
        if (this.selectedFilter == "date") {
          if (a.noteCreated < b.noteCreated) {
            return 1
          } else if (a.noteCreated > b.noteCreated) {
            return -1
          } else {
            return 0
          }
        } else if (this.selectedFilter == "items-to-do") {
          const aIncompleteItems = a.noteItems.filter(
            noteItem => noteItem.completed == false
          )
          const bIncompleteItems = b.noteItems.filter(
            noteItem => noteItem.completed == false
          )

          if (aIncompleteItems.length <= bIncompleteItems.length) {
            return 1
          } else if (aIncompleteItems.length >= bIncompleteItems.length) {
            return -1
          } else {
            return 0
          }
        }
      })
    },
  },
  methods: {
    addNoteButton() {
      this.$router.replace("/add-note")
    },
    updateSelectedFilter(event) {
      this.selectedFilter = event.target.value
    },
  },
  mounted() {
    this.notes = this.$store.getters.fetchNotes
  },
}
</script>

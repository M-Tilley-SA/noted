<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3 v-if="fetchSingleNote.length > 0">
          Editing note <b>{{ fetchSingleNote[0].noteTitle }}</b>
        </h3>
        <edit-note-card :note="fetchSingleNote"></edit-note-card>
      </div>
    </div>
  </div>
</template>
<script>
import EditNoteCard from "@/components/note-card/EditNoteCard.vue"

export default {
  name: "EditNote",
  components: {
    EditNoteCard,
  },
  computed: {
    fetchSingleNote() {
      return this.$store.getters.fetchNotes.filter(
        note => note.noteCreated == this.$route.params.noteCreated
      )
    },
  },
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3>Create your note using the fields below</h3>
        <add-note-card></add-note-card>
      </div>
    </div>
  </div>
</template>

<script>
import AddNoteCard from "@/components/note-card/AddNoteCard.vue"

export default {
  name: "AddNote",
  components: {
    AddNoteCard,
  },
}
</script>

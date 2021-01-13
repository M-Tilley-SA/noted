/* eslint-disable */
import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

import undoRedoPlugin from "../core/undo-redo/index"

export default new Vuex.Store({
  state: {
    notes: [],
    mutationsArrayDone: [],
    mutationsArrayUndone: [],
    newMutation: true,
  },
  mutations: {
    saveNote(state, payload) {
      // Have to check if the payload item exists in the state
      // If it does, we need to update it and not add a new note
      const currentNoteIndex = state.notes.findIndex(
        x => x.noteCreated == payload.noteCreated
      )
      if (currentNoteIndex >= 0) {
        Object.assign(state.notes[currentNoteIndex], payload)
      } else {
        state.notes.push(payload)
      }
    },
    saveNoteItem(state, noteItem) {
      const parentNoteIndex = state.notes.findIndex(
        p => p.noteCreated == noteItem.noteParentTimestamp
      )
      const currentNoteIndex = state.notes[parentNoteIndex].noteItems.findIndex(
        c => c.value == noteItem.value
      )
      Object.assign(
        state.notes[parentNoteIndex].noteItems[currentNoteIndex],
        noteItem
      )
    },
    removeNote(state, payload) {
      let noteIndex = state.notes.findIndex(
        x => x.noteCreated == payload.noteCreated
      )
      this.state.notes.splice(noteIndex, 1)
    },
    removeNoteItem(state, payload) {
      let noteIndex = state.notes.findIndex(
        x => x.noteCreated == payload.noteParentTimestamp
      )

      let noteItemIndex = state.notes[noteIndex].noteItems.findIndex(
        noteItem => noteItem.value === payload.value
      )

      this.state.notes[noteIndex].noteItems.splice(noteItemIndex, 1)
    },
  },
  getters: {
    fetchNotes: state => {
      return state.notes
    },
  },
  modules: {},
  plugins: [createPersistedState()],
})

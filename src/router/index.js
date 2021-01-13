import Vue from "vue"
import VueRouter from "vue-router"
import Dashboard from "../views/Dashboard.vue"
import AddNote from "../views/AddNote.vue"
import EditNote from "../views/EditNote.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/add-note",
    name: "addNote",
    component: AddNote,
  },
  {
    path: "/edit-note/:noteCreated",
    name: "editNote",
    component: EditNote,
  },
]

const router = new VueRouter({
  routes,
})

export default router

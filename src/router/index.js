import { createRouter, createWebHashHistory } from 'vue-router'
import Todo from '../pages/Todo.vue'
const routes = [
  {
    path: '/Todo',
    name: 'Todo',
    component: Todo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

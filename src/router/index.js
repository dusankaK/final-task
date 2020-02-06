import Vue from 'vue'
import VueRouter from 'vue-router'
import AllPosts from '../components/AllPosts'
import AddNewPost from '../components/AddNewPost'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/posts'
  },
  {
    path: '/posts',
    component: AllPosts,
    name: 'all-posts'
  },
  {
    path: '/add-new-post',
    component: AddNewPost,
    name: 'add-post'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

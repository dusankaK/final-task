<template>
  <div class="container mt-5 mb-5">
    <h1 class="text-center">All posts</h1>
    <div class="row">
      <div class="card col-md-4" v-for="post in getPosts" :key="post.id">
        <img :src="post.image" class="card-img-top" alt="post picture" />
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AllPosts",
  computed: {
    ...mapGetters({
      getPosts: "getPosts"
    })
  }
};
</script>

<style>
img {
  height: 25vw;
  width: 25vw;
  margin: auto;
}
</style>

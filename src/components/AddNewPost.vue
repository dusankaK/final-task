<template>
  <div class="container mt-5 mb-5">
      <h1 class="text-center">Add Post</h1>
      <form @submit.prevent="onSubmit">

          <div class="form-group">
            <label for="title">Title</label>
            <input v-model="newPost.title" type="text"  required class="form-control" id="title" placeholder="This post is about...?">
          </div>
          <div class="form-group">
            <label for="image">Image</label>
            <input v-model="newPost.image" type="url" required class="form-control" placeholder="Add image link">
          </div>
          <div class="form-group">
            <label for="body">Body</label>
            <textarea
              v-model="newPost.body"
              class="form-control"
              name="body"
              cols="50"
              rows="5"
              placeholder="Write something about this post..."
              required>
            </textarea>
          </div>
           <button class="btn btn-success" type="submit">
            Submit
           </button>
      </form>
  </div>
</template>

<script>
export default {
    name: 'add-new-post',
    data() {
        return {
            newPost: {
                title: "",
                image: "",
                body: ""
            }
        }
    }
}
</script>

<style>
</style> 
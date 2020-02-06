<template>
  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <div class="navbar-brand">Post App</div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/posts" class="nav-item nav-link">
              <strong>All Posts</strong>
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add-new-post" class="nav-item nav-link">
              <strong>Add New</strong>
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
        </ul>
        <PostSearch />
      </div>
    </nav>
  </header>
</template>
<script>
import PostSearch from "../PostSearch";
export default {
  components: {
    PostSearch
  }
};
</script>

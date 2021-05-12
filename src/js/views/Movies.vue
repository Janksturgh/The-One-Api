<template>
  <div class="page-intro">
    <h2>Movies</h2>
      <div v-for="movie in $attrs.movies">
      {{ movie }}
    </div>
  </div>
</template>

<script>
	export default {
		name: "Movies",
    data() {
      return {
        movies: null
      }
    }
	}
</script>

<style scoped>

</style>

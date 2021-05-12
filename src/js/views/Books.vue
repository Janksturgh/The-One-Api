<template>
  <div class="page-intro">
    <h2>Books</h2>
     <div v-for="book in $attrs.books">
      {{ book }}
    </div>
  </div>
</template>

<script>
const axios = require('axios').default;
export default {
		name: "Books",
    data() {
		return {
       books: null
		};
	},
}
</script>

<style scoped>

</style>

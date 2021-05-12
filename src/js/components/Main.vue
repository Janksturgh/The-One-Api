<template>
  <main class="container pt-6 pb-6">
    <div v-for="character in $attrs.characters">
      {{ character }}
    </div>
  </main>
</template>

<script>
	export default {
		name: "Main",
    data(){
      return {
      characters: null,
      }
    }
	}
</script>

<style scoped>

</style>

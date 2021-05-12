<template>
<div>
  <Header />
  <Main :characters="$attrs.data" />
  <Footer />
</div>
</template>

<script>
	import Header from './components/Header.vue';
	import Main from './components/Main.vue';
	import Footer from './components/Footer.vue';
	export default {
		name: "App",
		components: {
			Header,
			Main,
      Footer,
		},
		data() {
			return {
				characters: null
			}
		},
	}
</script>

<style scoped>

</style>

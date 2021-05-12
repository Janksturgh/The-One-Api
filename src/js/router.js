// Routes are currently hardcoded - when wanting to add a new route create the new view in the views directory and then add it to the menu
// If using this project for component only use please ignore routing

import Router from "vue-router";
import Vue from 'vue';
import Home from "./views/Home.vue";
import Movies from "./views/Movies.vue";
import Books from "./views/Books.vue";

Vue.use(Router);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/movies",
		name: "Movies",
		component: Movies,
	},
	{
		path: "/books",
		name: "Books",
		component: Books,
	},
];

const router = new Router({
	routes,
	mode: 'hash',
});

export default router;

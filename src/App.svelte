<script>
	import Router from 'svelte-spa-router';
   import routes from "./routes";
	import {Navbar, Navbaritem} from './lib/components/';
	import { Page, iconlib } from './lib/';
	export let name;
</script>
{@html iconlib}
<section id="app">
<header class="navbar">
	<Navbar dark sidebar={false}>
		<Navbaritem href="#/" icon="start" lg />
		<Navbaritem href="#/icons" icon="file-pic" titel="Icons" />
		<Navbaritem href="#/css" icon="html5" titel="CssVars" />
	</Navbar>	
</header>
<Router {routes}/>
</section>
<style lang="scss" global>
@import '../theme/main';
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

header.navbar {
position: absolute;
top: 0;
left: 0;
right: 0;
height: 50px;
background-color: #f6f6f6;
}
</style>
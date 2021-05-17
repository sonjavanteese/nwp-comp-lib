// @index('./**/*.svelte', f => `export { default as ${f.name} } from '${f.path}${f.ext}';`)
// @endindex
// export {getPage, getContent, getPages, loadData, loadPage, loadCont} from './supabase';
// export { default as supabase } from './data/db'
// @index('./**/*.js', f => `export { ${f.name} } from '${f.path}';`)
// @endindex
export { default as Abody } from './components/action/Abody.svelte';
export { default as Actionsheet } from './components/action/Actionsheet.svelte';
export { default as Aheader } from './components/action/Aheader.svelte';
export { default as Aitem } from './components/action/Aitem.svelte';
export { default as Icon } from './components/icons/Icon.svelte';
export { default as Drawer } from './components/nav/Drawer.svelte';
export { default as Listitem } from './components/nav/Listitem.svelte';
export { default as Navbar } from './components/nav/Navbar.svelte';
export { default as Navbaritem } from './components/nav/Navbaritem.svelte';
export { default as Button } from './components/page/Button.svelte';
export { default as Hero } from './components/page/Hero.svelte';
export { default as Page } from './components/page/Page.svelte';
export { d_icons, icos, iconlib } from './components/icons/';
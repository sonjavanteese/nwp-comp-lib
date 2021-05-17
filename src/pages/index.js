// @index('./**/*.svelte', f => `export { default as ${f.name} } from '${f.path}${f.ext}'`)
export { default as Cssvars } from './Cssvars.svelte'
export { default as Icons } from './Icons.svelte'
export { default as NotFound } from './NotFound.svelte'
export { default as Start } from './Start.svelte'
// @endindex
// @index('../routes/**/*.svelte', f => `export { default as ${f.name} } from '${f.path}${f.ext}'`)
export { default as Loading } from '../router/Loading.svelte'
// @endindex
// export {getPage, getContent, getPages, loadData, loadPage, loadCont} from './supabase';
// export { default as supabase } from './data/db'
// @index('./**/*.js', f => `// export { ${f.name} } from '${f.path}'`)
// export { index } from './index'
// @endindex

// @index('../lib/components/**/*.svelte', f => `// import ${f.name} from '${f.path}${f.ext}';`)
// import Abody from '../lib/components/action/Abody.svelte';
// import Actionsheet from '../lib/components/action/Actionsheet.svelte';
// import Aheader from '../lib/components/action/Aheader.svelte';
// import Aitem from '../lib/components/action/Aitem.svelte';
// import Icon from '../lib/components/icons/Icon.svelte';
// import Drawer from '../lib/components/nav/Drawer.svelte';
// import Listitem from '../lib/components/nav/Listitem.svelte';
// import Navbar from '../lib/components/nav/Navbar.svelte';
// import Button from '../lib/components/page/Button.svelte';
// import Hero from '../lib/components/page/Hero.svelte';
// import Page from '../lib/components/page/Page.svelte';
// @endindex
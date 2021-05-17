
<script>
// import Icon from '../lib/components/icons/Icon.svelte';
// import Drawer from '../lib/components/nav/Drawer.svelte';
// import Listitem from '../lib/components/nav/Listitem.svelte';
 
// import Button from '../lib/components/page/Button.svelte';
// import Hero from '../lib/components/page/Hero.svelte';
 import Page from '../lib/components/page/Page.svelte';
</script>
<Page>
<header>  
<h2>Home component</h2>

<p>
    This sample shows how to dynamically import components. These are modules imported on-demand with the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"><code>import()</code> method</a>.<br/>
    Bundlers like Rollup and Webpack support automatic code splitting when you use dynamic imports, so after compiling this sample, in the <code>dist/</code> folder you'll see a bunch of different JavaScript files. At runtime, the browser requests them only when you first navigate to the route (and then they're cached).
</p>

<p>This is the Home component, which contains markup only.</p>

<p><em>Hint:</em> Try navigating with the links below, then use your browser's back and forward buttons.</p>
</header>  
<article>
    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, nesciunt ullam laboriosam, accusantium esse, consequuntur laudantium minima ex earum qui adipisci cumque? Facere quia ex libero perspiciatis fugit eaque culpa.</h1>
    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sequi autem impedit, voluptatibus error ullam eveniet consequuntur iure quidem odit nobis magni, quae labore exercitationem dolorem nihil sed dolores delectus?</h2>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio amet quas distinctio accusamus pariatur placeat voluptatibus officia dicta rerum deleniti nam adipisci exercitationem totam nesciunt aspernatur sequi, architecto, nulla ipsum.</h3>
    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga maiores consequuntur accusantium! Iure voluptas laboriosam debitis fugiat repudiandae! Ducimus, laborum. Adipisci dolore dolorum facilis, sint non rerum at debitis quasi.</h4>
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel quo nesciunt sed porro placeat corporis omnis consequatur dolorum eius eos velit, obcaecati recusandae ipsam similique, eaque unde molestiae! Quae?</h5>
    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, nulla totam dolor incidunt hic exercitationem tenetur autem distinctio dolore excepturi. Blanditiis nemo voluptates officiis fugiat, est corporis iusto asperiores quos?</h6>
</article>
</Page>

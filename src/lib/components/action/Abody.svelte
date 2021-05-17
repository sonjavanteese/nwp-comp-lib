<script>
   export let icon = null;
</script>

<section class="action-content" {...$$restProps}>
{#if icon}
<pre>
&lt;svg class=&quot;icon icon-{icon}&quot;&gt;
  &lt;use xlink:href=&quot;#icon-{icon}&quot;&gt;&lt;/use&gt;
&lt;/svg&gt;

&lt;Icon name=&quot;{icon}&quot; /&gt;  
</pre>
{:else}
   <article><slot /></article>
{/if}
</section>
     

<style>
  pre {
    padding: 0.5rem;
    max-height: 200px;
    overflow: auto;
  }

  .action-content {
    flex: 1 1 auto;
    max-height: 100%;
    padding: 0.5rem;
    margin-bottom: var(--actsheet-body-mb);
    background-color: var(--actsheet-bg);
    color: var(--actsheet-color);
    border: 1px solid var(--actsheet-border-color);
    border-radius: var(--actsheet-border-radius);
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>

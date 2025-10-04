<script lang="ts">
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import About from './components/About.svelte';
  import Projects from './components/Projects.svelte';
  import Contact from './components/Contact.svelte';
  
  // Type-check imports
  type Component = typeof Header;
  const components: Component[] = [Header, Hero, About, Projects, Contact];
</script>

<main>
  <Header />
  <Hero />
  <About />
  <Projects />
  <Contact />
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>

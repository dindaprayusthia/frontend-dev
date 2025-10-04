&lt;script lang="ts">
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
&lt;/script>

&lt;header class="fixed w-full bg-white shadow-md z-50">
  &lt;nav class="container mx-auto px-6 py-4">
    &lt;div class="flex items-center justify-between">
      &lt;div class="text-xl font-bold">Your Name&lt;/div>
      
      &lt;button class="md:hidden" on:click={toggleMenu}>
        &lt;span class="block h-0.5 w-6 bg-black mb-1">&lt;/span>
        &lt;span class="block h-0.5 w-6 bg-black mb-1">&lt;/span>
        &lt;span class="block h-0.5 w-6 bg-black">&lt;/span>
      &lt;/button>

      &lt;div class="hidden md:flex space-x-6">
        &lt;a href="#home" class="hover:text-blue-600">Home&lt;/a>
        &lt;a href="#about" class="hover:text-blue-600">About&lt;/a>
        &lt;a href="#projects" class="hover:text-blue-600">Projects&lt;/a>
        &lt;a href="#contact" class="hover:text-blue-600">Contact&lt;/a>
      &lt;/div>
    &lt;/div>

    &lt;div class="md:hidden {isMenuOpen ? 'block' : 'hidden'} pt-4">
      &lt;a href="#home" class="block py-2 hover:text-blue-600">Home&lt;/a>
      &lt;a href="#about" class="block py-2 hover:text-blue-600">About&lt;/a>
      &lt;a href="#projects" class="block py-2 hover:text-blue-600">Projects&lt;/a>
      &lt;a href="#contact" class="block py-2 hover:text-blue-600">Contact&lt;/a>
    &lt;/div>
  &lt;/nav>
&lt;/header>
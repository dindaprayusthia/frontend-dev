<script lang="ts">
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="fixed w-full bg-white shadow-md z-50">
  <nav class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="text-xl font-bold">Your Name</div>
      
      <button class="md:hidden" on:click={toggleMenu} aria-label="Toggle menu">
        <span class="block h-0.5 w-6 bg-black mb-1"></span>
        <span class="block h-0.5 w-6 bg-black mb-1"></span>
        <span class="block h-0.5 w-6 bg-black"></span>
      </button>

      <div class="hidden md:flex space-x-6">
        <a href="#home" class="hover:text-blue-600">Home</a>
        <a href="#about" class="hover:text-blue-600">About</a>
        <a href="#projects" class="hover:text-blue-600">Projects</a>
        <a href="#contact" class="hover:text-blue-600">Contact</a>
      </div>
    </div>

    <div class="md:hidden {isMenuOpen ? 'block' : 'hidden'} pt-4">
      <a href="#home" class="block py-2 hover:text-blue-600">Home</a>
      <a href="#about" class="block py-2 hover:text-blue-600">About</a>
      <a href="#projects" class="block py-2 hover:text-blue-600">Projects</a>
      <a href="#contact" class="block py-2 hover:text-blue-600">Contact</a>
    </div>
  </nav>
</header>
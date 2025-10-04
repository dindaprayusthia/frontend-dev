<script lang="ts">
  let formData = {
    name: '',
    email: '',
    message: ''
  };

  function handleSubmit() {
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    formData = {
      name: '',
      email: '',
      message: ''
    };
  }
</script>

<section id="contact" class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <div class="max-w-lg mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Contact Me</h2>
      
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            bind:value={formData.message}
            rows="4"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>
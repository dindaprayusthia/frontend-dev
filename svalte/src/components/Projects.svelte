&lt;script lang="ts">
  type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
  };

  const projects: Project[] = [
    {
      title: "Project 1",
      description: "A brief description of your first project",
      image: "/placeholder1.jpg",
      technologies: ["Svelte", "TypeScript", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "A brief description of your second project",
      image: "/placeholder2.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    // Add more projects as needed
  ];
&lt;/script>

&lt;section id="projects" class="py-20 bg-white">
  &lt;div class="container mx-auto px-6">
    &lt;h2 class="text-3xl font-bold text-center mb-12">My Projects</h2>
    
    &lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        &lt;div class="bg-white rounded-lg shadow-lg overflow-hidden">
          &lt;img src={project.image} alt={project.title} class="w-full h-48 object-cover"/>
          &lt;div class="p-6">
            &lt;h3 class="text-xl font-semibold mb-2">{project.title}&lt;/h3>
            &lt;p class="text-gray-600 mb-4">{project.description}&lt;/p>
            &lt;div class="flex flex-wrap gap-2 mb-4">
              {#each project.technologies as tech}
                &lt;span class="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {tech}
                &lt;/span>
              {/each}
            &lt;/div>
            &lt;a href={project.link} class="text-blue-600 hover:text-blue-800">
              View Project →
            &lt;/a>
          &lt;/div>
        &lt;/div>
      {/each}
    &lt;/div>
  &lt;/div>
&lt;/section>
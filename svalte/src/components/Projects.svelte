<script lang="ts">
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
    }
  ];
</script>

<section id="projects" class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-12">My Projects</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={project.image} alt={project.title} class="w-full h-48 object-cover"/>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
            <p class="text-gray-600 mb-4">{project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.technologies as tech}
                <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {tech}
                </span>
              {/each}
            </div>
            <a href={project.link} class="text-blue-600 hover:text-blue-800">
              View Project →
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
&lt;script lang="ts">
  const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Svelte", level: 75 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "Git", level: 85 }
  ];
&lt;/script>

&lt;section id="about" class="py-20 bg-gray-50">
  &lt;div class="container mx-auto px-6">
    &lt;div class="max-w-4xl mx-auto">
      &lt;h2 class="text-3xl font-bold text-center mb-12">About Me</h2>
      
      &lt;div class="grid md:grid-cols-2 gap-12">
        &lt;div>
          &lt;h3 class="text-xl font-semibold mb-4">Who I Am</h3>
          &lt;p class="text-gray-600 mb-6">
            I'm a passionate frontend developer with a strong foundation in modern web technologies.
            I love creating responsive and user-friendly web applications that solve real-world problems.
          &lt;/p>
          &lt;p class="text-gray-600">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or sharing my knowledge through blog posts and community engagement.
          &lt;/p>
        &lt;/div>

        &lt;div>
          &lt;h3 class="text-xl font-semibold mb-4">Skills</h3>
          &lt;div class="space-y-4">
            {#each skills as skill}
              &lt;div>
                &lt;div class="flex justify-between mb-1">
                  &lt;span class="text-sm font-medium">{skill.name}&lt;/span>
                  &lt;span class="text-sm font-medium">{skill.level}%&lt;/span>
                &lt;/div>
                &lt;div class="w-full bg-gray-200 rounded-full h-2">
                  &lt;div
                    class="bg-blue-600 h-2 rounded-full"
                    style="width: {skill.level}%"
                  >&lt;/div>
                &lt;/div>
              &lt;/div>
            {/each}
          &lt;/div>
        &lt;/div>
      &lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/section>
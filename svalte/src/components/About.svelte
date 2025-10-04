<script lang="ts">
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
</script>

<section id="about" class="py-20 bg-gray-50">
  <div class="container mx-auto px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">About Me</h2>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-xl font-semibold mb-4">Who I Am</h3>
          <p class="text-gray-600 mb-6">
            I'm a passionate frontend developer with a strong foundation in modern web technologies.
            I love creating responsive and user-friendly web applications that solve real-world problems.
          </p>
          <p class="text-gray-600">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or sharing my knowledge through blog posts and community engagement.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-4">Skills</h3>
          <div class="space-y-4">
            {#each skills as skill}
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium">{skill.name}</span>
                  <span class="text-sm font-medium">{skill.level}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-blue-600 h-2 rounded-full"
                    style="width: {skill.level}%"
                  ></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
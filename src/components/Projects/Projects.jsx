import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

export const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">My Projects</h1>
      <div className="flex flex-col gap-16 w-full max-w-5xl text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

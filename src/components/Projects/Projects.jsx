// // import ProjectCard from "./ProjectCard";
// // import { projectsData } from "./projectsData";

// // export const Projects = () => {
// //   return (
// //     <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-12">
// //       <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl md:text-6xl mb-10">Some Projects I have done</h1>
// //       {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">Some Projects I have done</h1> */}
// //       <div className="flex flex-col gap-16 w-full max-w-5xl text-white">
// //         {projectsData.map((project, index) => (
// //           <ProjectCard key={index} project={project} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// import ProjectCard from "./ProjectCard";
// import { projectsData } from "./projectsData";

// export const Projects = () => {
//   return (
//     <div
//       id="projects"
//       className="min-h-screen w-full flex flex-col items-center justify-center gap-16 p-4 md:px-12"
//     >
//       <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl md:text-6xl mb-10">
//         Some Projects I have done
//       </h1>

//       {/* Grid container */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full  text-white">
//         {projectsData.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// };

import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center gap-16 p-4 md:px-12"
    >
      <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl md:text-6xl mb-10">
        Some Projects I have done
      </h1>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl justify-items-center text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

import Divider from "../ui/Divider";
import Heading from "../ui/Heading";
import projects from "../../data/projects";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
// import Collections from "../pages/Collections"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleClick = (id) => {
    setSelectedProject((prev) => (prev === id ? null : id))
  }

  return (
    <>
      <div id="projects">
        <Divider className="h-screen" />
        {/* <ProjectCard /> */}
        <Heading header="My Project" />

        <div className="mx-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:mx-22">
          {projects.map((myproject) => (
            <div
              key={myproject.id}
              className="bg-violet-500 group relative overflow-hidden rounded-3xl"
              onClick={() => handleClick(myproject.id)}
            >
              <img
                src={myproject.image}
                alt=''
                className="bg-indigo-200 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 flex flex-col items-center justify-center text-white cursor-pointer opacity-0 backdrop-blur-lg transition-opacity duration-500 ${selectedProject === myproject.id ? "opacity-100" : "opacity-0"}`}>
                <h3 className="mb-2 text-xl text-black font-semibold">{myproject.name}</h3>
                <p className="mb-1 p-4 text-black text-sm">{myproject.desc}</p>
                <p className="mb-3 text-black font-semibold italic">{myproject.tech}</p>             
                <a
                  href={myproject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-indigo-950 px-4 py-2 text-white hover:bg-indigo-800 hover:text-white"
                >
                  <div className="flex items-center">
                    <span>View Github</span>
                  </div>
                </a>
                <a
                  href={myproject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-yellow-400 px-4 py-2 mt-2 text-black hover:bg-yellow-600 hover:text-white"
                >
                  <div className="flex items-center">
                    <span>Demo</span>
                    <MdArrowOutward />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

          {/* <Collections /> */}
          
      </div>
    </>
  );
};

export default Projects;

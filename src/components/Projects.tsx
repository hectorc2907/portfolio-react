import React from "react";
import CardProjects from "./CardProjects";
import Dates from "../mock/Projects.json";
import { APIResult } from "../types";

// Necesario para importar JSON en TypeScript
const projects: APIResult[] = Dates;

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="text-white flex justify-center mt-14" data-aos="fade-up" data-aos-delay="100">
      <div className="w-[1200px]">
        <div className="mx-5">
          <div className="text-center">
            <h2 className="text-3xl">
              <strong>Proyectos</strong>
            </h2>
          </div>
          <div className="py-10">
            <CardProjects projects={projects} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

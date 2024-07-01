import React from "react";
import { APIResult } from "../types";

interface CardProjectsProps {
  projects: APIResult[];
}

const CardProjects: React.FC<CardProjectsProps> = ({ projects }) => {
  const sortedProjects = [...projects].sort(
    (a, b) => parseInt(b.id) - parseInt(a.id)
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {sortedProjects.map((project) => (
        <div
          key={project.id}
          className="bg-[#1B1E22] shadow-md rounded p-4 mb-4"
        >
          <div>
            <img src={project.image} alt="" />
          </div>
          <h2 className="text-xl font-bold">{project.nombre}</h2>
          <p>{project.description}</p>
          <div className="mt-2 flex justify-around">
            {project.tecnhologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-around py-2">
            <a href={project.github}>
              <button className="bg-slate-950 hover:bg-slate-900 py-1 px-5 rounded-md">
                Codigo
              </button>
            </a>
            <a href={project.test}>
              <button className="bg-slate-950 hover:bg-slate-900 py-1 px-5 rounded-md">
                Prueba
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProjects;

import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header
      className="text-white justify-center flex"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="hidden md:block py-5 w-[1000px]">
        <div className="flex justify-around items-center">
          <div>
            <a href="/" className="text-2xl flex items-center">
              <img
                src="../img/logoChico.png"
                className="w-9"
                alt=""
              />
            </a>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <a href="#aboutMe">Sobre Mí</a>
            <a href="#projects">Proyectos</a>
            <a href="#technologies">Tecnologias</a>
            <a href="#contact">Contacto</a>
          </div>
          <div>
            <a
              href="https://drive.google.com/uc?export=download&id=1EC3PN7bCNTdD4fA7vJBAAMp9SQXlD-O_"
              download="tu_curriculum.pdf"
            >
              <button className="bg-red-900 hover:bg-red-700 rounded-md py-2 px-3">
                Curriculum
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="md:hidden p-5 w-[1000px]">
        <div className="">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl">
              <img
                src="../img/logoChico.png"
                className="w-9"
                alt=""
              />
            </a>
            <button onClick={handleMenu} className="text-4xl">
              {menuOpen ? <HiX /> : <HiOutlineMenu />}
            </button>
          </div>
          <div
            className={`${
              menuOpen ? "" : "hidden"
            } grid grid-cols-1 gap-4 text-center`}
          >
            <a href="#aboutMe" className="py-2">
              Sobre Mí
            </a>
            <a href="#projects" className="py-2">
              Proyectos
            </a>
            <a href="#technologies" className="py-2">
              Tecnologias
            </a>
            <a href="#contact" className="py-2">
              Contacto
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1EC3PN7bCNTdD4fA7vJBAAMp9SQXlD-O_"
              download="tu_curriculum.pdf"
              className="py-2"
            >
              Curriculum
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

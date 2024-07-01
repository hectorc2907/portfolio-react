import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="text-white justify-center flex" data-aos="fade-up" data-aos-delay="100">
      <div className="hidden md:block py-5 w-[1000px]">
        <div className="flex justify-around items-center">
          <div>
            <a href="/" className="text-2xl flex items-center">
              <img
                src="../../public/img/logoChico.png"
                className="w-9"
                alt=""
              />
            </a>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <a href="/">Sobre Mí</a>
            <a href="/">Proyectos</a>
            <a href="/">Tecnologias</a>
            <a href="/">Contacto</a>
          </div>
          <div>
            <button className="bg-red-900 rounded-md py-2 px-3">
              Curriculum
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden p-5 w-[1000px]">
        <div className="">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl">
              <img
                src="../../public/img/logoChico.png"
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
            <a href="/" className="py-2">
              Sobre Mí
            </a>
            <a href="/" className="py-2">
              Proyectos
            </a>
            <a href="/" className="py-2">
              Tecnologias
            </a>
            <a href="/" className="py-2">
              Contacto
            </a>
            <a href="/" className="py-2">
              Curriculum
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

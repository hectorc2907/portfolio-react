import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

export const Hero = () => {
  return (
    <section id="aboutMe" className="text-white flex justify-center" data-aos="fade-up" data-aos-delay="100">
      <div className="w-[1200px]">
        <div className="hidden lg:block">
          <div className="flex items-center justify-between">
            <div className="px-20">
              <div className="">
                <h1 className="text-4xl">
                  Hola!, Soy <strong className="text-red-500">Hector</strong>
                </h1>
                <h2 className="text-2xl py-3">FullStack Developer</h2>
              </div>
              <div>
                <p>
                  Soy un desarrollador FullStack con especialización en el Stack
                  MERN, mi enfoque se centra en la creación de soluciones
                  elegantes y eficientes que combinen una sólida arquitectura
                  Backend con una experiencia de usuario atractiva en el
                  Frontend. Me encanta enfrentar nuevos desafíos y aprender
                  constantemente nuevas tecnologías para mejorar mis habilidades
                  y mantenerme actualizado en un mundo tecnológico en constante
                  evolución.
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="flex justify-center text-2xl py-3">Social</h3>
                <div>
                  <div className="grid grid-cols-5 gap-4">
                    <a
                      href="/"
                      className="bg-slate-950 rounded-md p-3 flex items-center justify-center hover:bg-slate-800 hover:cursor-pointer"
                    >
                      <FaLinkedin className="text-3xl" />
                    </a>
                    <a
                      href="/"
                      className="bg-slate-950 rounded-md p-3 flex items-center justify-center hover:bg-slate-800 hover:cursor-pointer"
                    >
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a
                      href="/"
                      className="bg-slate-950 rounded-md p-3 flex items-center justify-center hover:bg-slate-800 hover:cursor-pointer"
                    >
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a
                      href="/"
                      className="bg-slate-950 rounded-md p-3 flex items-center justify-center hover:bg-slate-800 hover:cursor-pointer"
                    >
                      <FaTwitter className="text-3xl" />
                    </a>
                    <a
                      href="/"
                      className="bg-slate-950 rounded-md p-3 flex items-center justify-center hover:bg-slate-800 hover:cursor-pointer"
                    >
                      <FaWhatsapp className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-8 border-black m-5 w-[369px] min-w-[369px]">
              <img
                className="rounded-md"
                src="../../public/img/perfil1corta.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden mx-5">
          <div className="text-center">
            <h1 className="text-4xl">
              Hola!, Soy <strong className="text-red-500">Hector</strong>
            </h1>
            <h2 className="text-2xl pt-2">FullStack Developer</h2>
          </div>
          <div className="flex justify-center">
            <div className="border-8 border-black my-5 max-w-[369px]">
              <img
                className="rounded-md"
                src="../../public/img/perfil1corta.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="md:px-10">
            <p>
              Soy un desarrollador FullStack con especialización en el Stack
              MERN, mi enfoque se centra en la creación de soluciones elegantes
              y eficientes que combinen una sólida arquitectura Backend con una
              experiencia de usuario atractiva en el Frontend. Me encanta
              enfrentar nuevos desafíos y aprender constantemente nuevas
              tecnologías para mejorar mis habilidades y mantenerme actualizado
              en un mundo tecnológico en constante evolución.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="flex justify-center text-2xl py-3">Social</h3>
            <div>
              <div className="grid grid-cols-5 gap-4">
                <a
                  href="/"
                  className="bg-slate-950 rounded-md p-3 flex items-center justify-center hover:bg-slate-800 hover:cursor-pointer"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
                <a
                  href="/"
                  className="bg-slate-950 rounded-md p-3 flex items-center justify-center hover:bg-slate-800 hover:cursor-pointer"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="/"
                  className="bg-slate-950 rounded-md p-3 flex items-center justify-center hover:bg-slate-800 hover:cursor-pointer"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="/"
                  className="bg-slate-950 rounded-md p-3 flex items-center justify-center hover:bg-slate-800 hover:cursor-pointer"
                >
                  <FaTwitter className="text-3xl" />
                </a>
                <a
                  href="/"
                  className="bg-slate-950 rounded-md p-3 flex items-center justify-center hover:bg-slate-800 hover:cursor-pointer"
                >
                  <FaWhatsapp className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

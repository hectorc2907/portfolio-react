export const Technologies = () => {
  return (
    <section id="technologies" className="text-white flex justify-center pb-16" data-aos="fade-up" data-aos-delay="100">
      <div className="w-[1200px]">
        <div className="mx-5">
          <div className="text-center mb-5">
            <h2 className="text-3xl">
              <strong>Tecnologías</strong>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              <h3 className="text-center text-xl">Basicas</h3>
              <div className="flex justify-center">
                <img
                  className="w-10 mx-5 py-3"
                  src="../img/icon/html5.svg"
                  alt=""
                />
                <img
                  className="w-10 mx-5 py-3"
                  src="../img/icon/css.svg"
                  alt=""
                />
                <img
                  className="w-10 mx-5 py-3"
                  src="../img/icon/bootstrap.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-center text-xl">Lenguajes</h3>
              <div className="flex justify-center">
                <img
                  className="w-10 mx-5 py-3"
                  src="../img/icon/javascript.svg"
                  alt=""
                />
                <img
                  className="w-10 mx-5 py-3"
                  src="../img/icon/typescript.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-center text-xl">Front-End</h3>
              <div className="flex justify-center">
                <img
                  className="w-10 mx-5 py-3"
                  src="../img/icon/react.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-center text-xl">Back-End</h3>
              <div className="flex justify-center">
                <img
                  className="w-10 mx-5 py-3"
                  src="../img/icon/nodejs.svg"
                  alt=""
                />
                <img
                  className="w-10 mx-5 py-3"
                  src="../img/icon/Express.js_dark.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-center text-xl">Base de Datos</h3>
              <div className="flex justify-center">
                <img
                  className="w-5 mx-5 py-3"
                  src="../img/icon/mongodb.svg"
                  alt=""
                />
                <img
                  className="w-10 mx-5 py-3"
                  src="../img/icon/mysql.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-center text-xl">Otras Tecnologias</h3>
              <div className="flex justify-center">
                <img
                  className="w-10 mx-5 py-3"
                  src="../img/icon/git.svg"
                  alt=""
                />
                <img
                  className="w-10 mx-5 py-3"
                  src="../img/icon/trello.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

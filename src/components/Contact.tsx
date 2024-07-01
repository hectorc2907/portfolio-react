export const Contact = () => {
  return (
    <section
      id="contact"
      className="text-white flex justify-center pb-10"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="w-[1200px]">
        <div className="mx-5">
          <div className="text-center mb-5">
            <h2 className="text-3xl">
              <strong>Contactos</strong>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="https://wa.me/5493812033116"
              target="_blank"
              className="bg-[#00A884] rounded-md"
            >
              <div className="flex justify-center items-center p-5">
                <img
                  src="../../public/img/icon/whatsapp.svg"
                  className="w-10"
                  alt=""
                />
                <h3 className="px-5">WhatsApp</h3>
              </div>
            </a>
            <a
              href="https://www.facebook.com/hectoralberto.clessi/"
              target="_blank"
              className="bg-[#0649b4] rounded-md"
            >
              <div className="flex justify-center items-center p-5">
                <img
                  src="../../public/img/icon/facebook.svg"
                  className="w-10"
                  alt=""
                />
                <h3 className="px-5">Facebook</h3>
              </div>
            </a>
            <a
              href="https://t.me/hectorc2907"
              target="_blank"
              className="bg-[#4c2bf0] rounded-md"
            >
              <div className="flex justify-center items-center p-5">
                <img
                  src="../../public/img/icon/telegram.svg"
                  className="w-10"
                  alt=""
                />
                <h3 className="px-5">Telegram</h3>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/hector-clessi/" target="_blank" className="bg-[#FFFFFF] rounded-md">
              <div className="flex justify-center items-center p-5">
                <img
                  src="../../public/img/icon/linkedIn.svg"
                  className="w-10"
                  alt=""
                />
                <h3 className="px-5 text-black">LinkedIn</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

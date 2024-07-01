export const Footer = () => {
  return (
    <footer
      className="flex justify-center py-10"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="grid grid-cols-1 gap-5">
        <div className="flex justify-center">
          <img
            src="https://github.com/hectorc2907/portfolio-react/blob/main/src/img/logo.png?raw=true"
            className="w-[250px]"
            alt=""
          />
        </div>
        <div>
          <p className="text-white">HAC - Software © Derechos Reservados</p>
        </div>
      </div>
    </footer>
  );
};

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import butterfly from "../assets/butterfly.svg";


const Places = ({ salon }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative w-full py-20 flex flex-col items-center overflow-hidden"
    >
      {/* Mariposas decorativas */}
      <img
        src={butterfly}
        alt="mariposa superior izquierda"
        className="absolute top-6 left-6 w-10 md:w-12 opacity-80"
      />
      <img
        src={butterfly}
        alt="mariposa inferior derecha"
        className="absolute bottom-6 right-6 w-10 md:w-12 opacity-80 rotate-[20deg]"
      />
      <div className="py-6"></div>
      <div
        className="max-w-xl mx-auto p-8 flex flex-col items-center text-center z-10"
        data-aos="fade-left"
      >
        <h2 className="text-4xl font-adelia text-[#4b5147] tracking-wider mb-6">
          Fiesta
        </h2>
        <p className="text-xl text-[#4b5147] leading-relaxed font-cgTimes mt-5">
          ¡Te esperamos en{" "}
          <span className="font-bold text-verde">{salon}</span>!<br />
          Daremos inicio a la fiesta desde las{" "}
          <span className="font-bold">21:00 hs</span>.
        </p>
      </div>
    </section>
  );
};

export default Places;
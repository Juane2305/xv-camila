import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import InstagramWall from "./InstagramWall";
import dress from "../assets/aurora/dressCodeGreen.png";
import CountdownCircles from "./CountdownCircles";
import song from "../assets/song.mp3";
import MusicScreen from "./MusicScreen";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresXV from "./LugaresXV";
import DressCodeEsmeralda from "./DressCodeEsmeralda";
import flowers from "../assets/flowers.svg";
import roseFlowers from "../assets/rose-flowers.svg";
import blueFlowers from "../assets/blue-flowers.svg";

const Invitacion = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("audio-player");
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, []);

  const targetDate = new Date("2025-11-29T21:00:00-03:00");

  const colorPrincipal = "#69795d";
  const colorSecundario = "#69795d";

  return (
    <div className="w-full font-eleganteText relative overflow-hidden bg-[#f8f5f0]">
      {/* MusicScreen visible solo en desktop */}
      <div className="hidden md:block absolute z-40">
        <MusicScreen cancion={song} />
      </div>

      <div
        className="relative flex flex-col items-center min-h-screen w-full text-center font-eleganteText overflow-hidden px-6"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1760381781/papel_wjgels.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Flores superiores */}
        <img
          src={flowers}
          alt="flores superiores izquierda"
          className="absolute top-0 md:-top-20 -left-15 md:-left-30 w-[60%] md:w-[40%] object-contain"
          style={{ transform: "scaleX(-1)" }}
        />
        <img
          src={flowers}
          alt="flores superiores derecha"
          className="absolute top-0 md:-top-20 -right-15 md:-right-30 w-[60%] md:w-[40%] object-contain"
        />

        {/* Flores inferiores debajo del arco */}
        <img
          src={blueFlowers}
          alt="flores inferiores izquierda"
          className="absolute top-[25%] md:top-[35%] -left-15 md:-left-30 w-[45%] md:w-[40%] object-contain opacity-95"
          style={{ transform: "scaleX(-1)" }}
        />
        <img
          src={blueFlowers}
          alt="flores inferiores derecha"
          className="absolute top-[25%] md:top-[35%] -right-15 md:-right-30 w-[45%] md:w-[40%] object-contain opacity-95"
        />

        {/* Flores rosadas debajo de las azules */}
        <img
          src={roseFlowers}
          alt="flores rosadas izquierda"
          className="md:hidden absolute top-[45%] -left-20 md:left-20 w-[45%] md:w-[40%] object-contain opacity-95"
          style={{ transform: "scaleX(-1)" }}
        />
        <img
          src={roseFlowers}
          alt="flores rosadas derecha"
          className="md:hidden absolute top-[45%] -right-20 w-[45%] md:w-[40%] object-contain opacity-95"
        />

        <img
          src={blueFlowers}
          alt="flores inferiores izquierda"
          className="md:hidden absolute top-[60%] -left-15 w-[45%] md:w-[40%] object-contain opacity-95"
          style={{ transform: "scaleX(-1)" }}
        />
        <img
          src={blueFlowers}
          alt="flores inferiores derecha"
          className="md:hidden absolute top-[60%] -right-15 w-[45%] md:w-[40%] object-contain opacity-95"
        />

        {/* Texto central */}
        <div className="z-10 mt-16 md:mt-20 flex flex-col justify-evenly h-screen">
          <div>
            <p className="text-lg md:text-4xl text-verde italic mt-10 font-adelia">
              Mis Quince
            </p>
          </div>
          <div>
            <h2 className="text-5xl md:text-7xl text-celeste tracking-wide font-cgTimes">
              SAVE <br />
              <span className="font-anthony">the</span>
              <br /> DATE
            </h2>
          </div>
          <div className="mb-30">
            <h1 className="text-6xl md:text-8xl font-ophelia text-rosa">
              Camila
            </h1>
            <p className="text-xl md:text-2xl text-verde mt-10 font-cgTimes">
              SÁBADO 29 <br /> NOVIEMBRE - 2025
            </p>

            {/* Reproductor lineal visible solo en mobile */}
            <div className="block md:hidden mt-8">
              {/* Reproductor personalizado visible solo en mobile */}
              <div className=" md:hidden mt-16 flex flex-col items-center">
                <div className="bg-[#f8f5f0]/80 border border-[#4b5147]/60 rounded-full px-6 py-3 flex items-center justify-between w-[100%] shadow-md relative">
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#4b5147] text-sm italic font-cgTimes">
                    Presioná acá
                  </span>
                  <button
                    onClick={() => {
                      const audio = document.getElementById("audio-player");
                      if (audio.paused) {
                        audio.play();
                        setIsPlaying(true);
                      } else {
                        audio.pause();
                        setIsPlaying(false);
                      }
                    }}
                    className="bg-verde text-white rounded-full p-2 w-10 h-10 flex items-center justify-center text-lg font-bold transition-transform duration-300 hover:scale-110"
                  >
                    <span
                      className={`transition-opacity duration-300 ${
                        isPlaying ? "opacity-0" : "opacity-100"
                      } absolute`}
                    >
                      ▶
                    </span>
                    <span
                      className={`transition-opacity duration-300 ${
                        isPlaying ? "opacity-100" : "opacity-0"
                      } absolute`}
                    >
                      ❚❚
                    </span>
                  </button>
                  <div className="flex-1 mx-4 h-1.5 bg-[#808e7e] rounded-full overflow-hidden relative">
                    <div
                      id="progress-bar"
                      className="absolute top-0 left-0 h-full bg-verde w-0 transition-all duration-200"
                    ></div>
                  </div>
                  <span
                    id="current-time"
                    className="text-[#4b5147] text-sm font-cgTimes w-10 text-right"
                  >
                    0:00
                  </span>
                </div>
                <audio id="audio-player" src={song} className="hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section
          id="contador"
          className="relative py-20 border-y-4 border-verde overflow-hidden"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1760381781/papel_wjgels.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Flores decorativas
            <img
              src={flowers}
              alt="flores izquierda"
              className="absolute top-0 left-0 w-[40%] md:w-[25%] opacity-90 object-contain"
              style={{ transform: 'scaleX(-1)' }}
            />
            <img
              src={flowers}
              alt="flores derecha"
              className="absolute top-0 right-0 w-[40%] md:w-[25%] opacity-90 object-contain"
            /> */}

          <div className="relative z-10 text-center ">
            <CountdownCircles
              targetDate={targetDate}
              containerClasses="my-8"
              backgroundColor="#e5e7eb"
              progressColor="#ACB7D8"
              textColor="#4b5147"
              valueClassName="text-3xl font-cgTimes"
              labelClassName="text-base font-cgTimes italic"
            />
            <p className="text-[#4b5147] font-adelia text-2xl italic mt-6">
              ¡Cada día más cerca!
            </p>
          </div>
        </section>

        <section
          id="lugares"
          className=" text-center bg-white pb-10"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1760381781/papel_wjgels.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <LugaresXV
            iglesia="[Nombre iglesia]"
            hora_iglesia="10:00hs"
            salon="Club Progreso Concordia"
            hora_civil="21:00hs"
          />
          <a
            href="https://maps.app.goo.gl/idoRr3vvgjJRf3KN6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-gray-700 py-3 px-8 rounded-full text-gray-800 font-semibold font-cgTimes hover:text-gray-600 transition">
              CÓMO LLEGAR
            </button>
          </a>
        </section>

        <div className="bg-celeste text-center relative text-white border-y-4 border-verde">
          <GoogleCalendarButton
            imgClass="text-[#4b5147]"
            buttonClass="border-white bg-white text-gray-800 rounded-full"
            titleCalendar="XV de Camila"
            salon="Club Progreso Concordia, Carlos Pellegrini 830, E3202 Concordia, Entre Ríos"
            fechaComienzo="20251129T210000"
            fechaFin="20251130T050000"
          />
        </div>

        <div
          className="relative bg-white py-10"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1760381781/papel_wjgels.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <DressCodeEsmeralda dressCode="Elegante" icon={dress} />
        </div>

        <div className="border-t-3 border-verde"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1760381781/papel_wjgels.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <InstagramWall user="_cami.graziano_" />
        </div>

        <div
          className=""
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1760381781/papel_wjgels.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <DatosBancarios
            claseIcon="text-white"
            texto="Si deseas hacerme un regalo, te dejo los datos"
            claseContenedor=" text-white"
            claseBoton="rounded-full hover:shadow-lg border-white bg-gray-100 text-gray-900"
            textSize="text-lg"
            styleBotonModal={{
              backgroundColor: "white",
              borderColor: "#91A37C",
            }}
            claseBotonModal={{
              backgroundColor: "#91A37C",
              borderColor: "#91A37C",
            }}
            styleModal={{ backgroundColor: colorSecundario }}
            styleBorderModal={{ borderColor: colorPrincipal }}
            styleTextColor={{ color: colorPrincipal }}
            alias="camii.graziano"
            banco="Mercado Pago"
            nombre="Camila Graziano"
            claseModal="bg-[#91A37C]"
            borderModal="border-[#91A37C]"
            textColor="text-[#91A37C]"
          />
        </div>

        <div
          className="relative border-b-4 border-verde"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1760381781/papel_wjgels.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Asistencia
            clase="py-10 bg-fixed"
            claseTitle="text-[#4b5147]"
            claseButton="border-2 border-verde font-semibold hover:bg-[#cab135]  text-gray-700 hover:text-white rounded-full"
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSf4KDeOiekOjm20owOVAGF4QrLCTAKx0c28pFxYrPndFR1vfw/viewform?usp=header"
          />
        </div>

        <div
          className="font-cgTimes italic text-xl bg-white py-10"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1760381781/papel_wjgels.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <TextoFinal
            textoFinal={
              <p>
                Será una noche mágica para mí y me encantaría q la disfrutes
                conmigo <br />
                Espero verte ahí
              </p>
            }
            textClass="text-xl"
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;

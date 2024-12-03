import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Pages/Navbar";

import elRocio from "../../assets/elRocio.jpg";
import map from "../../assets/map.png";
import title from "../../assets/Title.png";
import molinoevento2 from "../../assets/molinoevento2.png";
import molinoaereo from "../../assets/molinoaereo.png";
import palamaranimal2 from "../../assets/palamaranimal2.png";
import termascolonaereo from "../../assets/termascolonaereo.png";
import termascolon from "../../assets/termascolon.jpg";
import puertocolonaereo from "../../assets/puertocolonaereo.png";
import pileta from "../../assets/pileta.jpg";
import Whatsapp from "../Pages/Whatsapp";
import Carousel from "../Pages/Carousel";
import Contenedor from "../Pages/Contenedor";
import { useNavigate } from "react-router-dom";
import Reserva from "../Pages/Reserva";

const Home = () => {
  const [frontInfo, setFrontInfo] = useState(false);
  const [currentImage, setCurrentImage] = useState(termascolonaereo);
  const [currentImage1, setCurrentImage1] = useState(molinoaereo);

  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);  // 640px es el tamaño para sm
    };

    window.addEventListener('resize', handleResize);
    handleResize();  // Llamamos al resize inicialmente para definir el estado correcto

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSmallScreen]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage1((prevImage) =>
        prevImage === molinoaereo ? molinoevento2 : molinoaereo
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === termascolonaereo ? termascolon : termascolonaereo
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  const handleToggleInfoFront = () => {
    setFrontInfo(!frontInfo);
  };

  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5 },
    }),
  };
  return (
    <>
    
    <section
      className={`home-section relative text-white w-[350px] ${isSmallScreen ? '' : 'with-transition'}`}
      style={{
        backgroundImage: `url(${title})`,
        backgroundColor: "#b5907422",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: '50vh',
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 10%",
        margin: "0%",
        transition: isSmallScreen ? 'none' : 'background-size 4s ease-in-out', // Controlamos la transición aquí
      }}
      onMouseEnter={() => {
        if (!isSmallScreen) {
          document.querySelector(".home-section").style.backgroundSize = "110%";
        }
      }}
      onMouseLeave={() => {
        if (!isSmallScreen) {
          document.querySelector(".home-section").style.backgroundSize = "cover";
        }
      }}
    >

        <div
          className="absolute bottom-0 left-0 w-full h-auto p-4 bg-transparent flex justify-end items-end"
          style={{
            left: 0,
            textAlign: "right",
            zIndex: 9999,
          }}
        >
          <Whatsapp />
        </div>
        <div
          className="absolute top-0 left-0 w-full bg-[#d5b9a4fa] opacity-90 z-10"
          style={{
            top: 0,
            left: 0,
            zIndex: 10,
          }}
        >
          <Navbar />
        </div>
        <div
          className="absolute text-xs top-100 left-0 w-full z-10 md:text-lg"
          style={{
            top: 100,
            left: 0,
            zIndex: 10,
          }}
        >
          <Reserva />
        </div>
        <div className="flex flex-col items-center w-100vh">
          <div className="flex flex-col md:flex-row justify-around items-center w-full">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={scrollAnimation}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-yellow-500 text-bold font-custom w-full md:w-1/2"
              style={{ textAlign: "left" }}
            ></motion.h1>
          </div>
        </div>
      </section>

      <motion.section
        id="about"
        className="about bg-[#b5907422] text-left py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={1.6}
      >
        <ul className="about-list mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
          <motion.li
            className="services p-6 rounded-lg"
            variants={scrollAnimation}
            custom={1.7}
          >
            <div className="grid grid-cols-1 divide-y divide-[#b59074] divide-4">
              <div className="pb-4 text-4xl">El Rocío Cabañas</div>
              <div className="pt-4 text-[#b59074]">
                Bienvenido a la experiencia de su segundo hogar.
              </div>
            </div>
            <div>
              <div className="flex justify-around items-center pt-4"></div>
            </div>
            <div className="flex flex-row justify-around items-center pt-4">
              <button className="text-[#b59074]">Conocenos</button>
            </div>
          </motion.li>

          <motion.li
            className="d-flex justify-center align-middle pt-8"
            variants={scrollAnimation}
            custom={1.7}
          >
            <img className="rounded-xl" src={elRocio} alt="" />
          </motion.li>
        </ul>
      </motion.section>

      <motion.section
        id="image"
        className="about bg-[#b5907422] text-left py-0 px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={1.8}
      >
        <Contenedor />
      </motion.section>

      <motion.section
        id="cabañas"
        className="about bg-[#b5907422] text-left py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={2.1}
      >
        <ul className="about-list mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
          <motion.li
            className="services p-6 rounded-lg"
            variants={scrollAnimation}
            custom={2.2}
          >
            <div className="grid grid-cols-1 divide-y divide-[#b59074] divide-4">
              <div onClick={() => navigate("/rooms")} className="pb-4 cursor-pointer hover:text-lg">Cabañas</div>
              <div className="pt-4 text-[#b59074]">
                Para dos, cuatro o seis personas
              </div>
            </div>
            <div>
              <div className="flex justify-around items-center pt-4">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                </button>
                <button className="text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-around items-center pt-4">
              <h2 className="text-[#b59074]">Más información</h2>
              <button
                onClick={handleToggleInfoFront}
                className="text-[#b59074] pl-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            {frontInfo && (
              <div>
                <p>● Wi-Fi</p>
                <p>● Tv</p>
                <p>● Pileta exterior</p>
                <p>● Parrilla</p>
                <p>● Aire acondicionado</p>
                <p>● Cocina</p>
                <p>● Garage techado</p>
              </div>
            )}
          </motion.li>

          <motion.li
            className="d-flex justify-center align-middle pt-8"
            variants={scrollAnimation}
            custom={2.3}
          >
            <Carousel />
          </motion.li>
        </ul>
      </motion.section>

      <motion.section
        id="image"
        className="about bg-[#b5907422] text-left py-0 px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={2.4}
      >
        <ul className="about-list mx-0 w-full grid grid-cols-1 gap-0 text-gray-600">
          <motion.li
            className="d-flex justify-center align-middle p-0"
            variants={scrollAnimation}
            custom={2.5}
          >
            <img
              src={pileta}
              alt="Imagen de la piscina"
              className="w-full h-200 object-cover"
            />
          </motion.li>
        </ul>
      </motion.section>

      <motion.section
        id="map"
        className="about bg-[#b5907422] text-center py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={2.6}
      >
        <ul className="about-list mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
          <motion.li
            className="services p-6 rounded-lg"
            variants={scrollAnimation}
            custom={2.7}
          >
            <div className="space-y-4">
              <p className="text-[#b59074]">
                Ubicado en un estratégico lugar, ideado para ofrecerte un
                refugio de paz y relajación.
              </p>
              <p className="text-[#b59074]">
                A minutos de las playas y termas de Colón y San José.
              </p>
              <p className="text-[#b59074]">
                Mini mercado y comidas rápidas a solo unos pasos.
              </p>
              <p className="text-[#b59074]">
                En las cercanías de Molino Forclaz y Granja la Administración
              </p>
            </div>
            <div className="border-t border-[#b59074] mt-4"></div>

            <h2 className="pt-4 flex justify-start">Hablemos</h2>

            <h3 className="flex items-center pt-4 text-sm">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </span>
              03447 15647682
            </h3>
          </motion.li>

          <motion.li
            className="d-flex justify-center align-middle"
            variants={scrollAnimation}
            custom={2.8}
          >
            <div>Cómo llegar?</div>
            <div className="image-container relative">
              <img src={map} alt="map" className="services border rounded-lg" />
              <div className="link-container absolute top-2 right-2 bg-white text-blue-500 p-2 rounded-lg shadow-md">
                <a
                  href="https://www.google.com/maps/place/Caba%C3%B1as+El+Roc%C3%ADo/@-32.2175499,-58.1561576,14z/data=!4m17!1m10!3m9!1s0x95ae33051525dd97:0xe9c35594ea17e6cd!2sHotel+Costarenas+Spa!5m2!4m1!1i2!8m2!3d-32.2180585!4d-58.1337555!16s%2Fg%2F1tfd84qg!3m5!1s0x95ae3336483df47d:0x1525cc859326d7f9!8m2!3d-32.2141021!4d-58.1575678!16s%2Fg%2F11wr2vrcd9?hl=es-419&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Mapa
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <span>José Artalaz s/n - Colón | Entre Ríos</span>
            </div>
          </motion.li>
        </ul>
        <div className="border-t border-[#b59074] pb-4"></div>
      </motion.section>

      <motion.section
        id="laregion"
        className="about bg-[#b5907422] text-left py-0 px-0 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={2.9}
      >
        <div className="flex justify-center items-center pb-4 text-[#b59074]">
          Qué visitar si venis a Colón
        </div>
        <ul className="about-list mx-auto max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 text-gray-600 overflow-hidden">
          <motion.li
            className="flex justify-center items-center w-full h-full"
            variants={scrollAnimation}
            custom={2.91}
          >
            <div className="flex justify-center items-center w-full h-full text-center">
              <h2>Termas Colón</h2>
            </div>
          </motion.li>
          <motion.li
            className="flex justify-center items-center w-full h-full"
            variants={scrollAnimation}
            custom={2.94}
          >
            <img
              src={currentImage}
              alt="Imagen dinámica"
              className="w-full h-full object-cover"
            />
          </motion.li>
          <motion.li
            className="flex justify-center items-center w-full h-full"
            variants={scrollAnimation}
            custom={2.93}
          >
            <div className="flex justify-center items-center w-full h-full text-center">
              <h2>Puerto de Colón</h2>
            </div>
          </motion.li>
          <motion.li
            className="flex justify-center items-center w-full h-full"
            variants={scrollAnimation}
            custom={2.94}
          >
            <img
              src={puertocolonaereo}
              alt="Imagen 2"
              className="w-full h-full object-cover"
            />
          </motion.li>
          <motion.li
            className="flex justify-center items-center w-full h-full"
            variants={scrollAnimation}
            custom={2.95}
          >
            <img
              src={palamaranimal2}
              alt="Imagen 3"
              className="w-full h-full object-cover"
            />
          </motion.li>
          <motion.li
            className="flex justify-center items-center w-full h-full"
            variants={scrollAnimation}
            custom={2.96}
          >
            <div className="flex justify-center items-center w-full h-full text-center">
              <h2>Parque Nacional El Palmar</h2>
            </div>
          </motion.li>
          <motion.li
            className="flex justify-center items-center w-full h-full"
            variants={scrollAnimation}
            custom={2.97}
          >
            <img
              src={currentImage1}
              alt="Imagen dinámica"
              className="w-full h-full object-cover"
            />
          </motion.li>
          <motion.li
            className="flex justify-center items-center w-full h-full"
            variants={scrollAnimation}
            custom={2.98}
          >
            <div className="flex justify-center items-center w-full h-full text-center">
              <h2>Molino Forclaz</h2>
            </div>
          </motion.li>
        </ul>
      </motion.section>

      <motion.section
        className="benefits bg-[#b5907422] text-center py-16 pb-4 pt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={2.93}
      >
        {" "}
        <div className="border-t border-[#b59074] mt-4"></div>
        <div className="d-flex pt-4 justify-content-center align-items-center">
          <h6 className="mb-0 text-[#b59074be] text-bold">
            Creado con{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline-block w-6 h-6 animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>{" "}
            <a> Rebeca Carrizo Bourlot</a>
          </h6>
        </div>
      </motion.section>
    </>
  );
};

export default Home;

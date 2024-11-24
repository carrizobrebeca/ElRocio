import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
// import bg from "../../assets/bg.jpg";
import CarouselLugares from "./CarouselLugares";

const LaRegion = () => {


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
        className="home-section relative text-white"
        style={{
          background: "#b5907464",
       
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "50vh",
          height: "100&",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 10%",
          margin: "0%",
          transition: "background-size 4s ease-in-out", // Esto es para la transición de la escala
        }}
        onMouseEnter={() => {
          document.querySelector(".home-section").style.backgroundSize = "110%"; // Aumentar el tamaño al hacer hover
        }}
        onMouseLeave={() => {
          document.querySelector(".home-section").style.backgroundSize =
            "cover"; // Volver al tamaño original
        }}
      >

        <div
          className="absolute top-0 left-0 w-full h-auto p-4 bg-[#604a3ae8] opacity-60 z-10"
          style={{
            top: 0,
            left: 0,
            zIndex: 10, // Asegura que este contenedor esté encima del contenido
          }}
        >
          <Navbar />
        </div>
        <CarouselLugares />
        
        
          
      
      </section>
     
      <motion.section
        className="benefits bg-[#b5907422] text-center py-16 pb-4 pt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={1.8}
      >
        <div className="d-flex justify-content-center align-items-center">
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

export default LaRegion;

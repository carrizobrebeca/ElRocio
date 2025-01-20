import React, { useState } from "react";
import data from "../../data";
import RoomCard from "./RoomCard";
import Navbar from "./Navbar";
import Dates from "./Dates";
// import Slider from "@mui/material"
const Rooms = () => {
  const [personasSelect, setPersonasSelect] = useState("todas"); // Estado que maneja la cantidad de personas seleccionadas (por defecto "todas")

  // Filtra las habitaciones según la cantidad de personas seleccionadas
  const habitacionesFiltradas = personasSelect === "todas" 
    ? data 
    : data.filter((habitacion) => habitacion.description.includes(personasSelect)); // Filtra solo las habitaciones que coinciden con la selección

  // Función que se pasa a Dates para actualizar la cantidad de personas seleccionadas
  const handlePersonasChange = (newPersonas) => {
    setPersonasSelect(newPersonas);
  };
  return (
    <>
      <Navbar />
      <div className="pt-4 flex flex-col md:flex-row md:justify-start">
        <Dates  onPersonasChange={handlePersonasChange}/>
        <div className="flex flex-col md:ml-8"> {/* Ajusta el margen a la izquierda en pantallas grandes */}
          {/* <Slider/> */}
          {habitacionesFiltradas.map(({ src, title, description, price, detalle, detail }, index) => (
            <RoomCard
              src={src}
              title={title}
              description={description}
              price={price}
              detalle ={detalle}
              detail ={detail}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;

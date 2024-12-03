import React from "react";
import data from "../../data";
import RoomCard from "./RoomCard";
import Navbar from "./Navbar";
import Dates from "./Dates";
// import Slider from "@mui/material"
const Rooms = () => {
  return (
    <>
      <Navbar />
      <div className="pt-4 flex flex-col md:flex-row md:justify-start">
        <Dates />
        <div className="flex flex-col md:ml-8"> {/* Ajusta el margen a la izquierda en pantallas grandes */}
          {/* <Slider/> */}
          {data.map(({ src, title, description, price }, index) => (
            <RoomCard
              src={src}
              title={title}
              description={description}
              price={price}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;

import React from "react";
import data from "../../data";
import RoomCard from "./RoomCard";
import Navbar from "./Navbar";
// import Slider from "@mui/material"
const Confirmar = () => {
  return (
    <>
  <Navbar/>
    <div>
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
    </>
  );
};

export default Confirmar;

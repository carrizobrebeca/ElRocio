import React from "react";
import data from "../../data";
import RoomCard from "./RoomCard";
import Navbar from "./Navbar";
import style from "./container.module.css";


const Confirmada = () => {
  const habitacionesFiltradas = data.filter((habitacion) => habitacion.title.includes("Familiar"));

  return (
    <>
      <Navbar />
      <div >
        <div className="flex justify-center items-center w-ful pl-10 pr-10 pt-4 pb-4 bg-[#b5907422]">
          <label className="pl-10 pr-10" htmlFor="">Buscar Reserva</label>
          <input className="pl-10 pr-10 rounded-lg border  border-[#b59074]" type="number" placeholder="000000000000"/>
        <button className="pl-10 pr-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </button>
</div>
        <div className="">
          <div className="grid grid-cols-1 pt-10 divide-y divide-[#b59074] divide-4">
            
            <div className="flex justify-start pl-32">
              <h2>Còdigo de reserva: </h2>
            </div>
            <div className="flex justify-start pl-32">
              <h2>Monto pagado por reserva: </h2>
            </div>
            <div className="flex justify-start pl-32">
              <h2>Monto total de estadìa: </h2>
            </div>
            <div className="flex justify-start pl-32">
              <h2>Estado de la reserva: </h2>
            </div>
            <div className="flex justify-start pl-32">
              <h2>Desde: </h2>
            </div>
            <div className="flex justify-start pl-32">
              <h2>Hasta: </h2>
            </div>
            <div className=" bg-[#b5907422] pt-4 flex flex-row justify-start items-center text-[#b59074] md:pl-16">
              <div className="inline-block">
                <div className="flex justify-end items-end pt-4">
                <div className="pb-4 pl-2 pt-10 flex flex-row justify-start items-center md:text-2xl md:pl-16">
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
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Confirmada;

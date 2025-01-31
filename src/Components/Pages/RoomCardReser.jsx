import React, { useEffect, useState } from "react";
import data from "../../data";
import RoomCard from "./RoomCard";
import Navbar from "./Navbar";
import style from "./container.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservas, fetchReservasById } from "../../store/reservaSlice";
import RoomCardReserva from "./RoomCardReserva";

const Confirmada = () => {
  const [searchId, setSearchId] = useState(""); // Estado para el ID ingresado
  const { selectedReserva, status, error } = useSelector((state) => state.reservas); // Obtener el estado de las reservas
 const dispatch = useDispatch()
  const habitacionesFiltradas = selectedReserva ? data.filter((habitacion) => habitacion.price === selectedReserva.bookingPrice) : [];
 

  // Manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
    console.log(searchId);
    
  };

  // Manejar la búsqueda cuando el usuario hace clic
  const handleSearch = () => {
    if (searchId) {
      dispatch(fetchReservasById(searchId)); // Despachar la acción para buscar la reserva por ID
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="flex justify-center items-center w-ful pl-10 pr-10 pt-4 pb-4 bg-[#b5907422]">
          <label className="pl-10 pr-10" htmlFor="">Buscar Reserva</label>
          <input
            className="pl-10 pr-10 rounded-lg border border-[#b59074]"
            type="text"
            placeholder="000000000000"
            value={searchId}
            onChange={handleSearchChange}
          />
          <button className="pl-10 pr-10" onClick={handleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>

    
        <div className="">
          <div className="grid grid-cols-1 pt-10 divide-y divide-[#b59074] divide-4">
            
            <div className="flex justify-start pl-32">
              <h2>Còdigo de reserva: {selectedReserva ? selectedReserva.id : ""}</h2>
            </div>
            <div className="flex justify-start pl-32">
              <h2>Monto pagado por reserva: {selectedReserva ? selectedReserva.bookingPrice : ""}</h2>
            </div>
            <div className="flex justify-start pl-32">
              <h2>Monto total de estadía: {selectedReserva ? selectedReserva.totalPrice : ""}</h2>
            </div>
            <div className="flex justify-start pl-32">
              <h2>Estado de la reserva: {selectedReserva ? selectedReserva.status : "Cargando..."}</h2>
            </div>
            <div className="flex justify-start pl-32">
              <h2>Desde: {selectedReserva ? new Date(selectedReserva.dateStart).toLocaleDateString('en-CA') : ""}</h2>
            </div>
            <div className="flex justify-start pl-32">
              <h2>Hasta: {selectedReserva ? new Date(selectedReserva.dateEnd).toLocaleDateString('en-CA') : ""}</h2>
            </div>

           
              <div className="bg-[#b5907422] pt-4 flex flex-row justify-start items-center text-[#b59074] md:pl-16">
                <div className="inline-block">
                  <div className="flex justify-end items-end pt-4">
                    <div className="pb-4 pl-2 pt-10 flex flex-row justify-start items-center md:text-2xl md:pl-16">
                    {habitacionesFiltradas.length > 0 ? (
                        habitacionesFiltradas.map(({ src, title, description, price, detalle, detail }, index) => (
                          <RoomCard
                            src={src}
                            title={title}
                            description={description}
                            price={price}
                            detalle={detalle}
                            detail={detail}
                            key={index}
                          />
                        ))
                      ) : (
                        <h3 className="text-white">No se encontraron habitaciones para esta reserva.</h3>
                      )}
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



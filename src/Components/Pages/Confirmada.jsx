import React, { useEffect, useState } from "react";
import data from "../../data";
import RoomCard from "./RoomCard";
import Navbar from "./Navbar";
import style from "./container.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservas, fetchReservasById } from "../../store/reservaSlice";
import RoomCardReserva from "./RoomCardReserva";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { title } from "framer-motion/client";
import axios from "axios";

const Confirmada = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [searchId, setSearchId] = useState(""); // Estado para el ID ingresado
  const dispatch = useDispatch(); // Hook para despachar acciones
  const { reservasDB, status, error } = useSelector((state) => state.reservas); // Obtener el estado de las reservas
  initMercadoPago("APP_USR-13c5ffaf-d24f-4887-97f9-e9abe4b6d758", { locale: "es-AR" });


  
  const [todasLasReservas, setTodasLasReservas] = useState([]);
  const [ultimaReserva, setUltimaReserva] = useState([]);

  const [reservaActiva, setReservaActiva] = useState(null);

  const habitacionesFiltradas = reservaActiva ? data.filter((habitacion) => habitacion.price === reservaActiva.bookingPrice) : [];




  useEffect(() => {
    // Recuperar la reserva de localStorage
    const reservaData = localStorage.getItem("reservaActiva");

    if (reservaData) {
      setReservaActiva(JSON.parse(reservaData)); // Convertir de string JSON a objeto
    }
  }, []);



  useEffect(() => {
    dispatch(fetchReservas());  // Esto disparará la acción para cargar las reservas desde la API
  }, [dispatch]);


  // Filtra las habitaciones según la cantidad de personas seleccionadas

  useEffect(() => {
    if (status === "succeeded") {
      setTodasLasReservas(reservasDB);  // Asignamos las reservasDB al estado todasLasReservas
    }
  }, [status, reservasDB]);

  useEffect(() => {
    // Filtra las reservas según la categoría y la fecha de inicio
    const ultimaReserva = todasLasReservas.filter(
      (reserva) =>
        reserva.category === reservaActiva.category && reserva.dateStart === reservaActiva.dateStart
    );

    // Si se encontró una reserva, establece el id de la última reserva a reservaActiva
    if (ultimaReserva.length > 0) {
      setUltimaReserva(ultimaReserva);
      // Aquí asignamos el id de la primera reserva en ultimaReserva (asumiendo que hay solo una)
      setReservaActiva((prevReserva) => ({
        ...prevReserva,
        id: ultimaReserva[0].id,
      }));
    }
  }, [todasLasReservas]);

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/create_preference",
        {
          title: reservaActiva.bookingPrice,
          quantity: 1,
          price: Number(reservaActiva.bookingPrice),
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };
  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  
  return (
    <>
      <Navbar />
      <div>


        <div>
          {reservaActiva ? (
            <div className="">
              <div className="grid grid-cols-1 pt-10 divide-y divide-[#b59074] divide-4">

                <div className="flex justify-start pl-32">
                  <h2 className="text-3xl">Código de reserva: {reservaActiva.id}</h2>
                </div>
                <div className="flex justify-start pl-32">
                  <h2>Monto pagado por reserva: $ {reservaActiva.bookingPrice}</h2>
                </div>
                <div className="flex justify-start pl-32">
                  <h2>Monto total de estadía: $ {reservaActiva.totalPrice}</h2>
                </div>
                <div className="flex justify-start pl-32">
                  <h2> Estado de la reserva: {
                    reservaActiva.status === "pending" ? " pendiente de pago" :
                      reservaActiva.status === "succeeded" ? " aprobado" :
                        reservaActiva.status
                  }</h2>
                </div>
                <div className="flex justify-start pl-32">
                  <h2>Desde: {new Date(reservaActiva.dateStart).toLocaleDateString()}</h2>
                </div>
                <div className="flex justify-start pl-32">
                  <h2>Hasta: {new Date(reservaActiva.dateEnd).toLocaleDateString()}</h2>
                </div>
              </div>
            </div>

          ) : (
            <p>Error al cargar la reserva </p>
          )}
        </div>
        <div className="">
          <div className="grid grid-cols-1 pt-10 divide-y divide-[#b59074] divide-4">




            <div className="bg-[#b5907422] pt-4 flex flex-row justify-start items-center text-[#b59074] md:pl-16">
              <div className="inline-block">
                <div className="flex justify-end items-end pt-4">
                  <div className="pb-4 pl-2 pt-10 flex flex-row justify-start items-center md:text-2xl md:pl-16">
                    {Array.isArray(habitacionesFiltradas) && habitacionesFiltradas.length > 0 ? (
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
        <div className="flex flex-row justify-center items-center p-2 bg-[#d5b9a4] text-white md:pl-4 md:pr-4">
        <button onClick={handleBuy} className="flex flex-row justify-center items-center p-2 bg-[#d5b9a4] text-white md:pl-4 md:pr-4">Pagar Reserva</button>
       
        </div>
        <div className="flex flex-row justify-center items-center p-2 bg-[#d5b9a4] text-white md:pl-4 md:pr-4">
       
        { preferenceId && <Wallet initialization={{ preferenceId: preferenceId}} /> }
        </div>
        

      </div>
    </>
  );
};

export default Confirmada;


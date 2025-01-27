import React, { useEffect, useState } from "react";
import data from "../../data";
import RoomCard from "./RoomCard";
import Navbar from "./Navbar";
import Dates from "./Dates";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservas } from "../../store/reservaSlice";
import { format } from "date-fns";
import { selectEnd } from "../../store/endSlice";
import { selectStart } from "../../store/startSlice";


const Rooms = () => {
  const [personasSelect, setPersonasSelect] = useState("todas"); // Estado que maneja la cantidad de personas seleccionadas (por defecto "todas")
  const [categoria, setCategoria] = useState(null);
  const [todasLasReservas, setTodasLasReservas] = useState([]);
  const [reservasNoAvaiable, setReservasNoAvaiable] = useState([]);
  const [noAvaiableDate, setNoAvaiableDate] = useState([]);

  // Obtener el valor de `end` del estado de Redux
  const endDate = useSelector(selectEnd); // Aquí accedes al valor de `end`
  const startDate = useSelector(selectStart); // Aquí accedes al valor de `end`
  // Si necesitas formatear la fecha
  const formattedEndDate = format(new Date(endDate), "yyyy-MM-dd");
  const formattedStartDate = format(new Date(startDate), "yyyy-MM-dd");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservas());  // Esto disparará la acción para cargar las reservas desde la API
  }, [dispatch]);

  const { reservasDB, status, error } = useSelector((state) => state.reservas); // Obtener el estado de las reservas
  // Filtra las habitaciones según la cantidad de personas seleccionadas
  const habitacionesFiltradas = personasSelect === "todas"
    ? data
    : data.filter((habitacion) => habitacion.description.includes(personasSelect)); // Filtra solo las habitaciones que coinciden con la selección

  useEffect(() => {
    if (status === "succeeded") {
      setTodasLasReservas(reservasDB);  // Asignamos las reservasDB al estado todasLasReservas
    }
  }, [status, reservasDB]);

  useEffect(() => {
    const reservasDisponibles = todasLasReservas.filter((reserva) => reserva.category.includes(categoria));
    setReservasNoAvaiable(reservasDisponibles);
  }, [todasLasReservas, categoria]);


  useEffect(() => {
    const fechaNoDisponibles = reservasNoAvaiable.filter((reserva) => reserva.dateStart <= formattedEndDate && reserva.dateEnd >= formattedStartDate);
    setNoAvaiableDate(fechaNoDisponibles);
  }, [reservasNoAvaiable, formattedEndDate, formattedStartDate]);

  console.log(todasLasReservas);
  console.log(reservasNoAvaiable);
  console.log(noAvaiableDate);

  useEffect(() => {
    if (personasSelect === "4") {
      setCategoria("Cuádruple");
    } else if (personasSelect === "2") {
      setCategoria("Estándar");
    } else if (personasSelect === "6") {
      setCategoria("Familiar");
    } else {
      setCategoria(null);
    }
  }, [personasSelect]);


  // Función que se pasa a Dates para actualizar la cantidad de personas seleccionadas
  const handlePersonasChange = (newPersonas) => {
    setPersonasSelect(newPersonas);
  };


  return (
    <>
      <Navbar />
      <div className="pt-4 flex flex-col md:flex-row md:justify-start">
        <Dates onPersonasChange={handlePersonasChange} />
        <div className="flex flex-col md:ml-8"> {/* Ajusta el margen a la izquierda en pantallas grandes */}
          {/* <Slider/> */}
          {habitacionesFiltradas.map(({ src, title, description, price, detalle, detail, available, notAvailable }, index) => (
            <RoomCard
              src={src}
              title={title}
              description={description}
              price={price}
              detalle={detalle}
              detail={detail}
              available={available}
              notAvailable={notAvailable}
              noAvaiableDate={noAvaiableDate}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;

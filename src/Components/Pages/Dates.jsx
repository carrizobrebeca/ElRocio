import { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import style from "./dates.module.css";
import { es } from "date-fns/locale";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useDispatch, useSelector } from "react-redux"
import { selectStart, setStart } from "../../store/startSlice";
import { selectEnd, setEnd } from "../../store/endSlice";
import { differenceInDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import { crearReserva } from "../../store/reservaSlice";

const Dates = ({ onPersonasChange }) => {
  const navigate = useNavigate();
  const [openDate, setOpenDate] = useState(false);
  const [personas, setPersonas] = useState("todas"); //aca tengo 
  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);
  const { createReservaStatus } = useSelector((state) => state.reservas);

  const dispatch = useDispatch();
  const selectionRange = {
    startDate: start,
    endDate: end,
    key: "selection",
  };
  const startForDatabase = format(start, "yyyy-MM-dd");
  const endForDatabase = format(end, "yyyy-MM-dd");
 
  const handleSelect = (ranges) => {
    dispatch(setStart(ranges.selection.startDate))
    dispatch(setEnd(ranges.selection.endDate))
  };

  const handleClick = () => {
    setOpenDate((prev) => !prev);
  };

  const handleSelectChange = (event) => {
    const newPersonas = event.target.value;
    setPersonas(newPersonas); // Actualiza el estado local
    onPersonasChange(newPersonas); // Pasa el nuevo valor al componente padre
  };

  const calcularTotal = () => {
    let precioPorDia;
    if (personas === "todas") {
      precioPorDia = "";
    } else if (personas === "2") {
      precioPorDia = 60000;
    } else if (personas === "4") {
      precioPorDia = 70000;
    } else if (personas === "6") {
      precioPorDia = 80000;
    }

    if (start && end) {
      const diasEstadia = differenceInDays(end, start) + 1;
      return diasEstadia * precioPorDia;
    }
    return 0;
  };

  const total = calcularTotal();


  const cabin = () => {
    let tipo;
    if (personas === "todas") {
      tipo = "";
    } else if (personas === "2") {
      tipo = "Estándar";
    } else if (personas === "4") {
      tipo = "Cuádruple";
    } else if (personas === "6") {
      tipo = "Familiar";
    }
    return tipo;
  };

  const tipo = cabin();

  const calcularReserva = () => {
    let precioPorDia;
    if (personas === "todas") {
      return precioPorDia = "";
    } else if (personas === "2") {
      return precioPorDia = 60000.00;
    } else if (personas === "4") {
      return precioPorDia = 70000.00;
    } else if (personas === "6") {
      return precioPorDia = 80000.00;
    }

  };

  const reserva = calcularReserva();

  const [state, setState] = useState({
    dateStart: start,
    dateEnd: end,
    bookingPrice: total,
    totalPrice: reserva,
    category: tipo,
    status: "pending",
    stock: "1",

  });


  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const reservaData = {
      ...state,
      dateStart: start,
      dateEnd: end,
      category: tipo,
      bookingPrice: reserva,  // Asegúrate de usar el valor calculado
      totalPrice: total,  // Asegúrate de usar el valor calculado
    };
    localStorage.setItem("reservaActiva", JSON.stringify(reservaData));
    dispatch(crearReserva(reservaData));
    
    
  };
  useEffect(() => {
    // Solo navegar si el estado de la creación de la reserva es 'succeeded'
    if (createReservaStatus === "succeeded") {
      navigate("/ElRocio/reservastatus");
    }
  }, [createReservaStatus, navigate]);
 
  return (
    <div>
      <div className="flex flex-col pl-2 text-[10px] md:text-lg w-[350px]">

        <div
          onClick={handleClick}
          className="p-4 bg-white flex justify-between text-[#b59074] cursor-pointer "
        >
          <h2>
            Desde
          </h2>
          <h2 value={startForDatabase} name="dateStart" id="dateStart" onChange={handleChange}>
            {startForDatabase}
          </h2>
          {/* <div className="text-[#b59074"> */}
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
        </div>

        <div

          className="p-4 bg-white flex justify-between custom-border text-[#b59074]"
        >
          <h2>
            Hasta
          </h2>
          <h2 value={endForDatabase} name="dateEnd" id="dateEnd" onChange={handleChange}>
            {endForDatabase}
          </h2>

          {/* <div className="text-[#b59074"> */}
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
        </div>

        <select
          className="p-4 flex justify-center custom-border focus:outline-none bg-white text-[#b59074] custom-border option:hover"
          name="select"
          onChange={handleSelectChange}
          value={personas}
        >
          <option value="todas">Todas las cabañas</option>
          <option value="2">2 personas</option>
          <option value="4">
            4 personas
          </option>
          <option value="6">6 personas</option>
        </select>
        {/* <div className="p-0 custom-border bg-white text-[#b59074] md:pl-4 md:pr-4"></div> */}
        <div className="p-4 m-4 bg-[#b59074] flex justify-center text-white md:pl-4 md:pr-4 ">
          <div>
            <h2 value={state.category}
              name="category"
              id="category"
              onChange={handleChange} className="text-base flex justify-center">Cabaña {tipo}</h2>
            <h3 className="flex justify-center">
              {personas !== "todas" && `Para ${personas} personas`}
            </h3>
            <h3 className="flex justify-center pt-4">Monto Total de Estadía</h3>
            <h3 value={state.totalPrice}
              name="totalPrice"
              id="totalPrice"
              onChange={handleChange} className="p-4 text-2xl flex justify-center">
              {`$${total.toLocaleString()}`}
            </h3>
            <h3 className="flex justify-center pt-4">Monto a pagar por la Reserva</h3>
            <h3 value={state.bookingPrice}
              name="bookingPrice"
              id="bookingPrice"
              onChange={handleChange} className="p-4 text-2xl flex justify-center">
              {`$${reserva.toLocaleString()}`}
            </h3>

            <button onClick={handleSubmit} className="flex justify-center items-center p-4 border-2 border-white mx-auto">
              Reservar
            </button>
          </div>
        </div>
      </div>

      {openDate && (
        <DateRangePicker


          label="Small picker"
          className={style.dateRange}
          ranges={[selectionRange]}
          onChange={handleSelect}
          minDate={new Date()}
          locale={es}
        />
      )}
    </div>
  );
};

export default Dates;

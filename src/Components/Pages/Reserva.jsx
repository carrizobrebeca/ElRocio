import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import style from "./cointainer.module.css";
import { es } from "date-fns/locale";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

const Reserva = () => {
  const navigate = useNavigate();
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChange = (ranges) => {
    setDate(ranges.selection);
  };
  const handleClick = (ranges) => {
    setOpenDate((prev) => !prev);
  };


  return (
    <div className={style.container}>
      <div className="flex text-[10px] justify-center md:text-lg">
        <div className="p-4 bg-[#b59074] text-white">
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
          onClick={handleClick}
          className="p-4 pr-0 bg-white custom-border text-[#b59074] cursor-pointer md:pl-8 md:pr-4 "
        >
          {`${format(date.startDate, "dd,MMM,yyyy")}`}
        </div>
        <div className="p-4 custom-border bg-white text-[#b59074]">-</div>
        <div className="p-4 pl-0 bg-white text-[#b59074] custom-border md:pl-4 md:pr-4 ">
          {`${format(date.endDate, "dd,MMM,yyyy")}`}
        </div>
        <div className="p-4 pl-0 pr-0 custom-border bg-white text-[#b59074] md:pl-4 md:pr-4 ">|</div>
        <div className="p-4 pl-0 pr-0 bg-white text-[#b59074] custom-border md:pl-4 md:pr-4 ">
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
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <select
          className="p-4 pr-0 pl-0 custom-border focus:outline-none bg-white text-[#b59074] custom-border option:hover md:pl-4 md:pr-4"
          name="select"
        >
          <option value="value1">2 personas</option>
          <option value="value2" selected>
            4 personas
          </option>
          <option value="value3">6 personas</option>
        </select>
        <div className="p-0 custom-border bg-white text-[#b59074] md:pl-4 md:pr-4"></div>
        <button onClick={() => navigate("/rooms")} className="p-4 bg-[#b59074] text-white md:pl-4 md:pr-4 ">Reservar</button>
      </div>

      {openDate && (
        <DateRangePicker
          label="Small picker"
          className={`${style.dateRange} md:pl-[830px] md:pt-[10px]`} 
          ranges={[date]}
          onChange={handleChange}
          minDate={new Date()}
          locale={es}
        />
      )}
    </div>
  );
};

export default Reserva;

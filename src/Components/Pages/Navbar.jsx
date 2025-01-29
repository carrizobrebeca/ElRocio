import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleScroll = (id) => {
    console.log(`Scrolling to section: ${id}`);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav className="bg-[#d5b9a4] text-white text-xs flex justify-between items-center w-full md:text-lg">
        <h2 className="pl-4 text-bold animate-pulse">El Rocío Cabañas</h2>
        {location.pathname === "/ElRocio/" && (
          <a
            href="#about"
            onClick={() => handleScroll("home")}
            className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition"
          >
            <h2 className="">Nosotros</h2>
          </a>
        )}
          {location.pathname === "/ElRocio/" && (
          <a
            href="#cabañas"
            onClick={() => handleScroll("home")}
            className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition"
          >
            <h2 className="">Cabañas</h2>
          </a>
       )}
     {location.pathname === "/ElRocio/" && (
       
             <a
            href="#laregion"
            onClick={() => handleScroll("home")}
            className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition"
          > La Región</a>
           
        )}

          {location.pathname === "/ElRocio/" && (
          <a
            href="#map"
            onClick={() => handleScroll("home")}
            className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </a>
         )}
        {/* <button className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition">
     
    </button> */}
        <button className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition"></button>
        {location.pathname === "/ElRocio/rooms" && (
          <button
            onClick={() => navigate("/ElRocio/")}
            className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition"
          >
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
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
        )}
         {location.pathname === "/ElRocio/" && (
          <button
            onClick={() => navigate("/ElRocio/reservas")}
            className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition"
          >
           <h2 className="">Tu reserva</h2>
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;

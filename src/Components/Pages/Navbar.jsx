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
     <nav className="bg-transparent text-white flex justify-between items-center w-full px-4 py-2">
  {/* Contenedor izquierdo */}
  <div className="flex items-center flex-1">
    <h2 className="text-bold text-2xl animate-pulse">El Rocío Cabañas</h2>
  </div>

  {/* Contenedor central para los botones */}
  <div className="flex justify-center items-center space-x-4 flex-1">
  <a
          href="#about"
          onClick={() => handleScroll("home")}
          className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition"
        >
    <h2
    
      className=""
    >
      Nosotros
    </h2>
    </a>
    <a
          href="#cabañas"
          onClick={() => handleScroll("home")}
          className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition"
        >
    <h2
    
      className=""
    >
      Cabañas
    </h2>
    </a>
    <button
      onClick={() => navigate("/laregion")}
      className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition"
    >
      La Región
    </button>
  </div>

  {/* Contenedor derecho para los íconos SVG */}
  <div className="flex items-center flex-1 justify-end space-x-4">
   
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
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
    </a>

    {/* <button className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition">
     
    </button> */}
    <button className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition">
      
    </button>
    {location.pathname === "/laregion" && (
    <button  onClick={() => navigate("/")} className="p-2 text-white text-bold rounded-full hover:text-[#b59074] hover:cursor-pointer transition">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

    </button>)}
  </div>
</nav>



    </>
  );
};

export default Navbar;

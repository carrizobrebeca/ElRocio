import React, { useEffect } from 'react';
import Container from './Container';
import title from "../../assets/Title.png";

const Contenedor = () => {
  // Función para manejar el desplazamiento del fondo
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const background = document.getElementById("backgroundImage");
    
    // Cambiar la posición del fondo en función del desplazamiento
    background.style.backgroundPosition = `center ${scrollPosition * 0.5}px`; // Ajusta el factor de velocidad si es necesario
  };

  useEffect(() => {
    // Añadir el evento de scroll al cargar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div 
      id="backgroundImage"
      style={{
        backgroundImage: `url(${title})`,
        backgroundColor: "#b5907422",
        backgroundSize: "cover",
        backgroundPosition: "center 0", // Asegúrate de que el fondo empieza en el lugar correcto
        backgroundRepeat: "repeat",
        width: "100%",
        height: "350px",
        display: "flex",
        justifyContent: "flex-start", // Alinea el contenido a la izquierda
        alignItems: "center",
        textAlign: "center",
        padding: "0", // Elimina el relleno
        position: "relative", // Asegura que el fondo se quede en el lugar correcto
      }}
    >
      <div className='left-0'></div>
      <Container />
    </div>
  );
};

export default Contenedor;

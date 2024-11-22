
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; 
import { useSwipeable } from 'react-swipeable'; 

import n1 from "../../assets/nupcial-1.jpg";
import n2 from "../../assets/nupcial-2.jpg";
import n3 from "../../assets/nupcial-3.jpg";

const images = [
  { 
    src: n1, 
    key: 'Snacks'
  },

  { 
    src: n2, 
    key: 'Cervezas'
  },
  { 
    src: n3, 
    key: 'Picada Time'
  },
];

const Carousel = () => {
  const { t } = useTranslation(); // Inicializar useTranslation
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Usar useSwipeable para detectar el swipe a izquierda o derecha
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true, // Evitar el desplazamiento del navegador
    trackMouse: true, // Habilitar también para dispositivos que usen mouse
  });

  return (
    <div {...handlers} className="relative w-full overflow-hidden  rounded-lg">
      <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img src={image.src} alt={`Slide ${index + 1}`} className="w-full h-[250px] md:h-[250px] object-cover" />
         
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#96765e]' : 'bg-gray-300'} transition-colors duration-300`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
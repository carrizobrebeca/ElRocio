import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useSwipeable } from "react-swipeable"; 
import bg from "../../assets/bg.jpg";
import palmar from "../../assets/palmar.jpg";
import palmar2 from "../../assets/palmar2.png";
import puerto from "../../assets/puerto.png";
import sanjose from "../../assets/Sanjose.png";
import molino from "../../assets/molino.png";
import molinoaereo from "../../assets/molinoaereo.png";
import molinoevento2 from "../../assets/molinoevento2.png";
import palamaranimal2 from "../../assets/palamaranimal2.png";
import palamaranimal1 from "../../assets/palamaranimal1.png";
import termascoloaereo from "../../assets/termascoloaereo.png";
import termascolonaereo from "../../assets/termascolonaereo.png";
import termasvillaelisa from "../../assets/termasvillaelisa.png";
import puertocolonaereo from "../../assets/puertocolonaereo.png";


const images = [
  { 
    src: bg, 
    key: 'Playa Santiago Inkier'
  },
  { 
    src: termascoloaereo, 
    key: 'Termas Colón'
  },
  { 
    src: termascolonaereo, 
    key: 'Termas Colón'
  },
  { 
    src: puerto, 
    key: 'Puerto de Colón'
  },
  { 
    src: puertocolonaereo, 
    key: 'Puerto de Colón'
  },
  { 
    src: molino, 
    key: 'Molino Forclaz'
  },
  { 
    src: molinoevento2, 
    key: 'Molino Forclaz Evento'
  },
  { 
    src: molinoaereo, 
    key: 'Molino Forclaz'
  },
  { 
    src: palmar2, 
    key: 'Parque Nacional El Palmar'
  },
  { 
    src: palmar, 
    key: 'Parque Nacional El Palmar'
  },
  { 
    src: palamaranimal1, 
    key: 'Parque Nacional El Palmar'
  },
  { 
    src: palamaranimal2, 
    key: 'Parque Nacional El Palmar'
  },

  { 
    src: sanjose, 
    key: 'Balneario San José'
  },
  { 
    src: termasvillaelisa, 
    key: 'Termas Villa Elisa'
  },
];

const CarouselLugares = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Cambia la imagen cada 6 segundos

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
    <div {...handlers} className="relative w-full h-screen overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img 
              src={image.src} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover" // Imagen cubriendo el contenedor de manera responsiva
            />
            {/* Ajuste del texto a la parte inferior, pero más arriba */}
            {currentIndex === index && (
              <div className="absolute bottom-16 mb-6 left-4 p-4 bg-[#b59074] bg-opacity-30 text-white rounded-md z-50">
                <h2 className="text-lg font-bold">{t(image.key)} {/* Usar t() para traducir el texto */}</h2>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#96765e]' : 'bg-gray-300'} transition-colors duration-300`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselLugares;

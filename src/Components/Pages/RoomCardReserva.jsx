
import React from "react";


const RoomCardReserva = ({ src, title, description, price, detalle, detail, available, notAvailable, noAvaiableDate  }) => {
  const isNotAvailable = noAvaiableDate.length > 0;
  return (
    
    <div className="p-4 md:flex md:justify-start">

<img
        src={src}
        alt={title}
        className="transform scale-100 w-[350px] md:w-[600px] h-auto rounded-lg object-cover hover:scale-[1.03]"
      />
      <div className="w-[350px] md:w-[600px]">
        <div className="flex justify-between">
        <h3 className="m-4 text-2xl p-2 text-[#b59074] text-bold">{title} </h3>
      
        {isNotAvailable ? (
            <h3 className="m-4 text-2xl bg bg-red-200 border border-red-400 p-2 rounded-lg text-red-600 text-bold">
              {notAvailable}
            </h3>
          ) : (
            <h3 className="m-4 text-2xl bg bg-green-200 border border-green-400 p-2 rounded-lg text-green-600 text-bold">
              {available}
            </h3>
          )}
        </div>

        <div className="m-4 border border-[#b59074]"></div>
        <p className="m-4">{description}</p>
        <h3 className="m-4">Precio por noche ${price}</h3>
        <p className="m-4">*{detalle}</p>
        <p className="m-4">*{detail}</p>
      </div>
    </div>
  );
};

export default RoomCardReserva;

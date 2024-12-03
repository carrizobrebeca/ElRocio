import React from "react";

const RoomCard = ({ src, title, description, price }) => {
  return (
    
    <div className="p-4 md:flex md:justify-start">
       
      <img
        src={src}
        alt={title}
        className="transform scale-100 w-[350px] md:w-[600px] h-auto rounded-lg object-cover hover:scale-[1.03]"
      />
      <div className="w-[350px] md:w-[600px]">
        <h3 className="m-4 text-2xl text-[#b59074] text-bold">{title}</h3>
        <div className="m-4 border border-[#b59074]"></div>
        <p className="m-4">{description}</p>
        <h3 className="m-4">Precio por noche ${price}</h3>
      </div>
    </div>
  );
};

export default RoomCard;

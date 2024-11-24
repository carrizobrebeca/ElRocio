import React from "react";
import style from "./container.module.css";
const Container = () => {
  return (
    <div className={style.trapezoid}>
      <div className="grid grid-cols-1 pt-10 divide-y divide-[#b59074] divide-4">
        <div className="pb-4 pl-2 pt-10 flex flex-row justify-start items-center text-3xl md:pl-16">
          El Complejo
        </div>
        <div className="pt-4 flex flex-row justify-start items-center text-[#f0eeec] md:pl-16">
          <div className="inline-block">
            <h2 className="pl-4">Cuenta con amplios espacios </h2>
            <h2 className="pl-6">verdes, para rodearte de</h2>
            <h2 className="pl-16">naturaleza y cargar energías</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-around items-center pt-4"></div>
      </div>
    </div>
  );
};

export default Container;

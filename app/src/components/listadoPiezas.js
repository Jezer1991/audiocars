import React from "react";
import Cabecera from "./cabecera";
import Tabla from "./tabla";
import Add from "./respuestos/add";

function ListadoPiezas() {
  return (
    <div className='container' >
      <Cabecera />
      <Add />
      <Tabla />
    </div>
  );
}

export default ListadoPiezas;

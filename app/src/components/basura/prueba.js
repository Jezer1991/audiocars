import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
import Axios from 'axios';



const columns = [
    { title: "ID", field: "ID" },
    { title: "REF", field: "REF" },
    { title: "Códogio", field: "Códogio" },
    { title: "Nombre", field: "Nombre" },
    { title: "Descripción", field: "Descripción" },
    { title: "Marca", field: "Marca" },
    { title: "Precio", field: "Precio" },
    { title: "Stock", field: "Stock" },
    { title: "Original", field: "Original" },

];


const Prueba = () => {

    useEffect(() => {
        Axios.get('http://localhost:3001/api/getRespuestos').then((response) => {
            setRespuestosList(response.data);
        })
    }, []);

    const [respuestosList, setRespuestosList] = useState([]);

    const data = respuestosList.map((respuesto) => {
        var original = respuesto.esOriginal ? 'Si' : 'NO';
        return (
            {
                ID: respuesto.id,
                REF: respuesto.referencia,
                Códogio: respuesto.codigo,
                Nombre: respuesto.nombre,
                Descripción: respuesto.descripcion,
                Marca: respuesto.marca,
                Stock: respuesto.stock,
                Precio: respuesto.precio,
                Original: original
            }
    
        );
    })

    return (
        <div className="container" style= {{marginTop: '50px'}}>
            <MaterialTable
                title="Basic Table"
                columns={columns} 
                data={data}
                options={{
                    pageSize: 10
                }}
            />
        </div>
    );
};

export default Prueba;
import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
import Axios from 'axios';
import { Delete, Add } from '@material-ui/icons';

import { Avatar, CardMedia, Card, CardActionArea, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const columns = [
    { title: "ID", field: "ID" },
    { title: "REF", field: "REF" },
    { title: "Codigo", field: "Codigo" },
    { title: "Nombre", field: "Nombre" },
    { title: "Descripcion", field: "Descripcion" },
    { title: "Marca", field: "Marca" },
    { title: "Precio", field: "Precio" },
    { title: "Stock", field: "Stock" },
    { title: "Original", field: "Original" },
    { title: "Imagen", field: "Imagen", render: item => <Avatar alt="Remy Sharp" src={item.Img} /> },

];


const List = () => {

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
                Codigo: respuesto.codigo,
                Nombre: respuesto.nombre,
                Descripcion: respuesto.descripcion,
                Marca: respuesto.marca,
                Stock: respuesto.stock,
                Precio: respuesto.precio,
                Original: original,
                Img: respuesto.img,
            }

        );
    })
    const borrar = (id) => {
        Axios.delete(`http://localhost:3001/api/delete/${id}`).then(response => {
            if (response.status === 200) {
            }
        })

    }
    const saveRespuesto = (nuevoRespuesto) => {
        console.log(nuevoRespuesto);
        Axios.post('http://localhost:3001/api/save', {
            codigo: nuevoRespuesto.Codigo,
            nombre: nuevoRespuesto.Nombre,
            descripcion: nuevoRespuesto.Descripcion,
            marca: nuevoRespuesto.Marca,
            stock: nuevoRespuesto.Stock,
            precio: nuevoRespuesto.Precio,
            esOriginal: true,
            img: nuevoRespuesto.Img,
        });
    }

    return (
        <div className="container" style={{ marginTop: '50px' }}>
            <MaterialTable
                title="Tabla de respuestos"
                columns={columns}
                data={data}
                options={{
                    exportButton: true,
                    pageSize: 10,
                    actionsColumnIndex: -1, addRowPosition: 'first'
                }}
                icons={{
                    Add: () => <Add style={{ color: "primary" }} />,
                    Delete: () => <Delete style={{ color: "red" }} />
                }}
                editable={{
                    onRowAdd: (newRespuesto) => new Promise((resolve, reject) => {
                        setTimeout(() => {
                            saveRespuesto(newRespuesto);
                            window.location = "/respuestos";
                        }, 1000)
                    }),
                    onRowDelete: selectedRow => new Promise((resolve, reject) => {
                        setTimeout(() => {
                            borrar(selectedRow.ID);
                            window.location = "/respuestos";
                        }, 1000)
                    }),
                }}
                detailPanel={rowData => {
                    return (
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    style={{objectFit: 'contain', marginTop: '15px'}}
                                    component="img"
                                    height="250"
                                    width='250'
                                    image={rowData.Img}
                                    alt={rowData.Nombre}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{alignContent: 'center'}}>
                                        {rowData.Nombre}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {rowData.Descripcion}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    );
                }}
            />
        </div>
    );
};

export default List;
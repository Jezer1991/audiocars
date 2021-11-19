import React, { useState } from "react";
import Axios from 'axios';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import { TextField, Box, MenuItem, FormControl, InputLabel, OutlinedInput, InputAdornment, RedBar } from '@material-ui/core';
import swal from 'sweetalert';


const Add = () => {

    const [codigo, setCodigo] = useState("");
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [marca, setMarca] = useState("");
    const [stock, setStock] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [img, setImg] = useState("");
    const [error, setError] = useState(false);


    const saveRespuesto = () => {

        Axios.post('http://localhost:3001/api/save', {
            codigo: codigo,
            nombre: nombre,
            descripcion: descripcion,
            marca: marca,
            stock: stock,
            precio: precio,
            esOriginal: true,
            img: img,

        }).then((response) => {
            if (response.status === 200) {
                swal({
                    text: "Respuesto dado de alta!",
                    icon: "success",
                    buttons: false,
                    timer: 1500
                }).then(function () {
                    window.location = "/respuestos";
                });
            } else {
                swal({
                    text: "Hubo un error al dar de alta",
                    icon: "danger",
                    buttons: true,
                })
            }
        });
    }




    return (
        <div className="container">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    style={{ width: 300, marginRight: 10 }}
                    id="codigo"
                    name="codigo"
                    label="Código"
                    multiline
                    maxRows={4}
                    onChange={(e) => { setCodigo(e.target.value); codigo.value==null?setError(true):setError(false) }}
                    error ={error}
                />
                <TextField
                    style={{ width: 300 }}
                    id="nombre"
                    label="Nombre"
                    name="nombre"
                    multiline
                    maxRows={4}
                    onChange={(e) => { setNombre(e.target.value); }}
                />
            </Box>
            <Form>

                <FormGroup>
                    <Label for="codigo">Código</Label>
                    <Input id="codigo" name="codigo" placeholder="Código del respuesto" type="text" onChange={(e) => { setCodigo(e.target.value); }} />
                </FormGroup>

                <FormGroup>
                    <Label for="nombre">Nombre</Label>
                    <Input id="nombre" name="nombre" placeholder="Nombre del respuesto" type="text" onChange={(e) => { setNombre(e.target.value); }} />
                </FormGroup>

                <FormGroup>
                    <Label for="descripcion">Descripción</Label>
                    <Input id="descripcion" name="descripcion" placeholder="Descripcion del respuesto" type="textarea" onChange={(e) => { setDescripcion(e.target.value); }} />
                </FormGroup>

                <FormGroup>
                    <Label for="marca">Marca</Label>
                    <Input id="marca" name="marca" placeholder="Marca del respuesto" type="text" onChange={(e) => { setMarca(e.target.value); }} />
                </FormGroup>

                <FormGroup>
                    <Label for="stock">Stock</Label>
                    <Input id="stock" name="stock" placeholder="Cantidad del stock" type="number" onChange={(e) => { setStock(e.target.value); }} />
                </FormGroup>

                <FormGroup>
                    <Label for="precio">Precio</Label>
                    <Input id="precio" name="precio" placeholder="Precio del respuesto" type="number" onChange={(e) => { setPrecio(e.target.value); }} />
                </FormGroup>

                <FormGroup>
                    <Label for="image">Url de la imagen</Label>
                    <Input id="image" name="image" placeholder="Url de la imagen" type="text" onChange={(e) => { setImg(e.target.value); }} />
                </FormGroup>

                <Col sm={10}>
                    <FormGroup check>
                        <Input
                            name="radio2"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Original
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="radio2"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Generico
                        </Label>
                    </FormGroup>
                </Col>
                <Button onClick={saveRespuesto}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Add;

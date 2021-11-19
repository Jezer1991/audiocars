import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Button, FormGroup, Label, Input, Form } from 'reactstrap';
import Card from "./cardAuto";

function FormAlta() {
  const [idPelicula, setIdPelicula] = useState("");
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");

  const [peliculasList, setPeliculasList] = useState([]);

  const guardarPelicula = () => {
    Axios.post('http://localhost:3001/api/save', {
      idPelicula: idPelicula,
      nombre: nombre,
      imagen: imagen
    });
    setPeliculasList([...peliculasList, { idPelicula: idPelicula, nombre: nombre, imagen: imagen },]);
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      console.log(response.data);
      setPeliculasList(response.data);
    })
  }, [])


  const borrar = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`);
  }
  const editar = (id) => {
    console.log(id)
    console.log(nombre);
    Axios.put(`http://localhost:3001/api/edit`, {
      idPelicula: id,
      nombre: nombre,
    });
  }

  return (
    <div className="App">
      <div className="container" style={{ width: '800px' }}>
        <Form>
          <FormGroup>
            <Label for="idPelicula">
              Id de la Pelicula
            </Label>
            <Input
              id="idPelicula"
              name="idPelicula"
              placeholder="id de la Pelicula"
              type="text"
              onChange={(e) => {
                setIdPelicula(e.target.value);
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="nombre">
              Nombre de la Pelicula
            </Label>
            <Input
              id="nombre"
              name="nombre"
              placeholder="Nombre de la pelicula"
              type="text"
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="imagen">
              Imagen
            </Label>
            <Input
              id="imagen"
              name="imagen"
              placeholder="Url de la imagen"
              type="text"
              onChange={(e) => {
                setImagen(e.target.value);
              }}
            />
          </FormGroup>

          <Button onClick={guardarPelicula}>
            Submit
          </Button>
        </Form>
        <div style={{ position: 'relative', display: 'flex' }}>

          {peliculasList.map((val) => {
            return (
              <Card
                eventoEditar={() =>editar(val.idpeliculas)}
                borrar={() => borrar(val.idpeliculas)}
                key={val.idpeliculas}
                id={val.idpeliculas}
                titulo={val.nombre}
                setNombre ={setNombre}
                imagen={val.imagen} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FormAlta;
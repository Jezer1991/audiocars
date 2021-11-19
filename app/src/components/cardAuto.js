
import React from "react";
import { Card, CardImg, CardTitle, Button } from 'reactstrap';

function cardAuto(props) {

    const clickMe = (value, id) => {
        props.setNombre(value)
    }

    return (
        <React.Fragment>

            <Card key={props.id} style={{ width: "50%", margin: '10px' }}>
                <div style={{ position: "relative", left: "40%" }}>
                    <Button color="danger" onClick={props.borrar}>
                        Eliminar
                    </Button>
                </div>
                <CardImg
                    alt="Card image cap"
                    src={props.imagen}
                    top
                />
                <CardTitle tag="h5">
                    <input
                        id="input"
                        defaultValue={props.titulo}
                        onChange = {(e)=>{clickMe(e.target.value, props.id)}}
                    />

                    <Button onClick={props.eventoEditar}>Editar</Button>
                </CardTitle>
            </Card>
        </React.Fragment>
    );
}

export default cardAuto;
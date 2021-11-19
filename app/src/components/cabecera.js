import React from "react";
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import Page from "./respuestos/Page";
import Add from './respuestos/add';
import Prueba from './basura/prueba';
const Cabecera = () => {

    return (

        <div style={{ marginBottom: '10px', marginTop: '10px' }}>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Toyota Audio Car's</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/respuestos">Respuestos</Nav.Link>
                            <Nav.Link href="/Prueba">Prueba</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#/respuestos">Respuestos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <BrowserRouter>
                <Routes>
                    <Route path="/Add" element={<Add />} />
                    <Route path="/respuestos" element={<Page />} />
                    <Route path="/Prueba" element={<Prueba/>} />
                </Routes>
            </BrowserRouter>
        </div >

    );
}

export default Cabecera;
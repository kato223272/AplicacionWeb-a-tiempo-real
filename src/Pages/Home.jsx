import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../css/IniciarSesion.css";

function Home() {
    const [roomName, setRoomName] = useState("");

    const handleRoomNameChange = (value) => {
        setRoomName(value);
    };

    return (
        <div className="ContenedorInicioSesion">
            <div className="home-container">
                <Dropdown onSelect={handleRoomNameChange}>
                    <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        style={{ width: "200px", height: "40px", fontSize: "16px" }}
                    >
                        {roomName || "Selecciona una opción"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="cultivo">Cultivo</Dropdown.Item>
                        <Dropdown.Item eventKey="ganaderia">Ganadería</Dropdown.Item>
                        <Dropdown.Item eventKey="semillas">Semillas</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Link
                    to={`/room/${roomName}`}
                    className="enter-room-name-button"
                    disabled={!roomName}
                    style={{ width: "200px", height: "50px", fontSize: "16px" }}
                >
                    Unirse a sala
                </Link>
            </div>
        </div>
    );
}

export default Home;

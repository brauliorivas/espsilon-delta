"use client";

import RedirectButton from "@/components/RedirectButton"

export default function ProjectDescription({ nombre, descripcion, ruta }) {
    return (
        <div className="container">
            <h3 className="nombre">{nombre}</h3>
            <p className="descripcion">{descripcion}</p>
            <RedirectButton width="50%" height="30px" fontSize="14px" courseLink={ruta} action="Construye" />
            <style jsx>{`
                .container {
                  background-color: var(--white);
                  border-radius: 10px;
                  padding: 20px;
                  width: 90%;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 20px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }
                .descripcion {
                  margin-top: 10px;
                  margin-bottom: 10px;
                }
            `}</style>
        </div>
    );
}

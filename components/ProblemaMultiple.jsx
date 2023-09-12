"use client";

import { useEffect, useState } from "react";

import Opcion from "@/components/Opcion";

export default function ProblemaMultiple({
    problema,
    solucion,
    explicacion,
    opciones,
}) {
    const [isMathJaxAvailable, setIsMathJaxAvailable] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [randomOptions, setRandomOptions] = useState(opciones);
    const [isRotated, setRotated] = useState(false);

    useEffect(() => {
        setRandomOptions(opciones.sort(() => Math.random() - 0.5));
        if (typeof window !== "undefined" && "MathJax" in window) {
            setIsMathJaxAvailable(true);
        }
    }, []);

    useEffect(() => {
        window.MathJax.typeset();
    }, [isMathJaxAvailable]);

    useEffect(() => {
        if (selectedOption) {
            const blacks = [
                ...document.getElementsByClassName("option__black"),
            ];
            const filtered = blacks.filter((el) => el.id != selectedOption);
            filtered.map((el) =>
                el.classList.remove("option__circle-fullfilled")
            );
        }
    }, [selectedOption]);

    function rotateSolution() {
        setRotated(!isRotated);
    }

    return (
        <>
            {isMathJaxAvailable && (
                <div className="problem__dialog">
                    <div className="problem__dialog-description">
                        <p>{problema}</p>
                    </div>
                    <div
                        id="problem__dialog-grade"
                        className="problem__dialog-grade"
                    >
                        <div
                            className={`problem__dialog-options rotate-div ${
                                isRotated ? "rotate" : ""
                            }`}
                        >
                            {!isRotated &&
                                randomOptions.map((opcion, idx) => (
                                    <Opcion
                                        key={idx}
                                        contenido={opcion}
                                        identifier={idx}
                                        toggle={setSelectedOption}
                                    />
                                ))}
                            {isRotated && (
                                <div>
                                    <p className="solution__text">{explicacion}</p>
                                </div>
                            )}
                        </div>
                        <div className="problem__dialog-buttons">
                            <button className="submit">Comprobar</button>
                            <button
                                className="solution"
                                onClick={rotateSolution}
                            >
                                Ver solución
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <style jsx>{`
                .problem__dialog {
                    width: 75%;
                    display: flex;
                    flex-direction: row;
                }
                .problem__dialog-description {
                    width: 35%;
                    padding: 10px;
                }
                .problem__dialog-grade {
                    width: 65%;
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                    background-color: var(--grey);
                    border: 1px solid black;
                }
                .dark {
                    color: black !important;
                }
                .problem__dialog-buttons {
                    padding: 5px;
                    display: flex;
                    flex-direction: row;
                }
                .submit {
                    background-color: black;
                    color: white;
                    border: none;
                    padding: 10px;
                    margin-right: 10px;
                }
                .solution {
                    background-color: white;
                    color: black;
                    border: 1px solid black;
                    padding: 10px;
                }
                button:hover {
                    cursor: pointer;
                }
                .problem__dialog-options {
                    transition: transform 3s ease;
                }
                .rotate {
                    transform: rotateY(-180deg);
                }
                .solution__text {
                    transform: scaleX(-1);
                }
            `}</style>
        </>
    );
}

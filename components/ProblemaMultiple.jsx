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

    useEffect(() => {
        if (typeof window !== "undefined" && "MathJax" in window) {
            setIsMathJaxAvailable(true);
        }
    }, []);

    useEffect(() => {
        window.MathJax.typeset();
    }, [isMathJaxAvailable]);

    const randomOptions = opciones.sort(() => Math.random() - 0.5);



    return (
        <>
            {isMathJaxAvailable && (
                <div className="problem__dialog">
                    <div className="problem__dialog-description">
                        <p>{problema}</p>
                    </div>
                    <div id="problem__dialog-grade" className="problem__dialog-grade">
                        <div className="problem__dialog-options">
                            {randomOptions.map((opcion, idx) => (
                                <Opcion key={idx} contenido={opcion} identifier={idx} toggle={setSelectedOption}/>
                            ))}
                        </div>
                        <div className="problem__dialog-buttons">
                            <button>Submit</button>
                            <button>Ver solución</button>
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
            `}</style>
        </>
    );
}

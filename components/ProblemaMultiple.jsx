"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { useEffect, useState } from "react";

import Opcion from "@/components/Opcion";

export default function ProblemaMultiple({
    problema,
    opciones,
    solucion,
    explicacion,
    id,
    completed,
    updateCompletionBar,
    updateCompletedItems,
}) {
    const [isMathJaxAvailable, setIsMathJaxAvailable] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [answer, setAnswer] = useState("");
    const [randomOptions, setRandomOptions] = useState(opciones);
    const [isRotated, setRotated] = useState(false);
    const [style, setStyle] = useState({ display: "none" });
    const [isDisabled, setIsDisabled] = useState(completed);

    const supabase = createClientComponentClient();

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

    useEffect(() => {
        if (isRotated && answer !== solucion) {
            setAnswer(solucion);
        }
    }, [isRotated]);

    useEffect(() => {
        if (answer === solucion && isRotated) {
            handleSubmit();
        }
    }, [answer]);

    async function handleSubmit(event) {
        if (!completed) {
            if (answer !== solucion) {
                alert("Uups, esa no es la respuesta correcta");
            } else {
                const { data } = await supabase.auth.getUser();
                const userId = data.user.id;

                try {
                    const { data, error } = await supabase
                        .from("completed_item")
                        .insert([
                            {
                                completed_multiple: id,
                                user_id: userId,
                            },
                        ])
                        .select();
                    if (error) {
                        throw error;
                    }
                    updateCompletionBar();
                    updateCompletedItems();
                    setIsDisabled(!isDisabled);
                } catch (error) {
                    alert("Error al entregar el ejercicio");
                }
            }
        }
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
                            {isRotated ? (
                                <div>
                                    <p className="solution__text">
                                        {explicacion}
                                    </p>
                                </div>
                            ) : (
                                randomOptions.map((opcion, idx) => (
                                    <Opcion
                                        key={idx}
                                        contenido={opcion}
                                        identifier={idx}
                                        toggle={setSelectedOption}
                                        setAnswer={setAnswer}
                                    />
                                ))
                            )}
                        </div>
                        <div className="problem__dialog-buttons">
                            <button className="submit" onClick={handleSubmit} disabled={isDisabled}>
                                Comprobar
                            </button>
                            <button
                                className="solution"
                                onClick={rotateSolution}
                                onMouseEnter={(e) => {
                                    if (!isRotated) {
                                        setStyle({ display: "block" });
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    setStyle({ display: "none" });
                                }}
                            >
                                {isRotated ? 'Regresar' : 'Ver solución'}
                            </button>
                            {
                                answer !== solucion ? (<div className="solution__alert" style={style}>
                                    <p>
                                        Si ves la solución, no contará en tu racha y
                                        se marcará completado
                                    </p>
                                </div>) : null
                            }
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
                .solution:hover {
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
                .solution__alert {
                    z-index: 1;
                    background-color: var(--grey);
                    max-width: 200px;
                    margin-left: 10px;
                }
                .option__circle-fullfilled {
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                    background-color: black;
                }
            `}</style>
        </>
    );
}

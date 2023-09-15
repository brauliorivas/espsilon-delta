"use client";

import { ThemeContextProvider } from "@/context/ThemeContext";

import { useState, useEffect } from "react";
import TopicCompletionBar from "@/components/TopicCompletionBar";
import Chunk from "@/components/Chunk";
import ProblemaMultiple from "@/components/ProblemaMultiple";
import ProblemaProgramacion from "@/components/ProblemaProgramacion";

export default function Tema({
    nombre,
    chunks,
    completed_chunks,
    problemas_multiple,
    completed_problemas_multiple,
    problemas_programacion,
    completed_problemas_programacion,
    linkCurso,
}) {
    const [completed, setCompleted] = useState(completed_chunks.length + completed_problemas_multiple.length + completed_problemas_programacion.length + 1);
    const [complete, setComplete] = useState((completed_chunks.length + completed_problemas_multiple.length + completed_problemas_programacion.length) / (chunks.length + problemas_multiple.length + problemas_programacion.length) * 100);

    function updateCompletionBar() {
        setComplete(completed / (chunks.length + problemas_multiple.length + problemas_programacion.length) * 100);
    }

    function updateCompletedItems() {
        setCompleted(completed + 1);
    }

    const listaChunks = chunks.map((chunk) => (
        <Chunk
            key={chunk.orden}
            contenido={chunk.contenido}
            animacion_url={chunk.animacion_url} 
            codigo={chunk.codigo}
            lenguaje={chunk.lenguaje}
            id={chunk.id}
            completed={completed_chunks.map((chunk) => chunk.id).includes(chunk.id) ? true : false}
            updateCompletionBar={updateCompletionBar}
            updateCompletedItems={updateCompletedItems}
        />
    ));
    const listaProblemasMultiple = problemas_multiple.map((problema) => (
        <ProblemaMultiple
            key={problema.orden}
            problema={problema.problema}
            opciones={problema.opciones}
            solucion={problema.solucion}
            explicacion={problema.explicacion}
            id={problema.id}
            completed={completed_problemas_multiple.map((problema) => problema.id).includes(problema.id) ? true : false}
            updateCompletionBar={updateCompletionBar}
            updateCompletedItems={updateCompletedItems}
        />
    ));
    const listaProblemasProgramacion = problemas_programacion.map(
        (problema) => (
            <ProblemaProgramacion
                key={problema.orden}
                lenguaje={problema.lenguaje}
                problema={problema.problema}
                explicacion={problema.explicacion}
                solucion_script={problema.solucion_script}
                entradas={problema.entrada}
                salidas={problema.salida}
                id={problema.id}
                completed={completed_problemas_programacion.map((problema) => problema.id).includes(problema.id) ? true : false}
                updateCompletionBar={updateCompletionBar}
                updateCompletedItems={updateCompletedItems}
            />
        )
    );

    const listaContenido = listaChunks
        .concat(listaProblemasMultiple)
        .concat(listaProblemasProgramacion);
    listaContenido.sort((a, b) => a.key - b.key);

    return (
        <ThemeContextProvider>
            <main id="contenido_tema">
                <TopicCompletionBar
                    completed={`${complete}%`}
                    courseLink={linkCurso}
                />
                <h1>{nombre}</h1>
                {listaContenido.slice(0, completed)}
                <style jsx>{`
                    main {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .dark {
                        color: var(--white);
                        background-color: var(--background-dark);
                    }
                `}</style>
            </main>
        </ThemeContextProvider>
    );
}

"use client";

import { ThemeContextProvider } from "@/context/ThemeContext";

import { useState } from "react";
import TopicCompletionBar from "@/components/TopicCompletionBar";
import Chunk from "@/components/Chunk";
import ProblemaMultiple from "@/components/ProblemaMultiple";
import ProblemaProgramacion from "@/components/ProblemaProgramacion";

export default function Tema({
    nombre,
    chunks,
    problemas_multiple,
    problemas_programacion,
    linkCurso,
}) {
    const [complete, setComplete] = useState("50%");

    const listaChunks = chunks.map((chunk) => (
        <Chunk
            key={chunk.orden}
            contenido={chunk.contenido}
            animacion_url={chunk.animacion_url}
        />
    ));
    const listaProblemasMultiple = problemas_multiple.map((problema) => (
        <ProblemaMultiple
            key={problema.orden}
            problema={problema.problema}
            opciones={problema.opciones}
            solucion={problema.solucion}
            explicacion={problema.explicacion}
        />
    ));
    const listaProblemasProgramacion = problemas_programacion.map(
        (problema) => (
            <ProblemaProgramacion
                key={problema.orden}
                problema={problema.problema}
                explicacion={problema.explicacion}
                solucion_script={problema.solucion_script}
                entradas={problema.entrada}
                salidas={problema.salida}
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
                    completed={complete}
                    courseLink={linkCurso}
                />
                <h1>{nombre}</h1>
                {listaContenido}
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

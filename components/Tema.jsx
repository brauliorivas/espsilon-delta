"use client";

import { useState } from "react";
import TopicCompletionBar from "./TopicCompletionBar";

export default function Tema({ params }) {
    const [complete, setComplete] = useState("50%");

    const cursoUrl = "/home/cursos/" + params.curso;

    return (
        <main>
            <TopicCompletionBar completed={complete} courseLink={cursoUrl} />
            <h1>¿Qué significa programar?</h1>
            <p>Lorem ipsum </p>

            <style jsx>{`
                main {
                    width: 100%;
                    background-color: var(--background-dark);
                }
            `}</style>
        </main>
    );
}

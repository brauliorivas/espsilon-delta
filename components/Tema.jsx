"use client";

import { useState } from "react";
import TopicCompletionBar from "@/components/TopicCompletionBar"

export default function Tema({ linkCurso }) {
    const [complete, setComplete] = useState("50%");

    return (
        <main>
            <TopicCompletionBar completed={complete} courseLink={linkCurso} />
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

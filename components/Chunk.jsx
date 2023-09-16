'use client';

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import Image from "next/image";

import CodeSnippet from "@/components/CodeSnippet";

export default function Chunk({ contenido, animacion_url, codigo, lenguaje, id, completed, updateCompletionBar, updateCompletedItems}) {
    const supabase = createClientComponentClient();

    const show = typeof(codigo) == 'string';

    async function handleContinue(event) {
        if (!completed) {
            const { data } = await supabase.auth.getUser();
            const userId = data.user.id;
            try {
                const { data, error } = await supabase.from('completed_item').insert([{
                    completed_chunk: id,
                    user_id: userId,
                },]).select();
                if (error) {
                    throw error;
                }
                updateCompletionBar();
                updateCompletedItems();
            } catch (error) {
                alert('Error al marcar como completado');
            }
        }
    }

    return (
        <div className="container">
            <p>{contenido}</p>
            {
                show ? (
                    <div className="code-container">
                        <CodeSnippet code={codigo} language={lenguaje} showLineNumbers={show}/>
                    </div>
                ) : null
            }
            {animacion_url !== null ? (
                <div className="animation">
                    <Image
                        src={animacion_url}
                        width={0}
                        height={0}
                        style={{ width: "75%", height: "auto" }}
                        alt="animation"
                    />
                </div>
            ) : null}
            <button onClick={handleContinue}>Continuar</button>
            <style jsx>{`
                .container {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 30px;
                    margin-bottom: 30px;
                }
                .animation {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                p {
                    font-size: 1.2rem;
                    margin-top: 10px;
                    margin-bottom: 10px;s
                }
                button {
                    background-color: var(--purple);
                    color: white;
                    border: none;
                    padding: 10px;
                    font-size: 1.2rem;
                    margin-top: 10px;
                }
                button:hover {
                    cursor: pointer;
                }
                .code-container {
                    width: 100%;
                    overflow-x: auto;
                    margin-bottom: 20px;
                }
            `}</style>
        </div>
    );
}

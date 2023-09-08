"use client";

import CourseDescription from "@/components/CourseDescription";
import ProjectDescription from "@/components/ProjectDescription";
import Topic from "@/components/Topic";

export default function Curso({ data, proyecto }) {
    return (
        <main>
            <section className="left__pane">
                <div>
                    <CourseDescription
                        imgSrc={data.icon}
                        curso={data.curso}
                        description={data.description}
                        classes={data.classes}
                    />
                    <h2 className="proyecto">Proyecto de Curso</h2>
                    <ProjectDescription
                        nombre={proyecto.title}
                        descripcion={proyecto.description}
                        ruta={proyecto.route}
                    />
                </div>
            </section>
            <section className="right__pane">
                <div className="progreso">
                    {data.temas.map((tema, idx) => (
                        <Topic
                            key={idx}
                            tema={tema}
                            completed={false}
                            marginLeft={Math.sin(idx)}
                            link={data.temas_links[idx]}
                        />
                    ))}
                </div>
            </section>
            <style jsx>{`
                main {
                    width: 100%;
                    background-color: var(--background-dark);
                    padding-top: 30px;
                    display: flex;
                    flex-direction: row;
                }
                .left__pane {
                    position: sticky;
                    height: calc(100vh - 122px);
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .right__pane {
                    width: 50%;
                }
                .progreso {
                    width: 50%;
                    margin-left: auto;
                    margin-right: auto;
                    padding-right: 50px;
                }
                .proyecto {
                    margin-top: 20px;
                    text-align: center;
                    color: var(--white);
                }
            `}</style>
        </main>
    );
}

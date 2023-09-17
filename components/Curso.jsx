"use client";

import CourseDescription from "@/components/CourseDescription";
import ProjectDescription from "@/components/ProjectDescription";
import Topic from "@/components/Topic";

export default function Curso({ curso, temas, proyecto }) {
    return (
        <main>
            <section className="left__pane">
                <div>
                    <CourseDescription
                        imgSrc={curso.icon_url}
                        curso={curso.nombre}
                        description={curso.descripcion}
                        classes={temas.length}
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
                    {temas.map((tema, idx) => (
                        <Topic
                            key={tema.id}
                            tema={tema.nombre}
                            completed={false}
                            marginLeft={Math.sin(idx)}
                            link={`/home/cursos/${curso.acronimo}/${tema.id}`}
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
                    min-height: 100%;
                    flex-direction: row;
                    min-height: 100vh;
                }
                .left__pane {
                    position: sticky;
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

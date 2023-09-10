"use client";

import Image from "next/image";
import CourseItem from "@/components/CourseItem";

export default function Cursos({ cursos }) {
    return (
        <main>
            <div className="searchbar">
                <div className="searchbar__icon">
                    <Image
                        src="/search.png"
                        width={40}
                        height={40}
                        alt="search"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Busca cursos, temas, palabras clave"
                ></input>
            </div>
            <div className="container">
                {cursos.map((curso) => (
                    <CourseItem
                        key={curso.id}
                        imgSrc={curso.image_url}
                        width="300px"
                        height="300px"
                        title={curso.nombre}
                        completed="50%"
                        courseLink={`/home/cursos/${curso.acronimo}`}
                    />
                ))}
            </div>
            <style jsx>{`
                main {
                    width: 100%;
                    background-color: var(--background-dark);
                    padding-top: 25px;
                    padding-left: 50px;
                    padding-right: 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .searchbar {
                    width: 75%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
                .searchbar__icon:hover {
                    cursor: pointer;
                }
                input {
                    width: 80%;
                    height: 50px;
                    border-radius: 5px;
                    border: none;
                    background-color: var(--grey);
                    margin-left: 10px;
                    padding-left: 25px;
                    font-size: 18px;
                    font-family: var(--solway);
                }
                .container {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    align-items: center;
                    padding-top: 25px;
                    padding-bottom: 25px;
                }
            `}</style>
        </main>
    );
}

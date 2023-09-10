"use client";
import Image from "next/image";
import CompletionBar from "@/components/CompletionBar";

export default function CourseDescription({
    imgSrc,
    curso,
    description,
    classes,
}) {
    return (
        <div className="container">
            <Image src={imgSrc} width={150} height={150} alt={curso} />
            <h1 className="course__title">{curso}</h1>
            <CompletionBar completed="50%" />
            <p className="description">{description}</p>
            <div className="todos">
                <Image src="/todo-line.png" width={25} height={25} alt="todo" />
                <p className="todos__text">{classes} {classes === 1 ? 'Clase' : 'Clases'}</p>
            </div>
            <style jsx>{`
                .container {
                    background-color: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-width: 200px;
                    padding: 20px;
                    max-width: 350px;
                }
                .course__title {
                    margin-top: 10px;
                    margin-bottom: 10px;
                    text-align: center;
                }
                .description {
                    margin-top: 10px;
                    margin-bottom: 10px;
                    font-size: 20px;
                    text-align: center;
                }
                .todos {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-top: 5px;
                    margin-bottom: 5px;
                }
                .todos__text {
                    margin-left: 5px;
                }
            `}</style>
        </div>
    );
}

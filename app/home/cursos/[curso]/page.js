import Curso from "@/components/Curso";

export async function generateStaticParams() {
    const cursos = ["fp", "poo", "cuv"];

    return cursos.map((curso) => ({
        curso: curso,
    }));
}

export default function Page({ params }) {
    const data = {
        curso: 'Fundamentos de Programación',
        icon: "/java.png",
        completed: 50,
        description:
            "Aprende los conceptos fundamentales de la programación orientada a objetos en Java",
        classes: 10,
        proyecto: {
            title: "Minecraft",
            description: "Crea tu propio Minecraft",
            route: "/home/proyectos/minecraft",
        },
        temas: [
            "Introducción a la programación orientada a objetos",
            "Clases y objetos",
            "Herencia y polimorfismo",
            "Excepciones",
            "Entrada y salida de datos",
            "Colecciones",
            "Expresiones lambda",
            "Programación funcional",
            "Programación concurrente",
            "Programación de interfaces gráficas",
        ],
        temas_links: [
            "/home/cursos/fp/tema1",
            "/home/cursos/fp/tema2",
            "/home/cursos/fp/tema3",
            "/home/cursos/fp/tema4",
            "/home/cursos/fp/tema5",
            "/home/cursos/fp/tema6",
            "/home/cursos/fp/tema7",
            "/home/cursos/fp/tema8",
            "/home/cursos/fp/tema9",
            "/home/cursos/fp/tema10",
        ]
    };

    return (
        <>
            <Curso data={data} proyecto={data.proyecto}/>
        </>
    );
}

import Tema from "@/components/Tema";

export async function generateStaticParams() {
    const cursos = ["fp", "poo", "cuv"];
    const temas = ["tema1", "tema2", "tema3", "tema4", "tema5", "tema6", "tema7", "tema8", "tema9", "tema10"];

    const allRoutes = [];
    for (const curso of cursos) {
        for (const tema of temas) {
            allRoutes.push({ curso: curso, tema: tema });
        }
    }
    
    return allRoutes;
}

export default function Page({ params }) {
    return (
        <>
            <Tema params={params} />
        </>
    )
}
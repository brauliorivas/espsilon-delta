export async function generateStaticParams() {
    const proyectos = ["data_vis", "minecraft"];

    return proyectos.map((proyecto) => ({
        proyecto: proyecto,
    }));
}

export default function Page({ params }) {
    return (
        <div>
            {params.proyecto}
        </div>
    );
}
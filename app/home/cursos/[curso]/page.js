import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Curso from "@/components/Curso";

export default async function Page(req) {
    const supabase = createServerComponentClient({ cookies });
    
    const acronimo = req.params.curso;

    let data = await supabase.from("curso").select("*").eq('acronimo', acronimo);
    const curso = data.data[0];
    data = await supabase.from("tema").select("*").eq('curso_id', curso.id); 
    const temas = data.data;

    const data1 = {
        proyecto: {
            title: "Minecraft",
            description: "Crea tu propio Minecraft",
            route: "/home/proyectos/minecraft",
        },
    };

    return (
        <>
            <Curso curso={curso} temas={temas} proyecto={data1.proyecto}/>
        </>
    );
}

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Tema from "@/components/Tema";

export default async function Page(req) {
    const tema_id = req.params.tema;
    const curso_acron = req.params.curso;

    const supabase = createServerComponentClient({ cookies });

    let nombreTema = await supabase.from('tema').select('nombre').eq('id', tema_id);
    nombreTema = nombreTema.data[0].nombre;
    let chunks = await supabase.from('chunk').select('*').eq('tema_id', tema_id);
    chunks = chunks.data;
    let problemas_multiple = await supabase.from('problema_multiple').select('*').eq('tema_id', tema_id);
    problemas_multiple = problemas_multiple.data;
    let problemas_programacion = await supabase.from('problema_programacion').select('*').eq('tema_id', tema_id);
    problemas_programacion = problemas_programacion.data;


    return (
        <>
            <Tema nombre={nombreTema} chunks={chunks} problemas_multiple={problemas_multiple} problemas_programacion={problemas_programacion} linkCurso={`/home/cursos/${curso_acron}`} />
        </>
    )
}
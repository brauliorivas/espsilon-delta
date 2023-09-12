import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Tema from "@/components/Tema";

export default async function Page(req) {
    const tema_id = req.params.tema;
    const curso_acron = req.params.curso;

    const supabase = createServerComponentClient({ cookies });

    const user = await supabase.auth.getUser();
    const id = user.data.user.id;

    let nombreTema = await supabase.from('tema').select('nombre').eq('id', tema_id);
    nombreTema = nombreTema.data[0].nombre;
    let chunks = await supabase.from('chunk').select('*').eq('tema_id', tema_id);
    chunks = chunks.data;
    let problemas_multiple = await supabase.from('problema_multiple').select('*').eq('tema_id', tema_id);
    problemas_multiple = problemas_multiple.data;
    let problemas_programacion = await supabase.from('problema_programacion').select('*').eq('tema_id', tema_id);
    problemas_programacion = problemas_programacion.data;

    let completed_items = await supabase.from('completed_item').select('*').eq('user_id', id);
    completed_items = completed_items.data;
    
    const completed_chunks_ids = completed_items.map((item) => item.completed_chunk);
    const completed_chunks = chunks.filter((chunk) => completed_chunks_ids.includes(chunk.id));
    const completed_problemas_multiple_ids = completed_items.map((item) => item.completed_multiple);
    const completed_problemas_multiple = problemas_multiple.filter((problema) => completed_problemas_multiple_ids.includes(problema.id));
    const completed_problemas_programacion_ids = completed_items.map((item) => item.completed_programming);
    const completed_problemas_programacion = problemas_programacion.filter((problema) => completed_problemas_programacion_ids.includes(problema.id));

    return (
        <>
            <Tema nombre={nombreTema} chunks={chunks} completed_chunks={completed_chunks} problemas_multiple={problemas_multiple} completed_problemas_multiple={completed_problemas_multiple} problemas_programacion={problemas_programacion} completed_problemas_programacion={completed_problemas_programacion} linkCurso={`/home/cursos/${curso_acron}`} />
        </>
    )
}
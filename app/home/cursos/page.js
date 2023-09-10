import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Cursos from "@/components/Cursos";

export default async function Page() {
    const supabase = createServerComponentClient({ cookies });

    const { data } = await supabase.from("curso").select("*"); 

    return (
        <Cursos cursos={data}/>
    )
}
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Home from "@/components/Home";

export default async function Page() {
    const supabase = createServerComponentClient({ cookies });

    const { data } = await supabase.from("curso").select("*");  

    return (
        <Home cursos={data}/>
    )
}
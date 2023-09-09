import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";

import Landing from "@/components/Landing";

export default async function Home() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session?.user) {
        redirect("/home");
    }

    return <Landing />;
}

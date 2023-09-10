import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";

import SignIn from "@/components/SignIn";

export default async function SignInPage() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session?.user) {
        redirect("/home");
    }

    return <SignIn />;
}

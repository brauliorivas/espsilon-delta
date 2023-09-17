import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Script from "next/script";

import Header from "@/components/Header";

export default async function HomeLayout({ children }) {
    const supabase = createServerComponentClient({ cookies });

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    return (
        <>
            <Header />
            {children}
            <Script src="https://polyfill.io/v3/polyfill.min.js?features=es6" />
            <Script
                id="MathJax-script"
                strategy="beforeInteractive"
                src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
            />
        </>
    );
}

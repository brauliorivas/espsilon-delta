"use client";

import Image from "next/image";

export default function Cursos() {
    return (
        <main>
            <div className="searchbar">
                <input type="text" placeholder="Busca cursos, temas, palabras clave">
                  <Image src="/search.png" width={40} height={40} alt="search" />      
                </input>
            </div>
            <div className="container"></div>
            <style jsx>{``}</style>
        </main>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <section>
            <header>
                <div>
                    <Link href="/home">
                        <div className="logo">
                            <h1 className="learn">Learn</h1>
                            <h1 className="epsilon">ε-δ</h1>
                        </div>
                    </Link>
                </div>

                <nav>
                    <Link href="/home">
                        <div className="nav__button button">
                            <Image
                                src="/outline-home.png"
                                width={40}
                                height={40}
                                alt="Home icon"
                            />
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link href="/home/cursos">
                        <div className="nav__button button">
                            <Image
                                src="/googlesheets.png"
                                width={40}
                                height={40}
                                alt="Google Sheets icon"
                            />
                            <p>Cursos</p>
                        </div>
                    </Link>
                </nav>

                <div className="racha">
                    <Image
                        src="/lightning.png"
                        width={40}
                        height={40}
                        alt="Lightning icon"
                    />
                    <p>1 día</p>
                </div>

                <div className="profile">
                    <Link href="/profile">
                        <div className="button">
                            <Image
                                src="/profile-fill.png"
                                width={40}
                                height={40}
                                alt="Profile icon"
                            />
                            <p>Perfil</p>
                        </div>
                    </Link>
                </div>
            </header>

            <hr />

            <style jsx>{`
                section {
                    width: 100%;
                    background-color: var(--background-dark);
                }

                header {
                    height: 90px;
                    color: var(--text-dark);
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                nav {
                    display: flex;
                    flex-direction: row;
                }

                .logo {
                    margin-left: 20px;
                    margin-right: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: var(--text-dark);
                }

                .learn {
                    font-size: 20px;
                }

                .epsilon {
                    font-size: 32px;
                }

                .button {
                    display: flex;
                    margin-left: 20px;
                    margin-right: 20px;
                    flex-direction: row;
                    align-items: center;
                    color: var(--text-dark);
                    font-weight: bold;
                }

                .button p {
                    margin-left: 10px;
                }

                .racha {
                    margin-left: auto;
                }

                .profile {
                    margin-right: 30px;
                }
            `}</style>
        </section>
    );
}

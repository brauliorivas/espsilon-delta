"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Login() {
    return (
        <main>
            <header>
                <h1 className="title_learn">Learn</h1>
                <h1 className="title_sign">ε-δ</h1>
                <h2 className="title_slogan">
                    Aprendizaje efectivo para politécnicos
                </h2>
            </header>

            <section>
                <h3>Iniciar Sesión</h3>

                <form>
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" />

                    <div className="auth_buttton">
                        <button className="submit" type="submit">
                            Iniciar Sesión
                        </button>
                        <div className="auth_login">
                            <p>¿No tienes una cuenta?</p>
                            <Link href="/" className="login-link">
                                <p className="login">Registrate</p>
                            </Link>
                        </div>
                    </div>
                </form>
            </section>

            <hr />

            <section className="signup_alternative">
                <p>O también</p>

                <button className="signup_alternative-button">
                    <Image
                        src="/google.png"
                        width={40}
                        height={40}
                        alt="Google logo"
                    />
                    <p>Iniciar sesión con Google</p>
                </button>
                <button className="signup_alternative-button">
                    <Image
                        src="/github.png"
                        width={40}
                        height={40}
                        alt="Github logo"
                    />
                    <p>Iniciar sesión con Github</p>
                </button>
            </section>

            <style jsx>{`
                main {
                    background-color: var(--background-dark);
                    color: var(--text-dark);
                    font-weight: 300;
                }

                header {
                    padding-top: 25px;
                    width: 100%;
                    text-align: center;
                }

                .title_learn {
                    font-size: 36px;
                }

                .title_sign {
                    font-size: 96px;
                }

                .title_slogan {
                    font-size: 36px;
                }

                section {
                    width: 100%;
                    margin-top: 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                h3 {
                    font-size: 32px;
                }

                form {
                    width: 75%;
                    margin-top: 25px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                label {
                    font-size: 20px;
                }

                input {
                    width: 500px;
                    height: 40px;
                    margin-top: 8px;
                    margin-bottom: 20px;
                    padding-left: 25px;
                    font-size: 20px;
                    font-family: var(--font-solway);
                }

                .submit {
                    width: 150px;
                    height: 40px;
                    background-color: var(--purple);
                    color: var(--text-dark);
                    font-size: 20px;
                    border: none;
                    border-radius: 5px;
                }

                .submit:hover {
                    cursor: pointer;
                }

                .auth_buttton {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .auth_login {
                    margin-top: 15px;
                    display: flex;
                    flex-direction: row;
                }

                .auth_login p {
                    margin-right: 5px;
                }

                .login {
                    color: var(--text-dark);
                    font-weight: 600;
                    text-decoration: none;
                }

                hr {
                    margin-top: 30px;
                }

                .signup_alternative {
                    margin-top: 20px;
                }

                .signup_alternative-button {
                    width: 300px;
                    height: 50px;
                    display: flex;
                    background-color: var(--purple);
                    flex-direction: row;
                    align-items: center;
                    font-family: var(--font-solway);
                    font-size: 20px;
                    color: var(--text-dark);
                    border: none;
                    padding-left: 10px;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    border-radius: 5px;
                }

                .signup_alternative-button:hover {
                    cursor: pointer;
                }

                .signup_alternative-button p {
                    margin-left: 10px;
                }
            `}</style>
        </main>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function Topic({ tema, completed, marginLeft, link }) {
    return (
        <div className="container">
            <Link href={link}>
                <div className="icon">
                    <Image
                        src={completed ? "/step_done.png" : "/step.png"}
                        width={40}
                        height={40}
                        alt="step"
                    />
                </div>
            </Link>
            <p className="tema">{tema}</p>
            <style jsx>{`
                .container {
                    margin-bottom: 25px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-left: ${marginLeft * 20}%;
                }
                .icon:hover {
                    cursor: pointer;
                }
                .tema {
                    font-size: 12px;
                    color: var(--white);
                }
            `}</style>
        </div>
    );
}

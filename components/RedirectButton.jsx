'use client';

import Link from "next/link";

export default function RedirectButton({ width, height, fontSize, courseLink, action}) {
    return (
        <div className="button">
            <Link href={courseLink}>
                <p>{action}</p>
            </Link>

            <style jsx>{`
                .button {
                    width: ${width};
                    height: ${height};
                    font-size: ${fontSize};
                    background-color: var(--purple);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .button p {
                    color: var(--white);
                    text-align: center;
                }
            `}</style>
        </div>
    );
}

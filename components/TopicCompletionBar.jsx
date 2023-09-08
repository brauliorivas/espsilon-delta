"use client";

import Link from "next/link";
import Image from "next/image";
import CompletionBar from "./CompletionBar";

export default function TopicCompletionBar({ completed, courseLink}) {
    return (
        <div className="topic-completion-bar">
            <Link href={courseLink}>
                <div className="close">
                    <Image src="/close_white.png" width={50} height={50} alt="close"/>
                </div>
            </Link>
            <CompletionBar completed={completed} />
            <div className="moon">
                <Image src="/moon_white.png" width={50} height={50} alt="moon"/>
            </div>
            <style jsx>{`
                .topic-completion-bar {
                    width: 100%;
                    height: 60px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    background-color: var(--background-dark);
                    padding-left: 20px;
                    padding-right: 20px;
                }
            `}</style>
        </div>
    );
}

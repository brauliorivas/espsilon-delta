"use client";

import Link from "next/link";
import Image from "next/image";
import CompletionBar from "@/components/CompletionBar";

import ThemeContext from "@/context/ThemeContext";

import { useState } from "react";

export default function TopicCompletionBar({ completed, courseLink }) {
    const [darkIcons, setDarkIcons] = useState(false);

    return (
        <ThemeContext.Consumer>
            {({ toggleThemeHandler }) => (
                <div className="topic-completion-bar">
                    <Link href={courseLink}>
                        <div className="close">
                            <Image
                                src={
                                    darkIcons
                                        ? "/close_white.png"
                                        : "/close_black.png"
                                }
                                width={50}
                                height={50}
                                alt="close"
                            />
                        </div>
                    </Link>
                    <CompletionBar completed={completed} />
                    <div className="moon" onClick={() => {
                        toggleThemeHandler();
                        setDarkIcons(!darkIcons);
                    }}>
                            <Image
                                src={
                                    darkIcons
                                    ? "/moon_white.png"
                                    : "/moon_black.png"
                                }
                                width={50}
                                height={50}
                                alt="moon"
                            />
                        </div>
                    <style jsx>{`
                        .topic-completion-bar {
                            width: 100%;
                            height: 60px;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-between;
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                        .moon:hover {
                            cursor: pointer;
                        }
                    `}</style>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}

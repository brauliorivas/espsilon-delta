"use client";

import CourseItem from "@/components/CourseItem";

export default function Page() {
    return (
        <main>
            <h2>Continua aprendiendo</h2>
            <div className="container">
                <CourseItem
                    imgSrc="/fp_course.jpg"
                    width="300px"
                    height="300px"
                    title="Fundamentos de programación"
                    completed="50%"
                    courseLink="/courses"
                />
            </div>
            <h2>Recomendaciones</h2>
            <div className="container">
                <CourseItem
                    imgSrc="/fp_course.jpg"
                    width="300px"
                    height="300px"
                    title="Fundamentos de programación"
                    completed="50%"
                    courseLink="/courses"
                />
            </div>
            <style jsx>{`
                main {
                    width: 100%;
                    background-color: var(--background-dark);
                    padding-top: 25px;
                    padding-left: 50px;
                    padding-right: 50px;
                }

                .container {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    align-items: center;
                    padding-top: 25px;
                    padding-bottom: 25px;
                    padding-left: 50px;
                }

                h2 {
                    font-size: 36px;
                    color: var(--text-dark);
                }
            `}</style>
        </main>
    );
}

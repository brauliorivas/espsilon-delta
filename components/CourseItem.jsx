import Image from "next/image";
import Link from "next/link";

export default function CourseItem({
    imgSrc,
    width,
    height,
    title,
    completed,
    courseLink,
}) {
    return (
        <div className="container" style={{ width, height }}>
            <div className="image-wrapper">
                <Image
                    src={imgSrc}
                    width={100}
                    height={100}
                    alt={title}
                    layout="responsive"
                />
            </div>
            <h3 className="title">{title}</h3>
            <div className="progress">
                <div className="completion-bar">
                    <div
                        className="completion-progress"
                        style={{ width: completed }}
                    ></div>
                </div>
                <p className="completion-text">{completed}</p>
            </div>
            <div className="button">
                <Link href={courseLink}>
                    <p>Seguir aprendiendo</p>
                </Link>
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background-color: var(--white);
                    margin-left: 20px;
                    margin-right: 20px;
                    margin-top: 5px;
                    margin-bottom: 5px;
                }

                .image-wrapper {
                    width: 100%;
                    height: 50%;
                    margin-bottom: 25px;
                }

                .title {
                    font-size: 16px;
                    margin-bottom: 10px;
                }

                .progress {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 15px;
                }

                .completion-bar {
                    width: 75%;
                    background-color: var(--grey);
                    height: 10px;
                }

                .completion-progress {
                    background-color: var(--green);
                    height: 100%;
                }

                .completion-text {
                    margin-top: 5px;
                }

                .button {
                    width: 150px;
                    height: 30px;
                    font-size: 14px;
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

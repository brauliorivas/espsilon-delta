import Image from "next/image";

export default function Chunk({ contenido, animacion_url }) {
    return (
        <div className="container">
            <p>{contenido}</p>
            {animacion_url !== null ? (
                <div className="animation">
                    <Image
                        src={animacion_url}
                        width={0}
                        height={0}
                        style={{ width: "75%", height: "auto" }}
                        alt="animation"
                    />
                </div>
            ) : null}
            <style jsx>{`
                .container {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 30px;
                    margin-bottom: 30px;
                }
                .animation {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                p {
                    font-size: 1.2rem;
                    margin-top: 10px;
                    margin-bottom: 10px;s
                }
            `}</style>
        </div>
    );
}

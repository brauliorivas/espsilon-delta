"use client";

export default function Opcion({ identifier, contenido, toggle, setAnswer }) {
    function handleClick() {
        const circle = document.getElementById(`option__circle-fullfilled-${identifier}`);
        circle.classList.toggle('option__circle-fullfilled');
        toggle(`option__circle-fullfilled-${identifier}`);
        setAnswer(contenido);
    }

    return (
        <div className="option">
            <div className="option__circle" onClick={handleClick}>
                <div className="option__black" id={`option__circle-fullfilled-${identifier}`}></div>
            </div>  
            <p>{contenido}</p>
            <style jsx>{`
                .option {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin: 7px;
                }
                .option__circle {
                    width: 20px;
                    height: 20px;
                    border-radius: 100%;
                    border: 1px solid black;
                    margin-right: 10px;
                    padding: 2.5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .option__circle:hover {
                    cursor: pointer;
                }
                .option__circle-fullfilled {
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                    background-color: black;
                }
            `}</style>
        </div>
    );
}

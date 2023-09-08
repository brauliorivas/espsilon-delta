export default function CompletionBar({ completed }) {
    return (
        <div className="completion-bar">
            <div
                className="completion-progress"
                style={{ width: completed }}
            ></div>
            <style jsx>{`
                .completion-bar {
                    width: 75%;
                    background-color: var(--grey);
                    height: 10px;
                }

                .completion-progress {
                    background-color: var(--green);
                    height: 100%;
                }
            `}</style>
        </div>
    );
}

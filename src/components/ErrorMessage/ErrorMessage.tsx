import "./style.scss";
export default function ErrorMessage({
    errorMessage,
}: {
    errorMessage: string;
}) {
    return (
        <div className="error_message_container">
            {errorMessage && (
                <p className="error_message_paragraph">{errorMessage}</p>
            )}
        </div>
    );
}

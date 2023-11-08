import { MouseEventHandler } from "react";
import "./style.scss";

export default function ConnectingButton({
    isCreatingRoomButton,
    buttonText,
    onClickHandler,
}: {
    isCreatingRoomButton: boolean;
    buttonText: string;
    onClickHandler: MouseEventHandler<HTMLButtonElement>;
}) {
    const buttonClass = isCreatingRoomButton
        ? "create_room_button"
        : "join_room_button";
    return (
        <button className={buttonClass} onClick={onClickHandler}>
            {buttonText}
        </button>
    );
}

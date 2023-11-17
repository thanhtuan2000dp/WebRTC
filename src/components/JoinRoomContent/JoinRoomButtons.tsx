import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
const Button = ({
    buttonText,
    cancelButton,
    onClickHandler,
}: {
    buttonText: string;
    cancelButton: any;
    onClickHandler: MouseEventHandler<HTMLButtonElement>;
}) => {
    const buttonClass = cancelButton
        ? "join_room_cancel_button"
        : "join_room_success_button";
    return (
        <button className={buttonClass} onClick={onClickHandler}>
            {buttonText}
        </button>
    );
};
export default function JoinRoomButtons({
    isHostRoom,
    handleJoinRoom,
}: {
    isHostRoom: boolean;
    handleJoinRoom: MouseEventHandler<HTMLButtonElement>;
}) {
    const router = useRouter();
    const backToIntroductionPage = () => {
        router.push("introduction");
    };

    const SuccessButtonText = isHostRoom ? "Host" : "Join";
    return (
        <div className="join_room_buttons_container">
            <Button
                buttonText={SuccessButtonText}
                cancelButton={false}
                onClickHandler={handleJoinRoom}
            />
            <Button
                buttonText="Cancel"
                cancelButton={true}
                onClickHandler={backToIntroductionPage}
            />
        </div>
    );
}

import "./style.scss";

import { useState } from "react";
import JoinRoomInputs from "./JoinRoomInputs";
import AudioCheckbox from "./AudioCheckbox";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import JoinRoomButtons from "./JoinRoomButtons";
import { getRoomExists } from "@/server-actions/api";
import { useRouter } from "next/navigation";

export default function JoinRoomContent(props: any) {
    const router = useRouter();

    const { isHostRoom } = props;
    const [roomId, setRoomId] = useState("");
    const [userName, setUserName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleJoinRoom = () => {
        if (isHostRoom) {
            createRoom();
        } else {
            joinRoom();
        }
    };

    const joinRoom = async () => {
        const response = await getRoomExists(roomId);
        const { existRoom, fullUsers } = response;
        if (!existRoom) {
            setErrorMessage("Meeting not found. Please check your meeting ID");
            return;
        }

        if (fullUsers) {
            setErrorMessage("Meeting is full. Please try again later.");
        } else {
            //Join a room
            router.push("room");
        }
    };

    const createRoom = () => {
        router.push("room");
    };

    return (
        <>
            <JoinRoomInputs
                roomId={roomId}
                setRoomId={setRoomId}
                userName={userName}
                setUserName={setUserName}
                isHostRoom={isHostRoom}
            />
            <AudioCheckbox />
            <ErrorMessage errorMessage={errorMessage} />
            <JoinRoomButtons
                handleJoinRoom={handleJoinRoom}
                isHostRoom={isHostRoom}
            />
        </>
    );
}

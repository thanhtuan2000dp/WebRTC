import { useState } from "react";
import JoinRoomInputs from "./JoinRoomInputs";

export default function JoinRoomContent(props: any) {
    const { isHostRoom } = props;
    const [roomId, setRoomId] = useState("");
    const [userName, setUserName] = useState("");

    return (
        <>
            <JoinRoomInputs
                roomId={roomId}
                setRoomId={setRoomId}
                userName={userName}
                setUserName={setUserName}
                isHostRoom={isHostRoom}
            />
        </>
    );
}

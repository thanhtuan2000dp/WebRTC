function Input(props: any) {
    const { roomId, placeholder, changeHandler } = props;
    return (
        <input
            className="join_room_input"
            value={roomId}
            placeholder={placeholder}
            onChange={changeHandler}
        />
    );
}

export default function JoinRoomInputs(props: any) {
    const { roomId, setRoomId, userName, setUserName, isHostRoom } = props;
    const handleRoomIDChange = (event: any) => {
        setRoomId(event.target.value);
    };

    const handleUserNameChange = (event: any) => {
        setUserName(event.target.value);
    };

    return (
        <div className="join_room_inputs_container">
            {!isHostRoom && (
                <Input
                    value={roomId}
                    placeholder="Enter Room ID"
                    changeHandler={handleRoomIDChange}
                />
            )}
            <Input
                value={userName}
                placeholder="Enter Name"
                onChange={handleUserNameChange}
            />
        </div>
    );
}

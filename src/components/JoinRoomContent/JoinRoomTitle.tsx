export default function JoinRoomTitle({ isHostRoom }: { isHostRoom: boolean }) {
    const titleText = isHostRoom ? "Host meeting" : "Join meeting";
    return <p className="join_room_title">{titleText}</p>;
}

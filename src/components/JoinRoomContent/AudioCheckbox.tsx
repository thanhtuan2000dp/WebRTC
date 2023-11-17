import { setConnectOnlyWithAudio } from "@/redux/features/room/roomSlice";
import { AppDispatch, useAppDispatch, useAppSelector } from "@/redux/store";
import CheckImg from "@/resources/images/check.png";
export default function AudioCheckbox() {
    const connectOnlyWithAudio = useAppSelector(
        (state) => state.room.connectOnlyWithAudio
    );
    const dispatch = useAppDispatch();
    const handleConnectOnlyWithAudioChange = () => {
        dispatch(setConnectOnlyWithAudio(!connectOnlyWithAudio));
    };
    return (
        <div className="checkbox_container">
            <a
                className="checkbox_connection"
                onClick={handleConnectOnlyWithAudioChange}
            >
                {connectOnlyWithAudio && (
                    <img className="checkbox_image" src={CheckImg.src} alt="" />
                )}{" "}
            </a>
            <p className="checkbox_container_paragraph">Only Audio</p>
        </div>
    );
}

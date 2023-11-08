"use client";

import "./style.scss";
import { setIsHostRoom } from "@/redux/features/room/roomSlice";
import { AppDispatch } from "@/redux/store";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import JoinRoomContent from "@/components/JoinRoomContent/JoinRoomContent";
import JoinRoomTitle from "@/components/JoinRoomContent/JoinRoomTitle";

export default function JoinRoomPage() {
    const searchParams = useSearchParams();
    const isHostRoom = Boolean(searchParams?.get("host"));
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (isHostRoom) {
            dispatch(setIsHostRoom(true));
        } else {
            dispatch(setIsHostRoom(false));
        }
    }, []);

    return (
        <div className="join_room_page_container">
            <div className="join_room_page_panel">
                <JoinRoomTitle isHostRoom={isHostRoom} />
                <JoinRoomContent isHostRoom={isHostRoom} />
            </div>
        </div>
    );
}

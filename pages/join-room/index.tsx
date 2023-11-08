"use client";

import { setIsHostRoom } from "@/redux/features/room/roomSlice";
import store, { AppDispatch, useAppSelector } from "@/redux/store";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function JoinRoomPage() {
    const searchParams = useSearchParams();
    const isHostRoom = searchParams?.get("host");
    // const dispatch = useDispatch<AppDispatch>();
    const test = useAppSelector((state) => state.room.isHostRoom);
    console.log(test);

    useEffect(() => {
        if (isHostRoom) {
            // dispatch(setIsHostRoom(true));
        } else {
            console.log("Guest");
        }
    }, []);

    return (
        <div className="join_room_page_container">
            <div className="join_room_page_panel">abc</div>
        </div>
    );
}

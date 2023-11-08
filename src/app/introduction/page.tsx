"use client";

import ConnectingButton from "@/components/ConnectingButton/ConnectingButton";
import logo from "@/resources/images/logo.png";
import "./style.scss";
import { useRouter } from "next/navigation";

export default function IntroductionPage() {
    const router = useRouter();

    const joinRoomPageAsGuest = () => {
        router.push("join-room");
    };
    const joinRoomPageAsHost = () => {
        router.push("join-room?host=true");
    };
    return (
        <div className="introduction-page">
            <div className="introduction-page__panel">
                <img
                    className="introduction-page__image"
                    src={logo.src}
                    alt=""
                />
                <div className="introduction-page__list-btns">
                    <ConnectingButton
                        isCreatingRoomButton={false}
                        buttonText="Join a meeting"
                        onClickHandler={joinRoomPageAsGuest}
                    ></ConnectingButton>
                    <ConnectingButton
                        isCreatingRoomButton={true}
                        buttonText="Host a meeting"
                        onClickHandler={joinRoomPageAsHost}
                    ></ConnectingButton>
                </div>
            </div>
        </div>
    );
}

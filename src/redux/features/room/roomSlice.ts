import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isHostRoom: false,
    connectOnlyWithAudio: false,
};

const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        setIsHostRoom(state, action: PayloadAction<boolean>) {
            state.isHostRoom = action.payload;
        },

        setConnectOnlyWithAudio(state, action: PayloadAction<boolean>) {
            state.connectOnlyWithAudio = action.payload;
        },
    },
});

export const { setIsHostRoom, setConnectOnlyWithAudio } = roomSlice.actions;

export default roomSlice.reducer;

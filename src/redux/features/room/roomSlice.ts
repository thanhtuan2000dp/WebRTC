import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isHostRoom: false,
};

const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        setIsHostRoom(state, action: PayloadAction<boolean>) {
            console.log(state, action);
            state.isHostRoom = action.payload;
        },
    },
});

export const { setIsHostRoom } = roomSlice.actions;

export default roomSlice.reducer;

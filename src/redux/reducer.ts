const initState = {
    identity: "",
    isHostRoom: false,
};

const reducer = (state = initState, action: any) => {
    switch (action.type) {
        case "DUMMY_ACTION":
            return { ...state };
        default:
            return state;
    }
};

export default reducer;

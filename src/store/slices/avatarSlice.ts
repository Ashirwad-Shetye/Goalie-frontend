import { createSlice } from "@reduxjs/toolkit";

export const avatarSlice = createSlice({
    name: "avatar",
    initialState: {
        value: 0
    },
    reducers: {
        setAvatarId: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setAvatarId } = avatarSlice.actions;

export default avatarSlice.reducer;
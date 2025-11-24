import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    followers: null,
    following: null
}

const followSlice = createSlice({
    name: 'follow',
    initialState,
    reducers: {
        setFollowers: (state, actions) => {
            state.followers = actions.payload
        },
        setFollowing: (state, actions) => {
            state.following = actions.payload
        }
    }
});

export const { setFollowers, setFollowing } = followSlice.actions;
export default followSlice.reducer
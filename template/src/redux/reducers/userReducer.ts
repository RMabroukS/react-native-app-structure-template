
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import {
    UserTypes
} from '../../@types';

export type InitialUserSliceTypes = {
    profile?: UserTypes,
    token: string,

};

const initialState: InitialUserSliceTypes = {
    token: ""
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserProfile(state, action: PayloadAction<UserTypes>) {
            return {
                ...state,
                token: action.payload.token,
                profile: action.payload
            };
        },

    },
});


export const {
    setUserProfile
} = userSlice.actions;

export default userSlice.reducer;



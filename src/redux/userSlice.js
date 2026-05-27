import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name : '',
    email : '',
};

const userSlice = createSlice({
    name : 'auth',
    initialState,

    reducers :{

        getName:(state,action) => {
            state.name  = action.payload.name;
            state.email = action.payload.email;
        },

    },

});

export const { getName } = userSlice.actions;

export default userSlice.reducer;

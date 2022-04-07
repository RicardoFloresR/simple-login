import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: 'false',
    },
    reducers: {
        setUserName: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { setUserName } = userSlice.actions

export default userSlice.reducer
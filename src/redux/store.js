import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth-slice';
import userReducer from './slices/user-slice';

export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer
    },
});
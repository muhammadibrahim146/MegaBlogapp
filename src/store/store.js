import {configureStore, createSlice}from"@reduxjs/toolkit"
import authReducer from "../store/auth.js"
 const store= configureStore({
    reducer: {
        auth:authReducer
    }
});
export default store;
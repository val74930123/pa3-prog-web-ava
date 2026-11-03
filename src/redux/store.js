
import { configureStore } from "@reduxjs/toolkit";
import solicitudesReducer from "./solicitudesSlice";

export const store = configureStore({
    reducer: {
        solicitudes: solicitudesReducer
    }
});

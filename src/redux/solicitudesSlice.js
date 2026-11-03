
import { createSlice } from "@reduxjs/toolkit";
import { solicitudes } from "../data/solicitudes";

const solicitudesSlice = createSlice({
    name: "solicitudes",
    initialState: solicitudes,
    reducers: {
        agregarSolicitud: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { agregarSolicitud } = solicitudesSlice.actions;

export default solicitudesSlice.reducer;

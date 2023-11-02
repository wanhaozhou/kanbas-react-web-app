import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";

const defaultModule = { name: "New module", description: "New description" };
const initialState = {
    modules: modules,
    module: defaultModule,
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, action) => {
            state.modules = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.modules,
            ];
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map((module) => {
                if (module._id === action.payload._id) {
                    return action.payload;
                } else {
                    return module;
                }
            });
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module) => module._id !== action.payload
            );
        },
        setModule: (state, action) => {
            state.module = { ...action.payload };
        },
    },
});


export const { addModule, deleteModule, updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;
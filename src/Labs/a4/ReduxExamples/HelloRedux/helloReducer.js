import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "Hello World",
};

const helloSlice = createSlice({
    name: "hello",
    initialState: initialState,
    reducers: {},
});

export default helloSlice.reducer;
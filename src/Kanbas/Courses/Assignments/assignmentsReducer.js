import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const defaultAssignment = {
    title: "New assignment",
    description: "New assignment description",
    dueDate: "2021-01-01",
    availableFromDate: "2021-01-01",
    availableUntilDate: "2021-01-01",
}
const initialState = {
    assignments,
    assignment: defaultAssignment,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments
            ]
            state.assignment = { ...defaultAssignment };
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
            state.assignment = { ...defaultAssignment };
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );

        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload || defaultAssignment;
        },
    }
});

export const { addAssignment, updateAssignment, deleteAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

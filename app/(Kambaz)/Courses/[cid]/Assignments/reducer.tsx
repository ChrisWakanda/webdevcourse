import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        ...assignment,
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (a: any) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ) as any;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
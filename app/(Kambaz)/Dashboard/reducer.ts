import { createSlice } from "@reduxjs/toolkit";
import * as db from "../Database";

const initialState = {
    enrollments: [] as any[],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        enrollCourse: (state, action) => {
            const { userId, courseId } = action.payload;
            const newEnrollment = {
                _id: new Date().getTime().toString(),
                user: userId,
                course: courseId,
            };
            state.enrollments = [...state.enrollments, newEnrollment];
        },
        unenrollCourse: (state, action) => {
            const { userId, courseId } = action.payload;
            state.enrollments = state.enrollments.filter(
                (enrollment: any) =>
                    !(enrollment.user === userId && enrollment.course === courseId)
            );
        },
    },
});

export const { enrollCourse, unenrollCourse, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
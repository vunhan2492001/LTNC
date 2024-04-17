import { createSlice } from "@reduxjs/toolkit";
import { getAllUserThunk,getUserThunk,getAllStudentsThunk,getAllTeachersThunk,createNewStudentThunk,createNewTeacherThunk,deleteUserThunk,
} from '../action/admin'

const admin = createSlice({
  name: "adminFunction",
  initialState: {
    getAllUserThunk: [],
    getUserThunk: [],
    getAllStudentsThunk: [],
    getAllTeachersThunk: [],
    createNewStudentThunk:[],
    createNewTeacherThunk:[],
    deleteUserThunk:[],
  },
  reducers: {
    clearAdminFuntion: (state) => {
      state.getAllUserThunk = []
      state.getUserThunk= []
      state.getAllStudentsThunk= []
      state.getAllTeachersThunk= []
      state.createNewStudentThunk= []
      state.createNewTeacherThunk= []
      state.deleteUserThunk= []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getAllUserThunk.fulfilled,
      (state, { payload }) => {
        if (payload) {
          state.getAllUserThunk = payload;
        }
      }
    );
    builder.addCase(
      getUserThunk.fulfilled,
      (state, { payload }) => {
        if (payload) {
          state.getUserThunk = payload;
      }
      }
    )
    builder.addCase(
      getAllStudentsThunk.fulfilled,
      (state, { payload }) => {
        if (payload) {
          state.getAllStudentsThunk = payload;
        }
      }
    )
    builder.addCase(
      getAllTeachersThunk.fulfilled,
      (state, { payload }) => {
        if (payload) {
          state.getAllTeachersThunk = payload;
      }
      }
    )
    builder.addCase(
      createNewStudentThunk.fulfilled,
      (state, { payload }) => {
        if (payload) {
          state.createNewStudentThunk = payload;
      }
      }
    )
    builder.addCase(
      createNewTeacherThunk.fulfilled,
      (state, { payload }) => {
        if (payload) {
          state.createNewTeacherThunk = payload;
      }
      }
    )
    builder.addCase(
      deleteUserThunk.fulfilled,
      (state, { payload }) => {
        if (payload) {
          state.deleteUserThunk = payload;
      }
      }
    )
  }
});
export const { clearAdminFuntion
} = admin.actions;
export default admin;
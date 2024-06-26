import { createAsyncThunk } from "@reduxjs/toolkit";
import resources from '../api/resources'

const { putAvatar,getAvatar,facultiesList,createFaculty,createSubject,deleteSubject,deleteFaculty,getAllClassResource,deleteResource,getResource} = resources

export const putAvatarThunk = createAsyncThunk(
    'resources/putAvatar',
    async (data) => {
        const res = await putAvatar(data)
        return res
    }
)

export const facultiesListThunk = createAsyncThunk(
    'resources/facultiesList',
    async (data) => {
        const res = await facultiesList(data)
        return res
    }
)

export const createFacultyThunk = createAsyncThunk(
    'resources/createFaculty',
    async (data) => {
        const res = await createFaculty(data)
        return res
    }
)

export const createSubjectThunk = createAsyncThunk(
    'resources/createSubject',
    async (data) => {
        const res = await createSubject(data)
        return res
    }
)

export const deleteSubjectThunk = createAsyncThunk(
    'resources/deleteSubject',
    async (data) => {
        const res = await deleteSubject(data)
        return res
    }
)

export const getAvatarThunk = createAsyncThunk(
    'resources/getAvatar',
    async (data) => {
        const res = await getAvatar(data)
        return res
    }
)

export const deleteFacultyThunk = createAsyncThunk(
    'resources/deleteFaculty',
    async (data) => {
        const res = await deleteFaculty(data)
        return res
    }
)

export const getAllClassResourceThunk = createAsyncThunk(
    'resources/getAllClassResource',
    async (data) => {
        const res = await getAllClassResource(data)
        return res
    }
)

export const deleteResourceThunk = createAsyncThunk(
    'resources/deleteResource',
    async (data) => {
        const res = await deleteResource(data)
        return res
    }
)

export const getResourceThunk = createAsyncThunk(
    'resources/getResource',
    async (data) => {
        const res = await getResource(data)
        return res
    }
)
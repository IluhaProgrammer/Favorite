import { createAsyncThunk } from "@reduxjs/toolkit"

const fetchUserById = (userId) => 
    new Promise (resolve => { 
        setTimeout(() => {
            resolve({id: 5, name: 'John'})
        }, 2000)
    })



export const getUserById = createAsyncThunk('users/by-id', async(userId, thunkApi) => {
    try {
        const response = await fetchUserById(userId)
        return response
    } catch(error) {
        return  thunkApi.rejectWithValue(error)
    }
    
})
    
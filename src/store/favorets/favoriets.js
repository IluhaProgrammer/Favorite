import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorets: []
}

const favorietsSlice = createSlice({
    name: 'favoriets',
    initialState,
    reducers: {
        toggleToFavoriet(state, {payload: reciep})  { 
            if(state.favorets.some(e => e.id === reciep.id)) {
                const index = state.favorets.findIndex(e => e.id === reciep.id)
                if(index !== -1) {
                    state.favorets.splice(index, 1)
                }
            } else {
               state.favorets.push(reciep) 
            }
        }
    }
})
export default favorietsSlice.reducer
export const {toggleToFavoriet} = favorietsSlice.actions
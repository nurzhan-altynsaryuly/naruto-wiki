import {createSlice} from '@reduxjs/toolkit'

const pageSlice = createSlice({
    name: 'page',
    initialState: {
        pageId: 1
    },
    reducers: {
        changePage(state, action) {
            if(action.payload == 'next') {
                state.pageId = state.pageId+1
                return
            }
            if(state.pageId !== 1) {
                state.pageId = state.pageId-1
            }
        }
    }
})

export const {changePage} = pageSlice.actions

export default pageSlice.reducer
import {createSlice} from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: false,
        disButton: false
    },
    reducers: {
        changeTheme(state, action) {
            action.payload ? state.theme = true : state.theme = false
            localStorage.setItem('theme', JSON.stringify(state.theme))
        },
        loadTheme(state, action) {
            const data = JSON.parse(localStorage.getItem('theme'))
            data ? state.theme = true : state.theme = false
        },
        turnButton(state, action) {
            action.payload ? state.disButton = true : state.disButton = false
        }
    }
})

export const {changeTheme, loadTheme, turnButton} = themeSlice.actions

export default themeSlice.reducer
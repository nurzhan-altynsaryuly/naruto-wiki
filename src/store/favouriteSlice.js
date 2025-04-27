import {createSlice} from '@reduxjs/toolkit'

const favouriteSlice = createSlice({
    name: 'todos',
    initialState: {
        favourites: [],
        info: '',
        modal: false
    },
    reducers: {
        addFavourite(state, action) {
            state.favourites.push(action.payload)
            localStorage.setItem('favourites', JSON.stringify(state.favourites))
            state.info = {
                info: 'You added ' + action.payload.name + ' to favourites!',
                img: action.payload.images[0]
            }
            state.modal = true
        },
        removeFavourite(state, action) {
            state.info = {
                info: 'You deleted ' + action.payload.name + ' from favourites!',
                img: action.payload.img
            }
            state.favourites = state.favourites.filter(item => item.id != action.payload.id)
            localStorage.setItem('favourites', JSON.stringify(state.favourites))
            state.modal = true
        },
        loadFavourite(state) {
            const data = JSON.parse(localStorage.getItem('favourites'))
            if(data) state.favourites = data
            else state.favourites = []
        },
        modalClose(state) {
            state.modal = false
        }
    }
})

export const {addFavourite, removeFavourite, loadFavourite, modalClose} = favouriteSlice.actions

export default favouriteSlice.reducer
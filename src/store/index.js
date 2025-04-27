import {configureStore} from '@reduxjs/toolkit'
import favouriteReducer from './favouriteSlice'
import themeReducer from './themeSlice'
import pageReducer from './pageSlice'

export default configureStore({
    reducer: {
        favourites:  favouriteReducer,
        theme: themeReducer,
        page: pageReducer
    }
})
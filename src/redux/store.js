import { configureStore } from '@reduxjs/toolkit'
import userReduser from './userSlice'

const store = configureStore({
    reducer: {
        users: userReduser
    }
})
export default store;
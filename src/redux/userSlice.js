import { createSlice } from "@reduxjs/toolkit";

import { userList } from "../../data/data"

const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: { 
        addUser: (state, action) => {
            state.push(action.payload);
            
        },
        removeUser: (state, action) => {
            const { id } = action.payload;
            const uu = state.find(user => user.id == id);
            if (uu) {
                return state.filter(user => user.id != id);
            }

        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const uUser = state.find(user => user.id == id);
            if (uUser) {
                uUser.name = name;
                uUser.email = email;
            }

        }
     }
})
export default userSlice.reducer;
export const { addUser, updateUser, removeUser } = userSlice.actions;
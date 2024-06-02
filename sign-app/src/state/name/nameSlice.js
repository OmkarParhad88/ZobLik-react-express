import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: "default omkar",
}

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    userName: (state, action) => {
      state.value = action.payload
    },
    signOut: (state) => {
      state.value = '';
    },
  },
})

export const { userName, signOut } = nameSlice.actions

export default nameSlice.reducer
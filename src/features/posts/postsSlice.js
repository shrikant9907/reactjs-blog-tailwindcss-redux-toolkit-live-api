import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
}

export const postsSlice = createSlice({
  name: 'blogPosts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
  },
})

export const { setPosts } = postsSlice.actions

export default postsSlice.reducer
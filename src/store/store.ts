import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import avatarReducer from './slices/avatarSlice'

export const Store = configureStore({
  reducer: {
    auth: authReducer,
    avatar: avatarReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch
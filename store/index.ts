import { configureStore, compose } from "@reduxjs/toolkit";
import articleReducer from "./reducers/articles";
import userReducer from "./reducers/user";
// ...

const store = configureStore({
  reducer: {
    articles: articleReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

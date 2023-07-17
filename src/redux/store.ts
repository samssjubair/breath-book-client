import { configureStore } from "@reduxjs/toolkit";
// import logger from "./middlewares/logger";
import booksReducer from "./features/books/bookReducer";
import { api } from "./api/apiSlice";
// import logger from 'redux-logger'

const store =configureStore({
    reducer: {
        books: booksReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
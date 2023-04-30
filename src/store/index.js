import { configureStore, combineReducers} from "@reduxjs/toolkit";
import favorietsSlice from "./favorets/favoriets";
import  userSlice  from "./user/userSlice";
import { api } from "./api/api";
import { createLogger } from "redux-logger";

const logger = createLogger({
    collapsed: true
})

const reducers = combineReducers({
    toolkit: favorietsSlice,
    user: userSlice,
    [api.reducerPath]: api.reducer,
})

export  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger),
})

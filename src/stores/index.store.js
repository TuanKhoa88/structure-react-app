import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./slices/counter.slice"

const store = configureStore(
    {
        reducer: {
            counterStore: counterReducers
        }
    }
)
export default store
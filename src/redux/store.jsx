import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counterSlice";
const Store = configureStore({
    reducer:{
        counter:CounterSlice,
    }
})
export default Store
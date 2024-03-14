import {configureStore} from "@reduxjs/toolkit";
import {binanceApi} from "./binance/binance.api.ts";

export const store = configureStore({
    reducer: {
        [binanceApi.reducerPath]: binanceApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(binanceApi.middleware)
});

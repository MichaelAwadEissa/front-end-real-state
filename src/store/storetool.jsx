import {configureStore} from "@reduxjs/toolkit";
import favoritesSlice from "./slices/favouriteSlice";

export default configureStore({
    reducer: {
        favList: favoritesSlice
    }
})
import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './CategorySlice'
import carSaleReducer from './SaleSlice'
import singleCarReducer from './SingleSlice'
import dropDownReducer from './DropdownSlice'
import locationReducer from './LocationSlice'

export default configureStore({
  reducer: {
    mainCategories: categoriesReducer,
    Sale:carSaleReducer,
    singlePage:singleCarReducer,
    dropdown:dropDownReducer,
    location:locationReducer,
  }
})
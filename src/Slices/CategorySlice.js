import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//main categories
export const fetchAsyncCategories = createAsyncThunk(
    "fetchAsyncCategories",
    async ({rejectWithValue}) => {
        const response = await fetch(`https://react.dealbix.com/api/get_motor_category`)
        try {
            const result = await response.json();
            console.log(result);
            return result.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

//featured list
export const fetchFetauredList = createAsyncThunk (
   "fetchFetauredList",
   async ({rejectWithValue})=>{
    const response = await fetch("https://react.dealbix.com/api/get_motor_featured_list");
    try {
        const result = await response.json();
        console.log(result);
        return result.data;
    } catch (error) {
        return rejectWithValue(error);
    }
   }
)
const initialState = {
    categories :[],
    featured_list:[],
}

export const categorySlice = createSlice({
    name: "mainCategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(fetchAsyncCategories.rejected, (state, action) => {
                console.log("Rejected")
            })

            .addCase(fetchFetauredList.fulfilled,(state,action)=>{
                state.featured_list = action.payload;
            })
            .addCase(fetchFetauredList.rejected,(state,action)=>{
                console.log("Rejected")
            })
    }
})


export default categorySlice.reducer;
export const getCategories = (state) => state.mainCategories.categories;
export const getFeaturedList = (state) =>state.mainCategories.featured_list;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchBrand = createAsyncThunk(
    "fetchBrand",
    async({rejectWithValue})=>{
      const response = await fetch("https://react.dealbix.com/api/get_motor_brands");
      try {
        const result = await response.json();
        const data = result.data;
        return data;
      } catch(error) {
           return rejectWithValue(error)
      }

    }
)

export const  dropDownData = createSlice({
    name:'dropdown',
    initialState:{
        brands:[],
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder

        .addCase(fetchBrand.fulfilled,(state,action)=>{
            state.brands = action.payload;
        })
        .addCase(fetchBrand.rejected,()=>{
            console.log("Rejected")
        })
    }

})

export default dropDownData.reducer;
export const getbrandSlice = (state)=>state.dropdown.brands;
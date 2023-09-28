import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const locationName = createAsyncThunk(
    "locationName",
    async (location_id,{rejectWithValue,}) =>{
        const response = await fetch(`https://react.dealbix.com/api/getcity?location_id=88`)
        try {
            const result = await response.json();
            console.log(result)
            return result.data;
        } catch(error) {
           return rejectWithValue(error)
        }
    } 
)

    


export const locationSlice = createSlice({
  name :'location',
  initialState: {
    cityName:[],
  },
  reducers: {},
  extraReducers:(builder)=>{
    builder

    .addCase(locationName.fulfilled, (state,action)=>{
        state.cityName = action.payload;
    })
    .addCase(locationName.rejected, (state,action)=>{
        console.log("Rejected")
    })
  }
}
)


export default locationSlice.reducer;
export const getLocation = (state)=>state.location.cityName;
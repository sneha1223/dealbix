import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Used cars for sale
export const fetchSinglePage = createAsyncThunk(
    "fetchSinglePage",
    async (mtr_slug, { rejectWithValue }) => {
        const response = await fetch(`https://react.dealbix.com/api/get_motor_single_add?mtr_slug=${mtr_slug}`)

        try {
            const result = await response.json();
            console.log(result)
            return result.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

// Number Plate
export const fetchSingleNumber = createAsyncThunk(
    "fetchSingleNumber",
    async (mtr_slug, { rejectWithValue }) => {
        const response = await fetch(`https://react.dealbix.com/api/get_motor_single_add?mtr_slug=${mtr_slug}`)

        try {
            const result = await response.json();
            console.log(result)
            return result.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

//motor cycle
export const fetchSingleMotor = createAsyncThunk(
    "fetchSingleMotor",
    async (mtr_slug, { rejectWithValue }) => {
        const response = await fetch(`https://react.dealbix.com/api/get_motor_single_add?mtr_slug=${mtr_slug}`)

        try {
            const result = await response.json();
            console.log(result)
            return result.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const fetchSingleBoat = createAsyncThunk(
    "fetchSingleBoat",
    async (mtr_slug, { rejectWithValue }) => {
        const response = await fetch(`https://react.dealbix.com/api/get_motor_single_add?mtr_slug=${mtr_slug}`)

        try {
            const result = await response.json();
            console.log(result)
            return result.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const fetchSingleAccessories = createAsyncThunk(
    "fetchSingleAccessories",
    async (mtr_slug, { rejectWithValue }) => {
        const response = await fetch(`https://react.dealbix.com/api/get_motor_single_add?mtr_slug=${mtr_slug}`)

        try {
            const result = await response.json();
            console.log(result)
            return result.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const fetchSingleVehicle = createAsyncThunk(
    "fetchSingleVehicle",
    async (mtr_slug, { rejectWithValue }) => {
        const response = await fetch(`https://react.dealbix.com/api/get_motor_single_add?mtr_slug=${mtr_slug}`);

        try {
            const result = await response.json();
            console.log(result)
            return result.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const singleDetails = createSlice({
    name: 'singlePage',
    initialState: {
        singleCar: [],
        numberPlate: [],
        singleMotor: [],
        singleBoat: [],
        singleAccessories: [],
        singleVehicles: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //used cars for sale
            .addCase(fetchSinglePage.fulfilled, (state, action) => {
                state.singleCar = action.payload;
            })
            .addCase(fetchSinglePage.rejected, (state, action) => {
                console.log("Rejected")
            })

            //number plate
            .addCase(fetchSingleNumber.fulfilled, (state, action) => {
                state.numberPlate = action.payload;
            })
            .addCase(fetchSingleNumber.rejected, (state, action) => {
                console.log("Rejected")
            })

            // motorcycle
            .addCase(fetchSingleMotor.fulfilled, (state, action) => {
                state.singleMotor = action.payload;
            })
            .addCase(fetchSingleMotor.rejected, (state, action) => {
                console.log("Rejected")
            })

            //boat
            .addCase(fetchSingleBoat.fulfilled, (state, action) => {
                state.singleBoat = action.payload;
            })
            .addCase(fetchSingleBoat.rejected, (state, action) => {
                console.log("Rejected")
            })

            //Accessories
            .addCase(fetchSingleAccessories.fulfilled, (state, action) => {
                state.singleAccessories = action.payload;
            })
            .addCase(fetchSingleAccessories.rejected, (state, action) => {
                console.log("Rejected")
            })
            
            //vehicles
            .addCase(fetchSingleVehicle.fulfilled, (state, action) => {
                state.singleVehicles = action.payload;
            })
            .addCase(fetchSingleVehicle.rejected, (state, action) => {
                console.log("Rejected")
            })
    }
})

export default singleDetails.reducer;
export const getSinglePage = (state) => state.singlePage.singleCar;
export const getSingleNumber = (state) => state.singlePage.numberPlate;
export const getSingleMotor = (state) => state.singlePage.singleMotor;
export const getSingleBoat = (state) => state.singlePage.singleBoat;
export const getSingleAccessories = (state) => state.singlePage.singleAccessories;
export const getSingleVehicleSlice = (state) =>state.singlePage.singleVehicles;

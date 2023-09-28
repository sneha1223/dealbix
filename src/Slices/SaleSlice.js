import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// used cars for sale
export const fetchCarSale = createAsyncThunk(
    "fetchCarSale",
    async ({ rejectWithValue }) => {
        const response = await fetch("https://react.dealbix.com/api/get_motor_category_list?mtr_cat=11");
        try {
            const result = await response.json();
            console.log(result)
            return result.data.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


//Number plate
export const fetchNumberSale = createAsyncThunk(
    "fetchNumberSale",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("https://react.dealbix.com/api/get_motor_category_list?mtr_cat=43");
            const result = await response.json();
            console.log(result);
            return result.data.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


// motorCycle for sale
export const fetchMotorSale = createAsyncThunk(
    "fetchMotorSale",
    async ({ rejectWithValue }) => {
        const response = await fetch("https://react.dealbix.com/api/get_motor_category_list?mtr_cat=12")
        try {
            const result = await response.json();
            console.log(result)
            return result.data.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

//Boats
export const fetchBoatSale = createAsyncThunk(
    "fetchAsyncBoats",
    async ({ rejectWithValue }) => {
        const response = await fetch('https://react.dealbix.com/api/get_motor_category_list?mtr_cat=41')
        try {
            const result = await response.json();
            console.log(result)
            return result.data.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// Accessories
export const fetchAccessoriesSale = createAsyncThunk(
    "fetchAccessoriesSale",
    async ({ rejectWithValue }) => {
        const response = await fetch('https://react.dealbix.com/api/get_motor_category_list?mtr_cat=13')
        try {
            const result = await response.json()
            console.log(result)
            return result.data.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

//vehicles
export const fetchVehicles = createAsyncThunk(
    "fetchVehicles",
    async ({ rejectWithValue }) => {
        const response = await fetch('https://react.dealbix.com/api/get_motor_category_list?mtr_cat=42')
        try {
            const result = await response.json();
            console.log(result);
            return result.data.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const carSlice = createSlice({
    name: 'Sale',
    initialState: {
        cars: [],
        numberPlate: [],
        motorCycle: [],
        boats: [],
        accessories: [],
        vehicles: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            // used cars for sale
            .addCase(fetchCarSale.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(fetchCarSale.rejected, (state, action) => {
                console.log("Rejected")
            })

            //number plate
            .addCase(fetchNumberSale.fulfilled, (state, action) => {
                state.numberPlate = action.payload;
            })
            .addCase(fetchNumberSale.rejected, (state, action) => {
                console.log("Rejected");
            })

            // motorCycle for sale
            .addCase(fetchMotorSale.fulfilled, (state, action) => {
                state.motorCycle = action.payload;
            })
            .addCase(fetchMotorSale.rejected, (state, action) => {
                console.log("Rejected")
            })

            //Boats
            .addCase(fetchBoatSale.fulfilled, (state, action) => {
                state.boats = action.payload;
            })
            .addCase(fetchBoatSale.rejected, (state, action) => {
                console.log("Rejected")
            })

            //accessories
            .addCase(fetchAccessoriesSale.fulfilled, (state, action) => {
                state.accessories = action.payload;
            })
            .addCase(fetchAccessoriesSale.rejected, (state, action) => {
                console.log("Rejected")
            })

            //vehicles
            .addCase(fetchVehicles.fulfilled, (state, action) => {
                state.vehicles = action.payload;
            })
            .addCase(fetchVehicles.rejected, () => {
                console.log("Rejected")
            })
    }
})


export default carSlice.reducer;
export const getCarSlice = (state) => state.Sale.cars;
export const getMotorSlice = (state) => state.Sale.motorCycle;
export const getNumberSlice = (state) => state.Sale.numberPlate;
export const getBoatSlice = (state) => state.Sale.boats;
export const getAccessoriesSlice = (state) => state.Sale.accessories;
export const getVehicleSlice = (state) => state.Sale.vehicles;
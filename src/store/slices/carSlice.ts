
import { carItem } from "@/types/common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CarState = {
  selectedCar: carItem | null;
};

const initialState: CarState = {
  selectedCar: null,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCar: (state, action: PayloadAction<carItem>) => {
      state.selectedCar = action.payload;
    },
  },
});

export const { setCar } = carSlice.actions;
export default carSlice.reducer;
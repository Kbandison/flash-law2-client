import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import attorneyService from "./attorneyService";
import { useSelector } from "react-redux";

// const user = useSelector((state) => state.auth.user);

const initialState = {
  // user: user.user.attorney_assigned,
  attorneys: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getAllAttorneys = createAsyncThunk(
  "attorneys/getAttorneys",
  async (_, thunkAPI) => {
    try {
      return await attorneyService.getAttorneys();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addAttorney = createAsyncThunk(
  "attorneys/addAttorney",
  async (attorney, thunkAPI) => {
    try {
      console.log("line", attorney);
      return await attorneyService.addAttorney(attorney);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const attorneySlice = createSlice({
  name: "attorneys",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

      /**********************GET ATTORNEYS******************/

      .addCase(getAllAttorneys.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getAllAttorneys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.attorneys = action.payload;
      })

      .addCase(getAllAttorneys.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      /**********************ADD ATTORNEY******************/

      .addCase(addAttorney.pending, (state) => {
        // state.isLoading = true;
      })

      .addCase(addAttorney.fulfilled, (state, action) => {
        console.log("line", action);
        // state.isLoading = false;
        // state.isSuccess = true;
        // state.attorneys = action.payload;
      })

      .addCase(addAttorney.rejected, (state, action) => {
        console.log("line", action);
        // state.isLoading = false;
        // state.isError = true;
        // state.message = action.payload;
      });
  },
});

export const { reset } = attorneySlice.actions;
export default attorneySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  reducers: {
    setStatusFilter: (state, action) => {
      const { name, username, email, phone } = action.payload;
      if (name !== undefined) state.name = name;
      if (username !== undefined) state.username = username;
      if (email !== undefined) state.email = email;
      if (phone !== undefined) state.phone = phone;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
export const selectFilters = (state: RootState) => state.filters;

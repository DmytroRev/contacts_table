import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, getContacts } from "./contactsApi";
import { selectContacts } from "./selectors";
import { selectFilters } from "./filterSlice";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const visibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    const { name, username, email, phone } = filters;
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(name.toLowerCase()) &&
        contact.username.toLowerCase().includes(username.toLowerCase()) &&
        contact.email.toLowerCase().includes(email.toLowerCase()) &&
        contact.phone.includes(phone)
    );
  }
);
export const contactsReducer = contactSlice.reducer;

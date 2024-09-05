import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addContact, getContacts } from "./contactsApi";
import { selectContacts } from "./selectors";
import { selectFilters } from "./filterSlice";
import { Contact, ContactsState } from "../types";

const initialState: ContactsState = {
  items: [],
  loading: false,
  error: null
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContacts.fulfilled, (state, action: PayloadAction<Contact[]>) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to load contacts";
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action: PayloadAction<Contact>) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to add contact";
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

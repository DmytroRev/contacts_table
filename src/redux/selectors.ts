import { RootState } from "./store";


export const selectContacts = (state: RootState) => state.contacts.items;
export const selectNameContacts = (state: RootState) =>
  state.contacts.items.length > 0 ? state.contacts.items[0].name : null;
export const selectUsernameContacts = (state: RootState) =>
  state.contacts.items.length > 0 ? state.contacts.items[0].username : null;
export const selectEmailContacts = (state: RootState) =>
  state.contacts.items.length > 0 ? state.contacts.items[0].email : null;
export const selectPhoneContacts = (state: RootState) =>
  state.contacts.items.length > 0 ? state.contacts.items[0].phone : null;


export const selectNameFilter = (state: RootState) => state.filters.name;
export const selectUsernameFilter = (state: RootState) => state.filters.username;
export const selectEmailFilter = (state: RootState) => state.filters.email;
export const selectPhoneFilter = (state: RootState) => state.filters.phone;
export const state = (state: RootState) => state;

export const selectContacts = (state) => state.contacts.items;
export const selectNameContacts = (state) => state.contacts.name;
export const selectUsernameContacts = (state) => state.contacts.username;
export const selectEmailContacts = (state) => state.contacts.email;
export const selectPhoneContacts = (state) => state.contacts.phone;

export const selectNameFilter = (state) => state.filters.name;
export const selectUsernameFilter = (state) => state.filters.username;
export const selectEmailFilter = (state) => state.filters.email;
export const selectPhoneFilter = (state) => state.filters.phone;
export const state = (state) => state;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Contact } from "../types";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

interface GetContactsResponse {
  contacts: Contact[];
}

interface AddContactResponse {
  contact: Contact;
}

interface ThunkError {
message: string
}

export const getContacts = createAsyncThunk < Contact[], void, {rejectValue: ThunkError}>(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Contact[]>("/users");
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue({message: err.message});
    }
  }
);

export const addContact = createAsyncThunk<Contact, Contact, {rejectValue: ThunkError}>(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/users", newContact);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue({message: err.message});
    }
  }
);

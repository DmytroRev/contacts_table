export interface Contact {
  id: string;
  name: string;
  username: string;
  email: string;
    phone: string;
}

export interface ContactsState {
  items: Contact[];
  loading: boolean;
  error: string | null;
}

export interface FiltersState {
  filter: string;
}
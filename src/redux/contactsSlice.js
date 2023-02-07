import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: ({ contacts }, { payload }) => {
      contacts.push(payload);
    },
    deleteContact: ({ contacts }, { payload }) => {
      const index = contacts.findIndex(contact => contact.id === payload.id);
      contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContact = state => state.contacts;

export default contactsSlice.reducer;

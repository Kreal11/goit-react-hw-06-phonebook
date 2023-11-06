const { nanoid, createSlice } = require('@reduxjs/toolkit');

const prepareAddContact = (name, number) => {
  return {
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
};

const initialState = {
  contacts: [
    { name: 'Helen', number: '357-03-20', id: '1' },
    { name: 'Valeriy', number: '357-09-05', id: '2' },
    { name: 'Kyrylo', number: '357-10-11', id: '3' },
    { name: 'Richard', number: '357-04-14', id: '4' },
    { name: 'Bona', number: '357-12-22', id: '5' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      prepare: prepareAddContact,
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

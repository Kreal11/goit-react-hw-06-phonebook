import { DELETE_CONTACT } from './constants';

const initialState = {
  contacts: [
    { name: 'Helen', number: '357-08-06', id: 1 },
    { name: 'Valeriy', number: '357-09-05', id: 2 },
    { name: 'Kyrylo', number: '357-10-11', id: 3 },
    { name: 'Ribona', number: '357-03-20', id: 4 },
  ],
  filter: '',
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CONTACT: {
      return;
    }
    default:
      return state;
  }
};

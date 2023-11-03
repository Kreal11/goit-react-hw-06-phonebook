import { nanoid } from 'nanoid';
import { ADD_CONTACT, DELETE_CONTACT } from './constants';

export const deleteContact = id => ({ type: DELETE_CONTACT, payload: id });

export const addContact = (name, number) => {
  const newContact = {
    name,
    number,
    id: nanoid(),
  };
  return {
    payload: newContact,
    type: ADD_CONTACT,
  };
};

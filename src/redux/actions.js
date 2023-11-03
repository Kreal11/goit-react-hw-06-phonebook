import { DELETE_CONTACT } from './constants';

export const deleteContact = id => ({ type: DELETE_CONTACT, payload: id });

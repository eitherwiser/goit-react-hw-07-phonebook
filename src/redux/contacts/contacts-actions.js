import { v4 as uuid } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/addContact', (name, contact) => ({
  payload: { id: uuid(), name: name, number: contact },
}));

const deleteContact = createAction('contact/deleteContact');

const changeFilter = createAction('contacts/onChangeFilter');

export { addContact, deleteContact, changeFilter };

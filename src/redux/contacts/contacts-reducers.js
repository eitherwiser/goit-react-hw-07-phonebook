import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact, changeFilter } from './contacts-actions';

//init first state from localStorage
const def = [
  { id: '3145q6', name: 'Bill Gatesevich', number: '044242424600' },
  { id: '6531q4', name: 'Mark Zuckerman', number: '062746004242' },
  { id: '3131q6', name: 'Linus Torvaldsiuk', number: '057242424600' },
  { id: 'q53143', name: 'Jeff Bezenko', number: '064723004242' },
];

const initialState = () => {
  if (!window.localStorage.getItem('contacts')) {
    window.localStorage.setItem('contacts', JSON.stringify(def));
  }
  return JSON.parse(window.localStorage.getItem('contacts'));
};

//write to localStorage
const safeContactsToLocal = newState =>
  window.localStorage.setItem('contacts', JSON.stringify(newState));

//
const items = createReducer(initialState(), {
  [addContact]: (state, { payload }) => {
    let newState = [...state, payload];
    safeContactsToLocal(newState);
    return newState;
  },

  [deleteContact]: (state, { payload }) => {
    let newState = state.filter(({ id }) => id !== payload);
    safeContactsToLocal(newState);
    return newState;
  },
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;

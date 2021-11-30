import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducers';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;

import React from "react";
import PropTypes from "prop-types";
import { connect, useSelector, useDispatch } from "react-redux";

import { deleteContact } from "redux/contacts/contacts-actions.js"
import s from "./ContactsList.module.css";
//


    const visibleContacts = (allContacts, filter) => {
      const normalizeFilter = filter.toLowerCase();
      return allContacts.filter((contact) => (
        contact.name.toLowerCase().includes(normalizeFilter)))
    };
//


const ContactsList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(state => visibleContacts(state.contacts.items, state.contacts.filter));


  return (
    <>
      {!contacts.length && <h4>Contacts list is empty.</h4>}
      {!!contacts.length && 
      <> 
        <h4 className={s.list_title}>Contacts list:</h4>
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <li
              key={id}
              className={s.list_item}
            >

              <a href={"tel:" + { number }}>
                <span className={s.name}>{name}&nbsp;:</span>
                <span className={s.number}>{number}</span>
              </a>

              <button
                type="button"
                className={s.btn}
                onClick={() => dispatch(deleteContact(id))}
              >
                <span className="material-icons">delete</span>
              </button>
            </li>))}
        </ul>
        </>
      }
    </>
  );
}

ContactsList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
};


export default connect()(ContactsList)


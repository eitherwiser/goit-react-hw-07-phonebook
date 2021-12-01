import { connect, useSelector, useDispatch } from "react-redux";

import { changeFilter } from "redux/contacts/contacts-actions.js"
import s from "./Filter.module.css";
//


const Filter = () => {
  
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);
  
  
  return (
      <label>Find contacts by name &nbsp;
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        ></input>
        </label>

  );
}


export default connect()(Filter);
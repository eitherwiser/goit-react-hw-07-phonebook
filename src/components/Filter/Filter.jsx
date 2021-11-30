import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions.js"

import s from "./Filter.module.css";

//
const Filter = ({ value, changeFilter }) => {
  
  return (
      <label>Find contacts by name &nbsp;
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => changeFilter(e.target.value)}
        ></input>
        </label>

  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
//


const mapStateToProps = (state) => ({
  value: state.contacts.filter
})

const mapDispatchToProps = { changeFilter }

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
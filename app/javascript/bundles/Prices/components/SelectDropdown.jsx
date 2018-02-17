import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { yearOptions, monthOptions, dateOptions } from '../constants/selectConstants';

function renderSelect(divClassName, value, onChange, options, placeholder, maxLength) {
  return (
    <div className={divClassName}>
      <Select
        value={value}
        onChange={(nextValue) => nextValue !== '' && onChange(nextValue)}
        onBlur={(event) => event.target.value && onChange(event.target.value)}
        options={options}
        placeholder={placeholder}
        inputProps={{maxLength: maxLength}}
        labelKey="value"
        autosize={false}
        clearable={false}
        onCloseResetsInput={false}
        onBlurResetsInput={false}
        simpleValue
      />
    </div>
  );
}

const renderYear = (year, onChange) => renderSelect('year', year, onChange, yearOptions, 'Year', 4);
const renderMonth = (month, onChange) => renderSelect('month', month, onChange, monthOptions, 'Month', 4);
const renderDate = (date, onChange) => renderSelect('date', date, onChange, dateOptions, 'Date', 2);

function SelectDropdown(props) {
  return (
    <div className="date-selector">
      {renderYear(props.year, props.yearChangeHandler)}
      {renderMonth(props.month, props.monthChangeHandler)}
      {renderDate(props.date, props.dateChangeHandler)}
    </div>
  );
}

SelectDropdown.propTypes = {
  year: PropTypes.string,
  month: PropTypes.string,
  date: PropTypes.string,
  yearChangeHandler: PropTypes.func.isRequired,
  monthChangeHandler: PropTypes.func.isRequired,
  dateChangeHandler: PropTypes.func.isRequired,
};

export default SelectDropdown;

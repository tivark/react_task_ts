import React from 'react';
import { connect } from 'react-redux';
import { changeDate } from '../../actions/actionCreators';

import './date-option.css';

const DateOption = ( props: any ) => {
  const { label, type } = props;
  const onDateChange = ( event: any ) => {
    props.changeDate( type, event.target.value );
  }

  return (
    <div className='date-option'>
      <label className='date-option__label'>{ label }</label>
      <input
        type='datetime-local'
        value={ props.dateFields[type] }
        className='datetime-picker'
        onChange={ onDateChange }
      />
    </div>
  )
}
const mapStateToProps = ( state: any ) => {
  return {
    dateFields: state.datePeriod
  }
}

const mapDispatchToProps = {
  changeDate
}

export default connect( mapStateToProps, mapDispatchToProps )( DateOption );
import React from 'react';
import {connect} from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {checkboxOptionToggle, checkboxAllToggle} from '../../actions';
import './option-checkbox.css';

const OptionCheckbox = (props) => {
  const {option, groupId, selectedOptions} = props;

  const isAllChecked = selectedOptions[option.id].length === option.variants.length;

  const toggleOption = (event) => {
    props.checkboxOptionToggle(option.id, event.target.name);
  }

  const toggleAll = () => {
    props.checkboxAllToggle(option.id, groupId);
  }

  return (
    <FormControl component="fieldset">
      <FormControlLabel control={
        <Checkbox
          name={option.id}
          onChange={toggleAll}
          checked={isAllChecked}
        />
      } label={option.title}
      />

      <FormGroup className='checkbox-sublist'>
        {
          option.variants.map((variant) => {
            const isChecked = (option.id in selectedOptions)
              && selectedOptions[option.id].includes(variant.id);

            return (
              <FormControlLabel
                control={
                  <Checkbox
                    name={variant.id}
                    checked={isChecked}
                    color='primary'
                    onChange={toggleOption}
                  />
                }
                label={variant.label}
                key={variant.id}
              />
            )
          })
        }
      </FormGroup>
    </FormControl>
  )
}

const mapStateToProps = ({selectedOptions}) => {
  return {
    selectedOptions
  }
}

const mapDispatchToProps = {
  checkboxOptionToggle,
  checkboxAllToggle
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionCheckbox);
import React from 'react';
import { connect } from 'react-redux';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import { radioOptionToggle } from '../../actions/actionCreators';

const OptionRadio = ( props: any ) => {
  const { option, selectedOptions } = props;

  const toggleRadio = ( event: any ) => {
    props.radioOptionToggle( option.id, event.target.value );
  }

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label={ option.id } name={ option.id } onChange={ toggleRadio }>
        {
          option.variants.map( ( variant: any ) => {
            const isChecked = option.id in selectedOptions
              && selectedOptions[option.id] === variant.id;

            return <FormControlLabel
              value={ variant.id }
              control={ <Radio color='primary'/> }
              label={ variant.label }
              key={ variant.id }
              checked={ isChecked }
            />
          } )
        }
      </RadioGroup>
    </FormControl>
  )
}
const mapStateToProps = ( state: any ) => {
  return {
    selectedOptions: state.selectedOptions
  }
}

const mapDispatchToProps = {
  radioOptionToggle
}
export default connect(mapStateToProps, mapDispatchToProps)(OptionRadio);
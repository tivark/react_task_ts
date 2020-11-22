import React from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import { changeFilterInput } from '../../actions/actionCreators';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles( {
  container: {
    marginBottom: '10px'
  },
  input: {
    borderBottom: 'solid 1px #eeeeee',
    backgroundColor: '#ffffff',
    paddingRight: '5px'
  }
} )

const AttributeFilterByName = ( props: any ) => {

  const onChangeInput = ( event: any ) => {
    props.changeFilterInput( event.target.value );
  }

  const classes = useStyles();
  return (
    <div className={ classes.container }>
      <Input
        type='search'
        className={ classes.input }
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color='action'/>
          </InputAdornment>
        }
        disableUnderline
        onChange={ onChangeInput }
      />
    </div>
  )
}

const mapStateToProps = ( state: any ) => {
  return {
    filter: state.filterByName
  }
}

const mapDispatchToProps = {
  changeFilterInput
}

export default connect( mapStateToProps, mapDispatchToProps )( AttributeFilterByName );
import React from 'react';
import {Button} from '@material-ui/core';
import {connect} from 'react-redux';
import {relocateAllAttributes} from '../../actions';
import {makeStyles} from '@material-ui/styles';

import './attribute-list-button.css';

const useStyles = makeStyles({
  main: {
    textTransform: 'none',
    backgroundColor: '#E6E9ED'
  },
  disabledButton:{
    backgroundColor: '#00000008 !important'
  }
})

const AttributeListButton = (props) => {
  const {type, isInactive, columnId} = props;
  const classes = useStyles();
  let buttonText = type === 'ADD_ALL' ? 'Выбрать всё' : 'Удалить всё';

  const onClickHandler = () => {
    props.relocateAllAttributes(columnId);
  }

  return (
    <Button
      variant='contained'
      disabled={isInactive}
      onClick={onClickHandler}
      size='small'
      className={classes.main}
      classes={{disabled: classes.disabledButton}}
      disableElevation>
      {buttonText}
    </Button>
  );
}

const mapDispatchToProps = {
  relocateAllAttributes
}

export default connect(null, mapDispatchToProps)(AttributeListButton);
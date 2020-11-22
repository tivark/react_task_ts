import React from 'react';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import OptionRadio from '../option-radio/';
import OptionCheckbox from '../option-checkbox/';
import { makeStyles } from '@material-ui/styles';
import { commonStyles } from '../../styles/styles';

const useStyles = makeStyles( {
  paper: {
    backgroundColor: commonStyles.backgroundColor,
    padding: '10px',
    marginBottom: '10px'
  }
} )

const OptionSelector = ( props: any ) => {
  const { group } = props;
  const classes = useStyles();

  let renderGroup = group.options.map( ( option: any ) => {
    switch (option.type) {
      case 'single':
        return (
          <OptionRadio option={ option } parent={ group.id } key={ option.id }/>
        )
      case 'multi':
        return (
          <OptionCheckbox option={ option } groupId={ group.id } key={ option.id }/>
        )
      default:
        return '';
    }
  })
  return (
    <Paper className={classes.paper}>
      <div className='option-title'>{group.title}</div>
      {renderGroup}
    </Paper>
  )
}

export default connect(null,null)(OptionSelector);
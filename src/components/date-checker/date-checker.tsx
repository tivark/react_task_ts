import React from 'react';
import DateOption from '../date-option';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/styles";
import {commonStyles} from '../../styles/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: commonStyles.backgroundColor,
    marginBottom: '10px'
  },
  title: {
    display: 'inline-block',
    fontWeight: '600',
    marginBottom: '10px'
  },
  container: {
    padding: '10px'
  },
  options: {
    marginBottom: '20px',
    display: 'flex'
  }

})

const DateChecker = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.container}>
        <h4 className={classes.title}>Временной интервал</h4>
        <div className={classes.options}>
          <DateOption label='Начало интервала' type='startDate'/>
          <DateOption label='Конец интервала' type='endDate'/>
        </div>
        <span>Длина интервала не более 4 месяцев</span>
      </div>
    </Paper>
  )
}

export default DateChecker;
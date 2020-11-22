import React from 'react';
import DateOption from '../date-option';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from "@material-ui/styles";
import { commonStyles } from '../../styles/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles( ( theme: Theme ) => createStyles( {
  root: {
    backgroundColor: commonStyles.backgroundColor,
    marginBottom: '10px'
  },
  title: {
    display: 'inline-block',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  container: {
    padding: '10px'
  },
  options: {
    marginBottom: '20px',
    display: 'flex'
  }

} ) )

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
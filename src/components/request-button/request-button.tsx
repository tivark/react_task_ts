import React from 'react';
import {connect} from 'react-redux';
import {sendBaseRequest, baseLoaded} from '../../actions';
import BeerService from '../../services/beer-service';
import getParamFromOptions from '../../utils/getParamsFromOptions';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/styles';
import './request-button.css';
import {commonStyles} from '../../styles/styles';

const useStyles = makeStyles({
  button: {
    backgroundColor: commonStyles.requestButtonColor,
    color: '#FFFFFF',
    '&:hover':{
      backgroundColor: commonStyles.requestButtonHover
    }
  }
})

const RequestButton = (props) => {
  const beerService = new BeerService();
  const classes = useStyles();

  const spinner = (<span className='spinner'>
    <CircularProgress size='24px'/> <span className='spinner-text'>Получение данных с сервера</span>
  </span>)

  const requestButton = (<Button
    variant='contained'
    disableElevation
    fullWidth
    disabled={props.baseUpdated}
    className={classes.button}>
    Настроить атрибуты
  </Button>)

  const getItemsList = () => {
    if (props.baseUpdated) {
      return;
    }

    let params = getParamFromOptions(props.requestOptions, props.selectedOptions);
    if(params){
      params = '&' + params;
    }

    props.sendBaseRequest();
    beerService.getData(params)
      .then((data) => {
        props.baseLoaded(data);
      })
      .catch((error) => {
        console.error(error.message);
      })
  }

  return (
    <div className='request-button-wrapper' onClick={getItemsList}>
      {props.requestSend
        ? spinner
        : requestButton}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    baseUpdated: state.baseUpdated,
    requestSend: state.requestSend,
    columns: state.columns,
    requestOptions: state.requestOptions,
    selectedOptions: state.selectedOptions
  }
}

const mapDispatchToProps = {
  baseLoaded,
  sendBaseRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestButton);
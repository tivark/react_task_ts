import React from 'react';
import {connect} from 'react-redux';
import OptionSelector from '../option-selector';

import './options-panel.css';

const OptionsPanel = (props) => {
  const groupsId = Object.keys(props.requestOptions);

  const renderOptions = groupsId.map((groupId) => {
    const group = props.requestOptions[groupId];
    return <OptionSelector key={groupId} group={group}/>
  })

  return (
    <div className='options-panel'>
      <div className='options-wrapper'>
        {renderOptions}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    requestOptions: state.requestOptions
  }
}

export default connect(mapStateToProps, null)(OptionsPanel);
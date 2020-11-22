import { initObject } from '../store/init-object';
import * as actionTypes from '../actions/actionTypes';
import attributeDragEndReducer from './attribute-drag-end-reducer';
import dataLoadedReducer from './data-loaded-reducer';
import relocateAttributeReducer from './relocate-attribute-reducer';
import relocateAllAttributesReducer from './relocate-all-attributes-reducer';
import changeDateReducer from './change-date-reducer';
import changeFilterInputReducer from './change-filter-input-reducer';
import checkboxOptionToggleReducer from './checkbox-option-toggle-reducer';
import radioOptionToggleReducer from './radio-option-toggle-reducer';
import checkboxAllToggleReducer from './checkbox-all-toggle-reducer';


const reducer = ( state = initObject, action: any ) => {
  switch (action.type) {
    case actionTypes.SEND_DATA_REQUEST:
      return {
        ...state,
        requestSend: true
      }
    case actionTypes.DATA_LOADED:
      return dataLoadedReducer( state, action );
    case actionTypes.ATTRIBUTE_DRAG_END:
      return attributeDragEndReducer( state, action );
    case actionTypes.RELOCATE_ATTRIBUTE:
      return relocateAttributeReducer( state, action );
    case actionTypes.RELOCATE_ALL_ATTRIBUTES:
      return relocateAllAttributesReducer( state, action );
    case actionTypes.CHANGE_DATE:
      return changeDateReducer( state, action );
    case actionTypes.CHANGE_FILTER_INPUT:
      return changeFilterInputReducer( state, action );
    case actionTypes.CHECKBOX_OPTION_TOGGLE:
      return checkboxOptionToggleReducer( state, action );
    case actionTypes.RADIO_OPTION_TOGGLE:
      return radioOptionToggleReducer( state, action );
    case actionTypes.CHECKBOX_ALL_TOGGLE:
      return checkboxAllToggleReducer( state, action )
    default:
      return state;
  }
}

export default reducer;
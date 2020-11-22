import * as actionsType from "./actionTypes";


export const dataLoaded= ( base: any ) => {
  return {
    type: 'DATA_LOADED',
    payload: base
  }
}

export const sendDataRequest = () => {
  return {
    type: 'SEND_DATA_REQUEST'
  }
}

export const attributeDragEnd = ( result: any ) => {
  return {
    type: 'ATTRIBUTE_DRAG_END',
    result
  }
}

export const attributeRelocate = ( attributeId: string ) => {
  return {
    type: 'RELOCATE_ATTRIBUTE',
    attributeId
  }
}

export const relocateAllAttributes = ( fromColumnId: string ) => {
  return {
    type: 'RELOCATE_ALL_ATTRIBUTES',
    fromColumnId
  }
}

export const changeDate = ( dateType: string, date: string ) => {
  return {
    type: 'CHANGE_DATE',
    dateType,
    date
  }
}

export const changeFilterInput = ( value: string ) => {
  return {
    type: 'CHANGE_FILTER_INPUT',
    value
  }
}

export const checkboxOptionToggle = ( optionId: string, variantId: string ) => {
  return {
    type: 'CHECKBOX_OPTION_TOGGLE',
    optionId,
    variantId
  }
}

export const radioOptionToggle = ( optionId: string, variantId: string ) => {
  return {
    type: 'RADIO_OPTION_TOGGLE',
    optionId,
    variantId
  }
}

export const checkboxAllToggle = ( optionId: string, groupId: string ) => {
  return {
    type: 'CHECKBOX_ALL_TOGGLE',
    optionId,
    groupId
  }
}
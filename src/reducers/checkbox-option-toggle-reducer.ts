import checkUpdatedOptions from "../utils/checkUpdatedOptions";

const checkboxOptionToggleReducer = ( state: any, action: any ) => {
  const { optionId, variantId } = action;
  const selOptions: any = { ...state.selectedOptions };


  const newOptionList: string[] = [ ...selOptions[optionId] ]
  const index: number = newOptionList.indexOf( variantId );
  index < 0
    ? newOptionList.push( variantId )
    : newOptionList.splice( index, 1 );

  //Т.к. рабочий только option-2 чекбокс проверка на изменение опций для обновления только для него
  const updated: boolean = checkUpdatedOptions( newOptionList, state.lastUpdate );

  return {
    ...state,
    baseUpdated: optionId !== 'option-2' ? state.baseUpdated : updated,
    selectedOptions: {
      ...state.selectedOptions,
      [optionId]: newOptionList
    }
  }
}

export default checkboxOptionToggleReducer;
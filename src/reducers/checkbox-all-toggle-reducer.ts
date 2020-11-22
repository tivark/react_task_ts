import checkUpdatedOptions from "../utils/checkUpdatedOptions";

const checkboxAllToggleReducer = ( state: any, action: any ) => {
  const { optionId, groupId } = action;
  const groupOptions = state.requestOptions[groupId].options;
  const option = groupOptions.filter( ( option: any ) => {
    return option.id === optionId;
  } )[0]

  const selectedVariants: string[] = [ ...state.selectedOptions[optionId] ]
  const allVariantsId: string[] = option.variants.map( ( variant: any ) => {
    return variant.id;
  } );

  const newSelectedVariants: string[] = selectedVariants.length !== allVariantsId.length
    ? allVariantsId
    : []

  //Т.к. рабочий только option-2 чекбокс проверка на изменение опций для обновления только для него
  const updated = checkUpdatedOptions( newSelectedVariants, state.lastUpdate );

  return {
    ...state,
    baseUpdated: optionId !== 'option-2' ? state.baseUpdated : updated,
    selectedOptions: {
      ...state.selectedOptions,
      [optionId]: newSelectedVariants
    }
  }
}

export default checkboxAllToggleReducer;
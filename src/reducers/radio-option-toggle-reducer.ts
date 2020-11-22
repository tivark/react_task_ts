const radioOptionToggleReducer = ( state: any, action: any ) => {
  const { optionId, variantId } = action;

  return {
    ...state,
    selectedOptions: {
      ...state.selectedOptions,
      [optionId]: variantId
    }
  }
}

export default radioOptionToggleReducer;
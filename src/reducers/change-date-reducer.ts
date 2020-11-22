const changeDateReducer = (state: any, action: any) => {
  const {dateType, date} = action;
  return {
    ...state,
    datePeriod: {
      ...state.datePeriod,
      [dateType]: date
    }
  }
}

export default changeDateReducer;
const changeFilterInputReducer = ( state: any, action: any ) => {

  const selectedItems: string[] = state.columns['selected'].itemsId;
  const itemsId: string[] = Object.keys( state.items );

  const filteredId: string[] = itemsId.filter( ( itemId: string ) => {
    return state.items[itemId].name.toLowerCase().includes( action.value.toLowerCase() )
      && !selectedItems.includes( itemId )
  } )

  const newColumn = {
    ...state.columns['available'],
    itemsId: filteredId
  }

  return {
    ...state,
    filterByName: action.value,
    columns: {
      ...state.columns,
      [newColumn.id]: newColumn
    }
  }
}

export default changeFilterInputReducer;
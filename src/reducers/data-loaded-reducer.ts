const dataLoadedReducer = ( state: any, action: any ) => {
  const itemsObj: any = {};

  action.payload.forEach( ( item: any ) => {
    const id: string = item.id + item.name.split( ' ' ).join( '' );
    itemsObj[id] = item;
  } )

  if ( state.columns['selected'].itemsId.length > 0 ) {
    const savedItems: any = {}

    for ( let key in state.items ) {
      if ( state.columns['selected'].itemsId.includes( key ) ) {
        savedItems[key] = { ...state.items[key] }
      }
    }

    Object.assign( itemsObj, savedItems );
  }

  const itemsId = action.payload.map( ( item: any ) => item.id );

  const itemsToAdd = itemsId.filter( ( itemId:string ) => {
    return !state.columns['selected'].itemsId.includes( itemId );
  } )

  const column = {
    ...state.columns['available'],
    itemsId: itemsToAdd
  }

  const updatedState:any = [];

  for ( let key in state.selectedOptions ) {
    //Рабочий чекбокс только option-2, поэтому оставим только его
    key === 'option-2' && updatedState.push( ...state.selectedOptions[key] );
  }

  return {
    ...state,
    columns: {
      ...state.columns,
      'available': column
    },
    items: itemsObj,
    requestSend: false,
    baseUpdated: true,
    lastUpdate: updatedState
  }
}

export default dataLoadedReducer;
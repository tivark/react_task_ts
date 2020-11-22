const relocateAttributeReducer = ( state: any, action: any ) => {
  const { attributeId } = action;
  let startColumn: any, finishColumn: any;

  for ( let key in state.columns ) {
    const column: any = state.columns[key];
    if ( column.itemsId.includes( attributeId ) ) {
      startColumn = column;
    } else {
      finishColumn = column;
    }
  }

  const startItemsId: string[] = [ ...startColumn.itemsId ];
  const itemIndex = startItemsId.indexOf( attributeId );
  startItemsId.splice( itemIndex, 1 );
  const newStartColumn = {
    ...startColumn,
    itemsId: startItemsId
  }

  const finishItemsId = [ ...finishColumn.itemsId ];
  finishItemsId.push( attributeId );
  const newFinishColumn = {
    ...finishColumn,
    itemsId: finishItemsId
  }

  return {
    ...state,
    columns: {
      ...state.columns,
      [newStartColumn.id]: newStartColumn,
      [newFinishColumn.id]: newFinishColumn
    }
  }
}

export default relocateAttributeReducer;
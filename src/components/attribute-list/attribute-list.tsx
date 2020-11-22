import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import AttributeItem from '../attribute-item';
import './attribute-list.css';
import AttributeListButton from '../attribute-list-button';

const AttributeList = ({column, items}) => {

  const buttonType = column.id === 'available'
    ? 'ADD_ALL'
    : 'REMOVE_ALL';

  let renderItems;
  if (items.length === 0) {
    renderItems = <div className='non-attr-message'>Атрибуты отсутствуют</div>;
  } else {
    renderItems = items.map((item, index) => {
      return <AttributeItem
        key={item.id}
        id={item.id}
        content={item.name}
        index={index}
        columnId={column.id}
      />
    })
  }

  return (
    <div className='attribute-list'>
      <span className='attribute-list__header'>
        <span className='attribute-list__title'>{column.title}</span>
        <AttributeListButton
          type={buttonType}
          isInactive={!column.itemsId.length}
          columnId={column.id}
          className='attribute-list__button'
        />
      </span>
      <div className='scrolling-wrapper'>
        <div className='droppable-wrapper'>
          <Droppable droppableId={column.id}>
            {
              (provided) => {
                return (
                  <div className='attribute-list__items'
                       ref={provided.innerRef}
                       {...provided.droppableProps}>
                    {renderItems}
                    {provided.placeholder}
                  </div>
                )
              }
            }
          </Droppable>
        </div>
      </div>
    </div>
  )
}

export default AttributeList;
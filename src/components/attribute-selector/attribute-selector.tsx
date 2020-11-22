import React from 'react';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';
import AttributeList from '../attribute-list';
import {attributeDragEnd} from '../../actions/actionCreators';
import AttributeFilterByName from '../attribute-filter-by-name';
import Paper from '@material-ui/core/Paper';
import {commonStyles} from '../../styles/styles';
import {makeStyles} from '@material-ui/styles';

const useStyles: any = makeStyles({
  paper: {
    backgroundColor: commonStyles.backgroundColor,
    padding: '10px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '49%',
    flexWrap: 'wrap'
  },
  title: {
    fontWeight: '700',
    marginBottom: '10px',
    display: 'inline-block'
  },
  listWrapper: {
    display: 'flex',
    width: '100%',
    flexGrow: '1'
  }
})

const AttributeSelector = (props:any) => {
  const {items, columns, columnOrder} = props;
  const classes = useStyles();

  const onDragEnd = (result:any) => {
    props.attributeDragEnd(result);
  }

  return (
    <Paper className={classes.paper}>
      <div className={classes.header}>
        <span className={classes.title}>Атрибуты выгрузки</span>
        <AttributeFilterByName/>
      </div>
      <div className={classes.listWrapper}>
        <DragDropContext onDragEnd={onDragEnd}>
          {
            columnOrder.map((columnId:string) => {
              const column = columns[columnId];
              const renderItems = column.itemsId.map((itemId:string) => {
                return items[itemId];
              });
              return <AttributeList
                key={columnId}
                column={column}
                items={renderItems}
              />
            })
          }
        </DragDropContext>
      </div>
    </Paper>
  )
}

const mapStateToProps = (state:any) => {
  return {
    items: state.items,
    columns: state.columns,
    columnOrder: state.columnOrder
  }
}

const mapDispatchToProps = {
  attributeDragEnd
};

export default connect(mapStateToProps, mapDispatchToProps)(AttributeSelector);
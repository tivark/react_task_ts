import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DvrIcon from '@material-ui/icons/Dvr';
import { makeStyles } from '@material-ui/styles';

import './side-panel.css';

const useStyles = makeStyles( {
  paper: {
    position: 'relative',
    backgroundColor: '#4A4A4A',
    borderRight: 'none'
  },
  button: {
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
    color:'#ffffff',
    '&:disabled':{
      color:'#4A4A4A',
      backgroundColor: '#ffffff'
    }
  }
})

const SidePanel = ( props: any ) => {
  const { sidePanel, location } = props;
  const classes = useStyles();
  const icons: any = {
    'home': <HomeIcon/>,
    'export': <DvrIcon/>,
    'bookmark': <BookmarkIcon/>
  }

  return (
    <Drawer variant='permanent' classes={ { paper: classes.paper } }>
      {
        sidePanel.map( ( menuItem: any ) => {
          const isActive = menuItem.path === location.pathname;
          return (
            <Link to={ menuItem.path } key={ menuItem.title }>
              <IconButton
                title={ menuItem.title }
                disabled={ isActive }
                className={ classes.button }>
                { icons[menuItem.icon] }
              </IconButton>
            </Link>
          )
        } )
      }
    </Drawer>
  )
}
const mapStateToProps = ( state: any ) => {
  return {
    sidePanel: state.sidePanel
  }
}
export default withRouter(connect(mapStateToProps, null)(SidePanel));
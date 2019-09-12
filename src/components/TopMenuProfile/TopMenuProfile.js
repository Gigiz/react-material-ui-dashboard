import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { firebaseApp } from '@src/config/firebase';

const TopMenuProfile = ({ history }) => {

  const [ profileMenuAnchor, setProfileMenuAnchor ] = useState(null);

  const handleOpenProfileMenu = event => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleCloseProfileMenu = event => {
    setProfileMenuAnchor(null);
  };

  const handleLogoutUser = () => {
    firebaseApp.auth().signOut().then(() => {
      history.push('/');
    }).catch(error => {
      // An error happened.
      console.log(error);
    });
  };

  return <div>
    <IconButton
      aria-label='account of current user'
      aria-controls='primary-search-account-menu'
      aria-haspopup='true'
      color='inherit'>
      <Badge badgeContent={0} color='secondary'>
        <NotificationsIcon />
      </Badge>
    </IconButton>
    <IconButton
      aria-label='account of current user'
      aria-controls='primary-search-account-menu'
      aria-haspopup='true'
      color='inherit'
      onClick={handleOpenProfileMenu}>
      <AccountCircle />
    </IconButton>
    <Menu
      id='menu-appbar'
      anchorEl={profileMenuAnchor}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(profileMenuAnchor)}
      onClose={handleCloseProfileMenu}
    >
      <MenuItem onClick={handleCloseProfileMenu}>Profile</MenuItem>
      <MenuItem onClick={handleLogoutUser}>Logout</MenuItem>
    </Menu>
  </div>
};

TopMenuProfile.propTypes = {
  history: PropTypes.object,
};

export default withRouter(TopMenuProfile);

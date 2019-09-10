import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const TopMenuProfile = () => <MenuItem>
  <IconButton
    aria-label='account of current user'
    aria-controls='primary-search-account-menu'
    aria-haspopup='true'
    color='inherit'
    onClick={() => {}}>
    <AccountCircle />
  </IconButton>
</MenuItem>;

export default TopMenuProfile;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TopMenuProfile from '@src/components/TopMenuProfile/TopMenuProfile';
import { UserContext } from '@src/models/context/UserContext/UserContext';

const TopMenu = () => {
  const classes = useStyles();
  const { authenticated } = useContext(UserContext);

  return <AppBar position='static'>
    <Toolbar>
      {authenticated && <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>}
      <Typography variant='h6' className={classes.title}>
        <Link className={classes.link} to='/'>Family Assistant</Link>
      </Typography>
      {!authenticated
        ? <Button color='inherit'><Link className={classes.link} to='/login'>Login</Link></Button>
        : <TopMenuProfile />}
    </Toolbar>
  </AppBar>;
};

export default TopMenu;

function useStyles() {
  return makeStyles(theme => ({
    title: {
      flexGrow: 1,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
    },
  }))();
}

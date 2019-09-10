import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Main from '@src/containers/Main/Main';
import UserContextProvider from '@src/models/context/UserContext/UserContext';

const App = () => {
  const classes = useStyles();
  
  return <BrowserRouter>
    <UserContextProvider>
      <CssBaseline />
      <div className={classes.root}>
        <Main />
      </div>
    </UserContextProvider>
  </BrowserRouter>
};

export default App;

function useStyles() {
  return makeStyles(theme => ({
    root: {
      margin: theme.spacing(1),
    },
  }))();
}

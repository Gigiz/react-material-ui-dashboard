import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Main from '@src/containers/Main/Main';

const App = () => {
  const classes = useStyles();
  
  return <BrowserRouter>
    <CssBaseline />
    <div className={classes.root}>
      <Main />
    </div>
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

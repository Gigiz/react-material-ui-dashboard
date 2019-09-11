import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const LaunchScreen = () => {
  const classes = useStyles();
  return <CircularProgress className={classes.circularProgress} />;
};

export default LaunchScreen;

function useStyles() {
  return makeStyles(() => ({
    circularProgress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
    },
  }))();
}

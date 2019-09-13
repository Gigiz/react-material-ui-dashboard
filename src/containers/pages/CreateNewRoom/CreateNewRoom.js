import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import MainContainer from '@src/components/MainContainer/MainContainer';
import { firebaseApp } from '@src/config/firebase';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

function getSteps() {
  return ['Who', 'What', 'When'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Uknown stepIndex';
  }
}

const CreateNewRoom = ({ handleClickDialog }) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return <React.Fragment>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleClickDialog} aria-label="close">
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Create Room
        </Typography>
      </Toolbar>
    </AppBar>
    <MainContainer>
      <Grid item xs={12} className={classes.dialog}>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
          {activeStep === steps.length 
          ? <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
          </div>
          : <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
            </div>}
          </div>
        </div>
      </Grid>
    </MainContainer>
  </React.Fragment>
};

export default CreateNewRoom;

function useStyles() {
  return makeStyles(theme => ({
    dashboardPage: {
      padding: 15,
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      [theme.breakpoints.only('xs')]: {
        width: '100%',
        padding: 0,
        paddingTop: 15,
      },
    },
    dialog: {
      paddingTop: 50,
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      [theme.breakpoints.only('xs')]: {
        width: '100%',
      },
    },
    card: {
      minWidth: 350,
      [theme.breakpoints.only('md')]: {
        minWidth: 300,
      },
      [theme.breakpoints.only('sm')]: {
        width: 250,
        margin: 20,
      },
      [theme.breakpoints.only('xs')]: {
        width: '100%',
        margin: 20,
      },
    },
    fab: {
      position: 'fixed',
      top: 'auto',
      bottom: 10,
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
    },
    root: {
      width: '90%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }))();
}

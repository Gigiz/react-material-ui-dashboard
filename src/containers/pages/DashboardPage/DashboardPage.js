import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { firebaseApp } from '@src/config/firebase';
import MainContainer from '@src/components/MainContainer/MainContainer';
import TranslateFrom from '@src/components/TranslateFrom/TranslateFrom';
import MessageOfTheDay from '@src/components/MessageOfTheDay/MessageOfTheDay';
import CreateNewRoom from '@src/containers/pages/CreateNewRoom/CreateNewRoom';

const TranslatingDialog = TranslateFrom(Dialog);

const DashboardPage = () => {
  const classes = useStyles();
  const [ userRooms, setUserRooms ] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchUserRooms() {
      const httpsCallable = await firebaseApp.functions().httpsCallable('retrieveUserRooms');
      const response = await httpsCallable();
      console.log(response);
      setUserRooms(response.data);
    }
    fetchUserRooms();
  }, [ setUserRooms ]);

  const handleClickDialog = () => {
    setOpen(!open);
  }

  return <MainContainer>
    <MessageOfTheDay handleOpenNewRoomDialog={handleClickDialog} />
    <Grid item xs={12} className={classes.dashboardPage}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h5' component='h2'>
            {`Your Tasks`}
          </Typography>
          <br />
          {userRooms ? <Typography variant='h3' component='h1'>
            {userRooms.length}
          </Typography>
          : <Skeleton  width={40} height={35} />}
        </CardContent>
        <CardActions>
            Show
        </CardActions>
      </Card>
      {/* {!userRooms && <Card className={classes.card}>
        <CardContent>
          <Skeleton />
          <Skeleton />
        </CardContent>
        <CardActions>
          <Skeleton variant="rect" width={48} height={22} />
        </CardActions>
      </Card>} */}
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h5' component='h2'>
            {`Your Daily Tasks`}
          </Typography>
          <br />
          <Typography variant='h3' component='h1'>
            {0}
          </Typography>
        </CardContent>
        <CardActions>
            Show
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h5' component='h2'>
            {`Your Completed Tasks`}
          </Typography>
          <br />
          <Typography variant='h3' component='h1'>
            {0}
          </Typography>
        </CardContent>
        <CardActions>
            Show
        </CardActions>
      </Card>
      </Grid>
      <TranslatingDialog
        fullScreen
        open={open}
        onClose={handleClickDialog}>
        <CreateNewRoom />
      </TranslatingDialog>
  </MainContainer>
};

export default DashboardPage;

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

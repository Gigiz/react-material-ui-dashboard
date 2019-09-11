import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MainContainer from '@src/components/MainContainer/MainContainer';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { UserContext } from '@src/models/context/UserContext/UserContext';
import { firebaseApp, GOOGLE_AUTH_PROVIDER } from '@src/config/firebase';

const LoginPage = ({ history }) => {
  const classes = useStyles();
  const { authenticated } = useContext(UserContext);

  if (authenticated) {
    history.push('/dashboard');
  }

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      GOOGLE_AUTH_PROVIDER,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  return <MainContainer>
    <Grid item xs={12} className={classes.loginPage}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <br />
          <form noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
            >
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Link href='#' variant='body2'>
            Forgot password?
          </Link>
          <Link href='#' variant='body2'>
            Don't have an account? Sign Up
          </Link>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={12} className={classes.loginPage}>
      <StyledFirebaseAuth className={classes.firebaseUi} uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
    </Grid>
  </MainContainer>;
};

LoginPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(LoginPage);

function useStyles() {
  return makeStyles(theme => ({
    loginPage: {
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
    card: {
      margin: 15,
      [theme.breakpoints.only('xs')]: {
        width: '100%',
        margin: 10,
        marginTop: 7,
      },
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    cardAction: {
      justifyContent: 'space-between',
    },
    firebaseUi: {
      width: '100%',
    },
  }))();
}

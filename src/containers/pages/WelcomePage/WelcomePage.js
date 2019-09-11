import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '@src/models/context/UserContext/UserContext';

const WelcomePage = ({ history }) => {
  const classes = useStyles();
  const [ data, setData ] = useState([]);
  const { authenticated } = useContext(UserContext);

  if (authenticated) {
    history.push('/dashboard');
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://reqres.in/api/users?delay=3');
      const data = await response.json();
      data.data.length = 3;
      setData(data.data);
    }
    fetchData();
  }, []);

  return <div className={classes.main}>
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.text}>
          <Typography
            variant='h3'
            align='center'
            component='h1'
            color='inherit'
            gutterBottom
            className={classes.title}
          >
            {'Family Assistant'}
          </Typography>
          <Typography
            variant='h5'
            component='h2'
            color='inherit'
            gutterBottom
            className={classes.h5}
          >
            {'React Starter-Kit with all Most Wanted features.'}
          </Typography>
          <Button
            onClick={() => { history.push('/login'); }}
            className={classes.button}
            variant='outlined'
            color='primary'
          >
            {'Get Started'}
          </Button>
        </div>
        <div className={classes.cardsContent}>
          {data.length > 0 && data.map(user => <Card key={user.id} className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {`User #${user.id}`}
              </Typography>
              <br />
              <Typography className={classes.pos} color="textSecondary">
                {`${user.first_name} ${user.last_name}`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant='contained'
                size='small'
                onClick={() => {
                  var win = window.open(user.avatar, '_blank');
                  win.focus();
                }}
              >
                Show
              </Button>
            </CardActions>
          </Card>)}
          {data.length === 0 && [1,2,3].map(id => <Card key={id} className={classes.card}>
            <CardContent>
              <Skeleton />
              <Skeleton />
            </CardContent>
            <CardActions>
              <Skeleton variant="rect" width={48} height={22} />
            </CardActions>
          </Card>)}
        </div>
      </div>
    </div>
  </div>;
};

WelcomePage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(WelcomePage);

function useStyles() {
  return makeStyles(theme => ({
    main: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(2),
    },
    root: {
      flexGrow: 1,
      flex: '1 0 100%',
    },
    content: {
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(1)
      },
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      letterSpacing: '.7rem',
      textIndent: '.7rem',
      fontWeight: theme.typography.fontWeightLight,
      [theme.breakpoints.only('xs')]: {
        fontSize: 24,
        letterSpacing: '.1em',
        textIndent: '.1rem'
      },
      whiteSpace: 'nowrap',
    },
    h5: {
      paddingLeft: theme.spacing(1) * 4,
      paddingRight: theme.spacing(1) * 4,
      marginTop: theme.spacing(1),
      textAlign: 'center',
      [theme.breakpoints.only('xs')]: {
        fontSize: 18
      },
    },
    button: {
      marginTop: theme.spacing(1) * 3,
    },
    cardsContent: {
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
      minWidth: 350,
      maxWidth: 350,
      margin: 15,
      [theme.breakpoints.only('xs')]: {
        width: '100%',
        margin: 0,
        marginTop: 7,
      },
    },
  }))();
}

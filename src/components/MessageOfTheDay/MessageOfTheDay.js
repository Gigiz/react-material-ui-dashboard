import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '@src/models/context/UserContext/UserContext';

const MessageOfTheDay = ({ handleOpenNewRoomDialog }) => {
  const classes = useStyles();
  const { user: { photoURL, displayName } } = useContext(UserContext);

  console.log(photoURL);
  return <Grid item xs={12} className={classes.dashboardPage}>
    <Paper className={classes.messagePaper}>
      <Avatar alt={displayName} src={photoURL} className={classes.avatar} />
      <Chip
        label='How can I help you today?'
        onClick={handleOpenNewRoomDialog}
        className={classes.chip}
        variant='outlined'
        color='primary'
      />
    </Paper>
  </Grid>;
};

MessageOfTheDay.propTypes = {
  handleOpenNewRoomDialog: PropTypes.func,
};

MessageOfTheDay.defaultProps = {
  handleOpenNewRoomDialog: () => {},
};

export default MessageOfTheDay;

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
    messagePaper: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    avatar: {
      margin: 10,
    },
    chip: {
      margin: theme.spacing(1),
    },
  }))();
}

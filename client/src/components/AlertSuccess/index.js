import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '../AlertError/node_modules/@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </div>
  );
}
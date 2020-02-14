import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
  margin: theme.spacing(1),
    },
  },
}));

export default function TextInput({ field, handleInputEvent }) {
  const classes = useStyles();

  return ( field ? 
    ( <div style={{ width:'98%' }}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          onChange={(event) => handleInputEvent(event.target.value, field.id) }
          id={ field.id }
          label={ field.label }
          variant="outlined"
          color="primary"
          fullWidth
          type={field.type}
        />
      </form>
      </div>
    ): null
  );
}
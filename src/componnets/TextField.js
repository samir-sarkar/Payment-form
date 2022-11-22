import React from 'react';
import TextField from '@mui/material/TextField';

const ThemedTextField = ({
  name,
  minLength,
  maxLength,
  fullWidth = false,
  ...props
}) => {
  return (
    <TextField
      id={name}
      name={name}
      autoComplete={name}
      fullWidth={fullWidth}
      inputProps={{
        maxLength,
        minLength,
      }}
      {...props}
    />
  );
};
export default ThemedTextField;

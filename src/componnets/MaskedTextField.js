import React from 'react';
import InputMask from 'react-input-mask';

import TextField from './TextField';

const MaskedTextField = ({ mask, maskChar, ...props }) => {
  return (
    <InputMask mask={mask} maskChar={maskChar} {...props}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default MaskedTextField;

MaskedTextField.defaultProps = {
  maskChar: ' ',
};

import MaskedTextField from './MaskedTextField';

const NumberField = (props) => {
  return <MaskedTextField mask="9999999" {...props} />;
};

export default NumberField;

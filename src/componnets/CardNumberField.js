import MaskedTextField from './MaskedTextField';

const CardNumberField = (props) => {
  return <MaskedTextField mask="9999 9999 9999 9999" {...props} />;
};

export default CardNumberField;

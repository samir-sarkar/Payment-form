import MaskedTextField from './MaskedTextField';

const CardDateField = (props) => {
  return <MaskedTextField mask="99/99" {...props} />;
};

export default CardDateField;

import { string, object } from 'yup';

export const unmaskCardNumber = (value) => {
  return value.replace(/[ ]/g, '').trim();
};

export const unmaskCardDate = (value) => {
  return value.replace(/[/]/g, '').trim();
};
const visaCard = /^4[0-9]{12}(?:[0-9]{3})?$/;
const masterCard =
  /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;

export const cardSchema = object().shape({
  cardNumber: string()
    .trim()
    .required()
    .test((value) => {
      if (!value || unmaskCardNumber(value).length === 0) {
        return false;
      } else {
        return (
          visaCard.test(unmaskCardNumber(value)) ||
          masterCard.test(unmaskCardNumber(value))
        );
      }
    }),
  firstName: string()
    .trim()
    .max(50)
    .matches(/^[a-zA-Z]+$/)
    .required(),
  lastName: string()
    .trim()
    .max(50)
    .matches(/^[a-zA-Z]+$/)
    .required(),
  expirationDate: string()
    .trim()
    .required()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/),
  securityCode: string()
    .trim()
    .matches(/^[0-9]+$/)
    .min(3)
    .max(4)
    .required(),
  donation: string()
    .trim()
    .matches(/^[0-9]+$/)
    .required(),
});

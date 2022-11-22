import React, { useState } from 'react';

import { Formik, Form } from 'formik';
import { Button, Grid, Box } from '@mui/material';
import FormBody from '../componnets/FormBody';
import TextField from '../componnets/TextField';
import CardNumberField from '../componnets/CardNumberField';
import CardDateField from '../componnets/CardDateField';
import NumberField from '../componnets/NumberField';

import { cardSchema } from '../schema';

const initialState = {
  cardNumber: '',
  firstName: '',
  lastName: '',
  expirationDate: '',
  securityCode: '',
  donation: '',
};
export const PaymemtMethodForm = () => {
  const [paymentDetails, setPaymentDetails] = useState(initialState);
  const [paymentDetailsValid, setPaymentDetailsValid] = useState(false);
  const onChange = (values, isValid) => {
    setPaymentDetails(values);
    setPaymentDetailsValid(isValid);
  };

  const handleSubmit = () => {
    if (paymentDetailsValid) {
      alert(JSON.stringify(paymentDetails));
    }
  };

  return (
    <Box>
      <Formik
        initialValues={paymentDetails}
        validateOnMount
        enableReinitialize
        validationSchema={cardSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => {
          const changeFn = (event) => {
            const { name, value } = event.target;
            const test = /^[a-zA-Z ]+$/.test(value.trim());
            if (name === 'firstName' || name === 'lastName') {
              if (test) {
                handleChange(event);
                const newValues = {
                  ...values,
                  [name]: value,
                };
                cardSchema.isValid(newValues).then((isValid) => {
                  onChange(newValues, isValid);
                });
              }
            } else {
              handleChange(event);
              const newValues = {
                ...values,
                [name]: value,
              };
              cardSchema.isValid(newValues).then((isValid) => {
                onChange(newValues, isValid);
              });
            }
          };
          return (
            <Form>
              <FormBody>
                <Grid container rowSpacing={2} columnSpacing={3}>
                  <Grid item xs={12}>
                    <CardNumberField
                      name="cardNumber"
                      label="Card Number"
                      onBlur={handleBlur}
                      onChange={changeFn}
                      error={touched.cardNumber && errors.cardNumber}
                      value={values.cardNumber || ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="firstName"
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={changeFn}
                      error={touched.firstName && errors.firstName}
                      value={values.firstName || ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="lastName"
                      label="Last Name"
                      onBlur={handleBlur}
                      onChange={changeFn}
                      error={touched.lastName && errors.lastName}
                      value={values.lastName || ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CardDateField
                      name="expirationDate"
                      label="Expiration Date(MM/YY)"
                      onBlur={handleBlur}
                      onChange={changeFn}
                      error={touched.expirationDate && errors.expirationDate}
                      value={values.expirationDate || ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="securityCode"
                      label="Security Code"
                      maxLength={4}
                      type="password"
                      onBlur={handleBlur}
                      onChange={changeFn}
                      error={touched.securityCode && errors.securityCode}
                      value={values.securityCode || ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <NumberField
                      name="donation"
                      label="Donation"
                      onBlur={handleBlur}
                      onChange={changeFn}
                      error={touched.donation && errors.donation}
                      value={values.donation || ''}
                    />
                  </Grid>
                </Grid>
              </FormBody>
            </Form>
          );
        }}
      </Formik>
      <Button
        variant="outlined"
        disabled={!paymentDetailsValid}
        onClick={handleSubmit}
        sx={{ marginTop: '32px' }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default PaymemtMethodForm;

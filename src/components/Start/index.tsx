import * as Yup from 'yup';
import { Typography, Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';

import QuestionsIllustration from 'components/QuestionsIustration';
import CustomStack from 'components/CustomStack';

import * as S from './styles';

const Start = () => {
  const formik = useFormik({
    initialValues: {
      numberOfQuestions: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      numberOfQuestions: Yup.number()
        .typeError('Please, enter numbers only')
        .min(1)
        .required('This is a required field')
    })
  });

  return (
    <CustomStack>
      <Typography
        variant="h2"
        fontSize="2.5rem"
        color="text.secondary"
        fontWeight="700"
      >
        WA Project Quiz
      </Typography>

      <S.IllustrationWrapper>
        <QuestionsIllustration />
      </S.IllustrationWrapper>

      <S.CustomTypography
        variant="body1"
        fontSize="1.5rem"
        color="text.primary"
      >
        How many questions do you want to answer?
      </S.CustomTypography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          sx={{ my: 3 }}
          color="secondary"
          label="Number of questions"
          id="numberOfQuestions"
          value={formik.values.numberOfQuestions}
          onChange={formik.handleChange}
          error={
            formik.touched.numberOfQuestions &&
            Boolean(formik.errors.numberOfQuestions)
          }
          helperText={
            formik.touched.numberOfQuestions && formik.errors.numberOfQuestions
          }
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          START
        </Button>
      </form>
    </CustomStack>
  );
};

export default Start;

import { useFormik } from 'formik';
import {
  Typography,
  Button,
  Grid,
  FormControlLabel,
  RadioGroup,
  Radio
} from '@material-ui/core';

import { CustomStack } from 'components/CustomStack/styles';
import * as S from './styles';

const Main = () => {
  const formik = useFormik({
    initialValues: {
      alternative: ''
    },
    onSubmit: ({ alternative }) => {
      console.log(alternative);
    }
  });
  return (
    <CustomStack>
      <Typography variant="h2" color="text.secondary" fontSize="1.7rem">
        Question 1 <span>/ 10</span>
      </Typography>

      <Typography
        variant="body1"
        color="text.primary"
        fontSize="2rem"
        fontWeight="bold"
        sx={{ my: '35px' }}
      >
        Which of the following is not the name of a “Bond Girl”?
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <RadioGroup aria-label="alternatives" name="alternative">
          <Grid
            sx={{ width: '100%' }}
            container
            alignItems="center"
            justifyContent="center"
            gap="15px"
          >
            <Grid item xs={12} md={6}>
              <S.AlternativeWrapper>
                <FormControlLabel
                  sx={{ width: '100%', justifyContent: 'space-around' }}
                  value="alternative1"
                  control={<Radio />}
                  label="Alternative 1"
                  labelPlacement="start"
                  onChange={formik.handleChange}
                />
              </S.AlternativeWrapper>
            </Grid>
            <Grid item xs={12} md={6}>
              <S.AlternativeWrapper>
                <FormControlLabel
                  sx={{ width: '100%', justifyContent: 'space-around' }}
                  value="alternative2"
                  control={<Radio />}
                  label="alternative 2"
                  labelPlacement="start"
                  onChange={formik.handleChange}
                />
              </S.AlternativeWrapper>
            </Grid>
            <Grid item xs={12} md={6}>
              <S.AlternativeWrapper>
                <FormControlLabel
                  sx={{ width: '100%', justifyContent: 'space-around' }}
                  value="alternative3"
                  control={<Radio />}
                  label="alternative 3"
                  labelPlacement="start"
                  onChange={formik.handleChange}
                />
              </S.AlternativeWrapper>
            </Grid>
            <Grid item xs={12} md={6}>
              <S.AlternativeWrapper>
                <FormControlLabel
                  sx={{ width: '100%', justifyContent: 'space-around' }}
                  value="alternative4"
                  control={<Radio />}
                  label="alternative 4"
                  labelPlacement="start"
                  onChange={formik.handleChange}
                />
              </S.AlternativeWrapper>
            </Grid>
          </Grid>
        </RadioGroup>
        <Grid container justifyContent="center" gap="15px" mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: '150px'
            }}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              width: '150px'
            }}
          >
            Next
          </Button>
        </Grid>
      </form>
    </CustomStack>
  );
};

export default Main;

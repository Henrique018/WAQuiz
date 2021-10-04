import Link from 'react-router-dom';
import { Typography, Button, TextField } from '@material-ui/core';

import QuestionsIllustration from 'components/QuestionsIustration';
import CustomStack from 'components/CustomStack';

import * as S from './styles';

const Start = () => {
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

      <TextField
        fullWidth
        sx={{ my: 3 }}
        color="secondary"
        label="Number of questions"
        id="numberOfQuestions"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />

      <Button href="/main" variant="contained" color="primary" fullWidth>
        START
      </Button>
    </CustomStack>
  );
};

export default Start;

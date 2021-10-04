import { Typography, Button } from '@material-ui/core';
import { CheckCircle, HighlightOff } from '@mui/icons-material';

import { CustomStack } from 'components/CustomStack/styles';
import ResultIllustration from 'components/ResultIllustration';

import * as S from './styles';

const Result = () => {
  return (
    <CustomStack>
      <Typography variant="h2" color="text.secondary" fontSize="1.7rem">
        Your results
      </Typography>

      <S.IllustrationWrapper>
        <ResultIllustration />
      </S.IllustrationWrapper>

      <Typography
        variant="body1"
        color="text.primary"
        fontSize="1rem"
        fontWeight="bold"
      >
        Correct answers: 5
      </Typography>
      <Typography
        variant="body1"
        color="text.primary"
        fontSize="1rem"
        fontWeight="bold"
      >
        Incorrect answers: 4
      </Typography>

      <S.QuestionsWrapper>
        <S.Question>
          <Typography variant="h2" fontSize="1.8em">
            Questão 1
          </Typography>
          <S.IconWrapper>
            <CheckCircle fontSize="small" color="secondary" />
          </S.IconWrapper>
          <Typography variant="body1" fontSize="1.4em">
            Correct Answer: Answer
          </Typography>
        </S.Question>

        <S.Question>
          <Typography variant="h2" fontSize="1.8em">
            Questão 2
          </Typography>
          <S.IconWrapper>
            <HighlightOff fontSize="small" color="error" />
          </S.IconWrapper>
          <Typography variant="body1" fontSize="1.4em">
            Correct Answer: Answer
          </Typography>
        </S.Question>

        <S.Question>
          <Typography variant="h2" fontSize="1.8em">
            Questão 3
          </Typography>
          <S.IconWrapper>
            <HighlightOff fontSize="small" color="error" />
          </S.IconWrapper>
          <Typography variant="body1" fontSize="1.4em">
            Correct Answer: Answer
          </Typography>
        </S.Question>
      </S.QuestionsWrapper>

      <Button variant="contained" color="primary">
        Start again
      </Button>
    </CustomStack>
  );
};

export default Result;

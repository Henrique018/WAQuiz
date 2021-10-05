import { useHistory } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { CheckCircle, HighlightOff } from '@mui/icons-material';

import { useQuiz } from 'hooks/use-Quiz';
import CustomStack from 'components/CustomStack';
import ResultIllustration from 'components/ResultIllustration';

import * as S from './styles';

const Result = () => {
  const history = useHistory();
  const { correctAnswers, wrongAnswers, resetInfo, questionsReview } =
    useQuiz();

  const handleStartAgain = () => {
    resetInfo();
    history.push('/');
  };
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
        Correct answers: {correctAnswers}
      </Typography>
      <Typography
        variant="body1"
        color="text.primary"
        fontSize="1rem"
        fontWeight="bold"
      >
        Incorrect answers: {wrongAnswers}
      </Typography>

      <S.QuestionsWrapper>
        {questionsReview.map((q, index) => (
          <S.Question key={index}>
            <Typography
              variant="h2"
              fontSize="1.3em"
              fontWeight="bold"
              dangerouslySetInnerHTML={{ __html: q.question }}
            />

            <S.IconWrapper>
              {q.isCorrect ? (
                <CheckCircle fontSize="small" color="secondary" />
              ) : (
                <HighlightOff fontSize="small" color="error" />
              )}
            </S.IconWrapper>
            <Typography variant="body1" fontSize="1em">
              Correct Answer: {q.correctAnswer}
            </Typography>
            <Typography variant="body1" fontSize="1em">
              Your answer: {q.userAnswer}
            </Typography>
          </S.Question>
        ))}
      </S.QuestionsWrapper>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleStartAgain()}
      >
        Start again
      </Button>
    </CustomStack>
  );
};

export default Result;

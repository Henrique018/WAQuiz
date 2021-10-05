import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { Typography, Button, Grid } from '@material-ui/core';

import { useQuiz } from 'hooks/use-Quiz';
import CustomStack from 'components/CustomStack';
import Alternatives from 'components/Alternatives';
import api from 'services/api';

import mapToQuestions, {
  QuestionPropsResponse,
  QuestionsAndAnswers
} from 'utils/mapToQuestions';

const Main = () => {
  const [iterator, setIterator] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState<QuestionsAndAnswers[] | []>([]);

  const history = useHistory();
  const { numberOfQuestions, addQuestionToReview, resetInfo, checkAnswers } =
    useQuiz();

  const formik = useFormik({
    initialValues: {
      alternative: ''
    },
    onSubmit: ({ alternative }) => {
      console.log({
        alternative
      });
    }
  });

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get<Promise<QuestionPropsResponse>>(
          '/api.php',
          {
            params: {
              amount: numberOfQuestions
            }
          }
        );
        const data = await response.data;
        setQuestions(mapToQuestions(data));
        setIsLoading(false);
      } catch (error) {
        console.error('error on fetch', error);
      }
    }
    getData();
  }, []);

  const handleCancel = () => {
    resetInfo();
    history.push('/');
  };

  const handleNext = () => {
    checkAnswers(formik.values.alternative, questions[iterator].correct_answer);

    addQuestionToReview({
      question: questions[iterator].question,
      correctAnswer: questions[iterator].correct_answer,
      userAnswer: formik.values.alternative,
      isCorrect:
        formik.values.alternative === questions[iterator].correct_answer
    });

    const nextNumber = iterator + 1;
    if (nextNumber === numberOfQuestions) {
      history.push('/result');
    } else {
      setIterator(nextNumber);
    }
  };

  return (
    <CustomStack>
      {isLoading && (
        <Typography variant="h2" color="text.secondary" fontSize="2rem">
          Loading questions...
        </Typography>
      )}

      {questions?.length > 0 && (
        <>
          <Typography variant="h2" color="text.secondary" fontSize="1.7rem">
            Question {iterator + 1}
            <span style={{ fontSize: '1.4rem' }}> /{numberOfQuestions}</span>
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            fontSize="2rem"
            fontWeight="bold"
            sx={{ my: '35px' }}
            dangerouslySetInnerHTML={{ __html: questions[iterator].question }}
          />

          <form onSubmit={formik.handleSubmit}>
            <Alternatives
              answers={questions[iterator].answers}
              onChange={formik.handleChange}
            />
            <Grid container justifyContent="center" gap="15px" mt={3}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: '150px'
                }}
                onClick={() => handleCancel()}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  width: '150px'
                }}
                onClick={() => handleNext()}
              >
                Next
              </Button>
            </Grid>
          </form>
        </>
      )}
    </CustomStack>
  );
};

export default Main;

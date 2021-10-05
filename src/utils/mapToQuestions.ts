import randomAlternatives from './randomAlternatives';

type QuestionProps = {
  category: string;
  type: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionPropsResponse = {
  response_code: number;
  results: QuestionProps[];
};

export type QuestionsAndAnswers = QuestionProps & { answers: string[] };

export default function mapToQuestions(
  questions: QuestionPropsResponse
): QuestionsAndAnswers[] {
  return questions.results.map((question) => ({
    ...question,
    incorrectAnswers: question.incorrect_answers,
    correctAnswer: question.correct_answer,
    answers: randomAlternatives([
      ...question.incorrect_answers,
      question.correct_answer
    ])
  }));
}

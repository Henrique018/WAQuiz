import React, { useContext, createContext, useState, useEffect } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from 'utils/localStorage';

export type questionReview = {
  question: string;
  correctAnswer: string;
  userAnswer: string;
  isCorrect: boolean;
};

type quizContextType = {
  numberOfQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  questionsReview: questionReview[];
  addNumberOfQuestions: (number: number) => void;
  checkAnswers: (userAnswer: string, correct: string) => void;
  resetInfo: () => void;
  addQuestionToReview: (question: questionReview) => void;
};

const quizContextDefaultValues = {
  numberOfQuestions: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  questionsReview: [],
  addNumberOfQuestions: () => undefined,
  checkAnswers: () => undefined,
  resetInfo: () => undefined,
  addQuestionToReview: () => undefined
};

const QuizContext = createContext<quizContextType>(quizContextDefaultValues);

export type QuizProviderProps = {
  children: React.ReactNode;
};
export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [answers, setAnswers] = useState({
    correctAnswers: 0,
    wrongAnswers: 0
  });

  const [questionsReview, setQuestionsReview] = useState<questionReview[] | []>(
    []
  );

  useEffect(() => {
    const dataQ = getFromLocalStorage('questionReview');

    if (dataQ) {
      setQuestionsReview(dataQ);
    }
  }, []);

  const addQuestionToReview = (question: questionReview) => {
    setQuestionsReview((prev) => [...prev, question]);

    saveToLocalStorage('questionReview', [...questionsReview, question]);
  };

  const checkAnswers = (userAnswer: string, correct: string) => {
    if (userAnswer === correct) {
      setAnswers((prevState) => ({
        ...prevState,
        correctAnswers: prevState.correctAnswers + 1
      }));
    } else {
      setAnswers((prevState) => ({
        ...prevState,
        wrongAnswers: prevState.wrongAnswers + 1
      }));
    }
  };

  const addNumberOfQuestions = (number: number) => {
    setNumberOfQuestions(number);
  };

  const resetInfo = () => {
    setNumberOfQuestions(0);
    setAnswers({ correctAnswers: 0, wrongAnswers: 0 });
    setQuestionsReview([]);
  };

  return (
    <QuizContext.Provider
      value={{
        numberOfQuestions,
        correctAnswers: answers.correctAnswers,
        wrongAnswers: answers.wrongAnswers,
        questionsReview,
        addQuestionToReview,
        checkAnswers,
        addNumberOfQuestions,
        resetInfo
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);

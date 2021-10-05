import { act, renderHook } from '@testing-library/react-hooks';

import { useQuiz, QuizProvider, QuizProviderProps } from '.';

describe('useQuiz', () => {
  it('should return the correct number of questions', () => {
    const wrapper = ({ children }: QuizProviderProps) => {
      return <QuizProvider>{children}</QuizProvider>;
    };

    const { result } = renderHook(() => useQuiz(), {
      wrapper
    });

    expect(result.current.numberOfQuestions).toBe(0);

    act(() => result.current.addNumberOfQuestions(10));

    expect(result.current.numberOfQuestions).toBe(10);
  });

  it('should check if the answer is correct or not and change the score', () => {
    const wrapper = ({ children }: QuizProviderProps) => {
      return <QuizProvider>{children}</QuizProvider>;
    };

    const { result } = renderHook(() => useQuiz(), {
      wrapper
    });

    expect(result.current.correctAnswers).toBe(0);

    act(() => result.current.checkAnswers('right question', 'right question'));

    expect(result.current.correctAnswers).toBe(1);

    act(() => result.current.checkAnswers('right question', 'wrongquestion'));

    expect(result.current.correctAnswers).not.toBe(2);
    expect(result.current.wrongAnswers).toBe(1);
  });

  it('should reset number of questions, questions and answers', () => {
    const wrapper = ({ children }: QuizProviderProps) => {
      return <QuizProvider>{children}</QuizProvider>;
    };

    const { result } = renderHook(() => useQuiz(), {
      wrapper
    });

    act(() => result.current.addNumberOfQuestions(10));
    act(() => result.current.checkAnswers('correct', 'correct'));
    act(() => result.current.checkAnswers('correct', 'correct'));
    act(() => result.current.checkAnswers('correct', 'wrong'));

    act(() => result.current.resetInfo());

    expect(result.current.numberOfQuestions).toBe(0);
    expect(result.current.correctAnswers).toBe(0);
    expect(result.current.wrongAnswers).toBe(0);
  });
});

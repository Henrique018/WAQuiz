import { questionReview } from 'hooks/use-Quiz';
import {} from 'utils/mapToQuestions';
const APP_KEY = 'WAQUIZ';

export function saveToLocalStorage(
  key: string,
  values: questionReview[]
): void {
  window.localStorage.setItem(`${key}_${APP_KEY}`, JSON.stringify(values));
}

export function getFromLocalStorage(key: string) {
  const data = window.localStorage.getItem(`${key}_${APP_KEY}`);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return JSON.parse(data!);
}

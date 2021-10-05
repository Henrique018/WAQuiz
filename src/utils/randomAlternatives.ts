export default function randomAlternatives(alternatives: string[]) {
  return [...alternatives].sort(() => Math.floor(Math.random() * 4));
}

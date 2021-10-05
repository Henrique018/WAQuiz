import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { QuizProvider } from 'hooks/use-Quiz';

import Routes from 'routes';
import theme from 'styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QuizProvider>
          <CssBaseline />
          <Routes />
        </QuizProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

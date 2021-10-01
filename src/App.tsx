import { ThemeProvider, CssBaseline } from '@material-ui/core';

import Main from 'components/Main';
import theme from 'styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;

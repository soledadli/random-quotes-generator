import './App.css';
import Quote from './Component/Quote';
import Credit from './Component/Credit';
import Title from './Component/Title';
import { GlobalStyle, lightTheme, darkTheme } from './Component/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components'
import useTheme from './Component/useTheme';
import ChangeColor from './Component/ChangeColor';

function App() {
  const [theme, handleChange] = useTheme();
  console.log('theme', theme)
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Title />
      <div className='quote-container'>
        <ChangeColor tgChange={handleChange} />
        <Quote />
      </div>
      <Credit />
    </ThemeProvider>
  );
}

export default App;

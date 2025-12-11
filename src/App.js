import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SongDetail from './components/SongDetail';
import Library from './components/Library'; 
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/Theme/GlobalStyles';
import theme from './components/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/album/:id" element={<SongDetail />} />
          <Route path="/library" element={<Library />} /> 
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
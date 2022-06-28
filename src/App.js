import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';

//pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import appTheme from './assets/theme';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element = {<Home />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

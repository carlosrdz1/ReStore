import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline, createTheme } from "@mui/material";
import Header from "./Header";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#EAEAEA' : '#121212'
      }
    }
  }) 

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
     <CssBaseline></CssBaseline>
     <Header darkMode={darkMode} handleChange={handleChange} />      
     <Container>
    <Catalog/>       
     </Container>
     
    </ThemeProvider>
  );
}

export default App;

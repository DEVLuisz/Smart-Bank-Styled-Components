import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/Themes";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyles } from "./Components/GlobalStyles";
import { ButtonTheme } from "./Components/Icon";
import SwitcherThemes from "./Components/SwitcherThemes";


function App() {

  const [tema, setTema] = useState(true);

  const toggleTheme = () => {
    setTema ((tema) => !tema)
  }
  
  return (
    <>
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
    <GlobalStyles />
    <ButtonTheme onClick={toggleTheme}>
      <SwitcherThemes tema={tema}/>
    </ButtonTheme>
      <Cabecalho />
      <Container />
      </ThemeProvider>
    </>
  );
}

export default App;

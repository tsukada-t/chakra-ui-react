import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { theme } from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import { MainRoute } from "./routers/route";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MainRoute />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

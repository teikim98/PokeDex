import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import Home from "./pages/Home";
import "./index.css";
import React from 'react';
import {
  RecoilRoot
} from 'recoil';
import { createGlobalStyle } from "styled-components";
import Pokemon from "./pages/Pokemon";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color : inherit;
  text-decoration: none;
  }
`;


function App() {

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalStyle />
          <BrowserRouter basename="/PokeDex">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:pokemon" element={<Pokemon></Pokemon>} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;

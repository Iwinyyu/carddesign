import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './dist/styles/Styles.css';
import { DarkModeProvider } from './globalStates/DarkModeContext';
import { GlobalStateProvider } from './globalStates/GlobalStateContext';
import Topbar from './components/constants/Topbar';
import CardPreview from './components/pages/CardPreview';
import CardDesign from './components/pages/CardDesign';
import Home from './components/pages/Home';




const App = () => {
  return (
 
      <GlobalStateProvider>
        <DarkModeProvider>
          <BrowserRouter>
            <Topbar />
            <Routes>
              <Route path='/carddesign/' element={<Home />} />
              <Route path="/carddesign/card_design" element={<CardDesign />} />
              <Route path="/card_preview" element={<CardPreview />} />
            </Routes>
          </BrowserRouter>
        </DarkModeProvider>
      </GlobalStateProvider>
 
  );
};

export default App;

import React from 'react';
import SignInSide from './components/signin';
import ChallengeCards from './components/ChallengeCards';
import DataVisualization from './components/DataVisualization';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Route path={"/"} component={SignInSide} />
      <Route path={"/signin"} component={SignInSide} />
      <Route path={"/challenge"} component={ChallengeCards} />
      <Route path={"/data"} component={DataVisualization} />
    </HashRouter>
   
  );
}

export default App;

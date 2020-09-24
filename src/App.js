import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import TopHeadLine from './components/TopHeadLine/TopHeadLine';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <News></News>
      <TopHeadLine></TopHeadLine>
    </div>
  );
}

export default App;

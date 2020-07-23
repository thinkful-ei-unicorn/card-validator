import React from 'react';
import './App.css';
import Header from './Header';
import CardInput from './CardInput';
import ValidityOutput from './ValidityOutput';

function App() {
  return (
    <main className='App'>
      <Header />
      <CardInput />
      <ValidityOutput />
    </main>
  );
}

export default App;
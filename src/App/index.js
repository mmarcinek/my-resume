import React, { useState } from 'react';
import Content from '../Content';
import Navigation from '../Navigation';
import './styles.scss';

function App() {
  const [ pageView, setPageView ] = useState('dev');

  return (
    <div className="app">
      <Navigation setPageView={setPageView} />
      <Content pageView={pageView} />
    </div>
  );
}

export default App;

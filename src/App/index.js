import React, { useState } from 'react';
import Content from '../Content';
import Resume from '../Resume';
import './styles.scss';

function App() {
  const [ viewPage, setViewPage ] = useState('developer');
  console.log(viewPage);

  return (
    <div className="app">
      <button onClick={() => setViewPage('developer')}>Developer</button>
      <button onClick={() => setViewPage('photographer')}>Photographer</button>
      <button onClick={() => setViewPage('explorer')}>Explorer</button>
      <button onClick={() => setViewPage('resume')}>Resume</button>
      <Content view={viewPage} />
    </div>
  );
}

export default App;

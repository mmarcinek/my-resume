import React from 'react';
import resume from '../Assets/resume.pdf';
import './styles.scss';

function Resume() {
  return (
    <div className="resume-container">
      <iframe src={resume} className="resume-iframe" frameBorder="0" alt="resume" title="resume"></iframe>
    </div>
  );
}

export default Resume;

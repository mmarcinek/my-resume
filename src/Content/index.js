import React, { Fragment } from 'react';
import Page from './Page';
import Resume from '../Resume';
import './styles.scss';

export default function Content({ view }){
  let showResume = false;
  let text;
  switch (view) {
    case 'developer':
      text = 'developer';
      break;
    case 'photographer':
      text = 'photographer';
      break;
    case 'explorer':
      text = 'explorer';
      break;
    default:
      showResume = true;
  }
  return (
    <Fragment>
      {!showResume && <Page text={text} />}
      {showResume && <Resume />}
    </Fragment>
  )
}

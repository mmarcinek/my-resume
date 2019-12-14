import React, { Fragment } from 'react';
import Page from './Page';
import Resume from '../Resume';
import Details from '../shared/';
import './styles.scss';

export default function Content({ pageView }){
  const viewObject = Details.filter(detail => detail.action === pageView);

  return (
    <Fragment>
      {(pageView === 'resume') ? (
        <Resume />
          ) : (
          <Page viewObject={viewObject[0]} />
        )}
    </Fragment>
  )
}

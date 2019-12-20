import React from 'react';
import PageItem from './PageItem';

export default function Page({ viewObject }){
  const {
    image,
    text,
  } = viewObject

  return(
    <div className="page">
      <div className="page__left">
        <PageItem item={image} />
        <img src={image} title={viewObject} style={{width: '50vmax'}}/>
      </div>
      <div className="page__right">
        {text.map(item => (
          <PageItem item={item} />
        ))}
      </div>
    </div>
  )
}

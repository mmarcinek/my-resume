import React from 'react';

export default function Page({ viewObject }){
  console.log(viewObject);
  const {
    image,
    text,
  } = viewObject

  return(
    <>
      <img src={image} title={viewObject} style={{width: '50vmax'}}/>
      <div>{text}</div>
    </>
  )
}

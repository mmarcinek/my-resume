import React from 'react';
import NavItems from '../shared/';

export default function Navigation({setPageView}){
  return (
    <nav className="navigation">
      { NavItems.map(nav => (
          <button
            key={nav.action}
            className="navigation__btn"
            onClick={() => setPageView(nav.action)}
          >
            {nav.display}
          </button>
      ))}
    </nav>
  )
}

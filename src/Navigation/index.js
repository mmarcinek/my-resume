import React from 'react';
import NavItems from '../shared/';
import './styles.scss';

export default function Navigation({setPageView}){
  return (
    <nav className="navigation">
      <div className="navigation-left">
        Michael Marcinek
      </div>
      <div className="navigation-right">
        { NavItems.map(nav => (
            <button
              key={nav.action}
              className="navigation__btn"
              onClick={() => setPageView(nav.action)}
            >
              {nav.display}
            </button>
        ))}
      </div>
    </nav>
  )
}

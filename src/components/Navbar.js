import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <>
      <nav className={click? "navbar nav-open" : "navbar" }>
        <a className="nav-trigger" onClick={handleClick} >
          <i className={click ? 'fas fa-chevron-up' : 'fas fa-bars'} />
        </a>
        <ul className={click? "menu-open" : "menu-items"}>
            <li><Link to="/Diakmunkaterkep"><div>Munkák</div><i className={props.value==1?"active-menu-icon fas fa-briefcase":"fas fa-briefcase"}/></Link></li>
            <li><Link to="/kapcsolat"><div>Kapcsolat</div><i className={props.value==2?"active-menu-icon fas fa-address-book":"fas fa-address-book"}/></Link></li>
            <li><Link to="/rolam"><div>Rólam</div><i className={props.value==3?"active-menu-icon fas fa-user-tie":"fas fa-user-tie"}/></Link></li>
        </ul>
      </nav>
    </>
  );
}

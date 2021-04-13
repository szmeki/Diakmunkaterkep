import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className="menu-logo">
          <img src="https://qdiak.hu/wp-content/uploads/2020/08/szovegnelkul_logo.svg"alt="" width="100" height="50" />
            Diákmunkatérkép
        </div>
        <div class="menu-container">
          <li className='menu-item'>
              <button className='navmenu-links'>
                  Kapcsolat
              </button>
          </li>
          <li className='menu-item'>
              <button className='navmenu-links'>
                  Rólam
              </button>
          </li>
          <li className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </li>
        </div>
        <div className={click ? 'nav-menu active' : 'nav-menu'}>
            <div className='nav-item'>
            <button
                className='nav-links'
                value="IT"
                onClick={event => props.onChange(event.target.value)}
                >
                IT
            </button>
            </div>
            <div className='nav-item'>
            <button
                className='nav-links'
                value="Vendéglátós"
                onClick={event => props.onChange(event.target.value)}
                >
                Vendéglátós
            </button>
            </div>
            <div className='nav-item'>
            <button
                className='nav-links'
                value="Szaktudás nélküli"
                onClick={event => props.onChange(event.target.value)}
                >
                Egyéb
            </button>
            </div>
            <div className='nav-item'>
            <button
                className='nav-links'
                value="Mérnöki"
                onClick={event => props.onChange(event.target.value)}
                >
                Mérnöki
            </button>
            </div>
            <div className='nav-item'>
            <button
                className='nav-links'
                value="Kreatív"
                onClick={event => props.onChange(event.target.value)}
                >
                Kreatív
            </button>
            </div>
            <div className='nav-item'>
            <button
                className='nav-links'
                value="Irodai-adminisztratív"
                onClick={event => props.onChange(event.target.value)}
                >
                Irodai
            </button>
            </div>
            <div className='nav-item'>
            <button
                className='nav-links'
                value="Gazdasági"
                onClick={event => props.onChange(event.target.value)}
                >
                Gazdasági
            </button>
            </div>
            <div className='nav-item'>
            <button
                className='nav-links'
                value="Fizikai"
                onClick={event => props.onChange(event.target.value)}
                >
                Fizikai
            </button>
            </div>
            <div className='nav-item'>
            <button
                className='nav-links'
                value=""
                onClick={event => props.onChange(event.target.value)}
                >
                Összes
            </button>
            </div>
        </div>
      </nav>
    </>
  );
}

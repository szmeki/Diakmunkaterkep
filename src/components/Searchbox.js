import React, { useState } from 'react';
import './Searchbox.css';

export default function Searchbox(props) {

  const [click, setClick] = useState("");
  const [click2, setClick2] = useState("");
  const handleClick = (value) => {
      setClick(value);
  }
  const handleClick2 = (value) => {
    setClick2(value);
}

  return (
    <>
      <div className='search-box'>
        <div className={'category-container'}>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onChange(event.target.value); handleClick(event.target.value);}}
                    className={click==="" ? 'search-links-picked' : 'search-links'}
                    value="">Összes
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onChange(event.target.value); handleClick(event.target.value);}}
                    className={click==="IT" ? 'search-links-picked' : 'search-links'}
                    value="IT">IT
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onChange(event.target.value); handleClick(event.target.value);}}
                    className={click==="Vendéglátós" ? 'search-links-picked' : 'search-links'}
                    value="Vendéglátós">Vendéglátós
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onChange(event.target.value); handleClick(event.target.value);}}
                    className={click==="Szaktudás nélküli" ? 'search-links-picked' : 'search-links'}
                    value="Szaktudás nélküli">Egyéb
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onChange(event.target.value); handleClick(event.target.value);}}
                    className={click==="Mérnöki" ? 'search-links-picked' : 'search-links'}
                    value="Mérnöki">Mérnöki
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onChange(event.target.value); handleClick(event.target.value);}}
                    className={click==="Gazdasági" ? 'search-links-picked' : 'search-links'}
                    value="Gazdasági">Gazdasági
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onChange(event.target.value); handleClick(event.target.value);}}
                    className={click==="Irodai-adminisztratív" ? 'search-links-picked' : 'search-links'}
                    value="Irodai-adminisztratív">Irodai
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onChange(event.target.value); handleClick(event.target.value);}}
                    className={click==="Kreatív" ? 'search-links-picked' : 'search-links'}
                    value="Kreatív">Kreatív
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onChange(event.target.value); handleClick(event.target.value);}}
                    className={click==="Fizikai" ? 'search-links-picked' : 'search-links'}
                    value="Fizikai">Fizikai
                </button>
            </div>
        </div>
        <div className={'place-container'}>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onClick(event.target.value); handleClick2(event.target.value);}}
                    className={click2==="" ? 'search-links-picked' : 'search-links'}
                    value="">Összes
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onClick(event.target.value); handleClick2(event.target.value);}}
                    className={click2==="Budapest" ? 'search-links-picked' : 'search-links'}
                    value="Budapest">Budapest
                </button>
                <button
                    onClick={function(event){props.onClick(event.target.value); handleClick2(event.target.value);}}
                    className={click2==="Pestmegye" ? 'search-links-picked' : 'search-links'}
                    value="Pestmegye">Pestmegye
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onClick(event.target.value); handleClick2(event.target.value);}}
                    className={click2==="Dél-Alföld" ? 'search-links-picked' : 'search-links'}
                    value="Dél-Alföld">Dél-Alföld
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onClick(event.target.value); handleClick2(event.target.value);}}
                    className={click2==="Észak-Alföld" ? 'search-links-picked' : 'search-links'}
                    value="Észak-Alföld">Észak-Alföld
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onClick(event.target.value); handleClick2(event.target.value);}}
                    className={click2==="Észak-Magyarország" ? 'search-links-picked' : 'search-links'}
                    value="Észak-Magyarország">Észak-Magyarország
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onClick(event.target.value); handleClick2(event.target.value);}}
                    className={click2==="Közép-Dunántúl" ? 'search-links-picked' : 'search-links'}
                    value="Közép-Dunántúl">Közép-Dunántúl
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onClick(event.target.value); handleClick2(event.target.value);}}
                    className={click2==="Dél-Dunántúl" ? 'search-links-picked' : 'search-links'}
                    value="Dél-Dunántúl">Dél-Dunántúl
                </button>
            </div>
            <div className='search-item'>
                <button
                    onClick={function(event){props.onClick(event.target.value); handleClick2(event.target.value);}}
                    className={click2==="Nyugat-Dunántúl" ? 'search-links-picked' : 'search-links'}
                    value="Nyugat-Dunántúl">Nyugat-Dunántúl
                </button>
            </div>
        </div>
      </div>
    </>
  );
}

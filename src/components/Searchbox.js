import React, { useState, useEffect } from 'react';
import './Searchbox.css';

export default function Searchbox(props) {
  const [checkedCategories,setCheckedCategories]=useState([]);
  
  const handleClick = (value) =>{
      if(checkedCategories.includes(value))
      {
          var array=checkedCategories.filter(function(val,index,arr){
              return val != value;
          });
          setCheckedCategories(array);
          console.log("törlés");
      }
      else{
          var array2=checkedCategories;
          array2.push(value);
          setCheckedCategories(array2);
          console.log("hozzáadás");
        }
        /*console.log(array);
        console.log(array2);
        console.log(checkedCategories);*/
      props.onChange(checkedCategories);
  }

  return (
    <>
      <div className='searchbox'>
        <div className={'category-container'}>
            <label className='search-item'>Összes
                <input
                    onClick={event => handleClick(event.target.value)}
                    className='search-links'
                    type="checkbox"
                    value="">
                </input>
            </label>
            <label className='search-item'>IT
                <input
                    onClick={event => handleClick(event.target.value)}
                    className='search-links'
                    type="checkbox"
                    value="IT">
                </input>
            </label>
            <label className='search-item'>Vendéglátós
                <input
                    onClick={event => props.onChange(event.target.value)}
                    className='search-links'
                    type="checkbox"
                    value="Vendéglátós">
                </input>
            </label>
            <label className='search-item'>Egyéb
                <input
                    onClick={event => props.onChange(event.target.value)}
                    className='search-links'
                    type="checkbox"
                    value="Szaktudás nélküli">
                </input>
            </label>
            <label className='search-item'>Mérnöki
                <input
                    onClick={event => props.onChange(event.target.value)}
                    className='search-links'
                    type="checkbox"
                    value="Mérnöki">
                </input>
            </label>
            <label className='search-item'>Gazdasági
                <input
                    onClick={event => props.onChange(event.target.value)}
                    className='search-links'
                    type="checkbox"
                    value="Gazdasági">
                </input>
            </label>
            <label className='search-item'>Irodai
                <input
                    onClick={event => props.onChange(event.target.value)}
                    className='search-links'
                    type="checkbox"
                    value="Irodai-adminisztratív">
                </input>
            </label>
            <label className='search-item'>Kreatív
                <input
                    onClick={event => props.onChange(event.target.value)}
                    className='search-links'
                    type="checkbox"
                    value="Kreatív">
                </input>
            </label>
            <label className='search-item'>Fizikai
                <input
                    onClick={event => props.onChange(event.target.value)}
                    className='search-links'
                    type="checkbox"
                    value="Fizikai">
                </input>
            </label>
        </div>
      </div>
    </>
  );
}

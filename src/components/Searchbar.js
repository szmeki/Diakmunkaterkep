import React from 'react';
import './Searchbar.css';

export default function Searchbox(props) {
 

  return (
    <>
       <div className="search-container">
            <input
              class="search-input"
              type="text"
              placeholder="Keresés"
              value={props.searchTerm}
              onChange={event => props.onChange(event)}
            />
          </div>
    </>
  );
}

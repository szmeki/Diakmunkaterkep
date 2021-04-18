import React, { useEffect, useState, useLayoutEffect } from "react";
import Tabletop from "tabletop";
import ReactPaginate from 'react-paginate';
import './Home.css';
import Searchbox from "./Searchbox";
import LoadingScreen from "./LoadingScreen"
import Navbar from "./Navbar"
import szovegnelkul_logo from "./szovegnelkul_logo.svg"



export default function Home(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryTerm, setCategoryTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [forcePageCount, setForcePageCount] = useState(0);
  const [offset, setOffset] = useState(0);


  const handleChange = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage);
};

  useEffect(() => {
    console.log(props.data);
    const results=props.data.filter(job =>
      job.Pozíció.toLowerCase().includes(searchTerm.toLowerCase())&&job.Kategória.includes(categoryTerm)
    );
    setPageCount(Math.ceil(results.length / perPage));
    setForcePageCount(offset);
    setSearchResults(results.slice(offset * perPage, (offset * perPage) + perPage));
  },[searchTerm,categoryTerm,offset,props.data]);

  
    return (
      <>
      {props.loading===false ? (
      <div className="Home">
      <Navbar value={1} />
      <div className="body-container">
        <div className="home-title">
          <img src={szovegnelkul_logo} className="home-logo"/><h1>Diákmunkatérkép</h1>
        </div>
         <div className="search-container">
            <input
              class="search-input"
              type="text"
              placeholder="Keresés"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="filter-picker">         
          <Searchbox onChange={function(value){setCategoryTerm(value); setForcePageCount(0); setOffset(0);}}/>
          </div>
         <div class="jobs">
         <div class="jobs-list-left">{
            searchResults.slice(0,perPage/2).map(obj => {
              return (
                     <div class="jobs-wrapper" key={obj.ID}>
                        <h1>{obj.Pozíció}</h1>                          
                          <div class="jobs-description">
                            <b>{obj.Leírás.slice(0,100)+"..."}</b>
                          </div>
                          <div class="jobs-worktime">
                            <p>{obj.Hetimunkaidő}</p>
                          </div>
                          <div class="jobs-salary">
                            <p>{obj.Fizetés}</p>
                          </div>
                          <div class="jobs-places">
                            <p>{obj.Hely}</p>
                          </div>
                          <button class="btn">
                            <span class="btn-text"><a href = {obj.URL} >Érdekel</a></span>
                          </button>
                      </div>
             )
            })
          }
        </div>
        <div class="jobs-list-right">{
            searchResults.slice(perPage/2,perPage).map(obj => {
              return (
                     <div class="jobs-wrapper" key={obj.ID}>
                        <h1>{obj.Pozíció}</h1>
                          <div class="jobs-description">
                            <b>{obj.Leírás.slice(0,100)+"..."}</b>
                          </div>
                          <div class="jobs-worktime">
                            <p>{obj.Hetimunkaidő}</p>
                          </div>
                          <div class="jobs-salary">
                            <p>{obj.Fizetés}</p>
                          </div>
                          <div class="jobs-places">
                            <p>{obj.Hely}</p>
                          </div>
                          <button class="btn">
                            <span class="btn-text"><a href = {obj.URL} >Érdekel</a></span>
                          </button>
                        </div>
             )
            })
          }
        </div>

        </div>
        </div>
        <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    forcePage={forcePageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
      </div>
      ) :
      <LoadingScreen />}
      </>
    );
}
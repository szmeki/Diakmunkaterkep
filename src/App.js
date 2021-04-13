import React, { useEffect, useState, useLayoutEffect } from "react";
import Tabletop from "tabletop";
import Navbar from './components/Navbar';
import ReactPaginate from 'react-paginate';
import './App.css';
import Searchbox from "./components/Searchbox";

export default function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryTerm, setCategoryTerm] = useState('');
  const [categoryTerm2, setCategoryTerm2] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(0);


  const handleChange = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage)
};
  
  useLayoutEffect(() => {
    Tabletop.init({
      key: "1XM0JY9oGbkcpoBh076tLCVXkIXptJP6ITqTDkLqxmx4",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));   
  },[]);

  useEffect(() => {
    const results=data.filter(job =>
      job.Pozíció.toLowerCase().includes(searchTerm.toLowerCase())&&job.Kategória.includes(categoryTerm)
    );
    setPageCount(Math.ceil(results.length / perPage));
    setSearchResults(results.slice(offset * perPage, (offset * perPage) + perPage));
  },[searchTerm,data,categoryTerm,offset]);

  useEffect(() => {
    var results=[];
    var helpTerm;
    if(!categoryTerm2.includes("")){
    for(var i=0;i<categoryTerm2.length;++i){
    helpTerm=categoryTerm2[i];
    const help=data.filter(job =>
      job.Pozíció.toLowerCase().includes(searchTerm.toLowerCase())&&job.Kategória.includes(helpTerm));
    }
    }
    else{results=data;}
    console.log(results);
    setPageCount(Math.ceil(results.length / perPage));
    setSearchResults(results.slice(offset * perPage, (offset * perPage) + perPage));
  },[categoryTerm2]);

    return (
      
      <div className="App">
        <Navbar onChange={value => setCategoryTerm(value)}/>
          <div class="search-container">
            <input
              class="search-input"
              type="text"
              placeholder="Keresés"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
         <Searchbox onChange={value => setCategoryTerm2(value)}/>
         <div id="book-details">
          {
            searchResults.map(obj => {
              return (
                     <div class="jobs-list" key={obj.ID}>
                        <h1>{obj.Pozíció}</h1>
                        <div class="jobs-container">
                          <div class="jobs-description">
                            <b>{obj.Leírás}</b>
                          </div>
                          <div class="jobs-wotktime">
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
                      </div>
             )
            })
          }
        </div>
        <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
      </div>

    );
}
import Tabletop from "tabletop";
import React, { useEffect, useState, useLayoutEffect } from "react";
import Navbar from './components/Navbar';
import ReactPaginate from 'react-paginate';
import './App.css';
import Searchbox from "./components/Searchbox";
import Component from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import LoadingScreen from "./components/LoadingScreen"



export default function App() {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2800)
  }, [])

  useLayoutEffect(() => {
    Tabletop.init({
      key: "1XM0JY9oGbkcpoBh076tLCVXkIXptJP6ITqTDkLqxmx4",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));   
  },[]);

    return (
      <>
      <main>
        <Switch>
          <Route path='/Diakmunkaterkep' exact render={(props) => <Home data={data} loading={loading}/>}/>
          <Route path='/rolam' component={About} />
          <Route path='/kapcsolat' component={Contact} />
        </Switch>
      </main>
      </>
    );
}
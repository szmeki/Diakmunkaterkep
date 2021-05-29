import Tabletop from "tabletop";
import React, { useEffect, useState, useLayoutEffect } from "react";
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Notfound from './components/Notfound';



export default function App() {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2800)
  }, [])

  useLayoutEffect(() => {
    Tabletop.init({
      key: "1-HTQaqZcVIakBDn2he2hwR-xISyfwjXgLE6KyIBEahA",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  },[]);

    return (
      <>
      <main>
        {data.length>0 || loading?
        (<Switch>
          <Redirect from="/reload" to="/" />
          <Route path='/' exact render={(props) => <Home data={data} loading={loading}/>}/>
          <Route path='/Diakmunkaterkep' exact render={(props) => <Home data={data} loading={loading}/>}/>
          <Route path='/rolam' component={About} />
          <Route path='/kapcsolat' component={Contact} />
          <Route path='*' component={Notfound} />
        </Switch>):
          (<Route component={Notfound} />)}
      </main>
      </>
    );
}
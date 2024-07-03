import './App.css';

import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const App =()=>{
  const pageSize=12
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
      <>
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={6} apiKey={apiKey} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={6} apiKey={apiKey} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={6} apiKey={apiKey} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={6} apiKey={apiKey} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={6} apiKey={apiKey} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={6} apiKey={apiKey} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={6} apiKey={apiKey} country="in" category="technology"/>}/>

        </Routes>
        </Router>
      </div>
      </>
    )

}

export default App;

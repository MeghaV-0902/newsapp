import './App.css';

import React, {useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App() {
  const apiKey=process.env.REACT_APP_NEWS_API
  const pageSize=20;
  const [progress,setProgress] = useState(0)

    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={ setProgress} apiKey={ apiKey} key = "general" pageSize={pageSize} country="in" category=""/>}></Route>
            <Route exact path="/business" element={<News setProgress={ setProgress} apiKey={ apiKey}  key = "business" pageSize={pageSize} country="in" category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={ setProgress} apiKey={ apiKey}  key = "entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
            <Route exact path="/general" element={<News setProgress={ setProgress} apiKey={ apiKey}  key = "general" pageSize={pageSize} country="in" category="general"/>}></Route>
            <Route exact path="/health" element={<News setProgress={ setProgress} apiKey={ apiKey}  key = "health" pageSize={pageSize} country="in" category="health"/>}></Route>
            <Route exact path="/science" element={<News setProgress={ setProgress} apiKey={ apiKey}  key = "science" pageSize={pageSize} country="in" category="science"/>}></Route>
            <Route exact path="/sports" element={<News setProgress={ setProgress} apiKey={ apiKey}  key = "sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News setProgress={ setProgress} apiKey={ apiKey} key = "technology"  pageSize={pageSize} country="in" category="technology"/>}></Route>
          </Routes>
        </Router>
      </div>
    )
}

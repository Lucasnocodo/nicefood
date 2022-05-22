import React, { useState, useCallback } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from './Pages/Home';
import Results from './Pages/Results.jsx';
import Tags from './Pages/Tags';
import SideBar from './Containers/SideBar.jsx';
import Followers from './Containers/Followers.jsx';
import getUserApi from './apis/getUser.js';


import './App.css';
const { innerWidth } = window;
const isMobile = innerWidth <= 440
function App() {
  let navigate = useNavigate();
  let location = useLocation();
  const isHomePage = location.pathname === '/'
  const [sliderValue, setSliderValue] = useState(15)
  const [keyword, setKeyword] = useState('')
  const [FollowerResults, setFollowerResults] = useState([])
  const [PicResults, setPicResults] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = useCallback((type) => {
    navigate('/result')
    setIsLoading(true)
    let searchPage = page
    if (type === 'more') {
      /** infinity mode */
      searchPage = 1

      /** normal mode */
      // searchPage += 1
      // setPage(pre => pre + 1)
    }
    getUserApi(searchPage, sliderValue, keyword)
      .then(function (response) {
        setPicResults(pre => [...pre, ...response.data])
        setIsLoading(false)
      });
  }, [keyword, navigate, page, sliderValue])

  const renderSideBar = () => {
    if (isMobile) {
      if (isHomePage) {
        return <SideBar />
      } else {
        return null
      }
    } else {
      return <SideBar />
    }
  }

  return (
    <div className={isMobile ? 'mobile-app' : 'app'}>
      {renderSideBar()}
      <Followers results={FollowerResults} />
      <div className={isMobile ? '' : 'content'}>
        <Routes>
          <Route
            path="/"
            element={<Home
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              setKeyword={setKeyword}
              keyword={keyword}
              setFollowerResults={setFollowerResults}
              handleSearch={handleSearch}
              isMobile={isMobile} />}
          />
          <Route
            path="/result"
            element={<Results results={PicResults}
              handleSearch={handleSearch}
              setPage={setPage}
              setResults={setPicResults}
              isLoading={isLoading}
              sliderValue={sliderValue}
              setKeyword={setKeyword}
              isMobile={isMobile} />}
          />
          <Route path="/tag" element={<Tags isMobile={isMobile} />} />

        </Routes>
      </div>
    </div >
  );
}

export default App;

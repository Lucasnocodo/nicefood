import React, { useEffect } from 'react'

import InputX from '../Components/InputX.jsx';
import SliderX from '../Components/SliderX.jsx';
import ButtonX from '../Components/ButtonX.jsx';
import getUserApi from '../apis/getUser.js';

import './home.scss'

const { innerWidth } = window;
const isSmallScreen = innerWidth <= 1439

export default function Home({ sliderValue, setSliderValue,
    handleSearch, setKeyword, setFollowerResults, isMobile }) {


    useEffect(() => {
        if (!isSmallScreen) {
            getUserApi().then(function (response) {
                setFollowerResults(response.data)
            });
        }
    }, [setFollowerResults])

    return (
        <div className='home-container'>
            <div className={isMobile ? 'home-header' : ''}>
                {isMobile && <p className='logo'>LOGO</p>}
            </div>

            <section className='search-header'>
                <p className='title'> Search</p>
                <InputX onChange={(e) => setKeyword(e.target.value)} placeholder='Keyword' />
            </section>
            <section className='search-slider'>
                <p className='title'> # Of Results Per Page</p>
                <div className='results-text'>
                    <span className='result-numer'>{sliderValue}</span>
                    <span className='result'>results</span>
                </div>
                <SliderX
                    setSliderValue={setSliderValue}
                    sliderValue={sliderValue}
                    isMobile={isMobile}
                />
            </section>
            <div className='search-box'>
                <ButtonX variant={isMobile ? 'mobile' : ''} onClick={() => handleSearch()}>SEARCH</ButtonX>
            </div>
        </div>
    )
}

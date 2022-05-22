import React, { memo, useMemo } from 'react'
import ButtonX from '../Components/ButtonX.jsx';
import SkeletonX from '../Components/SkeletonX.jsx';
import RwdHeader from '../Components/RwdHeader.jsx';

import { useNavigate } from "react-router-dom";

import './results.scss'
function Results({ results, handleSearch, isMobile,
    setPage, setResults, isLoading, sliderValue, setKeyword }) {
    let navigate = useNavigate();
    const handleBack = () => {
        navigate('/')
        setPage(1)
        setResults([])
        setKeyword('')
    }

    const handleImgError = ({ currentTarget }, index) => {
        currentTarget.onerror = null;
        currentTarget.src = `./images/animal${index % 3 + 1}.jpeg`;
    }

    const PicResults = useMemo(() => (
        <>
            {results.map(({ id, avater, username, name }, index) => (
                <div key={id} className='result-item'>
                    <img src={avater} alt='' className={isMobile ? 'mibile-item-pic' : 'item-pic'} onError={(e) => handleImgError(e, index)} />
                    <p className='item-title'>{name}</p>
                    <p className='item-username'>by {username}</p>
                </div>
            ))
            }
        </>
    ), [isMobile, results])

    const renderContent = () => {
        if (isLoading) {
            return (
                <>
                    {PicResults}
                    {Array.from(new Array(sliderValue)).map((item, index) => (
                        <div key={index} className='result-item'>
                            <SkeletonX className={isMobile ? 'mibile-item-pic' : 'item-pic'} isMobile={isMobile} />
                        </div>
                    ))}
                </>
            )
        } else if (results.length > 0) {
            return (<>
                {PicResults}
                <div className='more-box'>
                    <ButtonX width={343} onClick={() => handleSearch('more')}>More</ButtonX>
                </div>
            </>
            )
        } else {
            return <p className='no-results'>No Results</p>
        }
    }

    return (
        <div className='result-container'>
            <div className='sub-header'>
                <RwdHeader onClick={handleBack} isMobile={isMobile} />
                <p className='title'>Results</p>
            </div>
            <div className='result-content'>
                {renderContent()}
            </div>
        </div>
    )
}



export default memo(Results)
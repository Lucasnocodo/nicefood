import React, { useState, useEffect } from 'react'
import SkeletonX from '../Components/SkeletonX.jsx';
import RwdHeader from '../Components/RwdHeader.jsx';
import getUserApi from '../apis/getUser.js';
import { useNavigate } from "react-router-dom";

import './home.scss'
import './tags.scss'

export default function Tags({ isMobile }) {
    let navigate = useNavigate();
    const [stagResults, setTagResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getUserApi(1, 64)
            .then(function (response) {
                setTagResults(pre => response.data)
                setIsLoading(false)
            });
    }, [])
    const handleBack = () => {
        navigate('/')
    }
    const renderContent = () => {
        if (isLoading) {
            return (
                <>
                    {Array.from(new Array(15)).map((item, index) => (
                        <div key={index} className='tag-item'>
                            <SkeletonX width={150} height={150} />
                        </div>
                    ))}
                </>
            )
        } else if (stagResults.length > 0) {
            return (<>
                {stagResults.map(({ id, name, username }) => {
                    const fakeTagName = name.split(' ')[0]
                    return <div key={id} className='tag-item'>
                        <div className='box'>
                            <div className='tag'>
                                <p className='tag-name ellipsis'>{fakeTagName}</p>
                            </div>
                        </div>
                        <p className='tag-title ellipsis'>{name}</p>
                        <p className='item-username'>{username.length} Results</p>
                    </div>
                })}
            </>)
        } else {
            return <p className='no-results'>No Results</p>
        }
    }

    return (
        <div className='tags-container'>
            <div className='sub-header'>
                <RwdHeader onClick={handleBack} isMobile={isMobile} />
                <p>Tags</p>
            </div>
            <div className='result-content'>
                {renderContent()}
            </div>
        </div>
    )
}

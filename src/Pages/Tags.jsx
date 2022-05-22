import React, { useState, useEffect, useMemo } from 'react'
import SkeletonX from '../Components/SkeletonX.jsx';
import RwdHeader from '../Components/RwdHeader.jsx';
import getUserApi from '../apis/getUser.js';
import { useNavigate } from "react-router-dom";

import './tags.scss'
const FETCHPOINT = 1000
const FETCHSIZE = 64
const FETCHPAGE = 1

export default function Tags({ isMobile }) {
    let navigate = useNavigate();
    const [tagResults, setTagResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [needFetch, setNeedFetch] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getUserApi(FETCHPAGE, FETCHSIZE)
            .then(function (response) {
                setTagResults(pre => response.data)
                setIsLoading(false)
            });
    }, [])

    useEffect(() => {
        if (needFetch) {
            setIsLoading(true)
            getUserApi(FETCHPAGE, FETCHSIZE)
                .then(function (response) {
                    setTagResults(pre => [...pre, ...response.data])
                    setIsLoading(false)
                    setNeedFetch(false)
                });
        }

    }, [needFetch])

    const handleBack = () => {
        navigate('/')
    }

    let lastKnownScrollPosition = 0;
    let ticking = false;

    function fetchData(scrollPos) {
        let box = document.querySelector('.result-content');
        let height = box.offsetHeight;
        if (height - scrollPos < FETCHPOINT) {
            setNeedFetch(true)
        }
    }

    document.addEventListener('scroll', function (e) {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function () {
                fetchData(lastKnownScrollPosition);
                ticking = false;
            });
            ticking = true;
        }
    });

    const tags = useMemo(() => (<>
        {tagResults.map(({ id, name, username }, index) => {
            // take first name to be tag and length of username to be results number.
            const fakeTagName = name.split(' ')[0]
            return <div key={`${id}_${index}`} className='tag-item'>
                <div className='box'>
                    <div className='tag'>
                        <p className='tag-name ellipsis'>{fakeTagName}</p>
                    </div>
                </div>
                <p className='tag-title ellipsis'>{name}</p>
                <p className='item-username'>{username.length} Results</p>
            </div>
        })}
    </>), [tagResults])

    const renderContent = () => {
        if (isLoading) {
            return (
                <>
                    {tags}
                    {Array.from(new Array(15)).map((item, index) => (
                        <div key={index} className='tag-item'>
                            <SkeletonX width={150} height={150} />
                        </div>
                    ))}
                </>
            )
        } else if (tagResults.length > 0) {
            return (tags)
        } else {
            return <p className='no-results'>No Results</p>
        }
    }

    return (
        <div className='tags-container'>
            <div className='sub-header'>
                <RwdHeader onClick={handleBack} isMobile={isMobile} />
                <p className='title'>Tags</p>
            </div>
            <div className='result-content'>
                {renderContent()}
            </div>
        </div>
    )
}

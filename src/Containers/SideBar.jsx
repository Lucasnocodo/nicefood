import React, { memo, useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

import './sidebar.scss'

const list = [
    {
        title: 'Home',
        link: '/',
        tagHeightLight: ['/', '/result']
    },
    {
        title: 'Tag',
        link: '/tag',
        tagHeightLight: ['/tag']

    },
]
function SideBar() {
    let navigate = useNavigate();
    let location = useLocation();
    const { pathname } = location
    const [showDot, setShowDot] = useState({ Home: false, Tag: true })
    const handleItemClick = (link) => {
        navigate(link)
    }

    const checkSelected = (url) => {
        console.log('url', url)
        console.log('pathname', pathname)
        console.log('url.indexOf(pathname)', url.indexOf(pathname))
        if (url.indexOf(pathname) >= 0) {
            document.cookie = `${pathname}=visited`
            return 'selected'
        }
    }

    useEffect(() => {
        if (document.cookie.indexOf("/tag") !== -1 || pathname === '/tag') {
            setShowDot(pre => ({ ...pre, Tag: false }))
        }
    }, [pathname])


    return (
        <nav className='side-bar-container'>
            <p className='logo'>LOGO</p>
            {list.map(({ title, link, tagHeightLight }) => (
                <div key={title} className='nav-item' onClick={() => handleItemClick(link)}>
                    <div className='new-page' style={showDot[title] ? null : { display: 'none' }}></div>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={`${checkSelected(tagHeightLight)} svg-icon`} fillRule="evenodd" clipRule="evenodd" d="M6.34146 6.10352e-05C5.51304 6.10352e-05 4.84146 0.671634 4.84146 1.50006C4.84146 2.32849 5.51304 3.00006 6.34146 3.00006H16.7578V12.4234C16.7578 13.2518 17.4294 13.9234 18.2578 13.9234C19.0863 13.9234 19.7578 13.2518 19.7578 12.4234V2.50006C19.7578 1.11935 18.6386 6.10352e-05 17.2578 6.10352e-05H6.34146ZM2 4.9147H13.122C14.2265 4.9147 15.122 5.81013 15.122 6.9147V18.0366C15.122 19.1412 14.2265 20.0366 13.122 20.0366H2C0.895432 20.0366 0 19.1412 0 18.0366V6.9147C0 5.81013 0.89543 4.9147 2 4.9147Z" />
                    </svg>
                    <span className={checkSelected(tagHeightLight)}>{title}</span>
                </div>
            ))}
        </nav>
    )
}

export default memo(SideBar)

import React from 'react'
import { useLocation } from "react-router-dom";
import './rwdHeader.scss'

export default function RwdHeader({ onClick, isMobile }) {
    let location = useLocation();
    const isResultsPage = location.pathname === '/result'
    return (<>
        {isMobile ?
            <div className='mobile-header'>
                <BackIcon onClick={onClick} />
                <span>Home Page</span>
            </div>
            :
            isResultsPage && <BackIcon onClick={onClick} />
        }
    </>
    )
}

const BackIcon = ({ onClick }) => (
    <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        className='back-icon'
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
    >
        <path d="M19.2702 4.10349L17.3333 2.16663L6.5 13L17.3333 23.8333L19.2702 21.8964L10.3737 13L19.2702 4.10349Z" fill="white" />
    </svg>
)

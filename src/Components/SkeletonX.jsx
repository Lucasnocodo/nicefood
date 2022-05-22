import React from 'react'
import Skeleton from '@mui/material/Skeleton'

export default function SkeletonX({ isMobile }) {
    return (
        <>
            <Skeleton sx={{ bgcolor: 'primary.dark' }} variant="rectangular" height={isMobile ? 222.67 : 146} />
            <Skeleton sx={{ bgcolor: 'primary.dark' }} />
            <Skeleton sx={{ bgcolor: 'primary.dark' }} width="60%" />
        </>
    )
}

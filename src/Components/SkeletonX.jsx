import React from 'react'
import Skeleton from '@mui/material/Skeleton'

export default function SkeletonX({ isMobile, height, width }) {
    let heightValue = isMobile ? 222.67 : 146
    if (height) {
        heightValue = height
    }
    return (
        <>
            <Skeleton sx={{ bgcolor: 'primary.dark' }} variant="rectangular" width={width} height={heightValue} />
            <Skeleton sx={{ bgcolor: 'primary.dark' }} />
            <Skeleton sx={{ bgcolor: 'primary.dark' }} width="60%" />
        </>
    )
}

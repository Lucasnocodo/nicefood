import React from 'react'
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

const BaseSlider = styled(Slider)(({ ismobile }) => (
    {
        '& .MuiSlider-rail': {
            opacity: 0.3,
            background: 'white',
            height: '9px'
        },
        '& .MuiSlider-thumb': {
            background: '#1b1b1b',
            border: '6px solid #ffd05d ',
            height: '25px',
            width: '25px',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
            },
            '&:before': {
                display: 'none',
            },
        },
        '& .MuiSlider-track': {
            background: 'linear-gradient( -90deg,#ffd25f, #FF5c01)',
            border: 'none',
            height: '9px'
        },
        '& .MuiSlider-mark': {
            backgroundColor: 'transparent',

        },
        '& .MuiSlider-markLabel': {
            fontSize: `${ismobile === 'true' ? '14px' : '16px'}`,
            top: `${ismobile === 'true' ? '30px' : '35px'}`,

        },

    }
));

export default function SliderX({ sliderValue, setSliderValue, isMobile }) {

    const rederLabel = (value) => (
        <span style={sliderValue === value ? { opacity: 1 } : { opacity: 0.5 }}>
            {value}
        </span>
    )

    const marks = [
        {
            value: 3,
            label: rederLabel(3),
        },
        {
            value: 6,
            label: rederLabel(6),
        },
        {
            value: 9,
            label: rederLabel(9),
        },
        {
            value: 12,
            label: rederLabel(12),
        },
        {
            value: 15,
            label: rederLabel(15),
        },
        {
            value: 19,
            label: rederLabel(50),
        },
    ];

    const handleValueChange = (e, newValue) => {
        if (newValue === 19) {
            setSliderValue(50)
        } else {
            setSliderValue(newValue)
        }
    }

    return (
        <>
            <BaseSlider
                step={null}
                marks={marks}
                defaultValue={sliderValue}
                max={19.5}
                ismobile={`${isMobile}`}
                onChangeCommitted={handleValueChange}
                min={2.8} />
        </>
    )
}

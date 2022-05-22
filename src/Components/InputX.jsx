import React from 'react'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const BaseTextField = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
        height: '60px',
        fontSize: '14px',
        fontWeight: 400,
        color: '#fff',
        borderRadius: '6px',
        '& fieldset': {
            border: '3px solid rgba(255, 255, 255, 0.5)',
        },
        '&:hover fieldset, &.Mui-focused fieldset': {
            color: '#fff',
            border: '3px solid #FF9B33'
        },
    }
}));

export default function ButtonX(props) {
    const { placeholder, onChange } = props
    return (
        <>
            <BaseTextField fullWidth onChange={onChange} variant="outlined" placeholder={placeholder} />
        </>
    )
}

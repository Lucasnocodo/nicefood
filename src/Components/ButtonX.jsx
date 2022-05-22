import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const BaseButton = styled(Button)(() => ({
  height: '40px',
  fontFamily: 'Ubuntu',
  fontSize: '12px',
  fontWeight: 700,
}));

const NormalButton = styled(BaseButton)(() => ({
  color: "#181818",
  backgroundColor: '#fff',
  width: '343px',
  fontSize: '14px',
  borderRadius: '4px',
  letterSpacing: '-0.9px',

  '&:hover': {
    backgroundColor: "#181818",
    color: '#fff',
    border: '1px solid #fff'
  },
}));

const OutlinedButton = styled(BaseButton)(() => ({
  textTransform: 'capitalize',
  backgroundColor: "#181818",
  color: '#fff',
  border: '1px solid #fff',
  minWidth: '60px',
  width: '57px',
  borderRadius: '20px',
  height: '28px',
  letterSpacing: '-0.4px',

  '&:hover': {
    color: "#181818",
    backgroundColor: '#fff',
  },
}));

const ContainedButton = styled(NormalButton)(() => ({
  textTransform: 'capitalize',
  width: '76px',
  height: '28px',
  float: 'right',
  fontSize: '12px',
  borderRadius: '20px',
  letterSpacing: 0,

}));

const MobileButton = styled(NormalButton)(() => ({
  width: 'calc(100% - 40px)',
}));

export default function ButtonX(props) {
  const { variant, children, onClick } = props

  const renderButton = () => {
    switch (variant) {
      case 'contained':
        return <ContainedButton onClick={onClick}>{children}</ContainedButton>
      case 'outlined':
        return <OutlinedButton onClick={onClick}>{children}</OutlinedButton>
      case 'mobile':
        return <MobileButton onClick={onClick}>{children}</MobileButton>
      default:
        return <NormalButton onClick={onClick}>{children}</NormalButton>
    }
  }

  return (
    <>
      {renderButton()}
    </>
  )
}

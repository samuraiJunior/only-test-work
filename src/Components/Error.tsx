import React from 'react'
import styled from 'styled-components'

interface Iprops {
  message: string,
}

const Error: React.FC<Iprops> = ({ message }) => {
  return (
    <ErrorWrap>
      <ErrorCircle>
        <img src='!.svg' alt='error'/>
      </ErrorCircle>
      <p>{message}</p>
    </ErrorWrap>
  )
}

export default Error

const ErrorWrap=styled("div")`
width: 100%;
height: 60px;
background: #F5E9E9;
border: 1px solid #E26F6F;
border-radius: 8px;
padding:20px;
display: flex;
align-items:center;
&>*+*{
  margin-left:14px;
}
p{
    font-size: 14px;
    line-height: 17px;
    color: #000000;
}
`

const ErrorCircle=styled("div")`
width: 20px;
height: 20px;
border-radius:50%;
background: #FFC8C8;
display: flex;
justify-content: center;
align-items: center;
`
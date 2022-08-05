import React from 'react'
import styled from 'styled-components'


interface Iprops {
  text?: string,
  disabled?: boolean,
  styles?: string,
  func?:()=>void,
}
interface ISumbitButtonProps {
  
  styles?: string,
}


const Button: React.FC<Iprops> = ({ text,  disabled = false, styles, func }) => {
  return (
    <SumbitButton onClick={func} disabled={disabled} styles={styles} >
      {text}
    </SumbitButton>
  )
}

export default Button

const SumbitButton = styled("button") <ISumbitButtonProps>`
width: 100%;
height: 60px;
background: #4A67FF;
border-radius: 8px;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #FFFFFF;
&:disabled{
  background: #99A9FF;
}
${props=>props.styles?
  props.styles: ``
}
`
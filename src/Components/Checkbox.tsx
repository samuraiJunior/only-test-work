import React, { useState } from 'react'
import styled from 'styled-components'
import { GeneralProps } from '../Types/MainTypes'



interface IStyledCheckbox {
  check?: boolean
}

const Checkbox:React.FC<GeneralProps>=({label, register, rules})=> {
  const [check, SetCheck] = useState(false)

  return (
    <CheckboxWrapper>
      <label>{label}</label>
      <ReaclCheckbox {...register(rules.name, rules.validation)} checked={check} type={"checkbox"} />
      <StyledCheckbox  onClick={() => SetCheck(!check)} check={check}></StyledCheckbox>
    </CheckboxWrapper>
  )
}

export default Checkbox

const StyledCheckbox = styled("span") <IStyledCheckbox>`
width: 20px;
height: 20px;
border: 1px solid #000000;
border-radius: 4px;
display: inline-flex;
align-items:center;
justify-content:center;
&::before{
  ${props => props.check ?
    `content:"";
    width: 14px;
  height: 14px;
  background: #4A67FF;
  border-radius: 2px;
  display: inline;
  position:absolute;
  `: "display:none"

  }
}
`

const ReaclCheckbox = styled("input")`
appearance: none;
width: 1;
height: 1;
position: absolute;
visibility: hidden;
`

const CheckboxWrapper = styled("div")`
display:flex;
align-items:center;
justify-content:flex-end;
flex-direction:row-reverse;
&>*+*{
  margin-right:14px;
}
`
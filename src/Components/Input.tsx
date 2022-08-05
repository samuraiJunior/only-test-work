import React from 'react'
import styled from 'styled-components'
import { GeneralProps } from '../Types/MainTypes'

interface Iprops extends GeneralProps {
  type: "text" | "password"
}
const Input: React.FC<Iprops> = ({ label, register, rules, type, errors }) => {
  
  return (
    <InputWrapper>
      <label>{label}</label>
      <input  {...register(rules.name, rules.validation)} type={type} />
      {errors[rules.name]?<p>{errors[rules.name].message}</p>:null}
    </InputWrapper>
  )
}

export default Input

const InputWrapper = styled("div")`
display:flex;
flex-direction:column;
align-items:flex-start;
margin-bottom:20px;
input{
  width: 100%;
  height: 60px;
  background: #F5F5F5;
  border-radius: 8px;
  font-size: 16px;
  line-height: 19px;
  color: #232323;
  padding:21px 20px 20px 20px
}
label{
  font-weight:400;
  font-size: 16px;
  line-height: 19px;
  color: #1F1F1F;
  margin-bottom:10px;

}
p{
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #E26F6F;
    margin-top:8px;
}
`
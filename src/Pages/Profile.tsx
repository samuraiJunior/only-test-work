import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Components/Button'

interface Iprops {
  login: string
}

const Profile: React.FC<Iprops> = ({ login }) => {
  const navigate=useNavigate()
  const logout=()=>{
    navigate("/login")
  }
  return (
    <ProfileWrapper>
    <Greeting>Здравствуйте, <b>{login}</b> </Greeting>


    <Button func={logout} text='Выйти' styles={`
    width: 200px;
    height: 60px;
    background: #F5F5F5;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin-top:50px;
    `}/>
    </ProfileWrapper>
  )
}

export default Profile

const ProfileWrapper = styled("div")`
position: absolute;
margin-top: -25px;
display: flex;
flex-direction: column;
align-items: center;
`

const Greeting = styled("p")`
font-size: 40px;
line-height: 48px;
color: #000000;

`


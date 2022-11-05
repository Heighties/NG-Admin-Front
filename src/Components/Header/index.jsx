import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../../assets/logoNB.png'
// import { StyledLink } from '../../utils/style/Atom'
// import colors from '../../utils/style/colors'


const HomeLogo = styled.img`
  /* height: 70px; */
  width: 150px;
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  padding-top: 20px;  
  padding-bottom: 40px;
`

const StyledLink = styled(Link)`
  /* cursor: pointer;
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  text-align: center; */
`

function Header() {
  return (
    <NavContainer>
    <HomeLogo src={LOGO} />
    
    <StyledLink to='/'>Accueil</StyledLink>
    <StyledLink to='/login'>Login</StyledLink>
    <StyledLink to='/signup'>Sign Up</StyledLink>
    </NavContainer>
  )
}

export default Header
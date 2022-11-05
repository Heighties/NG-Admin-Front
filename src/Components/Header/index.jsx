import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate('/login')
  }
  return (
    <NavContainer>
    <HomeLogo src={LOGO} />
    <StyledLink to='/'>Accueil</StyledLink>
    <ul className='nav-ul'>
            {/* si logé on ne voit pas le bouton signup et inversement */}
            <li>{auth ? <Link onClick={logout} to='/login'>Logout</Link> : <Link to='/signup'>Sign Up</Link>}</li>
            { 
              auth ? <li><Link onClick={logout} to='/signup'>Logout</Link></li> 
              :<> 
              <li><Link to='/'>Sign Up</Link></li>
              <li><Link to='/login'>Login</Link></li>
              </>
            }
        </ul>
    </NavContainer>
  )
}

export default Header
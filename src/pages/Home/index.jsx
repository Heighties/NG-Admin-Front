import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    padding-top: 5rem;
`

const StyledLink = styled(Link)`
    box-sizing: border-box;
    border: solid black 5px;
    width: 25rem;
    height: 3rem;
    background-color: lightgray;
    text-decoration: none;
    font-size: 30px;
    text-align: center;
    /* padding-top: 5px; */
    color: black;
`

function Home() {
  return (
    <Wrapper>
        <StyledLink to='/showreel'>Showreel</StyledLink>
        <StyledLink to='/infos'>Infos / Bio</StyledLink>
        <StyledLink to='/realisation'>Réalisations</StyledLink>
    </Wrapper>
  )
}

export default Home
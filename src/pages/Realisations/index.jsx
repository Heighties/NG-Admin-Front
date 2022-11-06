import React from 'react'
import styled from 'styled-components'
import { useFetch } from '../../utils/hooks'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  cursor: pointer;
  width: 8rem;
  height: 1.5rem;
  border: solid black 2px;
  align-self: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: black;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    padding-top: 5rem;
`

// const AddReal = styled.div`
//     width: 150px;
//     height: 30px;
//     align-self: center;
//     cursor: pointer;
//     /* border: solid black 4px; */
// `

const RealisationsSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

const RealisationCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15rem;
`

const RealisationTitle = styled.h2``

const RealisationButton = styled.button`
  width: 8rem;
  height: 1.5rem;
  align-self: center;
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`

function Realisations() {
  const { data: realisationList, isLoading, error } = useFetch(
    `http://localhost:8000/api/realisation`
  )
  
if (isLoading) return <h1>LOADING...</h1>

if (error) {
    return(
        <h1>Error</h1> 
      )
  }

  console.log(realisationList)

  return (
    <Wrapper>
      <StyledLink to={'/addrealisation'}>Add new</StyledLink>
      <RealisationsSection>
        {realisationList.map((realisation) => {
          return(
            <RealisationCard key={realisation._id}>
              <RealisationTitle>{realisation.name}</RealisationTitle>
                <Buttons>
                  <StyledLink to={`/realisation/${realisation._id}`}>Modify</StyledLink>
                  <RealisationButton>Delete</RealisationButton>
                </Buttons>
            </RealisationCard>
          )
        })}
      </RealisationsSection>
    </Wrapper>
  )
}

export default Realisations
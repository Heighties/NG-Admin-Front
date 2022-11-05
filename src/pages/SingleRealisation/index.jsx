import React from 'react'
// import Wrapper from '../../Components/Wrapper'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
// import ReactPlayer from 'react-player'
import { useState } from 'react'


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding-bottom: 5rem;
`

const Title = styled.h1`
    font-size: 3rem;
    color: black;
`

const Texte = styled.h2`
    font-size: 1.5rem;
    color: black;
`

const Vignette = styled.img`
    border: solid black 2px;
    width: 10rem;
    height: 6rem;
`

const AddButton = styled.button`
    height: 2.5rem;
    width: 5rem;
    align-self: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30rem;
`

const ImgWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10rem;
    padding-bottom: 2rem;
`

const Description = styled.input`
    height: 20rem;
`

function SingleRealisation() {

    const [name, setName] = useState("")
    
    const realisationId = useParams()

    const { data: realisation, isLoading, error } = useFetch(
        `http://localhost:8000/api/realisation/${realisationId._id}`
    )

  if (isLoading) return <h1>LOADING...</h1>

  if (error) {
      return(
        <Wrapper>
        <h1>Error</h1>
        </Wrapper>
        )
    }

  return (
    <Wrapper>
        <Title>Modifier Réalisation</Title>
        <Container>
            <Texte>Name</Texte>
            <input type="texte" value={realisation.name} onChange={(e)=>{setName(e.target.value)}}/>
        </Container>
        <Container>
            <Texte>URL</Texte>
            <input type="texte" value={realisation.videoUrl} />
        </Container>
        <Container>
            <Texte>Description</Texte>
            <Description type="texte" value={realisation.description} />
        </Container>
            <ImgWrapper>
                <AddButton>Add</AddButton>
                <Vignette src={realisation.picture}/>
            </ImgWrapper>
            {/* <ReactPlayer url={realisation.videoUrl}/>
            <Texte>{realisation.videoUrl}</Texte> */}
            <AddButton>Submit</AddButton>
    </Wrapper>
  )
}

export default SingleRealisation
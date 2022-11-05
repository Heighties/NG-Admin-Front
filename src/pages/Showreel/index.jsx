import React from 'react'
// import {Link} from 'react-router-dom'
import styled from 'styled-components'

const ShowreelWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const ShowreelTitle = styled.h1`
    color: black;
    align-self: center;
    /* font-size: 20px; */
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
const AddShowreel = styled.button`
    width: 150px;
    height: 30px;
    align-self: center;
    cursor: pointer;
    /* border: solid black 4px; */
`

const RenderShowreel = styled.div`
    width: 450px;
    height: 210px;
    border: solid black 3px;
    background-color: lightgray;
`

const SubmitShowreel = styled.button`
    width: 150px;
    height: 30px;
    align-self: center;
    /* border: solid black 4px; */
    cursor: pointer;
`

function Showreel() {
  return (
    <ShowreelWrapper>
        <Container>
            <ShowreelTitle>Showreel</ShowreelTitle>
                <AddShowreel>Add</AddShowreel>
                <RenderShowreel />
                <SubmitShowreel>Submit</SubmitShowreel>
        </Container>
    </ShowreelWrapper>
  )
}

export default Showreel
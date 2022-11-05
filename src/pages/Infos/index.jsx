import React from 'react'
import styled from 'styled-components'

const InfosWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const InfosTitle = styled.h1``

const PostForm = styled.textarea`
`

const Button = styled.button``

const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: solid black 2px;
`

// const Post = styled.postform``

function Infos() {
  return (
    <InfosWrapper>
        <Container>
            <InfosTitle>Infos / Bio</InfosTitle>
            <InfosTitle>Name</InfosTitle>
            <PostForm></PostForm>
            <InfosTitle>Bio</InfosTitle>
            <PostForm></PostForm>
            <Button>Add Image</Button>
            <ImgWrapper/>
            <Button>Submit</Button>
        </Container>
    </InfosWrapper>
  )
}

export default Infos
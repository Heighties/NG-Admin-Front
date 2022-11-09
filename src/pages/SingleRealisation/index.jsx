import React from "react";
// import Wrapper from '../../Components/Wrapper'
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
// import { useFetch } from '../../utils/hooks'
// import ReactPlayer from 'react-player'
// import { useState } from 'react'
import { useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding-bottom: 5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: black;
`;

const Texte = styled.h2`
  font-size: 1.5rem;
  color: black;
`;

const Vignette = styled.img`
  border: solid black 2px;
  width: 10rem;
  height: 6rem;
`;

const AddButton = styled.button`
  height: 2.5rem;
  width: 5rem;
  align-self: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
  padding-bottom: 2rem;
`;

const Description = styled.input`
  height: 20rem;
`;

function SingleRealisation() {
  const [name, setName] = React.useState("");
  const [videoUrl, setVideoURL] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [picture, setPicture] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRealisationDetails();
  }, []);

  const getRealisationDetails = async () => {
    let result = await fetch(
      `http://localhost:8000/api/realisation/${params._id}`
    );
    result = await result.json();
    console.warn(result);
    setName(result.name);
    setVideoURL(result.videoUrl);
    setDescription(result.description);
    setPicture(result.picture);
  };

  const updateRealisation = async () => {
    console.warn(name, videoUrl, description, picture);
    let result = await fetch(
      `http://localhost:8000/api/realisation/${params._id}`,
      {
        method: "Put",
        body: JSON.stringify({ name, videoUrl, description, picture }),
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    result = await result.json();
    if (result) {
      navigate("/realisation");
    }
  };

  return (
    <Wrapper>
      <Title>Modifier Réalisation</Title>
      <Container>
        <Texte>Name</Texte>
        <input
          type="texte"
          placeholder="Enter realisation name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Container>
      <Container>
        <Texte>URL</Texte>
        <input
          type="texte"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={(e) => {
            setVideoURL(e.target.value);
          }}
        />
      </Container>
      <Container>
        <Texte>Description</Texte>
        <Description
          type="texte"
          placeholder="Enter realisation description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Container>
      <ImgWrapper>
        <AddButton>Add</AddButton>
        <Vignette src={picture} />
      </ImgWrapper>
      {/* <ReactPlayer url={realisation.videoUrl}/>
            <Texte>{realisation.videoUrl}</Texte> */}
      <AddButton onClick={updateRealisation}>Submit</AddButton>
    </Wrapper>
  );
}

export default SingleRealisation;

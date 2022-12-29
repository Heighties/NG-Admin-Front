import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  padding-top: 5rem;
`;

const RealisationsSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const RealisationCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15rem;
`;

const RealisationTitle = styled.h2``;

const RealisationButton = styled.button`
  width: 8rem;
  height: 1.5rem;
  align-self: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

function Realisations() {
  const [realisation, setRealisation] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRealisation();
  }, []);

  const getRealisation = async () => {
    try {
      // Vérification que le token existe bien dans le local storage
      if (localStorage.getItem("token")) {
        // Récupération du token dans le local storage
        const token = JSON.parse(localStorage.getItem("token")).token;

        // Création de l'objet Headers
        const headers = new Headers();
        // Ajout de l'en-tête Authorization avec la valeur du token
        headers.append("Authorization", `Bearer ${token}`);

        let result = await fetch("http://localhost:8000/api/realisation", {
          headers: headers,
        });
        result = await result.json();
        setRealisation(result);
      }
    } catch (error) {
      setError(error);
    }
  };

  const deleteRealisation = async (id) => {
    try {
      let result = await fetch(`http://localhost:8000/api/realisation/${id}`, {
        method: "Delete",
      });

      result = await result.json();

      if (result) {
        alert("Realisation deleted");
        getRealisation();
      }
    } catch (error) {
      setError(error);
    }
  };
  return (
    <Wrapper>
      <StyledLink to={"/addrealisation"}>Add new</StyledLink>
      {error ? (
        <div>An error occurred: {error.message}</div>
      ) : (
        <RealisationsSection>
          {Array.isArray(realisation) &&
            realisation.map((item) => {
              return (
                <RealisationCard key={item._id}>
                  <RealisationTitle>{item.name}</RealisationTitle>
                  <Buttons>
                    <StyledLink to={`/realisation/${item._id}`}>
                      Modify
                    </StyledLink>
                    <RealisationButton
                      onClick={() => deleteRealisation(item._id)}
                    >
                      Delete
                    </RealisationButton>
                  </Buttons>
                </RealisationCard>
              );
            })}
        </RealisationsSection>
      )}
    </Wrapper>
  );
}

export default Realisations;

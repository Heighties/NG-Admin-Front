// import React from "react";
// import "./style.css";
// import { useNavigate } from "react-router-dom";

// function AddRealisation() {
//   const [name, setName] = React.useState("");
//   const [description, setDescription] = React.useState("");
//   const [videoUrl, setVideoUrl] = React.useState("");
//   const [picture, setPicture] = React.useState("");
//   const navigate = useNavigate();

//   const fileOnchange = (event) => {
//     setPicture(event.target.files[0]);
//   };

//   const sendPicture = (event) => {
//     let formData = new FormData();

//     formData.append("image", picture);

//     fetch(`http://localhost:8000/images`, {
//       method: "Post",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((resBody) => {
//         console.log(resBody);
//       });
//   };

//   const addRealisation = async () => {
//     console.warn(name, description, videoUrl, picture);
//     let result = await fetch("http://localhost:8000/api/realisation", {
//       method: "post",
//       body: JSON.stringify({ name, description, videoUrl, picture }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     result = await result.json();
//     console.warn(result);
//     if (result) {
//       sendPicture();
//       navigate("/realisation");
//     }
//   };
//   return (
//     <div className="realisation">
//       <h1>Add Réalisation</h1>
//       <input
//         type="texte"
//         placeholder="Enter realisation name"
//         className="inputBox"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="texte"
//         placeholder="Enter description"
//         className="inputBox"
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <input
//         type="texte"
//         placeholder="Enter URL of the video"
//         className="inputBox"
//         onChange={(e) => setVideoUrl(e.target.value)}
//       />
//       <input type="file" onChange={fileOnchange} />

//       <button onClick={addRealisation} className="appButton">
//         Add
//       </button>
//     </div>
//   );
// }

// export default AddRealisation;

/*********************************************** */

import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function AddRealisation() {
  // Déclaration des états de l'application
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [videoUrl, setVideoUrl] = React.useState("");
  const [picture, setPicture] = React.useState("");

  // Utilisation de la fonction useNavigate pour naviguer vers une autre page
  const navigate = useNavigate();

  // Fonction appelée lorsque l'utilisateur sélectionne un fichier dans le champ "input" de type "file"
  const fileOnchange = (event) => {
    setPicture(event.target.files[0]);
  };

  // Fonction appelée lorsque l'utilisateur clique sur le bouton "add"
  const sendPicture = (imageId) => {
    // Création d'un objet FormData qui contiendra les données de l'image
    let formData = new FormData();
    formData.append("image", picture);

    // Envoi de la requête HTTP au serveur pour envoyer l'image
    fetch(`http://localhost:8000/api/realisation/images`, {
      method: "Post",
      body: formData,
    })
      .then((res) => res.json())
      .then((resBody) => {
        console.log(resBody);
      })
      // Traitement des erreurs potentielles
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'image :", error);
      });
  };

  // Fonction appelée lorsque l'utilisateur clique sur le bouton "add"
  const addRealisation = () => {
    console.log(
      "Données de la réalisation :",
      name,
      description,
      videoUrl,
      picture
    );

    const userId = JSON.parse(localStorage.getItem("token")).userId;
    console.warn(userId);

    // Envoi de la requête HTTP au serveur pour ajouter la réalisation
    fetch("http://localhost:8000/api/realisation", {
      method: "POST",
      body: JSON.stringify({ name, description, videoUrl, picture }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Réponse du serveur :", result);
        sendPicture();
        navigate("/realisation");
      })
      // Traitement des erreurs potentielles
      .catch((error) => {
        console.error("Erreur lors de l'ajout de la réalisation :", error);
      });
  };

  return (
    <div className="realisation">
      <h1>Add Réalisation</h1>
      {/* Champ de texte pour entrer le nom de la réalisation */}

      <input
        type="texte"
        placeholder="Enter realisation name"
        className="inputBox"
        onChange={(e) => setName(e.target.value)}
      />
      {/* Champ de texte pour entrer la description de la réalisation */}
      <input
        type="texte"
        placeholder="Enter description"
        className="inputBox"
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* Champ de texte pour entrer l'URL de la vidéo */}
      <input
        type="texte"
        placeholder="Enter URL of the video"
        className="inputBox"
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      {/* Champ "input" de type "file" pour sélectionner une image */}
      <input type="file" onChange={fileOnchange} />

      {/* Bouton pour ajouter la réalisation */}
      <button onClick={addRealisation} className="appButton">
        Add
      </button>
    </div>
  );
}

export default AddRealisation;

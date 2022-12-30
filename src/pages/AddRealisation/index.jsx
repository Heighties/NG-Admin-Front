import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function AddRealisation() {
  // Déclaration des états de l'application
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [videoUrl, setVideoUrl] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  // Utilisation de la fonction useNavigate pour naviguer vers une autre page
  const navigate = useNavigate();

  // Fonction appelée lorsque l'utilisateur sélectionne un fichier dans le champ "input" de type "file"
  const fileOnchange = (event) => {
    setImageUrl(event.target.files[0]);
    console.log("Fichier sélectionné :", imageUrl);
  };

  const token = JSON.parse(localStorage.getItem("token")).token;

  // Fonction appelée lorsque l'utilisateur clique sur le bouton "add"
  const sendPicture = (imageId) => {
    // Création d'un objet FormData qui contiendra les données de l'image
    let formData = new FormData();
    formData.append("image", imageId, imageId.name);

    console.log("Image envoyée au serveur :", imageId);

    // Envoi de la requête HTTP au serveur pour envoyer l'image
    fetch(`http://localhost:8000/api/realisation/images`, {
      method: "Post",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
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
      imageUrl
    );

    console.log("Valeur de picture :", imageUrl);

    const token = JSON.parse(localStorage.getItem("token")).token;

    console.log("coucou");

    console.log(
      "Données de la réalisation envoyées au serveur :",
      name,
      description,
      videoUrl,
      imageUrl
    );

    console.log("Appel de la fonction sendPicture");
    sendPicture(imageUrl);
    console.log("Fin de l'appel de la fonction sendPicture");

    // Envoi de la requête HTTP au serveur pour ajouter la réalisation
    fetch("http://localhost:8000/api/realisation", {
      method: "POST",
      body: JSON.stringify({
        name,
        description,
        videoUrl,
        imageId: imageUrl.name, // Utilisation de la variable imageId plutôt que imageUrl
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Réponse du serveur :", result);
        navigate("/realisation");
      })
      // Traitement des erreurs potentielles
      .catch((error) => {
        console.error(
          "Erreur lors de l'envoi des données de la réalisation :",
          error
        );
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

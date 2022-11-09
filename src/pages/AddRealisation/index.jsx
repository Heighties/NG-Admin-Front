import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function AddRealisation() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [videoUrl, setVideoUrl] = React.useState("");
  const [picture, setPicture] = React.useState("");
  const navigate = useNavigate();

  const fileOnchange = (event) => {
    setPicture(event.target.files[0]);
  };

  const sendPicture = (event) => {
    let formData = new FormData();

    formData.append("image", picture);

    fetch(`http://localhost:8000/images`, {
      method: "Post",
      body: formData,
    })
      .then((res) => res.json())
      .then((resBody) => {
        console.log(resBody);
      });
  };

  const addRealisation = async () => {
    console.warn(name, description, videoUrl, picture);
    const userId = JSON.parse(localStorage.getItem("token")).userId;
    console.warn(userId);
    let result = await fetch("http://localhost:8000/api/realisation", {
      method: "post",
      body: JSON.stringify({ name, description, videoUrl, picture }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      sendPicture();
      navigate("/realisation");
    }
  };
  return (
    <div className="realisation">
      <h1>Add Réalisation</h1>
      <input
        type="texte"
        placeholder="Enter realisation name"
        className="inputBox"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="texte"
        placeholder="Enter description"
        className="inputBox"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="texte"
        placeholder="Enter URL of the video"
        className="inputBox"
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <input type="file" onChange={fileOnchange} />

      <button onClick={addRealisation} className="appButton">
        Add
      </button>
    </div>
  );
}

export default AddRealisation;

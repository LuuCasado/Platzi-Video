import React from "react";
import useVideoSource from "../hooks/useVideoSource";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/styles/components/Player.scss";

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const video = useVideoSource(id);

  if (video === null) navigate("/404/");
  return (
    <div className="Player">
      <video controls autoPlay>
        <source src={video.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => navigate(-1)}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Player;

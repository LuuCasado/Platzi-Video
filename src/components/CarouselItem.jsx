import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { addVideo, deleteVideo } from "../store/reducers/myListSlice";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import userIcon from "../assets/static/user-icon.png";
import "../assets/styles/components/CarouselItem.scss";

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration } = props;
  const dispatch = useDispatch();

  const handleSetFavorite = () => {
    dispatch(
      addVideo({
        cover,
        title,
        year,
        contentRating,
        duration,
      })
    );
  };
  /*
  const deleteSetFavorite = () => 
    {
      dispatch({
      deleteVideo({ title })
    })};
*/

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon"
            onClick={handleSetFavorite}
          />
          {/*<img
            className="carousel-item__details--img"
            src={userIcon}
            alt="Plus Icon"
            onClick={deleteSetFavorite}
          />*/}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;

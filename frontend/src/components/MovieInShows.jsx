import { SwiperSlide } from "swiper/react";
import PlayVideoIcon from "../assets/images/icons/icon-play-vid.svg";
import "./MovieInShows.css";
import Movie from "../assets/images/movies/anhhung.webp";
import TagIcon from "../assets/images/icons/icon-tag.svg";
import ClockIcon from "../assets/images/icons/icon-clock.svg";
import SubIcon from "../assets/images/icons/subtitle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
export function MovieInShows({ movie, isInCurrentShow }) {
  return (
    <>
      <div className="movie-overview-container">
        <a href="#" className="movie-image-container">
          <img className="movie-image" src={Movie} alt="" />
          <div className="movie-overlay">
            <h1 className="movie-title">{movie.title}</h1>

            <div className="movie-info">
              <img src={TagIcon}></img>
              <span> {movie.genres.join(",")}</span>
            </div>
            <div className="movie-info">
              <img src={ClockIcon}></img>
              <span> {movie.duration + "'"}</span>
            </div>

            <div className="movie-info">
              <FontAwesomeIcon icon={faEarthAmericas} color="yellow" />
              <span> {movie.country}</span>
            </div>
            <div className="movie-info">
              <img src={SubIcon}></img>
              <span> {movie.subtitle}</span>
            </div>
          </div>
        </a>
        <h1 className="movie-title">
          {movie.title.length >= 47
            ? movie.title.substring(0, 47) + "..."
            : movie.title}
        </h1>
      </div>
      <div className="movie-action-container">
        <a href="#" className="watch-movie-trailer">
          <img src={PlayVideoIcon}></img>
          <span>Xem trailer</span>
        </a>

        <a href="#" className="book-ticket-btn">
          <span>{isInCurrentShow ? "Đặt vé" : "Tìm hiểu thêm"}</span>
        </a>
      </div>
    </>
  );
}

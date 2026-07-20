import { Header } from "../components/Header";
import Movie from "../assets/images/movies/anhhung.webp";
import "./MovieDetailPage.css";

import TagIcon from "../assets/images/icons/icon-tag.svg";
import ClockIcon from "../assets/images/icons/icon-clock.svg";
import SubIcon from "../assets/images/icons/subtitle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlayIcon from "../assets/images/icons/ic-play-circle-red.svg";
import Combo1 from "../assets/images/snack-and-drink/CNS035_COMBO_GAU.png";
import Combo2 from "../assets/images/snack-and-drink/CNS036_COMBO_CO_GAU.png";
import Combo3 from "../assets/images/snack-and-drink/CNS037_COMBO_NHA_GAU.png";
import Coca from "../assets/images/snack-and-drink/coca.png";
import Fanta from "../assets/images/snack-and-drink/fanta.jpg";
import Sprite from "../assets/images/snack-and-drink/sprite.png";
import CokeZero from "../assets/images/snack-and-drink/COKE-ZERO.png";
import Dasani from "../assets/images/snack-and-drink/dasani.png";
import { Footer } from "../components/Footer";
import {
  faEarthAmericas,
  faLocationDot,
  faMinus,
  faPlus,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
export function MovieDetailPage({ movieId = 1 }) {
  const [selectedShowDate, setSelectedShowDate] = useState(0);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/movies/${movieId}`)
      .then((response) => {
        setMovie(response.data);
      });
  }, [movieId]);

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="main-content">
          {movie && (
            <div className="movie-detail-container">
              <img className="movie-detail-img" src={Movie}></img>
              <div className="movie-detail">
                <h1 className="heading">{movie.title}</h1>

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
                <div className="movie-info ">
                  <FontAwesomeIcon icon={faUserCheck} color="yellow" />
                  <span className="age-rating"> {movie.ageRating}</span>
                </div>
                <div className="movie-description">
                  <h2>Mô tả</h2>
                  <p>{movie.description}</p>
                  <p>Diễn viên:ABC, BCA</p>
                  <p>Khởi chiếu: Thứ Sáu, 12/06/2026 </p>
                </div>
                <div className="movie-content">
                  <h2>Nội dung phim</h2>
                  <p>
                    {movie.content.length > 500 ? (
                      <>
                        {movie.content.substring(0, 500) + "... "}
                        <span className="movie-content-detail">Xem thêm</span>
                      </>
                    ) : (
                      movie.content
                    )}
                  </p>
                </div>
                <div className="movie-trailer">
                  <img src={PlayIcon} className="play-icon-img"></img>
                  <span>Xem Trailer</span>
                </div>
              </div>
            </div>
          )}
          {movie && (
            <>
              <div className="movie-show-container">
                <div className="show-calendar-container">
                  <h2 className="heading">Lịch chiếu</h2>
                  <div className="show-calendar">
                    <div
                      className={`show-date ${selectedShowDate === 0 ? "selected" : ""}`}
                      onClick={() => setSelectedShowDate(0)}
                    >
                      <p className="date">24/06</p>
                      <p className="day">Thứ Năm</p>
                    </div>
                    <div
                      className={`show-date ${selectedShowDate === 1 ? "selected" : ""}`}
                      onClick={() => setSelectedShowDate(1)}
                    >
                      <p className="date">25/06</p>
                      <p className="day">Thứ Sáu</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cinema-show-container">
                <div className="cinema-show-top">
                  <h2 className="heading">Danh sách rạp</h2>
                  <div className="location-picker">
                    <FontAwesomeIcon icon={faLocationDot} color="yellow" />
                    <span>Hồ Chí Minh</span>
                  </div>
                </div>
                <div className="cinema-show-list-container">
                  <div className="cinema-show">
                    <h4 className="heading">Cinestar Satra Quận 6 (TP.HCM)</h4>
                    <p className="address">
                      Tầng 6, TTTM Satra Võ Văn Kiệt, 1466 Võ Văn Kiệt, Phường
                      1, Quận 6, TP.HCM
                    </p>
                    <p className="show-type">Standard</p>
                    <ul className="show-time-list">
                      <li className="show-time">21:30</li>
                      <li className="show-time">22:50</li>
                      <li className="show-time">23:50</li>
                    </ul>
                  </div>
                  <div className="cinema-show">
                    <h4 className="heading">Cinestar Satra Quận 6 (TP.HCM)</h4>
                    <p className="address">
                      Tầng 6, TTTM Satra Võ Văn Kiệt, 1466 Võ Văn Kiệt, Phường
                      1, Quận 6, TP.HCM
                    </p>
                    <p className="show-type">Standard</p>
                    <ul className="show-time-list">
                      <li className="show-time">21:30</li>
                      <li className="show-time">22:50</li>
                      <li className="show-time">23:50</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="ticket-picker-container">
                <h2 className="heading">Chọn loại vé</h2>
                <div className="ticket-picker-list-container">
                  <div className="ticket-picker">
                    <p className="ticket-age">Người lớn</p>
                    <p className="desc">Đơn</p>
                    <p>45,000 VNĐ</p>
                    <div className="count">
                      <FontAwesomeIcon
                        icon={faMinus}
                        color="black"
                      ></FontAwesomeIcon>
                      <p className="count-number">0</p>
                      <FontAwesomeIcon
                        icon={faPlus}
                        color="black"
                      ></FontAwesomeIcon>
                    </div>
                  </div>

                  <div className="ticket-picker">
                    <p className="ticket-age">Người lớn</p>
                    <p className="desc">Đơn</p>
                    <p>45,000 VNĐ</p>
                    <div className="count">
                      <FontAwesomeIcon
                        icon={faMinus}
                        color="black"
                      ></FontAwesomeIcon>
                      <p className="count-number">0</p>
                      <FontAwesomeIcon
                        icon={faPlus}
                        color="black"
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="ticket-picker">
                    <p className="ticket-age">Người lớn</p>
                    <p className="desc">Đơn</p>
                    <p>45,000 VNĐ</p>
                    <div className="count">
                      <FontAwesomeIcon
                        icon={faMinus}
                        color="black"
                      ></FontAwesomeIcon>
                      <p className="count-number">0</p>
                      <FontAwesomeIcon
                        icon={faPlus}
                        color="black"
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="ticket-picker">
                    <p className="ticket-age">Người lớn</p>
                    <p className="desc">Đơn</p>
                    <p>45,000 VNĐ</p>
                    <div className="count">
                      <FontAwesomeIcon
                        icon={faMinus}
                        color="black"
                      ></FontAwesomeIcon>
                      <p className="count-number">0</p>
                      <FontAwesomeIcon
                        icon={faPlus}
                        color="black"
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>

              <div className="seat-picker-container">{/* Skip for now */}</div>
              <div className="snack-and-drink-picker-container">
                <h2 className="heading">Chọn bắp nước</h2>

                <h4 className="snack-and-drink-category">COMBO GẤU</h4>
                <div className="snack-and-drink-list-container">
                  <div className="snack-and-drink-item">
                    <img src={Combo1}></img>
                    <div className="item-detail">
                      <p className="name">Combo gấu</p>
                      <p className="desc">
                        1 Coke 32oz + 1 Bắp 2 Ngăn 64OZ Phô Mai + Caramel * Vùng
                        1
                      </p>
                      <p className="price">119,000VNĐ</p>
                      <div className="count">
                        <FontAwesomeIcon
                          icon={faMinus}
                          color="black"
                        ></FontAwesomeIcon>
                        <p className="count-number">0</p>
                        <FontAwesomeIcon
                          icon={faPlus}
                          color="black"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                  <div className="snack-and-drink-item">
                    <img src={Combo2}></img>
                    <div className="item-detail">
                      <p className="name">Combo có gấu</p>
                      <p className="desc">
                        2 Coke 32oz + 1 Bắp 2 Ngăn 64OZ Phô Mai + Caramel * Vùng
                        1
                      </p>
                      <p className="price">129,000VNĐ</p>
                      <div className="count">
                        <FontAwesomeIcon
                          icon={faMinus}
                          color="black"
                        ></FontAwesomeIcon>
                        <p className="count-number">0</p>
                        <FontAwesomeIcon
                          icon={faPlus}
                          color="black"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                  <div className="snack-and-drink-item">
                    <img src={Combo3}></img>
                    <div className="item-detail">
                      <p className="name">Combo gấu</p>
                      <p className="desc">
                        4 Coke 32oz + 2 Bắp 2 Ngăn 64OZ Phô Mai + Caramel * Vùng
                        1
                      </p>
                      <p className="price">259,000VNĐ</p>
                      <div className="count">
                        <FontAwesomeIcon
                          icon={faMinus}
                          color="black"
                        ></FontAwesomeIcon>
                        <p className="count-number">0</p>
                        <FontAwesomeIcon
                          icon={faPlus}
                          color="black"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="snack-and-drink-category">Nước ngọt CNS08</h4>
                <div className="snack-and-drink-list-container">
                  <div className="snack-and-drink-item">
                    <img src={Coca}></img>
                    <div className="item-detail">
                      <p className="name">Coke 32oz</p>

                      <p className="price">259,000VNĐ</p>
                      <div className="count">
                        <FontAwesomeIcon
                          icon={faMinus}
                          color="black"
                        ></FontAwesomeIcon>
                        <p className="count-number">0</p>
                        <FontAwesomeIcon
                          icon={faPlus}
                          color="black"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                  <div className="snack-and-drink-item">
                    <img src={Fanta}></img>
                    <div className="item-detail">
                      <p className="name">Fanta 32oz</p>

                      <p className="price">259,000VNĐ</p>
                      <div className="count">
                        <FontAwesomeIcon
                          icon={faMinus}
                          color="black"
                        ></FontAwesomeIcon>
                        <p className="count-number">0</p>
                        <FontAwesomeIcon
                          icon={faPlus}
                          color="black"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                  <div className="snack-and-drink-item">
                    <img src={Sprite}></img>
                    <div className="item-detail">
                      <p className="name">Sprite 32oz</p>

                      <p className="price">259,000VNĐ</p>
                      <div className="count">
                        <FontAwesomeIcon
                          icon={faMinus}
                          color="black"
                        ></FontAwesomeIcon>
                        <p className="count-number">0</p>
                        <FontAwesomeIcon
                          icon={faPlus}
                          color="black"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                  <div className="snack-and-drink-item">
                    <img src={CokeZero}></img>
                    <div className="item-detail">
                      <p className="name">Coke Zero 32oz</p>

                      <p className="price">259,000VNĐ</p>
                      <div className="count">
                        <FontAwesomeIcon
                          icon={faMinus}
                          color="black"
                        ></FontAwesomeIcon>
                        <p className="count-number">0</p>
                        <FontAwesomeIcon
                          icon={faPlus}
                          color="black"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="snack-and-drink-category">Nước uống</h4>
                <div className="snack-and-drink-list-container">
                  <div className="snack-and-drink-item">
                    <img src={Dasani}></img>
                    <div className="item-detail">
                      <p className="name">Nước Suối Dasani 500/510ml</p>
                      <p className="price">20,000 VNĐ</p>
                      <div className="count">
                        <FontAwesomeIcon
                          icon={faMinus}
                          color="black"
                        ></FontAwesomeIcon>
                        <p className="count-number">0</p>
                        <FontAwesomeIcon
                          icon={faPlus}
                          color="black"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                  <div className="snack-and-drink-item">
                    <img src={Dasani}></img>
                    <div className="item-detail">
                      <p className="name">Nước Suối Dasani 500/510ml</p>
                      <p className="price">20,000 VNĐ</p>
                      <div className="count">
                        <FontAwesomeIcon
                          icon={faMinus}
                          color="black"
                        ></FontAwesomeIcon>
                        <p className="count-number">0</p>
                        <FontAwesomeIcon
                          icon={faPlus}
                          color="black"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

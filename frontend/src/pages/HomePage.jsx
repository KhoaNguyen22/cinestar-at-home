import { Header } from "../components/Header";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomePage.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Banner1 from "../assets/images/banners/banner_web_1_.jpg";
import Banner2 from "../assets/images/banners/Banner_cinestar_updated_1_.png";
import Movie from "../assets/images/movies/anhhung.webp";
import PlayVideoIcon from "../assets/images/icons/icon-play-vid.svg";
import Promotion1 from "../assets/images/banners/CTEN.webp";
import Promotion2 from "../assets/images/banners/HSSV-2.webp";
import Promotion3 from "../assets/images/banners/MONDAY_1.webp";
import Promotion4 from "../assets/images/banners/THU4.webp";
import MembershipFriend from "../assets/images/banners/Desktop519x282_CMember.webp";
import MembershipVip from "../assets/images/banners/c-vip.webp";
import KidZoneBanner from "../assets/images/banners/img-service0.webp";
import BowlingBanner from "../assets/images/banners/img-service1.webp";
import BilliardsBanner from "../assets/images/banners/img-service2.webp";
import RestaurantBanner from "../assets/images/banners/img-service3.webp";
import GymBanner from "../assets/images/banners/img-service4.webp";
import OperaBanner from "../assets/images/banners/img-service5.webp";
import FacebookLogo from "../assets/images/logos/facebook.webp";
import ZaloLogo from "../assets/images/logos/zalo.webp";
import HeaderLogo from "../assets/images/logos/header-logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "../components/Footer";
import { MovieInShows } from "../components/MovieInShows";
import { useEffect, useState } from "react";
import axios from "axios";

export function HomePage() {
  const [moviesInCurrentShow, setMoviesInCurrentShow] = useState([]);
  const [cinemaOptions, setCinemaOptions] = useState([]);
  const [cinemaFilteredShows, setCinemaFilteredShows] = useState([]);

  const [selectedCinemaOption, setSelectedCinemaOption] = useState("");
  const [selectedMovieOption, setSelectedMovieOption] = useState("");
  const [selectedDateOption, setSelectedDateOption] = useState("");
  const [selectedTimeOption, setSelectedTimeOption] = useState("");

  const movieIdsInSelectedCinema = new Set(
    cinemaFilteredShows.map((show) => show.movieId),
  );

  const movieFilteredShows = cinemaFilteredShows.filter(
    (show) => show.movieId === Number(selectedMovieOption),
  );

  const dateFilteredShows = movieFilteredShows.filter(
    (show) =>
      new Date(show.startTime).toISOString().split("T")[0] ===
      selectedDateOption,
  );

  const movieOptions = moviesInCurrentShow.filter((movie) =>
    movieIdsInSelectedCinema.has(movie.id),
  );
  const showDateOptions = [
    ...new Set(
      movieFilteredShows.map(
        (show) => new Date(show.startTime).toISOString().split("T")[0],
      ),
    ),
  ];

  const showTimeOptions = dateFilteredShows.map((show) => {
    const date = new Date(show.startTime);
    const showTime = `${date.getHours()}:${date.getMinutes()}`;
    return showTime;
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/movies/showing").then((response) => {
      setMoviesInCurrentShow(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8080/api/cinemas").then((response) => {
      setCinemaOptions(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/shows/cinema/${selectedCinemaOption}`)
      .then((response) => {
        setCinemaFilteredShows(response.data);
      });
  }, [selectedCinemaOption]);

  const handleCinemaOptionChange = (e) => {
    setSelectedCinemaOption(e.target.value);

    setSelectedMovieOption("");
    console.log(selectedCinemaOption);
  };
  const handleMovieOptionChange = (e) => {
    setSelectedMovieOption(e.target.value);
    setSelectedDateOption("");
  };
  const handleDateOptionChange = (e) => {
    setSelectedDateOption(e.target.value);
  };
  const handleTimeOptionChange = (e) => {
    setSelectedTimeOption(e.target.value);
  };

  function formatShowDateOption(showDateOption) {
    const showDate = new Date(showDateOption);
    const weekday = new Intl.DateTimeFormat("vi-VN", {
      weekday: "long",
    }).format(showDate);
    const day = showDate.getDate();
    const month = showDate.getMonth() + 1;
    const formatDate = `${weekday},${day}/${month}`;
    return formatDate;
  }

  function formatMovieOption(movieOption) {
    let movieOptionDisplay = `${movieOption.title} (${movieOption.ageRating})`;
    movieOptionDisplay =
      movieOptionDisplay.length > 20
        ? movieOptionDisplay.substring(0, 17) + "..."
        : movieOptionDisplay;
    return movieOptionDisplay;
  }
  return (
    <>
      <Header />
      <div className="app-container">
        <div className="main-content">
          <div className="banner-swiper-container">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
            >
              <SwiperSlide>
                <img src={Banner1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Banner2}></img>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="quick-booking-container">
            <div className="heading">
              <h1>Đặt vé nhanh</h1>
            </div>

            <div className="quick-booking-filter">
              <select
                value={selectedCinemaOption}
                name="cinema"
                onChange={handleCinemaOptionChange}
              >
                <option hidden={true} value="" defaultChecked>
                  Chọn rạp
                </option>
                {cinemaOptions.map((cinemaOption) => (
                  <option
                    value={cinemaOption.id}
                    key={cinemaOption.id}
                  >{`${cinemaOption.name}(${cinemaOption.location})`}</option>
                ))}
              </select>

              <select
                onChange={handleMovieOptionChange}
                value={selectedMovieOption}
                name="movie"
                disabled={selectedCinemaOption === ""}
              >
                <option value="" hidden={true} defaultChecked>
                  Chọn phim
                </option>
                {movieOptions.map((movieOption) => {
                  return (
                    <option value={movieOption.id} key={movieOption.id}>
                      {formatMovieOption(movieOption)}
                    </option>
                  );
                })}
              </select>

              <select
                disabled={selectedMovieOption === ""}
                name="showDate"
                onChange={handleDateOptionChange}
              >
                <option hidden={true} defaultChecked>
                  Chọn ngày
                </option>
                {showDateOptions.map((showDateOption) => {
                  return (
                    <option value={showDateOption} key={showDateOption}>
                      {formatShowDateOption(showDateOption)}
                    </option>
                  );
                })}
              </select>

              <select name="showTime" onChange={handleTimeOptionChange}>
                <option hidden="true" defaultChecked>
                  Chọn suất
                </option>
                {showTimeOptions.map((showTimeOption) => (
                  <option>{showTimeOption}</option>
                ))}
              </select>
              <div className="navigate-filter-btn">
                <a href="#">Đặt ngay</a>
              </div>
            </div>
          </div>
          <div className="current-show-container">
            <h1 className="heading">Phim đang chiếu</h1>
            <div className="show-swiper-container">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
              >
                {moviesInCurrentShow.map((movie) => (
                  <SwiperSlide key={movie.id}>
                    <MovieInShows
                      movie={movie}
                      isInCurrentShow={true}
                    ></MovieInShows>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="see-more-nav">
                <a href="#">
                  <span>Xem thêm</span>
                </a>
              </div>
            </div>
          </div>
          <div className="upcoming-show-container">
            <h1 className="heading">Phim sắp chiếu</h1>
            <div className="show-swiper-container">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
              >
                {moviesInCurrentShow.map((movie) => (
                  <SwiperSlide key={movie.id}>
                    <MovieInShows
                      movie={movie}
                      isInCurrentShow={false}
                    ></MovieInShows>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="see-more-nav">
                <a href="#">
                  <span>Xem thêm</span>
                </a>
              </div>
            </div>
          </div>

          <div className="promotion-swiper-container">
            <h1 className="heading">Khuyến mãi</h1>
            <Swiper
              className
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide className="promotion-swiper-slide">
                <img src={Promotion1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="promotion-swiper-slide">
                <img src={Promotion2}></img>
              </SwiperSlide>
              <SwiperSlide className="promotion-swiper-slide">
                <img src={Promotion3}></img>
              </SwiperSlide>
              <SwiperSlide className="promotion-swiper-slide">
                <img src={Promotion4}></img>
              </SwiperSlide>
            </Swiper>
            <div className="see-more-nav">
              <a href="#">
                <span>Tất cả ưu đãi</span>
              </a>
            </div>
          </div>
        </div>
        <div className="membership-content">
          <h1 className="heading">Chương trình thành viên</h1>
          <div className="membership-programs-container">
            <div className="membership-program">
              <img src={MembershipFriend} alt=""></img>
              <h1 className="heading">Thành viên C&apos;Friend</h1>
              <p>Thẻ C&apos;Friend mang đến nhiều ưu đãi cho thành viên mới</p>
              <div className="see-more-nav">
                <a href="#">
                  <span>Tìm hiểu ngay</span>
                </a>
              </div>
            </div>
            <div className="membership-program">
              <img src={MembershipVip} alt=""></img>
              <h1 className="heading">Thành viên C&apos;Vip</h1>
              <p>
                Thẻ VIP Cinestar dành riêng cho bạn những đặc quyền chất riêng
              </p>
              <div className="see-more-nav">
                <a href="#">
                  <span>Tìm hiểu ngay</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="other-entertainments-content">
          <h1 className="heading">Dịch vụ giải trí khác</h1>
          <p className="entertainments-description">
            Cinestar không chỉ chiếu phim - chúng tôi còn mang đến nhiều mô hình
            giải trí đặc sắc khác, giúp bạn tận hưởng từng giây phút bên ngoài
            màn ảnh rộng.
          </p>
          <div className="entertainments-grid-container">
            <a href="#">
              <img src={KidZoneBanner}></img>
            </a>
            <a href="#">
              <img src={BowlingBanner}></img>
            </a>
            <a href="#">
              <img src={BilliardsBanner}></img>
            </a>
            <a href="#">
              <img src={RestaurantBanner}></img>
            </a>
            <a href="#">
              <img src={GymBanner}></img>
            </a>
            <a href="#">
              <img src={OperaBanner}></img>
            </a>
          </div>
        </div>
        <div className="contact-us">
          <div className="left">
            <h1 className="heading">Liên hệ với chúng tôi</h1>
            <a className="facebook-info" href="#">
              <img src={FacebookLogo}></img>

              <div className="heading">Facebook</div>
            </a>

            <a className="zalo-info" href="#">
              <img src={ZaloLogo}></img>

              <div className="heading">Zalo Chat</div>
            </a>
          </div>
          <div className="right">
            <div className="contact-us-box">
              <div className="contact-info">
                <h3>Thông tin liên hệ</h3>
                <div className="email-contact">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>cskh@cinestar.com.vn</span>
                </div>
                <div className="phone-contact">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>1900 0085</span>
                </div>
                <div className="address-contact">
                  <FontAwesomeIcon icon={faLocation} />
                  <span>135 Hai Bà Trưng, phường Sài Gòn, TP.HCM</span>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    name="fullname"
                  ></input>
                  <input
                    type="email"
                    placeholder="Điền email"
                    name="email"
                  ></input>
                  <textarea
                    placeholder="Thông tin liên hệ hoặc phản ánh"
                    name="context"
                  ></textarea>
                  <button type="submit" className="contact-submit-btn">
                    Gửi ngay
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

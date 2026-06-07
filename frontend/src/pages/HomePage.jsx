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

function HomePage() {
  const [moviesInCurrentsShow, setMoviesInCurrentsShow] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/movies/showing")
      .then((response) => setMoviesInCurrentsShow(response.data));
  }, []);
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
              <select name="cinema">
                <option defaultChecked>Chọn rạp</option>
                <option value="a">Cinema Hai Bà Trưng</option>
                <option value="b">Cinema Hai Bà Trưng</option>
                <option value="c">Cinema Hai Bà Trưng</option>
                <option value="d">Cinema Hai Bà Trưng</option>
                <option value="e">Cinema Hai Bà Trưng</option>
                <option value="f">Cinema Hai Bà Trưng</option>
                <option value="g">Cinema Hai Bà Trưng</option>
                <option value="h">Cinema Hai Bà Trưng</option>
              </select>

              <select name="cinema">
                <option defaultChecked>Chọn phim</option>
                <option value="b">Cinema Hai Bà Trưng</option>
                <option value="c">Cinema Hai Bà Trưng</option>
                <option value="d">Cinema Hai Bà Trưng</option>
                <option value="e">Cinema Hai Bà Trưng</option>
                <option value="f">Cinema Hai Bà Trưng</option>
                <option value="g">Cinema Hai Bà Trưng</option>
                <option value="h">Cinema Hai Bà Trưng</option>
              </select>

              <select name="cinema">
                <option defaultChecked>Chọn ngày</option>
                <option value="b">Cinema Hai Bà Trưng</option>
                <option value="c">Cinema Hai Bà Trưng</option>
                <option value="d">Cinema Hai Bà Trưng</option>
                <option value="e">Cinema Hai Bà Trưng</option>
                <option value="f">Cinema Hai Bà Trưng</option>
                <option value="g">Cinema Hai Bà Trưng</option>
                <option value="h">Cinema Hai Bà Trưng</option>
              </select>

              <select name="cinema">
                <option defaultChecked>Chọn suất</option>
                <option value="b">Cinema Hai Bà Trưng</option>
                <option value="c">Cinema Hai Bà Trưng</option>
                <option value="d">Cinema Hai Bà Trưng</option>
                <option value="e">Cinema Hai Bà Trưng</option>
                <option value="f">Cinema Hai Bà Trưng</option>
                <option value="g">Cinema Hai Bà Trưng</option>
                <option value="h">Cinema Hai Bà Trưng</option>
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
                {moviesInCurrentsShow.map((movie) => (
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
                {moviesInCurrentsShow.map((movie) => (
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
export default HomePage;

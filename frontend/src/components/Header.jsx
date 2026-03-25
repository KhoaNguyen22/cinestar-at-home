import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderLogo from "../assets/header-logo.webp";
import SearchIcon from "../assets/ic-header-search.svg";
import AuthIcon from "../assets/ic-header-auth.svg";
import VietNamIcon from "../assets/footer-vietnam.svg";
import TicketIcon from "../assets/ic-ticket.svg";
import CornIcon from "../assets/ic-cor.svg";
import "./Header.css";
export function Header() {
  return (
    <header>
      <div className="hd-top">
        <div className="hd-top-left">
          <img src={HeaderLogo} alt="Cinestar logo"></img>
        </div>
        <div className="hd-top-mid">
          <a href="/">
            <button className="book-ticket-btn">
              <img src={TicketIcon} />
              <span>Đặt vé ngay</span>
            </button>
          </a>
          <a href="/">
            <button className="book-snack-btn">
              <img src={CornIcon} />
              <span>Đặt bắp nước</span>
            </button>
          </a>
        </div>
        <div className="hd-top-right">
          <div className="search-input-container">
            <input
              className="search-input"
              type="text"
              placeholder="Tìm phim,rạp"
            ></input>
            <img className="search-icon" src={SearchIcon} alt="Search icon" />
          </div>
          <a href="/" className="auth-container">
            <img
              className="auth-icon"
              src={AuthIcon}
              alt="Authentication Icon"
            />
            <span>Đăng nhập</span>
          </a>
          <div className="language-picker-container">
            <img src={VietNamIcon} />
            <span>VN</span>
          </div>
        </div>
      </div>
      <div className="hd-bottom">
        <div className="hd-bottom-left">
          <div className="cinema-picker">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Chọn rạp </span>
            {/*
             Create cinema options later here
            */}
          </div>
          <a className="show-picker">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Lịch chiếu </span>
          </a>
        </div>
        <div className="hd-bottom-right">
          <a href="/">Khuyến mãi</a>
          <a href="/">Tổ chức sự kiện</a>
          <a href="/">Dịch vụ giải trí</a>
          <a href="/">Giới thiệu</a>
        </div>
      </div>
    </header>
  );
}

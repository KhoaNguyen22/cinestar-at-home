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
        <div>
          <img src={HeaderLogo} alt="Cinestar logo"></img>
        </div>
        <div className="hd-top-mid">
          <a href="/">
            <button>
              <img src={TicketIcon} />
              <span>Đặt vé ngay</span>
            </button>
          </a>
          <a href="/">
            <button>
              <img src={CornIcon} />
              <span>Đặt bắp nước</span>
            </button>
          </a>
        </div>
        <div className="hd-top-right">
          <div className="hd-top-right-search-input-container">
            <input
              className="hd-top-right-search-input"
              type="text"
              placeholder="Tìm phim,rạp"
            ></input>
            <img className="search-icon" src={SearchIcon} alt="Search icon" />
          </div>
          <div>
            <img src={AuthIcon} alt="Authentication Icon" />
            <span>Đăng nhập</span>
          </div>
          <div className="language-picker">
            <img src={VietNamIcon} />
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
        </div>
      </div>
    </header>
  );
}

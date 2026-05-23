import FacebookIcon from "../assets/images/icons/footer-facebook.svg";
import YoutubeIcon from "../assets/images/icons/footer-youtube.svg";
import TikTokIcon from "../assets/images/icons/ic-tittok.svg";
import ZaloIcon from "../assets/images/icons/ic-zl-white.svg";
import VietNamIcon from "../assets/images/icons/footer-vietnam.svg";
import HeaderLogo from "../assets/images/logos/header-logo.webp";
import CertificateLogo from "../assets/images/logos/dathongbao.webp";
import "./Footer.css";
export function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="left">
            <img src={HeaderLogo}></img>
            <p className="cinema-quote">Be Happy, Be a star </p>
            <div className="footer-quick-booking">
              <a href="#" className="book-ticket-btn">
                <span>Đặt vé</span>
              </a>
              <a href="#" className="book-snack-btn">
                <span>Đặt bắp nước</span>
              </a>
            </div>
            <div className="cinema-social-medias">
              <a href="#">
                <img src={FacebookIcon}></img>
              </a>
              <a href="#">
                <img src={YoutubeIcon}></img>
              </a>
              <a href="#">
                <img src={TikTokIcon}></img>
              </a>
              <a href="#">
                <img src={ZaloIcon}></img>
              </a>
            </div>
            <div className="language-picker-container">
              <span>Ngôn ngữ:</span>

              <img src={VietNamIcon}></img>
              <span>VN</span>
            </div>
          </div>
          <div className="right">
            {/* Column 1 */}
            <div className="footer-column">
              <div className="footer-quick-nav">
                <div className="text">Tài khoản</div>
                <ul>
                  <li>
                    <a href="#">Đăng nhập</a>
                  </li>
                  <li>
                    <a href="#">Đăng ký</a>
                  </li>
                  <li>
                    <a href="#">Membership</a>
                  </li>
                </ul>
              </div>

              <div className="footer-quick-nav">
                <div className="text">Xem phim</div>
                <ul>
                  <li>
                    <a href="#">Phim đang chiếu</a>
                  </li>
                  <li>
                    <a href="#">Phim sắp chiếu</a>
                  </li>
                  <li>
                    <a href="#">Suất chiếu đặc biệt</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="footer-column">
              <div className="footer-quick-nav">
                <div className="text">Thuê sự kiện</div>
                <ul>
                  <li>
                    <a href="#">Thuê rạp</a>
                  </li>
                  <li>
                    <a href="#">Các loại hình cho thuê khác</a>
                  </li>
                </ul>
              </div>

              <div className="footer-quick-nav">
                <div className="text">Cinestar</div>
                <ul>
                  <li>
                    <a href="#">Giới thiệu</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ</a>
                  </li>
                  <li>
                    <a href="#">Tuyển dụng</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="footer-column">
              <div className="footer-quick-nav">
                <div className="text">Dịch vụ khác</div>
                <ul>
                  <li>
                    <a href="#">Nhà hàng</a>
                  </li>
                  <li>
                    <a href="#">Kidzone</a>
                  </li>
                  <li>
                    <a href="#">Bowling</a>
                  </li>
                  <li>
                    <a href="#">Billiards</a>
                  </li>
                  <li>
                    <a href="#">Gym</a>
                  </li>
                  <li>
                    <a href="#">Nhà hát Opera</a>
                  </li>
                  <li>
                    <a href="#">Coffee</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4 */}
            <div className="footer-column">
              <div className="footer-quick-nav">
                <div className="text">Hệ thống rạp</div>
                <ul>
                  <li>
                    <a href="#">Tất cả hệ thống rạp</a>
                  </li>
                  <li>
                    <a href="#">Cinestar Quốc Thanh (TP.HCM)</a>
                  </li>
                  <li>
                    <a href="#">Cinestar Parkcity Hà Nội</a>
                  </li>
                  <li>
                    <a href="#">Cinestar Sinh Viên (TP.HCM)</a>
                  </li>
                  <li>
                    <a href="#">Cinestar Huế (TP. Huế)</a>
                  </li>
                  <li>
                    <a href="#">Cinestar Đà Lạt (Lâm Đồng)</a>
                  </li>
                  <li>
                    <a href="#">Cinestar Lâm Đồng (Đức Trọng)</a>
                  </li>
                  <li>
                    <a href="#">Cinestar Mỹ Tho (Đồng Tháp)</a>
                  </li>
                  <li>
                    <a href="#">Cinestar Kiên Giang (An Giang)</a>
                  </li>
                  <li>
                    <a href="#">Cinestar Satra Quận 6 (TP.HCM)</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-nav-container">
            <p>© 2025 Cinestar. All rights reserved.</p>
            <div className="nav-links">
              <a href="">Chính sách bảo mật</a>
              <a href="">Tin điện ảnh</a>
              <a href="">Hỏi và đáp</a>
            </div>
          </div>
          <div className="certificate-container">
            <div className="certificate-img-container">
              <img src={CertificateLogo}></img>
            </div>
            <div className="certificate-details">
              <p>
                CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI
                SAO
              </p>
              <p>ĐỊA CHỈ: 271 NGUYỄN TRÃI, PHƯỜNG CẦU ÔNG LÃNH, TP.HCM </p>
              <p>
                GIẤY CNĐKDN SỐ: 0312742744, ĐĂNG KÝ LẦN ĐẦU NGÀY 18/04/2014,
                ĐĂNG KÝ THAY ĐỔI LẦN THỨ 2 NGÀY 15/09/2014, CẤP BỞI SỞ KH&ĐT
                TP.HCM
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

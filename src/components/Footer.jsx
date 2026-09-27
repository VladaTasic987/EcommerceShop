import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">

        {/* BRAND */}
        <div className="footer__brand">
          <h2 className="footer__logo">
            Shop<span>ly</span>
          </h2>

          <p className="footer__description">
            Modern products for modern lifestyles.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer__column">
          <h3>Quick Links</h3>

          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#categories">Categories</a>
          </div>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="footer__column">
          <h3>Customer Service</h3>

          <div className="footer__links">
            <a href="#">Contact</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="footer__column">
          <h3>Follow Us</h3>

          <div className="footer__links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer__bottom">
        © 2026 Shoply. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
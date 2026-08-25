
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111111",
        color: "#ffffff",
        padding: "70px 8% 25px",
      }}
    >
      {/* FOOTER CONTENT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "50px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* BRAND */}
        <div>
          <h2
            style={{
              fontSize: "28px",
              margin: "0 0 15px",
              fontWeight: "800",
            }}
          >
            Shop<span style={{ color: "#777777" }}>ly</span>
          </h2>

          <p
            style={{
              color: "#aaaaaa",
              fontSize: "15px",
              lineHeight: "1.7",
              maxWidth: "280px",
              margin: 0,
            }}
          >
            Modern products for modern lifestyles.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3
            style={{
              fontSize: "16px",
              margin: "0 0 20px",
              fontWeight: "700",
            }}
          >
            Quick Links
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <a
              href="#home"
              style={{
                color: "#aaaaaa",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Home
            </a>

            <a
              href="#shop"
              style={{
                color: "#aaaaaa",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Shop
            </a>

            <a
              href="#categories"
              style={{
                color: "#aaaaaa",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Categories
            </a>
          </div>
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <h3
            style={{
              fontSize: "16px",
              margin: "0 0 20px",
              fontWeight: "700",
            }}
          >
            Customer Service
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#aaaaaa",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Contact
            </a>

            <a
              href="#"
              style={{
                color: "#aaaaaa",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Shipping
            </a>

            <a
              href="#"
              style={{
                color: "#aaaaaa",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Returns
            </a>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3
            style={{
              fontSize: "16px",
              margin: "0 0 20px",
              fontWeight: "700",
            }}
          >
            Follow Us
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#aaaaaa",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Instagram
            </a>

            <a
              href="#"
              style={{
                color: "#aaaaaa",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Facebook
            </a>

            <a
              href="#"
              style={{
                color: "#aaaaaa",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "50px auto 0",
          paddingTop: "25px",
          borderTop: "1px solid #333333",
          textAlign: "center",
          color: "#777777",
          fontSize: "13px",
        }}
      >
        © 2026 Shoply. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


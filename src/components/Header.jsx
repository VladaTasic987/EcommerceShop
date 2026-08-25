
import React from "react";

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 8%",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #eeeeee",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* LOGO */}
      <div
        style={{
          fontSize: "28px",
          fontWeight: "800",
          letterSpacing: "-1px",
          color: "#111111",
          cursor: "pointer",
        }}
      >
        Shop<span style={{ color: "#777777" }}>ly</span>
      </div>

      {/* NAVIGATION */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <a
          href="#home"
          style={{
            textDecoration: "none",
            color: "#111111",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Home
        </a>

        <a
          href="#shop"
          style={{
            textDecoration: "none",
            color: "#555555",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          Shop
        </a>

        <a
          href="#categories"
          style={{
            textDecoration: "none",
            color: "#555555",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          Categories
        </a>

        <a
          href="#about"
          style={{
            textDecoration: "none",
            color: "#555555",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          About
        </a>
      </nav>

      {/* HEADER ACTIONS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <button
          style={{
            width: "40px",
            height: "40px",
            border: "none",
            backgroundColor: "transparent",
            fontSize: "19px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          🔍
        </button>

        <button
          style={{
            width: "40px",
            height: "40px",
            border: "none",
            backgroundColor: "transparent",
            fontSize: "19px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          🛒
        </button>

        <button
          style={{
            width: "40px",
            height: "40px",
            border: "none",
            backgroundColor: "transparent",
            fontSize: "19px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          👤
        </button>
      </div>
    </header>
  );
};

export default Header;


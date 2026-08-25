import React from "react";

const products = [
  {
    id: 1,
    name: "Classic Sneakers",
    price: "$79.99",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    name: "Modern Watch",
    price: "$129.99",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: "$89.99",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
  {
    id: 4,
    name: "Minimal Headphones",
    price: "$99.99",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
];

const Body = () => {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#222",
        backgroundColor: "#fff",
      }}
    >
      {/* HERO */}
      <section
        id="home"
        style={{
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          padding: "60px 8%",
          background:
            "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "3px",
              color: "#777",
              marginBottom: "20px",
            }}
          >
            NEW COLLECTION 2026
          </p>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.05",
              margin: "0 0 25px",
              fontWeight: "800",
              color: "#a63030",
            }}
          >
            Find Your
            <br />
            Perfect Style
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#2e2a2a",
              marginBottom: "30px",
            }}
          >
            Discover our latest collection of products designed
            for modern everyday life.
          </p>

          <button
            style={{
              padding: "15px 32px",
              backgroundColor: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        id="categories"
        style={{
          padding: "80px 8%",
          backgroundColor: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "45px",
            color: "rgba(9, 70, 132, 0.27)"
          }}
        >
          Shop by Category
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "25px",
          }}
        >
          <div
            style={{
              padding: "60px 30px",
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
              Men
            </h3>
            <p style={{ color: "#777" }}>Explore collection</p>
          </div>

          <div
            style={{
              padding: "60px 30px",
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
              Women
            </h3>
            <p style={{ color: "#777" }}>Explore collection</p>
          </div>

          <div
            style={{
              padding: "60px 30px",
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
              Accessories
            </h3>
            <p style={{ color: "#777" }}>Explore collection</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="shop"
        style={{
          padding: "80px 8%",
          backgroundColor: "#fafafa",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "45px",
          }}
        >
          Featured Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "25px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div
                style={{
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    fontSize: "19px",
                    margin: "0 0 10px",
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    margin: "0 0 20px",
                  }}
                >
                  {product.price}
                </p>

                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#111",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body;


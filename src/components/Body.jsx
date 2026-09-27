

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
    <main className="body">
      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">NEW COLLECTION 2026</p>

          <h1 className="hero-title">
            Find Your
            <br />
            Perfect Style
          </h1>

          <p className="hero-text">
            Discover our latest collection of products designed
            for modern everyday life.
          </p>

          <button className="shop-button">Shop Now</button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="categories">
        <h2 className="section-title">Shop by Category</h2>

        <div className="categories-grid">
          <div className="category-card">
            <h3>Men</h3>
            <p>Explore collection</p>
          </div>

          <div className="category-card">
            <h3>Women</h3>
            <p>Explore collection</p>
          </div>

          <div className="category-card">
            <h3>Accessories</h3>
            <p>Explore collection</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="shop" className="products">
        <h2 className="section-title">Featured Products</h2>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <div className="product-info">
                <h3>{product.name}</h3>

                <p className="product-price">{product.price}</p>

                <button className="cart-button">
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
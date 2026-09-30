import Products from "./Products";


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
      
      <Products/>

    </main>
  );
};

export default Body;
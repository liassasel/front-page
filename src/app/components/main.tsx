import { useState } from "react";
import { products, Product } from "../../app/data/protducts";
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./product-card";
import Header from "./header";
import Footer from "../components/footer";

// Main Component
export default function MainComponent() {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(
    products || []
  );

  return (
    <div className="container">
      <div className="background-image">
        <img src="/placeholder.svg?height=500&width=1920" alt="Background" />
      </div>

        <Header />

      <main className="main">
        <h1 className="title">Condimentum consectetur</h1>

        <div className="controls">
          <div className="search-container">
            <button className="select-game">
              Select a game <ChevronDown className="icon" />
            </button>
            <div className="search-box">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
          </div>

          <div className="filters">
            <button className="filter-btn">
              All <span className="badge">A1</span>
            </button>
            <button className="filter-btn">
              Sort by: Featured <ChevronDown className="icon" />
            </button>
          </div>
        </div>

        <div className="products-grid">
          {(displayedProducts || []).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="pagination">
          <button className="page-btn">
            <ChevronLeft />
          </button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">4</button>
          <span className="ellipsis">...</span>
          <button className="page-btn">11</button>
          <button className="page-btn">
            <ChevronRight />
          </button>
        </div>
      </main>

        <Footer />

    </div>
  );
}

import { useState } from "react";
import { products, Product } from "../../app/data/protducts";
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./product-card";
import Header from "./header";
import Footer from "../components/footer";
import BackgroundWow from '../../../public/images/warcraft22.png'
import GoldBag from '../../../public/svgs/tresada.svg'
import Sword from '../../../public/svgs/sword.svg'
import Feather from '../../../public/svgs/pluma.svg'

import Image from 'next/image';


// Main Component
export default function MainComponent() {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(
    products || []
  );

  return (
    <div className="container">
      <div className="background-image">
        <Image
        src={BackgroundWow}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="background-image"
        />
      </div>

        <Header />

      <main className="main">
      <h1 className="title">Condimentum consectetur</h1>

      <div className="controls">
  <div className="search-container">
    <button className="select-game">
      <span className="icon-container">
        <Sword />
      </span>
      Select a game
      <ChevronDown className="icon" />
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
      <span className="icon-container">
        <GoldBag />
      </span>
      <span className="filter-label">Price</span>
      <span className="badge">All</span>
    </button>
    <button className="filter-btn">
      <span className="icon-container">
        <Feather />
      </span>
      <span className="filter-label">Item Type</span>
      <ChevronDown className="icon" />
      <span className="badge">All</span>
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

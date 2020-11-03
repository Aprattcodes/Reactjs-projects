import logo from './logo.svg';
import './App.css';

function App() {

    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }

    return (

        <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                <a href="index.html">Shopme</a>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign in</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>X</button>
                <ul>
                    <li>
                        <a href="index.html">American Classics</a>
                    </li>
                    <li>
                        <a href="index.html">Japanese</a>
                    </li>
                    <li>
                        <a href="index.html">Random</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                <ul className="products">
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/toy.jpg" alt="godzilla"/>
                            <div className="product-name">
                                <a href="product.html">Godzilla</a>
                            </div>
                            <div className="product-brand">Tokyo</div>
                            <div className="product-price">$25</div>
                            <div className="product-rating">4.5 stars (10 reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/army.jpg" alt="army men"/>
                            <div className="product-name">
                                <a href="product.html">Army Men</a>
                            </div>
                            <div className="product-brand">Tokyo</div>
                            <div className="product-price">$25</div>
                            <div className="product-rating">4.5 stars (10 reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/furby.jpg" alt="furby"/>
                            <div className="product-name">
                                <a href="product.html">Furby</a>
                            </div>
                            <div className="product-brand">Tokyo</div>
                            <div className="product-price">$25</div>
                            <div className="product-rating">4.5 stars (10 reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/barrel-of-monkeys.jpg" alt="barrel-of-monkeys"/>
                            <div className="product-name">
                                <a href="product.html">Barrel of Monkeys</a>
                            </div>
                            <div className="product-brand">Tokyo</div>
                            <div className="product-price">$25</div>
                            <div className="product-rating">4.5 stars (10 reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/rubik.jpg" alt="rubik cube"/>
                            <div className="product-name">
                                <a href="product.html">Rubik's Cube</a>
                            </div>
                            <div className="product-brand">Tokyo</div>
                            <div className="product-price">$25</div>
                            <div className="product-rating">4.5 stars (10 reviews)</div>
                        </div>
                    </li>         
                </ul>
                </div>
            </main>
            <footer className="footer">
                All rights reserved
            </footer>
        </div>
  );
}

export default App;

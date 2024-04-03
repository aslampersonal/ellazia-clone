import React from "react";

export default function Home() {

    return (
        <>
        <div>
  {/* Group Header Button */}
  <div id="group-icon-header" className="ts-floating-sidebar">
    <div className="overlay" />
    <div className="ts-sidebar-content ">
      <div className="sidebar-content">
        <ul className="tab-mobile-menu">
          <li id="main-menu" className="active">
            <span>Main Menu</span>
          </li>
          <li id="vertical-menu">
            <span>All Departments</span>
          </li>
        </ul>
        <h6 className="menu-title">
          <span>Main Menu</span>
        </h6>
        <div className="mobile-menu-wrapper ts-menu tab-menu-mobile">
          <nav className="mobile-menu">
            <ul id="menu-menu-mobile" className="menu">
              <li id="menu-item-18539" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18539 ts-normal-menu">
                <a href="https://ellazia.in/shop-4/">
                  <span className="menu-label">Shop</span>
                </a>
              </li>
              <li id="menu-item-15945" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15945 ts-normal-menu">
                <a href="https://ellazia.in/about-us-2/">
                  <span className="menu-label">About us</span>
                </a>
              </li>
              <li id="menu-item-18537" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18537 ts-normal-menu">
                <a href="https://ellazia.in/contact-us/">
                  <span className="menu-label">Contact us</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mobile-menu-wrapper ts-menu tab-vertical-menu">
          <nav className="vertical-menu pc-menu ts-mega-menu-wrapper">
            <ul id="menu-all-departments" className="menu">
              <li id="menu-item-16563" className="feature-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-16563 ts-normal-menu">
                <a href="https://ellazia.in/shop">
                  <span className="menu-label">Hot Deals!</span>
                </a>
              </li>
              <li id="menu-item-16564" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16564 ts-normal-menu">
                <a href="https://ellazia.in/shop">
                  <span className="menu-label">Top 100 Offers</span>
                </a>
              </li>
              <li id="menu-item-16745" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16745 ts-normal-menu">
                <a href="https://ellazia.in/product-category/electric-housewares/television/">
                  <span className="menu-label">TV &amp;Audio</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* Mobile Group Button */}
  <div id="ts-mobile-button-bottom">
    <div className="mobile-button-home">
      <a href="https://ellazia.in/">
        <span>Home</span>
      </a>
    </div>
    <div className="mobile-button-shop">
      <a href="https://ellazia.in/shop-4/">
        <span>Shop</span>
      </a>
    </div>
    <div className="my-account-wrapper">
      <div className="ts-tiny-account-wrapper">
        <div className="account-control">
          <a className="login" href="https://ellazia.in/my-account-3/" title="Login">
            <span>Login</span>
          </a>
        </div>
      </div>
    </div>
    <div className="my-wishlist-wrapper">
      <a title="Wishlist" href="https://ellazia.in/wishlist-3/" className="tini-wishlist">
        <span>Wishlist</span>
        <span className="count-number">0</span>
      </a>
    </div>
  </div>
  {/* Shopping Cart Floating Sidebar */}
  <div id="page" className="hfeed site">
    <div className="ts-store-notice">
      <div className="content">
        <p>
          <img className="img-bg" src="https://ellazia.in/wp-content/uploads/2021/05/store-noted.jpg" alt="banner" />
        </p>
      </div>
      <span className="close" />
    </div>
    {/* Page Slider */}
    <div id="vertical-menu-sidebar" className="menu-wrapper">
      <div className="overlay" />
      <div className="vertical-menu-content">
        <span className="close" />
        <div className="ts-menu">
          <h3 className="theme-title">All Departments</h3>
          <div className="vertical-menu-wrapper">
            <nav className="vertical-menu pc-menu ts-mega-menu-wrapper">
              <ul id="menu-all-departments-1" className="menu">
                <li className="feature-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-16563 ts-normal-menu">
                  <a href="https://ellazia.in/shop">
                    <span className="menu-label">Hot Deals!</span>
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16564 ts-normal-menu">
                  <a href="https://ellazia.in/shop">
                    <span className="menu-label">Top 100 Offers</span>
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16745 ts-normal-menu">
                  <a href="https://ellazia.in/product-category/electric-housewares/television/">
                    <span className="menu-label">TV &amp;Audio</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <header className="ts-header has-sticky hidden-currency hidden-language">
      <div className="header-container">
        <div className="header-template">
          <div className="header-sticky">
            <div className="header-middle">
              <div className="container">
                <div className="ts-mobile-icon-toggle">
                  <span className="icon" />
                </div>
                <div className="logo-wrapper hidden-phone">
                  <div className="logo">
                    <a href="https://ellazia.in/">
                      <img src="/src/assets/images/ucos-logo.png" alt="ucos" title="ucos" className="normal-logo" />
                      <img src="/src/assets/images/ucos-logo.png" alt="ucos" title="ucos" className="mobile-logo" />
                      <img src="/src/assets/images/ucos-logo.png" alt="ucos" title="ucos" className="sticky-logo" />
                    </a>
                  </div>
                </div>
                <div className="icon-menu-sticky-header hidden-phone">
                  <span className="icon" />
                </div>
                <div className="search-wrapper">
                  <div className="ts-search-by-category ">
                    <form method="get" action="https://ellazia.in/">
                      <select className="select-category" name="term">
                        <option value>All categories</option>
                        <option value="bag">Bag</option>
                        <option value="belt">Belt</option>
                        <option value="hoodies">Hoodies</option>
                        <option value="pants">Pants</option>
                        <option value="shirt">Shirt</option>
                        <option value="t-shirt">T-Shirt</option>
                        <option value="wallet">Wallet</option>
                      </select>
                      <div className="search-content">
                        <input type="text" defaultValue name="s" placeholder="Search for products" autoComplete="off" />
                        <input type="submit" title="Search" defaultValue="Search" />
                        <input type="hidden" name="post_type" defaultValue="product" />
                        <input type="hidden" name="taxonomy" defaultValue="product_cat" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="header-right">
                  <div className="shopping-cart-wrapper">
                    <div className="ts-tiny-cart-wrapper">
                      <div className="cart-icon">
                        <a className="cart-control" href="https://ellazia.in/cart-3/" title="View your shopping cart">
                          <span className="ic-cart">
                            <span className="cart-number">0</span>
                          </span>
                        </a>
                      </div>
                      <div className="cart-dropdown-form dropdown-container woocommerce">
                        <div className="form-content cart-empty">
                          <h3 className="emty-title">Cart (0)</h3>
                          <div>
                            <label>Your cart is currently empty</label>
                            <a className="continue-shopping-button button-text" href="https://ellazia.in/shop-4/">Continue Shopping</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-wishlist-wrapper hidden-phone">
                    <a title="Wishlist" href="https://ellazia.in/wishlist-3/" className="tini-wishlist">
                      <span>Wishlist</span>
                      <span className="count-number">0</span>
                    </a>
                  </div>
                  <div className="my-account-wrapper hidden-phone">
                    <div className="ts-tiny-account-wrapper">
                      <div className="account-control">
                        <a className="login" href="https://ellazia.in/my-account-3/" title="Login">
                          <span>Login</span>
                        </a>
                        <div className="account-dropdown-form dropdown-container">
                          <div className="form-content">
                            <h2 className="dropdown-title">Login</h2>
                            <form name="ts-login-form" id="ts-login-form" action="https://ellazia.in/wp-login.php" method="post">
                              <p className="login-username">
                                <label htmlFor="user_login">Username or Email Address</label>
                                <input type="text" name="log" id="user_login" autoComplete="username" className="input" defaultValue size={20} />
                              </p>
                              <p className="login-password">
                                <label htmlFor="user_pass">Password</label>
                                <input type="password" name="pwd" id="user_pass" autoComplete="current-password" spellCheck="false" className="input" defaultValue size={20} />
                              </p>
                              <p className="login-remember">
                                <label>
                                  <input name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" />Remember Me
                                </label>
                              </p>
                              <p className="login-submit">
                                <input type="submit" name="wp-submit" id="wp-submit" className="button button-primary" defaultValue="Log In" />
                                <input type="hidden" name="redirect_to" defaultValue="https://ellazia.in/" />
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-bottom hidden-phone">
              <div className="container">
                <div className="menu-wrapper">
                  <span className="vertical-menu-button" />
                  <div className="ts-menu">
                    <nav className="main-menu pc-menu ts-mega-menu-wrapper">
                      <ul id="menu-main-menu" className="menu">
                        <li id="menu-item-19171" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19171 ts-normal-menu">
                          <a href="https://ellazia.in/shop-4/">
                            <span className="menu-label">Shop</span>
                          </a>
                        </li>
                        <li id="menu-item-16420" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16420 ts-normal-menu">
                          <a href="https://ellazia.in/about-us-2/">
                            <span className="menu-label">About Us</span>
                          </a>
                        </li>
                        <li id="menu-item-15806" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15806 ts-normal-menu">
                          <a href="https://ellazia.in/contact-us/">
                            <span className="menu-label">Contact Us</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="info">
                  <p>
                    <span className="mobile-contact">
                      <a style={{textDecoration: 'none'}} href="tel:+91 8111991881">+91 8111991881</a>
                    </span>
                  </p>
                </div>
                <div className="ts-header-recently-viewed-products woocommerce">
                  <div className="recently-viewed-products-control">
                    <span>Recently Viewed</span>
                  </div>
                  <div className="recently-viewed-products-dropdown dropdown-container">
                    <ul className="product_list_widget">
                      <li>
                        <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts-4/">
                          <img fetchpriority="high" width={300} height={300} src="https://ellazia.in/wp-content/uploads/2023/03/1-39-300x300.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt srcSet="https://ellazia.in/wp-content/uploads/2023/03/1-39-300x300.jpg 300w, https://ellazia.in/wp-content/uploads/2023/03/1-39-150x150.jpg 150w, https://ellazia.in/wp-content/uploads/2023/03/1-39-440x440.jpg 440w, https://ellazia.in/wp-content/uploads/2023/03/1-39-120x120.jpg 120w, https://ellazia.in/wp-content/uploads/2023/03/1-39-46x46.jpg 46w, https://ellazia.in/wp-content/uploads/2023/03/1-39-100x100.jpg 100w, https://ellazia.in/wp-content/uploads/2023/03/1-39-700x700.jpg 700w" sizes="(max-width: 300px) 100vw, 300px" />
                        </a>
                        <div className="ts-wg-meta">
                          <a href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts-4/">Ellazia Round Neck Five Sleeve T-Shirts								</a>
                          <span className="price">
                            <del>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">₹</span>
                                  &nbsp;299.00
                                </bdi>
                              </span>
                            </del>
                            <ins>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">₹</span>
                                  &nbsp;149.00
                                </bdi>
                              </span>
                            </ins>
                          </span>
                        </div>
                      </li>
                      <li>
                        <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts/">
                          <img width={300} height={300} src="https://ellazia.in/wp-content/uploads/2023/03/1-37-300x300.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt srcSet="https://ellazia.in/wp-content/uploads/2023/03/1-37-300x300.jpg 300w, https://ellazia.in/wp-content/uploads/2023/03/1-37-150x150.jpg 150w, https://ellazia.in/wp-content/uploads/2023/03/1-37-440x440.jpg 440w, https://ellazia.in/wp-content/uploads/2023/03/1-37-120x120.jpg 120w, https://ellazia.in/wp-content/uploads/2023/03/1-37-46x46.jpg 46w, https://ellazia.in/wp-content/uploads/2023/03/1-37-100x100.jpg 100w, https://ellazia.in/wp-content/uploads/2023/03/1-37-700x700.jpg 700w" sizes="(max-width: 300px) 100vw, 300px" />
                        </a>
                        <div className="ts-wg-meta">
                          <a href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts/">Ellazia Round Neck Five Sleeve T-Shirts								</a>
                          <span className="price">
                            <del>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">₹</span>
                                  &nbsp;299.00
                                </bdi>
                              </span>
                            </del>
                            <ins>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">₹</span>
                                  &nbsp;149.00
                                </bdi>
                              </span>
                            </ins>
                          </span>
                        </div>
                      </li>
                      <li>
                        <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-polo-t-shirt-9/">
                          <img width={300} height={300} src="https://ellazia.in/wp-content/uploads/2023/03/A09I1369-copy-300x300.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt srcSet="https://ellazia.in/wp-content/uploads/2023/03/A09I1369-copy-300x300.jpg 300w, https://ellazia.in/wp-content/uploads/2023/03/A09I1369-copy-150x150.jpg 150w, https://ellazia.in/wp-content/uploads/2023/03/A09I1369-copy-440x440.jpg 440w, https://ellazia.in/wp-content/uploads/2023/03/A09I1369-copy-120x120.jpg 120w, https://ellazia.in/wp-content/uploads/2023/03/A09I1369-copy-46x46.jpg 46w, https://ellazia.in/wp-content/uploads/2023/03/A09I1369-copy-100x100.jpg 100w, https://ellazia.in/wp-content/uploads/2023/03/A09I1369-copy-700x700.jpg 700w" sizes="(max-width: 300px) 100vw, 300px" />
                        </a>
                        <div className="ts-wg-meta">
                          <a href="https://ellazia.in/product/ellazia-polo-t-shirt-9/">Ellazia Polo T-Shirt								</a>
                          <span className="price">
                            <del>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">₹</span>
                                  &nbsp;649.00
                                </bdi>
                              </span>
                            </del>
                            <ins>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">₹</span>
                                  &nbsp;324.00
                                </bdi>
                              </span>
                            </ins>
                          </span>
                        </div>
                      </li>
                      <li>
                        <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-lycra-casual-pant/">
                          <img loading="lazy" width={300} height={300} src="https://ellazia.in/wp-content/uploads/2023/03/37-300x300.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt srcSet="https://ellazia.in/wp-content/uploads/2023/03/37-300x300.jpg 300w, https://ellazia.in/wp-content/uploads/2023/03/37-150x150.jpg 150w, https://ellazia.in/wp-content/uploads/2023/03/37-440x440.jpg 440w, https://ellazia.in/wp-content/uploads/2023/03/37-120x120.jpg 120w, https://ellazia.in/wp-content/uploads/2023/03/37-46x46.jpg 46w, https://ellazia.in/wp-content/uploads/2023/03/37-100x100.jpg 100w, https://ellazia.in/wp-content/uploads/2023/03/37.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" />
                        </a>
                        <div className="ts-wg-meta">
                          <a href="https://ellazia.in/product/ellazia-lycra-casual-pant/">Ellazia Lycra Casual Pant								</a>
                          <span className="price">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">₹</span>
                                &nbsp;499.00
                              </bdi>
                            </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-wrapper visible-phone">
            <div className="logo">
              <a href="https://ellazia.in/">
                <img src="https://ellazia.in/wp-content/uploads/2023/03/logo-300x75.png" alt="ellazia" title="ellazia" className="normal-logo" />
                <img src="https://ellazia.in/wp-content/uploads/2023/03/logo-300x75.png" alt="ellazia" title="ellazia" className="mobile-logo" />
                <img src="https://ellazia.in/wp-content/uploads/2023/03/logo-300x75.png" alt="ellazia" title="ellazia" className="sticky-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="main" className="wrapper">
      {/* Page slider */}
      <div className="page-container-new">
        {/* Left Sidebar */}
        {/* Main Content */}
        <div id="main-content" className="ts-col-24">
          <div id="primary" className="site-content">
            <article id="post-18066" className="post-18066 page type-page status-publish hentry">
              <div data-elementor-type="wp-page" data-elementor-id={18066} className="elementor elementor-18066">
                <section className="elementor-section elementor-top-section elementor-element elementor-element-80d0097 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="80d0097" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3fb2b41" data-id="3fb2b41" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-bb9b00a elementor-widget elementor-widget-shortcode" data-id="bb9b00a" data-element_type="widget" data-widget_type="shortcode.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-shortcode">
                              <div className="n2_clear">
                                  <div className="n2-section-smartslider fitvidsignore  n2_clear" data-ssid={2}>
                                    <div id="n2-ss-2-align" className="n2-ss-align">
                                      <div className="n2-padding">
                                        <div id="n2-ss-2" data-creator="Smart Slider 3" data-responsive="fullwidth" className="n2-ss-slider n2-ow n2-has-hover n2notransition  ">
                                          <div className="n2-ss-slider-wrapper-inside">
                                            <div className="n2-ss-slider-1 n2_ss__touch_element n2-ow">
                                              <div className="n2-ss-slider-2 n2-ow">
                                                <div className="n2-ss-slider-3 n2-ow">
                                                  <div className="n2-ss-slide-backgrounds n2-ow-all">
                                                    <div className="n2-ss-slide-background" data-public-id={1} data-mode="fill">
                                                      <div className="n2-ss-slide-background-image" data-blur={0} data-opacity={100} data-x={50} data-y={50} data-alt data-title>
                                                        <picture className="skip-lazy" data-skip-lazy={1}>
                                                          <img decoding="async" src="//ellazia.in/wp-content/uploads/2024/03/WEB-08.jpg" alt title loading="lazy" className="skip-lazy" data-skip-lazy={1} />
                                                        </picture>
                                                      </div>
                                                      <div data-color="RGBA(255,255,255,0)" style={{backgroundColor: 'RGBA(255,255,255,0)'}} className="n2-ss-slide-background-color" />
                                                    </div>
                                                    <div className="n2-ss-slide-background" data-public-id={2} data-mode="fill">
                                                      <div className="n2-ss-slide-background-image" data-blur={0} data-opacity={100} data-x={50} data-y={50} data-alt data-title>
                                                        <picture className="skip-lazy" data-skip-lazy={1}>
                                                          <img decoding="async" src="//ellazia.in/wp-content/uploads/2024/03/WEB-07-f.jpg" alt title loading="lazy" className="skip-lazy" data-skip-lazy={1} />
                                                        </picture>
                                                      </div>
                                                      <div data-color="RGBA(255,255,255,0)" style={{backgroundColor: 'RGBA(255,255,255,0)'}} className="n2-ss-slide-background-color" />
                                                    </div>
                                                    <div className="n2-ss-slide-background" data-public-id={3} data-mode="fill">
                                                      <div className="n2-ss-slide-background-image" data-blur={0} data-opacity={100} data-x={50} data-y={50} data-alt data-title>
                                                        <picture className="skip-lazy" data-skip-lazy={1}>
                                                          <img decoding="async" src="//ellazia.in/wp-content/uploads/2024/03/WEB-06.jpg" alt title loading="lazy" className="skip-lazy" data-skip-lazy={1} />
                                                        </picture>
                                                      </div>
                                                      <div data-color="RGBA(255,255,255,0)" style={{backgroundColor: 'RGBA(255,255,255,0)'}} className="n2-ss-slide-background-color" />
                                                    </div>
                                                  </div>
                                                  <div className="n2-ss-slider-4 n2-ow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 600" data-related-device="desktopPortrait" className="n2-ow n2-ss-preserve-size n2-ss-preserve-size--slider n2-ss-slide-limiter" />
                                                    <div data-first={1} data-slide-duration={0} data-id={3} data-slide-public-id={1} data-title="WEB 08" className="n2-ss-slide n2-ow  n2-ss-slide-3">
                                                      <div role="note" className="n2-ss-slide--focus" tabIndex={-1}>WEB 08</div>
                                                      <div className="n2-ss-layers-container n2-ss-slide-limiter n2-ow">
                                                        <div className="n2-ss-layer n2-ow n-uc-XudKwgcGLkBz" data-sstype="slide" data-pm="default" />
                                                      </div>
                                                    </div>
                                                    <div data-slide-duration={0} data-id={4} data-slide-public-id={2} data-title="WEB 07 f" className="n2-ss-slide n2-ow  n2-ss-slide-4">
                                                      <div role="note" className="n2-ss-slide--focus" tabIndex={-1}>WEB 07 f</div>
                                                      <div className="n2-ss-layers-container n2-ss-slide-limiter n2-ow">
                                                        <div className="n2-ss-layer n2-ow n-uc-z4p4A2DezfpO" data-sstype="slide" data-pm="default">
                                                          {/* <img src="/src/assets/images/banners/main-banner1.jpg" alt="" /> */}
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div data-slide-duration={0} data-id={5} data-slide-public-id={3} data-title="WEB 06" className="n2-ss-slide n2-ow  n2-ss-slide-5">
                                                      <div role="note" className="n2-ss-slide--focus" tabIndex={-1}>WEB 06</div>
                                                      <div className="n2-ss-layers-container n2-ss-slide-limiter n2-ow">
                                                        <div className="n2-ss-layer n2-ow n-uc-GG2HPUlB1RMm" data-sstype="slide" data-pm="default" />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="n2-ss-slider-controls n2-ss-slider-controls-absolute-left-center">
                                              <div style={{widgetOffset: 15}} className="n2-ss-widget nextend-arrow n2-ow-all nextend-arrow-previous  nextend-arrow-animated-fade" data-hide-mobileportrait={1} id="n2-ss-2-arrow-previous" role="button" aria-label="previous arrow" tabIndex={0}>
                                                <img loading="lazy" decoding="async" width={32} height={32} className="skip-lazy" data-skip-lazy={1} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgICAgICAgIGQ9Ik0yMC42NTQgOS40M2wtNi4zMjYgNi41MjUgNi4zMjYgNi42Yy4yNDIuMjUzLjM2LjU0NS4zNi44OCAwIC4zMzMtLjExOC42MjUtLjM2Ljg3N2wtMS4yNDQgMS4zYy0uMjQuMjUtLjUyMy4zNzUtLjg0LjM3NS0uMzIgMC0uNi0uMTI0LS44NC0uMzc2bC04LjM2Ny04LjcyYy0uMjQtLjI1LS4zNjMtLjU0LS4zNjMtLjg4IDAtLjMzNC4xMjItLjYzLjM2My0uODhsOC4zNjctOC43NWMuMjMtLjI1Mi41MS0uMzc3LjgzLS4zNzcuMzI1IDAgLjYwNy4xMjYuODUuMzc4bDEuMjQyIDEuMzI2Yy4yNDIuMjUyLjM2LjU0LjM2Ljg2NCAwIC4zMi0uMTE4LjYxLS4zNi44NnoiCiAgICAgICAgICBvcGFjaXR5PSIxIi8+Cjwvc3ZnPgo=" alt="previous arrow" />
                                              </div>
                                            </div>
                                            <div className="n2-ss-slider-controls n2-ss-slider-controls-absolute-right-center">
                                              <div style={{widgetOffset: 15}} className="n2-ss-widget nextend-arrow n2-ow-all nextend-arrow-next  nextend-arrow-animated-fade" data-hide-mobileportrait={1} id="n2-ss-2-arrow-next" role="button" aria-label="next arrow" tabIndex={0}>
                                                <img loading="lazy" decoding="async" width={32} height={32} className="skip-lazy" data-skip-lazy={1} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMy4yODYgMjUuNjFjLS4yNC4yNTMtLjUyLjM3Ny0uODQuMzc3LS4zMTggMC0uNi0uMTI0LS44NC0uMzc2bC0xLjI0NS0xLjI5N2MtLjI0LS4yNTItLjM2LS41NDQtLjM2LS44NzggMC0uMzM0LjEyLS42MjYuMzYtLjg3OGw2LjMyOC02LjZMMTAuMzYgOS40M2MtLjI0LS4yNS0uMzYtLjU0LS4zNi0uODY0IDAtLjMyMy4xMi0uNjEyLjM2LS44NjRsMS4yNDUtMS4zMjVjLjI0LS4yNTIuNTIzLS4zNzcuODQ4LS4zNzcuMzIzIDAgLjYwMi4xMjUuODMzLjM3N2w4LjM2NiA4Ljc0NmMuMjQuMjUuMzYzLjU0Ni4zNjMuODgyIDAgLjM0LS4xMjIuNjM0LS4zNjMuODg2bC04LjM2NiA4LjcyeiIKICAgICAgICAgIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=" alt="next arrow" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <ss3-loader />
                                      </div>
                                    </div>
                                    <div className="n2_clear" />
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-e16d2fa elementor-reverse-tablet elementor-reverse-mobile elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e16d2fa" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-a2e0c88" data-id="a2e0c88" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-a6e82fc elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box" data-id="a6e82fc" data-element_type="widget" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <figure className="elementor-image-box-img">
                                <img loading="lazy" decoding="async" width={44} height={44} src="https://ellazia.in/wp-content/uploads/2021/04/feature-1.png" className="attachment-full size-full wp-image-17848" alt />
                              </figure>
                              <div className="elementor-image-box-content">
                                <h6 className="elementor-image-box-title">DELIVERY IN 24H</h6>
                                <p className="elementor-image-box-description">Free shipping over $100</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-b3158d6" data-id="b3158d6" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-a361456 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box" data-id="a361456" data-element_type="widget" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <figure className="elementor-image-box-img">
                                <img loading="lazy" decoding="async" width={44} height={44} src="https://ellazia.in/wp-content/uploads/2021/04/feature-2.png" className="attachment-full size-full wp-image-17849" alt />
                              </figure>
                              <div className="elementor-image-box-content">
                                <h6 className="elementor-image-box-title">24 HOURS RETURN</h6>
                                <p className="elementor-image-box-description">Free return over $100</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-f5b069c" data-id="f5b069c" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-38deb2d elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box" data-id="38deb2d" data-element_type="widget" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <figure className="elementor-image-box-img">
                                <img loading="lazy" decoding="async" width={44} height={44} src="https://ellazia.in/wp-content/uploads/2021/04/feature-3.png" className="attachment-full size-full wp-image-17850" alt />
                              </figure>
                              <div className="elementor-image-box-content">
                                <h6 className="elementor-image-box-title">QUALITY GUARANTEE</h6>
                                <p className="elementor-image-box-description">Quality checked by our team</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-92819cb" data-id="92819cb" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-d16306f elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box" data-id="d16306f" data-element_type="widget" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <figure className="elementor-image-box-img">
                                <img loading="lazy" decoding="async" width={44} height={44} src="https://ellazia.in/wp-content/uploads/2021/04/feature-4.png" className="attachment-full size-full wp-image-17851" alt />
                              </figure>
                              <div className="elementor-image-box-content">
                                <h6 className="elementor-image-box-title">SUPPORT 24/7</h6>
                                <p className="elementor-image-box-description">Shop with an expert</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-d710c5b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d710c5b" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b12d824" data-id="b12d824" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-635b5bb elementor-widget elementor-widget-spacer" data-id="635b5bb" data-element_type="widget" data-widget_type="spacer.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-spacer">
                              <div className="elementor-spacer-inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-4c14c70 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4c14c70" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-200c774" data-id="200c774" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-83ddedd elementor-widget elementor-widget-ts-banner" data-id="83ddedd" data-element_type="widget" data-widget_type="ts-banner.default">
                          <div className="elementor-widget-container">
                            <div className="ts-banner text-left size-default background-scale left-center style-button-text show-button">
                              <div className="banner-wrapper">
                                <a className="banner-link" href="https://ellazia.in/shop-4/" target="_blank" rel="nofollow" />
                                <div className="banner-bg">
                                  <div className="bg-content">
                                    <img loading="lazy" decoding="async" width={1067} height={440} src="https://ellazia.in/wp-content/uploads/2024/03/web-09.jpg" className="img" alt srcSet="https://ellazia.in/wp-content/uploads/2024/03/web-09.jpg 1067w, https://ellazia.in/wp-content/uploads/2024/03/web-09-300x124.jpg 300w, https://ellazia.in/wp-content/uploads/2024/03/web-09-1024x422.jpg 1024w, https://ellazia.in/wp-content/uploads/2024/03/web-09-768x317.jpg 768w, https://ellazia.in/wp-content/uploads/2024/03/web-09-600x247.jpg 600w" sizes="(max-width: 1067px) 100vw, 1067px" />
                                  </div>
                                </div>
                                <div className="box-content">
                                  <div className="header-content" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0cbddd5" data-id="0cbddd5" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-44d1bd9 elementor-widget elementor-widget-ts-banner" data-id="44d1bd9" data-element_type="widget" data-widget_type="ts-banner.default">
                          <div className="elementor-widget-container">
                            <div className="ts-banner text-left size-default background-scale left-center style-button-text show-button">
                              <div className="banner-wrapper">
                                <a className="banner-link" href="https://ellazia.in/shop-4/" target="_blank" rel="nofollow" />
                                <div className="banner-bg">
                                  <div className="bg-content">
                                    <img loading="lazy" decoding="async" width={1067} height={440} src="https://ellazia.in/wp-content/uploads/2024/03/web-91.jpg" className="img" alt srcSet="https://ellazia.in/wp-content/uploads/2024/03/web-91.jpg 1067w, https://ellazia.in/wp-content/uploads/2024/03/web-91-300x124.jpg 300w, https://ellazia.in/wp-content/uploads/2024/03/web-91-1024x422.jpg 1024w, https://ellazia.in/wp-content/uploads/2024/03/web-91-768x317.jpg 768w, https://ellazia.in/wp-content/uploads/2024/03/web-91-600x247.jpg 600w" sizes="(max-width: 1067px) 100vw, 1067px" />
                                  </div>
                                </div>
                                <div className="box-content">
                                  <div className="header-content" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-9f9a81b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9f9a81b" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-89dabc4 widget-content" data-id="89dabc4" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-a1f2b16 title-big elementor-widget elementor-widget-wp-widget-ts_products" data-id="a1f2b16" data-element_type="widget" data-widget_type="wp-widget-ts_products.default">
                          <div className="elementor-widget-container">
                            <h5>Best Selling</h5>
                            <div className="ts-products-widget-wrapper woocommerce ts-slider loading" data-nav={0} data-autoplay={1}>
                              <div className="per-slide">
                                <ul className="product_list_widget">
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-17/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/03/02-1-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-17/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts-22/" title="Ellazia Round Neck Five Sleeve T-Shirts">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/03/01-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts-22/" title="Ellazia Round Neck Five Sleeve T-Shirts">Ellazia Round Neck Five Sleeve T-Shirts									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-polo-t-shirt-23/" title="Ellazia Polo T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-48-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-polo-t-shirt-23/" title="Ellazia Polo T-Shirt">Ellazia Polo T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="per-slide">
                                <ul className="product_list_widget">
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-polo-t-shirt-22/" title="Ellazia Polo T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-56-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-polo-t-shirt-22/" title="Ellazia Polo T-Shirt">Ellazia Polo T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-polo-t-shirt-21/" title="Ellazia Polo T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-57-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-polo-t-shirt-21/" title="Ellazia Polo T-Shirt">Ellazia Polo T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-polo-t-shirt-20/" title="Ellazia Polo T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-58-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-polo-t-shirt-20/" title="Ellazia Polo T-Shirt">Ellazia Polo T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="per-slide">
                                <ul className="product_list_widget">
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-polo-t-shirt-19/" title="Ellazia Polo T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-53-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-polo-t-shirt-19/" title="Ellazia Polo T-Shirt">Ellazia Polo T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-polo-t-shirt-18/" title="Ellazia Polo T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-54-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-polo-t-shirt-18/" title="Ellazia Polo T-Shirt">Ellazia Polo T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-polo-t-shirt-17/" title="Ellazia Polo T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-61-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-polo-t-shirt-17/" title="Ellazia Polo T-Shirt">Ellazia Polo T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="per-slide">
                                <ul className="product_list_widget">
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-polo-t-shirt-16/" title="Ellazia Polo T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-64-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-polo-t-shirt-16/" title="Ellazia Polo T-Shirt">Ellazia Polo T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-polo-t-shirt-15/" title="Ellazia Polo T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-51-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-polo-t-shirt-15/" title="Ellazia Polo T-Shirt">Ellazia Polo T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-full-sleeve-hoodies-copy-2/" title="Ellazia Full Sleeve Hoodies">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-68-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-full-sleeve-hoodies-copy-2/" title="Ellazia Full Sleeve Hoodies">Ellazia Full Sleeve Hoodies									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;699.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;349.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="per-slide">
                                <ul className="product_list_widget">
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-full-sleeve-hoodies/" title="Ellazia Full Sleeve Hoodies">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-69-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-full-sleeve-hoodies/" title="Ellazia Full Sleeve Hoodies">Ellazia Full Sleeve Hoodies									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;699.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;349.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-full-sleeve-hoodies-copy/" title="Ellazia Full Sleeve Hoodies">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/03-2-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-full-sleeve-hoodies-copy/" title="Ellazia Full Sleeve Hoodies">Ellazia Full Sleeve Hoodies									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;699.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;349.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-hoodies-2/" title="Ellazia Full Sleeve Hoodies">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-71-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-hoodies-2/" title="Ellazia Full Sleeve Hoodies">Ellazia Full Sleeve Hoodies									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;699.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;349.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="per-slide">
                                <ul className="product_list_widget">
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-hoodies/" title="Ellazia Full Sleeve Hoodies">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-72-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-hoodies/" title="Ellazia Full Sleeve Hoodies">Ellazia Full Sleeve Hoodies									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;699.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;349.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-16/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-58-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-16/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-15/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-63-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-15/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="per-slide">
                                <ul className="product_list_widget">
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-14/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-50-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-14/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-13/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-43-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-13/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-12/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-38-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-12/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="per-slide">
                                <ul className="product_list_widget">
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-11/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-37-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-11/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-10/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-36-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-10/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-9/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-35-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-9/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="per-slide">
                                <ul className="product_list_widget">
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-8/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-40-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-8/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-7/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-32-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-7/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-6/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-38-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-6/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="per-slide">
                                <ul className="product_list_widget">
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-5/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-27-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-5/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-4/" title="Ellazia Round Neck Full Sleeve T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-26-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-4/" title="Ellazia Round Neck Full Sleeve T-Shirt">Ellazia Round Neck Full Sleeve T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts-21/" title="Ellazia Round Neck Five Sleeve T-Shirts">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-73-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts-21/" title="Ellazia Round Neck Five Sleeve T-Shirts">Ellazia Round Neck Five Sleeve T-Shirts									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-b94bd32 product-content" data-id="b94bd32" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-58c02dc elementor-widget elementor-widget-heading" data-id="58c02dc" data-element_type="widget" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">
                              <a href="https://ellazia.in/shop-4/">
                                Flash <span style={{color: 'red'}}>Sale</span>
                                Today!
                              </a>
                            </h3>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-5714a30 elementor-widget elementor-widget-ts-products" data-id="5714a30" data-element_type="widget" data-widget_type="ts-products.default">
                          <div className="elementor-widget-container">
                            <div className="ts-product-wrapper ts-shortcode ts-product woocommerce columns-4 recent">
                              <div className="content-wrapper ">
                                <div className="products">
                                  <section className="product type-product post-20865 status-publish first instock product_cat-shirt has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={20865}>
                                    <div className="product-wrapper">
                                      <div className="thumbnail-wrapper">
                                        <a href="https://ellazia.in/product/ellazia-half-sleeve-casual-shirts-12/">
                                          <figure className="no-back-image">
                                            <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-15-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                          </figure>
                                        </a>
                                        <div className="product-label">
                                          <span className="onsale">
                                            <span>Sale</span>
                                          </span>
                                        </div>
                                        <div className="product-group-button">
                                          <div className="loop-add-to-cart">
                                            <a href="https://ellazia.in/product/ellazia-half-sleeve-casual-shirts-12/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={20865} data-product_sku aria-label="Select options for “Ellazia Half Sleeve Casual Shirts”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                              <span className="ts-tooltip button-tooltip">Select options</span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="meta-wrapper">
                                        <h3 className="heading-title product-name">
                                          <a href="https://ellazia.in/product/ellazia-half-sleeve-casual-shirts-12/">Ellazia Half Sleeve Casual Shirts</a>
                                        </h3>
                                        <div className="product-group-price-button-meta-wrapper">
                                          <div className="product-group-price-button-meta">
                                            <span className="price">
                                              <del aria-hidden="true">
                                                <span className="woocommerce-Price-amount amount">
                                                  <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">₹</span>
                                                    &nbsp;999.00
                                                  </bdi>
                                                </span>
                                              </del>
                                              <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                  <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">₹</span>
                                                    &nbsp;499.00
                                                  </bdi>
                                                </span>
                                              </ins>
                                            </span>
                                            <div className="product-group-button-meta">
                                              <div className="loop-add-to-cart">
                                                <a href="https://ellazia.in/product/ellazia-half-sleeve-casual-shirts-12/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={20865} data-product_sku aria-label="Select options for “Ellazia Half Sleeve Casual Shirts”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                  <span className="ts-tooltip button-tooltip">Select options</span>
                                                </a>
                                              </div>
                                              <div className="button-in quickshop">
                                                <a className="quickshop" href="#" data-product_id={20865}>
                                                  <span className="ts-tooltip button-tooltip">Quick view</span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <section className="product type-product post-21148 status-publish instock product_cat-t-shirt has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21148}>
                                    <div className="product-wrapper">
                                      <div className="thumbnail-wrapper">
                                        <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-11/">
                                          <figure className="no-back-image">
                                            <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-37-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                          </figure>
                                        </a>
                                        <div className="product-label">
                                          <span className="onsale">
                                            <span>Sale</span>
                                          </span>
                                        </div>
                                        <div className="product-group-button">
                                          <div className="loop-add-to-cart">
                                            <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-11/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21148} data-product_sku aria-label="Select options for “Ellazia Round Neck Full Sleeve T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                              <span className="ts-tooltip button-tooltip">Select options</span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="meta-wrapper">
                                        <h3 className="heading-title product-name">
                                          <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-11/">Ellazia Round Neck Full Sleeve T-Shirt</a>
                                        </h3>
                                        <div className="product-group-price-button-meta-wrapper">
                                          <div className="product-group-price-button-meta">
                                            <span className="price">
                                              <del aria-hidden="true">
                                                <span className="woocommerce-Price-amount amount">
                                                  <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">₹</span>
                                                    &nbsp;599.00
                                                  </bdi>
                                                </span>
                                              </del>
                                              <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                  <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">₹</span>
                                                    &nbsp;299.00
                                                  </bdi>
                                                </span>
                                              </ins>
                                            </span>
                                            <div className="product-group-button-meta">
                                              <div className="loop-add-to-cart">
                                                <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-11/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21148} data-product_sku aria-label="Select options for “Ellazia Round Neck Full Sleeve T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                  <span className="ts-tooltip button-tooltip">Select options</span>
                                                </a>
                                              </div>
                                              <div className="button-in quickshop">
                                                <a className="quickshop" href="#" data-product_id={21148}>
                                                  <span className="ts-tooltip button-tooltip">Quick view</span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <section className="product type-product post-21188 status-publish instock product_cat-hoodies has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21188}>
                                    <div className="product-wrapper">
                                      <div className="thumbnail-wrapper">
                                        <a href="https://ellazia.in/product/ellazia-full-sleeve-hoodies-copy/">
                                          <figure className="no-back-image">
                                            <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/03-2-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                          </figure>
                                        </a>
                                        <div className="product-label">
                                          <span className="onsale">
                                            <span>Sale</span>
                                          </span>
                                        </div>
                                        <div className="product-group-button">
                                          <div className="loop-add-to-cart">
                                            <a href="https://ellazia.in/product/ellazia-full-sleeve-hoodies-copy/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21188} data-product_sku aria-label="Select options for “Ellazia Full Sleeve Hoodies”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                              <span className="ts-tooltip button-tooltip">Select options</span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="meta-wrapper">
                                        <h3 className="heading-title product-name">
                                          <a href="https://ellazia.in/product/ellazia-full-sleeve-hoodies-copy/">Ellazia Full Sleeve Hoodies</a>
                                        </h3>
                                        <div className="product-group-price-button-meta-wrapper">
                                          <div className="product-group-price-button-meta">
                                            <span className="price">
                                              <del aria-hidden="true">
                                                <span className="woocommerce-Price-amount amount">
                                                  <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">₹</span>
                                                    &nbsp;699.00
                                                  </bdi>
                                                </span>
                                              </del>
                                              <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                  <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">₹</span>
                                                    &nbsp;349.00
                                                  </bdi>
                                                </span>
                                              </ins>
                                            </span>
                                            <div className="product-group-button-meta">
                                              <div className="loop-add-to-cart">
                                                <a href="https://ellazia.in/product/ellazia-full-sleeve-hoodies-copy/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21188} data-product_sku aria-label="Select options for “Ellazia Full Sleeve Hoodies”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                  <span className="ts-tooltip button-tooltip">Select options</span>
                                                </a>
                                              </div>
                                              <div className="button-in quickshop">
                                                <a className="quickshop" href="#" data-product_id={21188}>
                                                  <span className="ts-tooltip button-tooltip">Quick view</span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <section className="product type-product post-21038 status-publish last instock product_cat-pants has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21038}>
                                    <div className="product-wrapper">
                                      <div className="thumbnail-wrapper">
                                        <a href="https://ellazia.in/product/ellazia-casual-pant-2/">
                                          <figure className="no-back-image">
                                            <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-29-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                          </figure>
                                        </a>
                                        <div className="product-label">
                                          <span className="onsale">
                                            <span>Sale</span>
                                          </span>
                                        </div>
                                        <div className="product-group-button">
                                          <div className="loop-add-to-cart">
                                            <a href="https://ellazia.in/product/ellazia-casual-pant-2/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21038} data-product_sku aria-label="Select options for “Ellazia Casual Pant”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                              <span className="ts-tooltip button-tooltip">Select options</span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="meta-wrapper">
                                        <h3 className="heading-title product-name">
                                          <a href="https://ellazia.in/product/ellazia-casual-pant-2/">Ellazia Casual Pant</a>
                                        </h3>
                                        <div className="product-group-price-button-meta-wrapper">
                                          <div className="product-group-price-button-meta">
                                            <span className="price">
                                              <del aria-hidden="true">
                                                <span className="woocommerce-Price-amount amount">
                                                  <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">₹</span>
                                                    &nbsp;999.00
                                                  </bdi>
                                                </span>
                                              </del>
                                              <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                  <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">₹</span>
                                                    &nbsp;499.00
                                                  </bdi>
                                                </span>
                                              </ins>
                                            </span>
                                            <div className="product-group-button-meta">
                                              <div className="loop-add-to-cart">
                                                <a href="https://ellazia.in/product/ellazia-casual-pant-2/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21038} data-product_sku aria-label="Select options for “Ellazia Casual Pant”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                  <span className="ts-tooltip button-tooltip">Select options</span>
                                                </a>
                                              </div>
                                              <div className="button-in quickshop">
                                                <a className="quickshop" href="#" data-product_id={21038}>
                                                  <span className="ts-tooltip button-tooltip">Quick view</span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-07a1fcc elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="07a1fcc" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;video&quot;}">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea7c0a0" data-id="ea7c0a0" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-7841d52 elementor-widget elementor-widget-text-editor" data-id="7841d52" data-element_type="widget" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            It ’s our <strong style={{color: 'red'}}>Anniversary sale</strong>
                            and everything is<strong style={{color: 'red'}}>50% off!</strong>
                            🎉 Don ’t Miss Out! 🛍️ ”
                            <div className="flex-1 overflow-hidden">
                              <div className="react-scroll-to-bottom--css-tbuzs-79elbk h-full">
                                <div className="react-scroll-to-bottom--css-tbuzs-1n7m0yu">
                                  <div className="flex flex-col text-sm pb-9">
                                    <div className="w-full text-token-text-primary" data-testid="conversation-turn-5">
                                      <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                                        <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group final-completion">
                                          <div className="relative flex w-full flex-col agent-turn">
                                            <div className="flex-col gap-1 md:gap-3">
                                              <div className="mt-1 flex justify-start gap-3 empty:hidden">
                                                <div className="text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-0 -ml-1 h-7 visible" />
                                              </div>
                                              <div className="pr-2 lg:pr-0" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-full pt-2 md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:w-[calc(100%-.5rem)]">
                              <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
                                <div className="relative flex h-full flex-1 flex-col">
                                  <div className="flex w-full items-center" />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-e03b9b2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e03b9b2" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ace3ea2" data-id="ace3ea2" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-781a7ce elementor-widget elementor-widget-ts-banner" data-id="781a7ce" data-element_type="widget" data-widget_type="ts-banner.default">
                          <div className="elementor-widget-container">
                            <div className="ts-banner text-left size-default background-scale right-bottom style-button-text show-button">
                              <div className="banner-wrapper">
                                <a className="banner-link" href="https://ellazia.in/shop-4/" target="_blank" rel="nofollow" />
                                <div className="banner-bg">
                                  <div className="bg-content">
                                    <img loading="lazy" decoding="async" width={860} height={600} src="https://ellazia.in/wp-content/uploads/2024/03/web-11.jpg" className="img" alt srcSet="https://ellazia.in/wp-content/uploads/2024/03/web-11.jpg 860w, https://ellazia.in/wp-content/uploads/2024/03/web-11-300x209.jpg 300w, https://ellazia.in/wp-content/uploads/2024/03/web-11-768x536.jpg 768w, https://ellazia.in/wp-content/uploads/2024/03/web-11-600x419.jpg 600w" sizes="(max-width: 860px) 100vw, 860px" />
                                  </div>
                                </div>
                                <div className="box-content">
                                  <div className="header-content">
                                    <div className="ts-banner-button">
                                      <a className="button" href="https://ellazia.in/shop-4/" target="_blank" rel="nofollow">Shop Now</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8590971" data-id={8590971} data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-b5fa3ce elementor-widget elementor-widget-ts-banner" data-id="b5fa3ce" data-element_type="widget" data-widget_type="ts-banner.default">
                          <div className="elementor-widget-container">
                            <div className="ts-banner text-left size-default background-scale right-bottom style-button-text show-button">
                              <div className="banner-wrapper">
                                <a className="banner-link" href="https://ellazia.in/shop-4/" target="_blank" rel="nofollow" />
                                <div className="banner-bg">
                                  <div className="bg-content">
                                    <img loading="lazy" decoding="async" width={860} height={600} src="https://ellazia.in/wp-content/uploads/2024/03/web-12-.jpg" className="img" alt srcSet="https://ellazia.in/wp-content/uploads/2024/03/web-12-.jpg 860w, https://ellazia.in/wp-content/uploads/2024/03/web-12--300x209.jpg 300w, https://ellazia.in/wp-content/uploads/2024/03/web-12--768x536.jpg 768w, https://ellazia.in/wp-content/uploads/2024/03/web-12--600x419.jpg 600w" sizes="(max-width: 860px) 100vw, 860px" />
                                  </div>
                                </div>
                                <div className="box-content">
                                  <div className="header-content">
                                    <div className="ts-banner-button">
                                      <a className="button" href="https://ellazia.in/shop-4/" target="_blank" rel="nofollow">Shop Now</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-443f911 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="443f911" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d0714d8 elementor-hidden-tablet widget-content elementor-hidden-phone" data-id="d0714d8" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-c98f755 elementor-widget elementor-widget-ts-banner" data-id="c98f755" data-element_type="widget" data-widget_type="ts-banner.default">
                          <div className="elementor-widget-container">
                            <div className="ts-banner text-left size-default background-scale left-bottom style-button-text show-button">
                              <div className="banner-wrapper">
                                <a className="banner-link" href="https://ellazia.in/shop-4/" target="_blank" rel="nofollow" />
                                <div className="banner-bg">
                                  <div className="bg-content">
                                    <img loading="lazy" decoding="async" width={530} height={580} src="https://ellazia.in/wp-content/uploads/2024/03/web-13-copy.jpg" className="img" alt srcSet="https://ellazia.in/wp-content/uploads/2024/03/web-13-copy.jpg 530w, https://ellazia.in/wp-content/uploads/2024/03/web-13-copy-274x300.jpg 274w" sizes="(max-width: 530px) 100vw, 530px" />
                                  </div>
                                </div>
                                <div className="box-content">
                                  <div className="header-content">
                                    <div className="ts-banner-button">
                                      <a className="button" href="https://ellazia.in/shop-4/" target="_blank" rel="nofollow">Shop Now</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-6521b3f elementor-widget elementor-widget-ts-banner" data-id="6521b3f" data-element_type="widget" data-widget_type="ts-banner.default">
                          <div className="elementor-widget-container">
                            <div className="ts-banner text-left size-default background-scale left-bottom style-button-text show-button">
                              <div className="banner-wrapper">
                                <a className="banner-link" href="https://ellazia.in/shop-4/" target="_blank" rel="nofollow" />
                                <div className="banner-bg">
                                  <div className="bg-content">
                                    <img loading="lazy" decoding="async" width={530} height={580} src="https://ellazia.in/wp-content/uploads/2024/03/web-14-copy.jpg" className="img" alt srcSet="https://ellazia.in/wp-content/uploads/2024/03/web-14-copy.jpg 530w, https://ellazia.in/wp-content/uploads/2024/03/web-14-copy-274x300.jpg 274w" sizes="(max-width: 530px) 100vw, 530px" />
                                  </div>
                                </div>
                                <div className="box-content">
                                  <div className="header-content">
                                    <div className="ts-banner-button">
                                      <a className="button" href="https://ellazia.in/shop-4/" target="_blank" rel="nofollow">Shop Now</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-b4e15ee product-content" data-id="b4e15ee" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-40a927c elementor-widget elementor-widget-ts-products" data-id="40a927c" data-element_type="widget" data-widget_type="ts-products.default">
                          <div className="elementor-widget-container">
                            <div className="ts-product-wrapper ts-shortcode ts-product woocommerce columns-4 recent ts-slider rows-2 show-nav nav-text" data-nav={1} data-autoplay={0} data-columns={4} data-disable_responsive={0} data-prev_nav_text="PREV" data-next_nav_text="NEXT">
                              <header className="shortcode-heading-wrapper">
                                <h2 className="shortcode-title">New Arrivals				</h2>
                              </header>
                              <div className="content-wrapper loading">
                                <div className="products">
                                  <div className="product-group">
                                    <section className="product type-product post-21257 status-publish first instock product_cat-t-shirt has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21257}>
                                      <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                          <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-17/">
                                            <figure className="no-back-image">
                                              <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/03/02-1-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                            </figure>
                                          </a>
                                          <div className="product-label">
                                            <span className="onsale">
                                              <span>Sale</span>
                                            </span>
                                          </div>
                                          <div className="product-group-button">
                                            <div className="loop-add-to-cart">
                                              <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-17/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21257} data-product_sku aria-label="Select options for “Ellazia Round Neck Full Sleeve T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                <span className="ts-tooltip button-tooltip">Select options</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="meta-wrapper">
                                          <h3 className="heading-title product-name">
                                            <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-17/">Ellazia Round Neck Full Sleeve T-Shirt</a>
                                          </h3>
                                          <div className="product-group-price-button-meta-wrapper">
                                            <div className="product-group-price-button-meta">
                                              <span className="price">
                                                <del aria-hidden="true">
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;599.00
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;299.00
                                                    </bdi>
                                                  </span>
                                                </ins>
                                              </span>
                                              <div className="product-group-button-meta">
                                                <div className="loop-add-to-cart">
                                                  <a href="https://ellazia.in/product/ellazia-round-neck-full-sleeve-t-shirt-17/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21257} data-product_sku aria-label="Select options for “Ellazia Round Neck Full Sleeve T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                    <span className="ts-tooltip button-tooltip">Select options</span>
                                                  </a>
                                                </div>
                                                <div className="button-in quickshop">
                                                  <a className="quickshop" href="#" data-product_id={21257}>
                                                    <span className="ts-tooltip button-tooltip">Quick view</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                    <section className="product type-product post-21248 status-publish instock product_cat-t-shirt has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21248}>
                                      <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                          <a href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts-22/">
                                            <figure className="no-back-image">
                                              <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/03/01-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                            </figure>
                                          </a>
                                          <div className="product-label">
                                            <span className="onsale">
                                              <span>Sale</span>
                                            </span>
                                          </div>
                                          <div className="product-group-button">
                                            <div className="loop-add-to-cart">
                                              <a href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts-22/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21248} data-product_sku aria-label="Select options for “Ellazia Round Neck Five Sleeve T-Shirts”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                <span className="ts-tooltip button-tooltip">Select options</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="meta-wrapper">
                                          <h3 className="heading-title product-name">
                                            <a href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts-22/">Ellazia Round Neck Five Sleeve T-Shirts</a>
                                          </h3>
                                          <div className="product-group-price-button-meta-wrapper">
                                            <div className="product-group-price-button-meta">
                                              <span className="price">
                                                <del aria-hidden="true">
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;599.00
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;299.00
                                                    </bdi>
                                                  </span>
                                                </ins>
                                              </span>
                                              <div className="product-group-button-meta">
                                                <div className="loop-add-to-cart">
                                                  <a href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts-22/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21248} data-product_sku aria-label="Select options for “Ellazia Round Neck Five Sleeve T-Shirts”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                    <span className="ts-tooltip button-tooltip">Select options</span>
                                                  </a>
                                                </div>
                                                <div className="button-in quickshop">
                                                  <a className="quickshop" href="#" data-product_id={21248}>
                                                    <span className="ts-tooltip button-tooltip">Quick view</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                  <div className="product-group">
                                    <section className="product type-product post-21243 status-publish instock product_cat-t-shirt has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21243}>
                                      <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                          <a href="https://ellazia.in/product/ellazia-polo-t-shirt-23/">
                                            <figure className="no-back-image">
                                              <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-48-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                            </figure>
                                          </a>
                                          <div className="product-label">
                                            <span className="onsale">
                                              <span>Sale</span>
                                            </span>
                                          </div>
                                          <div className="product-group-button">
                                            <div className="loop-add-to-cart">
                                              <a href="https://ellazia.in/product/ellazia-polo-t-shirt-23/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21243} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                <span className="ts-tooltip button-tooltip">Select options</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="meta-wrapper">
                                          <h3 className="heading-title product-name">
                                            <a href="https://ellazia.in/product/ellazia-polo-t-shirt-23/">Ellazia Polo T-Shirt</a>
                                          </h3>
                                          <div className="product-group-price-button-meta-wrapper">
                                            <div className="product-group-price-button-meta">
                                              <span className="price">
                                                <del aria-hidden="true">
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;599.00
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;299.00
                                                    </bdi>
                                                  </span>
                                                </ins>
                                              </span>
                                              <div className="product-group-button-meta">
                                                <div className="loop-add-to-cart">
                                                  <a href="https://ellazia.in/product/ellazia-polo-t-shirt-23/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21243} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                    <span className="ts-tooltip button-tooltip">Select options</span>
                                                  </a>
                                                </div>
                                                <div className="button-in quickshop">
                                                  <a className="quickshop" href="#" data-product_id={21243}>
                                                    <span className="ts-tooltip button-tooltip">Quick view</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                    <section className="product type-product post-21238 status-publish last instock product_cat-t-shirt has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21238}>
                                      <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                          <a href="https://ellazia.in/product/ellazia-polo-t-shirt-22/">
                                            <figure className="no-back-image">
                                              <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-56-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                            </figure>
                                          </a>
                                          <div className="product-label">
                                            <span className="onsale">
                                              <span>Sale</span>
                                            </span>
                                          </div>
                                          <div className="product-group-button">
                                            <div className="loop-add-to-cart">
                                              <a href="https://ellazia.in/product/ellazia-polo-t-shirt-22/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21238} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                <span className="ts-tooltip button-tooltip">Select options</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="meta-wrapper">
                                          <h3 className="heading-title product-name">
                                            <a href="https://ellazia.in/product/ellazia-polo-t-shirt-22/">Ellazia Polo T-Shirt</a>
                                          </h3>
                                          <div className="product-group-price-button-meta-wrapper">
                                            <div className="product-group-price-button-meta">
                                              <span className="price">
                                                <del aria-hidden="true">
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;599.00
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;299.00
                                                    </bdi>
                                                  </span>
                                                </ins>
                                              </span>
                                              <div className="product-group-button-meta">
                                                <div className="loop-add-to-cart">
                                                  <a href="https://ellazia.in/product/ellazia-polo-t-shirt-22/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21238} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                    <span className="ts-tooltip button-tooltip">Select options</span>
                                                  </a>
                                                </div>
                                                <div className="button-in quickshop">
                                                  <a className="quickshop" href="#" data-product_id={21238}>
                                                    <span className="ts-tooltip button-tooltip">Quick view</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                  <div className="product-group">
                                    <section className="product type-product post-21233 status-publish first instock product_cat-t-shirt has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21233}>
                                      <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                          <a href="https://ellazia.in/product/ellazia-polo-t-shirt-21/">
                                            <figure className="no-back-image">
                                              <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-57-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                            </figure>
                                          </a>
                                          <div className="product-label">
                                            <span className="onsale">
                                              <span>Sale</span>
                                            </span>
                                          </div>
                                          <div className="product-group-button">
                                            <div className="loop-add-to-cart">
                                              <a href="https://ellazia.in/product/ellazia-polo-t-shirt-21/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21233} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                <span className="ts-tooltip button-tooltip">Select options</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="meta-wrapper">
                                          <h3 className="heading-title product-name">
                                            <a href="https://ellazia.in/product/ellazia-polo-t-shirt-21/">Ellazia Polo T-Shirt</a>
                                          </h3>
                                          <div className="product-group-price-button-meta-wrapper">
                                            <div className="product-group-price-button-meta">
                                              <span className="price">
                                                <del aria-hidden="true">
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;599.00
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;299.00
                                                    </bdi>
                                                  </span>
                                                </ins>
                                              </span>
                                              <div className="product-group-button-meta">
                                                <div className="loop-add-to-cart">
                                                  <a href="https://ellazia.in/product/ellazia-polo-t-shirt-21/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21233} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                    <span className="ts-tooltip button-tooltip">Select options</span>
                                                  </a>
                                                </div>
                                                <div className="button-in quickshop">
                                                  <a className="quickshop" href="#" data-product_id={21233}>
                                                    <span className="ts-tooltip button-tooltip">Quick view</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                    <section className="product type-product post-21228 status-publish instock product_cat-t-shirt has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21228}>
                                      <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                          <a href="https://ellazia.in/product/ellazia-polo-t-shirt-20/">
                                            <figure className="no-back-image">
                                              <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-58-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                            </figure>
                                          </a>
                                          <div className="product-label">
                                            <span className="onsale">
                                              <span>Sale</span>
                                            </span>
                                          </div>
                                          <div className="product-group-button">
                                            <div className="loop-add-to-cart">
                                              <a href="https://ellazia.in/product/ellazia-polo-t-shirt-20/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21228} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                <span className="ts-tooltip button-tooltip">Select options</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="meta-wrapper">
                                          <h3 className="heading-title product-name">
                                            <a href="https://ellazia.in/product/ellazia-polo-t-shirt-20/">Ellazia Polo T-Shirt</a>
                                          </h3>
                                          <div className="product-group-price-button-meta-wrapper">
                                            <div className="product-group-price-button-meta">
                                              <span className="price">
                                                <del aria-hidden="true">
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;599.00
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;299.00
                                                    </bdi>
                                                  </span>
                                                </ins>
                                              </span>
                                              <div className="product-group-button-meta">
                                                <div className="loop-add-to-cart">
                                                  <a href="https://ellazia.in/product/ellazia-polo-t-shirt-20/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21228} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                    <span className="ts-tooltip button-tooltip">Select options</span>
                                                  </a>
                                                </div>
                                                <div className="button-in quickshop">
                                                  <a className="quickshop" href="#" data-product_id={21228}>
                                                    <span className="ts-tooltip button-tooltip">Quick view</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                  <div className="product-group">
                                    <section className="product type-product post-21223 status-publish instock product_cat-t-shirt has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21223}>
                                      <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                          <a href="https://ellazia.in/product/ellazia-polo-t-shirt-19/">
                                            <figure className="no-back-image">
                                              <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-53-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                            </figure>
                                          </a>
                                          <div className="product-label">
                                            <span className="onsale">
                                              <span>Sale</span>
                                            </span>
                                          </div>
                                          <div className="product-group-button">
                                            <div className="loop-add-to-cart">
                                              <a href="https://ellazia.in/product/ellazia-polo-t-shirt-19/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21223} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                <span className="ts-tooltip button-tooltip">Select options</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="meta-wrapper">
                                          <h3 className="heading-title product-name">
                                            <a href="https://ellazia.in/product/ellazia-polo-t-shirt-19/">Ellazia Polo T-Shirt</a>
                                          </h3>
                                          <div className="product-group-price-button-meta-wrapper">
                                            <div className="product-group-price-button-meta">
                                              <span className="price">
                                                <del aria-hidden="true">
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;599.00
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;299.00
                                                    </bdi>
                                                  </span>
                                                </ins>
                                              </span>
                                              <div className="product-group-button-meta">
                                                <div className="loop-add-to-cart">
                                                  <a href="https://ellazia.in/product/ellazia-polo-t-shirt-19/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21223} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                    <span className="ts-tooltip button-tooltip">Select options</span>
                                                  </a>
                                                </div>
                                                <div className="button-in quickshop">
                                                  <a className="quickshop" href="#" data-product_id={21223}>
                                                    <span className="ts-tooltip button-tooltip">Quick view</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                    <section className="product type-product post-21218 status-publish last instock product_cat-t-shirt has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21218}>
                                      <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                          <a href="https://ellazia.in/product/ellazia-polo-t-shirt-18/">
                                            <figure className="no-back-image">
                                              <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-54-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                            </figure>
                                          </a>
                                          <div className="product-label">
                                            <span className="onsale">
                                              <span>Sale</span>
                                            </span>
                                          </div>
                                          <div className="product-group-button">
                                            <div className="loop-add-to-cart">
                                              <a href="https://ellazia.in/product/ellazia-polo-t-shirt-18/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21218} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                <span className="ts-tooltip button-tooltip">Select options</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="meta-wrapper">
                                          <h3 className="heading-title product-name">
                                            <a href="https://ellazia.in/product/ellazia-polo-t-shirt-18/">Ellazia Polo T-Shirt</a>
                                          </h3>
                                          <div className="product-group-price-button-meta-wrapper">
                                            <div className="product-group-price-button-meta">
                                              <span className="price">
                                                <del aria-hidden="true">
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;599.00
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;299.00
                                                    </bdi>
                                                  </span>
                                                </ins>
                                              </span>
                                              <div className="product-group-button-meta">
                                                <div className="loop-add-to-cart">
                                                  <a href="https://ellazia.in/product/ellazia-polo-t-shirt-18/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21218} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                    <span className="ts-tooltip button-tooltip">Select options</span>
                                                  </a>
                                                </div>
                                                <div className="button-in quickshop">
                                                  <a className="quickshop" href="#" data-product_id={21218}>
                                                    <span className="ts-tooltip button-tooltip">Quick view</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                  <div className="product-group">
                                    <section className="product type-product post-21213 status-publish first instock product_cat-t-shirt has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21213}>
                                      <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                          <a href="https://ellazia.in/product/ellazia-polo-t-shirt-17/">
                                            <figure className="no-back-image">
                                              <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-61-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                            </figure>
                                          </a>
                                          <div className="product-label">
                                            <span className="onsale">
                                              <span>Sale</span>
                                            </span>
                                          </div>
                                          <div className="product-group-button">
                                            <div className="loop-add-to-cart">
                                              <a href="https://ellazia.in/product/ellazia-polo-t-shirt-17/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21213} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                <span className="ts-tooltip button-tooltip">Select options</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="meta-wrapper">
                                          <h3 className="heading-title product-name">
                                            <a href="https://ellazia.in/product/ellazia-polo-t-shirt-17/">Ellazia Polo T-Shirt</a>
                                          </h3>
                                          <div className="product-group-price-button-meta-wrapper">
                                            <div className="product-group-price-button-meta">
                                              <span className="price">
                                                <del aria-hidden="true">
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;599.00
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;299.00
                                                    </bdi>
                                                  </span>
                                                </ins>
                                              </span>
                                              <div className="product-group-button-meta">
                                                <div className="loop-add-to-cart">
                                                  <a href="https://ellazia.in/product/ellazia-polo-t-shirt-17/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21213} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                    <span className="ts-tooltip button-tooltip">Select options</span>
                                                  </a>
                                                </div>
                                                <div className="button-in quickshop">
                                                  <a className="quickshop" href="#" data-product_id={21213}>
                                                    <span className="ts-tooltip button-tooltip">Quick view</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                    <section className="product type-product post-21208 status-publish instock product_cat-t-shirt has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21208}>
                                      <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                          <a href="https://ellazia.in/product/ellazia-polo-t-shirt-16/">
                                            <figure className="no-back-image">
                                              <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-64-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                            </figure>
                                          </a>
                                          <div className="product-label">
                                            <span className="onsale">
                                              <span>Sale</span>
                                            </span>
                                          </div>
                                          <div className="product-group-button">
                                            <div className="loop-add-to-cart">
                                              <a href="https://ellazia.in/product/ellazia-polo-t-shirt-16/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21208} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                <span className="ts-tooltip button-tooltip">Select options</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="meta-wrapper">
                                          <h3 className="heading-title product-name">
                                            <a href="https://ellazia.in/product/ellazia-polo-t-shirt-16/">Ellazia Polo T-Shirt</a>
                                          </h3>
                                          <div className="product-group-price-button-meta-wrapper">
                                            <div className="product-group-price-button-meta">
                                              <span className="price">
                                                <del aria-hidden="true">
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;599.00
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;299.00
                                                    </bdi>
                                                  </span>
                                                </ins>
                                              </span>
                                              <div className="product-group-button-meta">
                                                <div className="loop-add-to-cart">
                                                  <a href="https://ellazia.in/product/ellazia-polo-t-shirt-16/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21208} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                    <span className="ts-tooltip button-tooltip">Select options</span>
                                                  </a>
                                                </div>
                                                <div className="button-in quickshop">
                                                  <a className="quickshop" href="#" data-product_id={21208}>
                                                    <span className="ts-tooltip button-tooltip">Quick view</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                  <div className="product-group">
                                    <section className="product type-product post-21203 status-publish instock product_cat-t-shirt has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21203}>
                                      <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                          <a href="https://ellazia.in/product/ellazia-polo-t-shirt-15/">
                                            <figure className="no-back-image">
                                              <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-51-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                            </figure>
                                          </a>
                                          <div className="product-label">
                                            <span className="onsale">
                                              <span>Sale</span>
                                            </span>
                                          </div>
                                          <div className="product-group-button">
                                            <div className="loop-add-to-cart">
                                              <a href="https://ellazia.in/product/ellazia-polo-t-shirt-15/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21203} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                <span className="ts-tooltip button-tooltip">Select options</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="meta-wrapper">
                                          <h3 className="heading-title product-name">
                                            <a href="https://ellazia.in/product/ellazia-polo-t-shirt-15/">Ellazia Polo T-Shirt</a>
                                          </h3>
                                          <div className="product-group-price-button-meta-wrapper">
                                            <div className="product-group-price-button-meta">
                                              <span className="price">
                                                <del aria-hidden="true">
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;599.00
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;299.00
                                                    </bdi>
                                                  </span>
                                                </ins>
                                              </span>
                                              <div className="product-group-button-meta">
                                                <div className="loop-add-to-cart">
                                                  <a href="https://ellazia.in/product/ellazia-polo-t-shirt-15/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21203} data-product_sku aria-label="Select options for “Ellazia Polo T-Shirt”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                    <span className="ts-tooltip button-tooltip">Select options</span>
                                                  </a>
                                                </div>
                                                <div className="button-in quickshop">
                                                  <a className="quickshop" href="#" data-product_id={21203}>
                                                    <span className="ts-tooltip button-tooltip">Quick view</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                    <section className="product type-product post-21198 status-publish last instock product_cat-hoodies has-post-thumbnail sale taxable shipping-taxable purchasable product-type-variable" data-product_id={21198}>
                                      <div className="product-wrapper">
                                        <div className="thumbnail-wrapper">
                                          <a href="https://ellazia.in/product/ellazia-full-sleeve-hoodies-copy-2/">
                                            <figure className="no-back-image">
                                              <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-68-300x300.jpg" className="attachment-shop_catalog wp-post-image ts-lazy-load" alt width={300} height={300} />
                                            </figure>
                                          </a>
                                          <div className="product-label">
                                            <span className="onsale">
                                              <span>Sale</span>
                                            </span>
                                          </div>
                                          <div className="product-group-button">
                                            <div className="loop-add-to-cart">
                                              <a href="https://ellazia.in/product/ellazia-full-sleeve-hoodies-copy-2/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21198} data-product_sku aria-label="Select options for “Ellazia Full Sleeve Hoodies”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                <span className="ts-tooltip button-tooltip">Select options</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="meta-wrapper">
                                          <h3 className="heading-title product-name">
                                            <a href="https://ellazia.in/product/ellazia-full-sleeve-hoodies-copy-2/">Ellazia Full Sleeve Hoodies</a>
                                          </h3>
                                          <div className="product-group-price-button-meta-wrapper">
                                            <div className="product-group-price-button-meta">
                                              <span className="price">
                                                <del aria-hidden="true">
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;699.00
                                                    </bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">₹</span>
                                                      &nbsp;349.00
                                                    </bdi>
                                                  </span>
                                                </ins>
                                              </span>
                                              <div className="product-group-button-meta">
                                                <div className="loop-add-to-cart">
                                                  <a href="https://ellazia.in/product/ellazia-full-sleeve-hoodies-copy-2/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={21198} data-product_sku aria-label="Select options for “Ellazia Full Sleeve Hoodies”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow">
                                                    <span className="ts-tooltip button-tooltip">Select options</span>
                                                  </a>
                                                </div>
                                                <div className="button-in quickshop">
                                                  <a className="quickshop" href="#" data-product_id={21198}>
                                                    <span className="ts-tooltip button-tooltip">Quick view</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-850b0ac elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="850b0ac" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d0ab69d widget-content" data-id="d0ab69d" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-89555db title-small elementor-widget elementor-widget-wp-widget-ts_products" data-id="89555db" data-element_type="widget" data-widget_type="wp-widget-ts_products.default">
                          <div className="elementor-widget-container">
                            <h5>Top Rated Products</h5>
                            <div className="ts-products-widget-wrapper woocommerce ts-slider loading" data-nav={0} data-autoplay={1}>
                              <div className="per-slide">
                                <ul className="product_list_widget">
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-polo-t-shirt-12/" title="Ellazia Polo T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2023/03/1-1-1-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-polo-t-shirt-12/" title="Ellazia Polo T-Shirt">Ellazia Polo T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;649.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;324.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-lycra-casual-pant-2/" title="Ellazia Lycra Casual Pant">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2023/03/40-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-lycra-casual-pant-2/" title="Ellazia Lycra Casual Pant">Ellazia Lycra Casual Pant									</a>
                                      <span className="price">
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">₹</span>
                                            &nbsp;499.00
                                          </bdi>
                                        </span>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-full-sleeve-casual-shirts-24/" title="Ellazia Full Sleeve Casual Shirts">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-3-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-full-sleeve-casual-shirts-24/" title="Ellazia Full Sleeve Casual Shirts">Ellazia Full Sleeve Casual Shirts									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;999.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;499.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="per-slide">
                                <ul className="product_list_widget">
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts-12/" title="Ellazia Round Neck Five Sleeve T-Shirts">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/01-35-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-five-sleeve-t-shirts-12/" title="Ellazia Round Neck Five Sleeve T-Shirts">Ellazia Round Neck Five Sleeve T-Shirts									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-polo-t-shirt-18/" title="Ellazia Polo T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2024/02/02-54-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-polo-t-shirt-18/" title="Ellazia Polo T-Shirt">Ellazia Polo T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;599.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;299.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <a className="ts-wg-thumbnail" href="https://ellazia.in/product/ellazia-round-neck-half-sleeve-t-shirt-2/" title="Ellazia Round Neck Half Sleeve  T-Shirt">
                                      <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/themes/gostore/images/prod_loading.gif" data-src="https://ellazia.in/wp-content/uploads/2023/03/1-1-300x300.jpg" alt className="attachment-shop_thumbnail wp-post-image ts-lazy-load" width={300} height={300} />
                                    </a>
                                    <div className="ts-wg-meta">
                                      <a href="https://ellazia.in/product/ellazia-round-neck-half-sleeve-t-shirt-2/" title="Ellazia Round Neck Half Sleeve  T-Shirt">Ellazia Round Neck Half Sleeve  T-Shirt									</a>
                                      <span className="price">
                                        <del aria-hidden="true">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;499.00
                                            </bdi>
                                          </span>
                                        </del>
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">₹</span>
                                              &nbsp;249.00
                                            </bdi>
                                          </span>
                                        </ins>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-81405da product-content" data-id="81405da" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-3b6f794 sidebar-categories elementor-widget elementor-widget-ts-product-categories" data-id="3b6f794" data-element_type="widget" data-widget_type="ts-product-categories.default">
                          <div className="elementor-widget-container">
                            <div className="ts-product-category-wrapper ts-product ts-shortcode woocommerce columns-3 title-default item-layout-list grid">
                              <header className="shortcode-heading-wrapper">
                                <h2 className="shortcode-title">Popular Categories					</h2>
                              </header>
                              <div className="content-wrapper ">
                                <div className="products">
                                  <section className="product-category product first">
                                    <div className="product-wrapper">
                                      <a href="https://ellazia.in/product-category/bag/">
                                        <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/uploads/2024/03/7.png" alt="Bag" width={600} height={600} srcSet="https://ellazia.in/wp-content/uploads/2024/03/7.png 100w, https://ellazia.in/wp-content/uploads/2024/03/7-46x46.png 46w" sizes="(max-width: 100px) 100vw, 100px" />
                                      </a>
                                      <div className="meta-wrapper">
                                        <div className="category-name">
                                          <h3 className="heading-title">
                                            <a href="https://ellazia.in/product-category/bag/">Bag					</a>
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <section className="product-category product">
                                    <div className="product-wrapper">
                                      <a href="https://ellazia.in/product-category/belt/">
                                        <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/uploads/2024/03/8.png" alt="Belt" width={600} height={600} srcSet="https://ellazia.in/wp-content/uploads/2024/03/8.png 100w, https://ellazia.in/wp-content/uploads/2024/03/8-46x46.png 46w" sizes="(max-width: 100px) 100vw, 100px" />
                                      </a>
                                      <div className="meta-wrapper">
                                        <div className="category-name">
                                          <h3 className="heading-title">
                                            <a href="https://ellazia.in/product-category/belt/">Belt					</a>
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <section className="product-category product last">
                                    <div className="product-wrapper">
                                      <a href="https://ellazia.in/product-category/hoodies/">
                                        <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/uploads/2024/03/4.png" alt="Hoodies" width={600} height={600} srcSet="https://ellazia.in/wp-content/uploads/2024/03/4.png 100w, https://ellazia.in/wp-content/uploads/2024/03/4-46x46.png 46w" sizes="(max-width: 100px) 100vw, 100px" />
                                      </a>
                                      <div className="meta-wrapper">
                                        <div className="category-name">
                                          <h3 className="heading-title">
                                            <a href="https://ellazia.in/product-category/hoodies/">Hoodies					</a>
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <section className="product-category product first">
                                    <div className="product-wrapper">
                                      <a href="https://ellazia.in/product-category/pants/">
                                        <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/uploads/2024/03/5.png" alt="Pants" width={600} height={600} srcSet="https://ellazia.in/wp-content/uploads/2024/03/5.png 100w, https://ellazia.in/wp-content/uploads/2024/03/5-46x46.png 46w" sizes="(max-width: 100px) 100vw, 100px" />
                                      </a>
                                      <div className="meta-wrapper">
                                        <div className="category-name">
                                          <h3 className="heading-title">
                                            <a href="https://ellazia.in/product-category/pants/">Pants					</a>
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <section className="product-category product">
                                    <div className="product-wrapper">
                                      <a href="https://ellazia.in/product-category/shirt/">
                                        <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/uploads/2024/03/2.png" alt="Shirt" width={600} height={600} srcSet="https://ellazia.in/wp-content/uploads/2024/03/2.png 100w, https://ellazia.in/wp-content/uploads/2024/03/2-46x46.png 46w" sizes="(max-width: 100px) 100vw, 100px" />
                                      </a>
                                      <div className="meta-wrapper">
                                        <div className="category-name">
                                          <h3 className="heading-title">
                                            <a href="https://ellazia.in/product-category/shirt/">Shirt					</a>
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <section className="product-category product last">
                                    <div className="product-wrapper">
                                      <a href="https://ellazia.in/product-category/t-shirt/">
                                        <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/uploads/2024/03/3.png" alt="T-Shirt" width={600} height={600} srcSet="https://ellazia.in/wp-content/uploads/2024/03/3.png 100w, https://ellazia.in/wp-content/uploads/2024/03/3-46x46.png 46w" sizes="(max-width: 100px) 100vw, 100px" />
                                      </a>
                                      <div className="meta-wrapper">
                                        <div className="category-name">
                                          <h3 className="heading-title">
                                            <a href="https://ellazia.in/product-category/t-shirt/">T-Shirt					</a>
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <section className="product-category product first">
                                    <div className="product-wrapper">
                                      <a href="https://ellazia.in/product-category/wallet/">
                                        <img loading="lazy" decoding="async" src="https://ellazia.in/wp-content/uploads/2024/03/6.png" alt="Wallet" width={600} height={600} srcSet="https://ellazia.in/wp-content/uploads/2024/03/6.png 100w, https://ellazia.in/wp-content/uploads/2024/03/6-46x46.png 46w" sizes="(max-width: 100px) 100vw, 100px" />
                                      </a>
                                      <div className="meta-wrapper">
                                        <div className="category-name">
                                          <h3 className="heading-title">
                                            <a href="https://ellazia.in/product-category/wallet/">Wallet					</a>
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-06a6bf5 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default" data-id="06a6bf5" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-538bd9f" data-id="538bd9f" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-f770b74 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="f770b74" data-element_type="widget" data-widget_type="divider.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-divider">
                              <span className="elementor-divider-separator" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-a46c3d9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a46c3d9" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c980ecf" data-id="c980ecf" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-d9fb271 elementor-widget elementor-widget-spacer" data-id="d9fb271" data-element_type="widget" data-widget_type="spacer.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-spacer">
                              <div className="elementor-spacer-inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
        {/* Right Sidebar */}
      </div>
      <div className="clear" />
    </div>
    {/* #main .wrapper */}
    <div className="clear" />
    <footer id="colophon" className="footer-container footer-area">
      <div className="container">
        <div data-elementor-type="wp-post" data-elementor-id={16438} className="elementor elementor-16438">
          <section className="elementor-section elementor-top-section elementor-element elementor-element-1b55c959 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1b55c959" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-92af4a9" data-id="92af4a9" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-4e0779b8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4e0779b8" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-56b10f4e" data-id="56b10f4e" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-6de33f48 remove-widget-title elementor-widget elementor-widget-wp-widget-woocommerce_product_tag_cloud" data-id="6de33f48" data-element_type="widget" data-widget_type="wp-widget-woocommerce_product_tag_cloud.default">
                            <div className="elementor-widget-container">
                              <h5>Product tags</h5>
                              <div className="tagcloud" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-12e1b43a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="12e1b43a" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-54aa82db" data-id="54aa82db" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-2bc7704 elementor-widget elementor-widget-text-editor" data-id="2bc7704" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <h3 className="widget-title">CONTACT INFO.</h3>
                              <ul className="info-content">
                                <li className="info-phone">
                                  Line 1: +91 8111991881 <br />Line 2 : +91 8111881991
                                </li>
                                <li className="info-email">
                                  <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="09416c656566496c656568736068276067">[email &nbsp;protected]</a>
                                </li>
                                <li className="info-location">AOC Megha Complex, Court Rd, Perambra, Kerala 673525</li>
                                <li className="info-times">Sunday : Closed</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-703a2cb" data-id="703a2cb" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-cb5e71f elementor-widget elementor-widget-text-editor" data-id="cb5e71f" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <h3 className="widget-title">POLICIES</h3>
                              <ul className="no-padding">
                                <li>
                                  <a title="Returns & Exchanges" href="https://ellazia.in/return/">Returns &amp;Exchanges</a>
                                </li>
                                <li>
                                  <a title="Terms Of Use" href="https://ellazia.in/term-conditions/">Terms Of Use</a>
                                </li>
                                <li>
                                  <a title="Privacy Policy" href="https://ellazia.in/policy/">Privacy Policy</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-764d6503" data-id="764d6503" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-5d4b42e elementor-widget elementor-widget-text-editor" data-id="5d4b42e" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <h3 className="widget-title">INFORMATIONS</h3>
                              <ul className="no-padding">
                                <li>
                                  <a title="About Us" href="https://ellazia.in/about-us-2/">About Us</a>
                                </li>
                                <li>
                                  <a title="Order Tracking" href="https://ellazia.in/order-tracking/">Orders Tracking</a>
                                </li>
                                <li>
                                  <a title="Contact Us" href="https://ellazia.in/contact-us/">Contact Us</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-1838bf5e" data-id="1838bf5e" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-05afa52 elementor-widget elementor-widget-heading" data-id="05afa52" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h6 className="elementor-heading-title elementor-size-default">CONNECT WITH US</h6>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-c56341f elementor-shape-circle elementor-grid-4 elementor-widget elementor-widget-social-icons" data-id="c56341f" data-element_type="widget" data-widget_type="social-icons.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-social-icons-wrapper elementor-grid">
                                <span className="elementor-grid-item">
                                  <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-2a0aea2" href="https://www.facebook.com/ellazia.in" target="_blank">
                                    <span className="elementor-screen-only">Facebook-f</span>
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </span>
                                <span className="elementor-grid-item">
                                  <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-0a90e5f" href="https://www.instagram.com/ellazia.in_/" target="_blank">
                                    <span className="elementor-screen-only">Instagram</span>
                                    <i className="fab fa-instagram" />
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-6a526397 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6a526397" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1a595c33" data-id="1a595c33" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-aac3239 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="aac3239" data-element_type="widget" data-widget_type="divider.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-divider">
                                <span className="elementor-divider-separator" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-2d84956b elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2d84956b" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-590aa627" data-id="590aa627" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-1f4b8daa elementor-widget elementor-widget-text-editor" data-id="1f4b8daa" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <p>
                                <span style={{marginRight: 50}}>
                                  © 
                                  <span style={{color: '#'}}>
                                    2024 ellazia. All Rights Reserved | Powered by <a style={{textDecoration: 'none'}} href="http://www.lestora.com">Lestora</a>
                                  </span>
                                </span>
                                <br />
                                <img style={{maxWidth: 262}} src="https://ellazia.in/wp-content/uploads/2021/04/payments.png" alt="Payments" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-2d8272e9 elementor-hidden-desktop elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2d8272e9" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3ec67301" data-id="3ec67301" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-46644378 elementor-widget elementor-widget-text-editor" data-id={46644378} data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <p>
                                <span style={{marginRight: 50}}>
                                  © 
                                  <span style={{color: '#'}}>
                                    2024 ellazia. All Rights Reserved | Powered by <a style={{textDecoration: 'none'}} href="http://www.lestora.com">Lestora</a>
                                  </span>
                                </span>
                                <br />
                                <img style={{maxWidth: 262}} src="https://ellazia.in/wp-content/uploads/2021/04/payments.png" alt="Payments" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  </div>
  {/* #page */}
  <div id="to-top" className="scroll-button">
    <a className="scroll-button" href="javascript:void(0)" title="Back to Top">Back to Top</a>
  </div>
  <div id="um_upload_single" style={{display: 'none'}} />
  <div id="um_view_photo" style={{display: 'none'}}>
    <a href="javascript:void(0);" data-action="um_remove_modal" className="um-modal-close" aria-label="Close view photo modal">
      <i className="um-faicon-times" />
    </a>
    <div className="um-modal-body photo">
      <div className="um-modal-photo" />
    </div>
  </div>
  <div id="ts-ajax-add-to-cart-message">
    <span>Product has been added to your cart</span>
    <span className="error-message" />
  </div>
  <link rel="stylesheet" id="elementor-post-16438-css" href="https://ellazia.in/wp-content/uploads/elementor/css/post-16438.css?ver=1704341219" type="text/css" media="all" />
  <link rel="stylesheet" id="elementor-icons-shared-0-css" href="https://ellazia.in/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3" type="text/css" media="all" />
  <link rel="stylesheet" id="elementor-icons-fa-brands-css" href="https://ellazia.in/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3" type="text/css" media="all" />
  <div id="ts-quickshop-modal" className="ts-popup-modal">
    <div className="overlay" />
    <div className="quickshop-container popup-container">
      <span className="close" />
      <div className="quickshop-content" />
    </div>
  </div>
</div>

        </>
    )
}
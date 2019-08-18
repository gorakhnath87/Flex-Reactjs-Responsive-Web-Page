import React from 'react';
import logo from './img/logo.png';

import hotel1 from "./img/hotel-1.jpg";
import hotel2 from "./img/hotel-2.jpg";
import hotel3 from "./img/hotel-3.jpg";
import user1 from "./img/user-1.jpg";
import user2 from "./img/user-2.jpg";
import user3 from "./img/user-3.jpg";
import user4 from "./img/user-4.jpg";
import { star, searchIcon, bookmarkIcon, chatIcon, keyIcon,locationIcon,flightIcon,homeIcon } from "./img/SVG/allsvg";
import './css/style.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <form action="#" className="search">
          <input type="text" className="search__input" placeholder="search hotels"></input>
          <button className="search__button">
            <svg className="search__icon">
              {searchIcon}
            </svg>
          </button>
        </form>
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              {bookmarkIcon}
            </svg>
            <span className="user-nav__notification">7</span>
          </div>
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              {chatIcon}
            </svg>
            <span className="user-nav__notification">17</span>
          </div>
          <div className="user-nav__user">
            <img src={user1} alt="userpic" className="user-nav__image" />
          </div>
        </nav>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul className="sidebar-nav">
            <li className="sidebar-nav__item sidebar-nav__item--active">
              <a href="#" className="sidebar-nav__link">
                <svg className="sidebar-nav__icon">
                  {homeIcon}
                </svg>
                <span>Hotel</span>
              </a>
            </li>
            <li className="sidebar-nav__item">
              <a href="#" className="sidebar-nav__link">
                <svg className="sidebar-nav__icon">
                 {flightIcon}
                </svg>
                <span>flight</span>
              </a>
            </li>
            <li className="sidebar-nav__item">
              <a href="#" className="sidebar-nav__link">
                <svg className="sidebar-nav__icon">
                {keyIcon}
                </svg>
                <span>Car Rental</span>
              </a>
            </li>
            <li className="sidebar-nav__item">
              <a href="#" className="sidebar-nav__link">
                <svg className="sidebar-nav__icon">
                  {locationIcon}
                </svg>
                <span>Tour</span>
              </a>
            </li >
          </ul >
          <div className="legal">
            &copy: 2018 by gorakh. All right reserved
            </div>
        </nav >
        <main className="hotel-view">
          <div className="gallery">
            <figure className="gallery__item">
              <img src={hotel1} alt="" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
              <img src={hotel2} alt="" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
              <img src={hotel3} alt="" className="gallery__photo" />
            </figure>
          </div>
          <div className="overview">
            <h1 className="overview__heading">
              Konar Hotel
               </h1>
            <div className="overview__stars">
              <svg className="overview__icon-star">
                {star}
              </svg>
              <svg className="overview__icon-star">
                {star}
              </svg>
              <svg className="overview__icon-star">
                {star}
              </svg>
              <svg className="overview__icon-star">
                {star}
              </svg>
              <svg className="overview__icon-star">
                {star}
              </svg>
            </div>
            <div className="overview__location">
              <svg className="overview__icon-location">
              {locationIcon}
              </svg>
              <button className="btn-inline">
                banaso,konar
                </button>
            </div >
            <div className="overview__rating">
              <div className="overview__rating-average">8.6</div>
              <div className="verview__rating-count">80 votes</div>
            </div>
          </div >
          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                </p>
              <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                </p>
              <ul className="list">
                <li className="list__item">close to beach</li>
                <li className="list__item">Breakfast included</li>
                <li className="list__item">Free airport service</li>
                <li className="list__item">free wifif in all roo,</li>
                <li className="list__item">Air Conditioned and hosting</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">We speak all languages</li>
                <li className="list__item">Perfect for families</li>

              </ul>
              <div className="recommend">
                <p className="recommend__count">
                  gorakh nath 3 other freiend recommend this hotel.
                    </p>
                <div className="recommend__friends">
                  <img src={user1} alt="" className="recommend__photo" />
                  <img src={user2} alt="" className="recommend__photo" />
                  <img src={user3} alt="" className="recommend__photo" />
                  <img src={user4} alt="" className="recommend__photo" />

                </div>
              </div>
            </div>
            <div className="user-review">
              <figure className="review">
                <blockquote className="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                            </blockquote>
                <figcaption className="review__user">
                  <img src={user1} alt="User 1" className="review__photo" />
                  <div className="review__user-box">
                    <p className="review__user-name">Gorakh Nath</p>
                    <p className="review__user-date">Feb 23rd, 2017</p>
                  </div>
                  <div className="review__rating">7.8</div>
                </figcaption>
              </figure>


              <figure className="review">
                <blockquote className="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                            </blockquote>
                <figcaption className="review__user">
                  <img src={user2} alt="User 1" className="review__photo" />
                  <div className="review__user-box">
                    <p className="review__user-name">Gorakh Nath</p>
                    <p className="review__user-date">Sept 13th, 2017</p>
                  </div>
                  <div className="review__rating">9.3</div>
                </figcaption>
              </figure>

              <button className="btn-inline">Show all <span>&rarr;</span></button>
            </div>

          </div>

          <div className="cta">
            <h2 className="cta__book-now">
              Good news! We have 4 free rooms for your selected dates!
                </h2>
            <button className="btn">
              <span className="btn__visible">Book now</span>
              <span className="btn__invisible">Only 4 rooms left</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

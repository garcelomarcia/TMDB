import React from "react";
import "./Menubar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
import axios from "axios";

const Menubar = ({ handleSubmit, handleBrowse, isLoggedIn }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/login");
  };
  return (
    <>
      <div class="menu-bar">
        <img
          src={logo}
          alt="tmdb-logo"
          width="154"
          heigh="30"
          class="tmdb-logo"
        />
        <ul>
          <li>
            <Link to={"/movies"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a>
              Movies <i class="fas fa-caret-down"></i>
            </a>

            <div class="dropdown-menu">
              <ul>
                <li>
                  <Link to={"/movies"}>
                    <a id="popular" onClick={handleBrowse} type="movie">
                      Popular
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/movies"}>
                    <a id="top_rated" onClick={handleBrowse} type="movie">
                      Top Rated
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/movies"}>
                    <a id="upcoming" onClick={handleBrowse} type="movie">
                      Upcoming
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/movies"}>
                    <a>
                      Search <i class="fas fa-caret-down"></i>
                    </a>
                  </Link>
                  <div class="dropdown-menu-1">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="Search Movie..."
                        className="searchBar"
                      />
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a id="tv" className="type">
              TV <i class="fas fa-caret-down"></i>
            </a>
            <div class="dropdown-menu">
              <ul>
                <li>
                  <Link to={"/tv"}>
                    <a id="popular" type="tv" onClick={handleBrowse}>
                      Popular
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/tv"}>
                    <a id="top_rated" type="tv" onClick={handleBrowse}>
                      Top Rated
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/tv"}>
                    <a id="on_the_air" type="tv" onClick={handleBrowse}>
                      On the Air
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/tv"}>
                    <a>
                      Search <i class="fas fa-caret-down"></i>
                    </a>
                  </Link>
                  <div class="dropdown-menu-1">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="Search TV..."
                        className="searchBar"
                      />
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            {!isLoggedIn ? (
              <Link to={"/login"}>
                <a>Login</a>
              </Link>
            ) : (
              <>
                <Link to={"/login"}>
                  <a id="username">
                    {isLoggedIn}
                    <i class="fas fa-caret-down"></i>
                  </a>
                </Link>
                <div class="dropdown-menu">
                  <ul>
                    <li>
                      <Link to={"/favorites"}>
                        <a>Favorites</a>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/login"}>
                        <div onClick={handleLogout}>Logout</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </li>
        </ul>
      </div>
      <div class="hero">&nbsp;</div>
    </>
  );
};

export default Menubar;

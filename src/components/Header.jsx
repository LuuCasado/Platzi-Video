import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/reducers/authSlice";
import classNames from "classnames";
import gravatar from "../utils/gravatar";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import "../assets/styles/components/Header.scss";

const Header = ({ isLogin, isRegister }) => {
  const user = useSelector((state) => state.auth.user);
  const hasUser = Object.keys(user).length > 0;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const headerClass = classNames("header", { isLogin, isRegister });

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <>
              <li>
                <a href="/">{user.name} </a>
              </li>
              <li>
                <Link to="/" onClick={handleLogout}>
                  Cerrar Sesión
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;

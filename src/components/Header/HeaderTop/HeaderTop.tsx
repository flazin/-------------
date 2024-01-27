import { FC } from "react";
import Logo from "../../../assets/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";
import "./headerTop.scss";

const HeaderTop: FC = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-top__inner">
          <Link to="/" className="logo-link">
            <img src={Logo} alt="loGo" />
          </Link>
          <div className="header-center">
            <button className="catalog-btn">
              <span>Каталог</span>
              <span className="icon-menu">
                <AiOutlineMenu />
              </span>
            </button>
            <div className="input-search">
              <input type="search" placeholder="Поиск товаров..." />
              <span className="search-icon">
                <AiOutlineSearch />
              </span>
            </div>
          </div>
          <div className="header-right">
            <NavLink to="/favorite" className="header-right__link">
              <span className="icon">
                <span className="counter">1</span>
                <AiOutlineHeart />
              </span>
              <span className="text-link">Избранное</span>
            </NavLink>
            <NavLink to="/cart" className="header-right__link">
              <span className="icon">
                <span className="counter">6</span>
                <AiOutlineShopping />
              </span>
              <span className="text-link">Избранное</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

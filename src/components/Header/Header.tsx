import { FC } from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import "./header.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;

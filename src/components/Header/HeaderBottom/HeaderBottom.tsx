import { FC } from "react";
import Slider from "react-slick";
import { ISettingsSlick } from "../../../model";
import "./headerBottom.scss";

const HeaderBottom: FC = () => {
  const settings: ISettingsSlick = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="heaer-bottom">
      <div className="container">
        <div className="header-bottom__inner">
          <Slider {...settings}>
            {numbers.map((item) => (
              <div key={item}>
                <h3>{item}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;

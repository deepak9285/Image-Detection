import { useState } from "react";
import Image1 from "../assets/img/image_1.png";
import Image2 from "../assets/img/image_2.png";
import Image3 from "../assets/img/image_3.png";
const Slider = () => {
  const [slideId, setslideId] = useState(0);
  const changeSlideId = (id) => {
    setslideId(id);
  };
  return (
    <div className="inner-right-box">
      <div>
        {slideId === 0 && <img alt="ai" className="image" src={Image1}></img>}
        {slideId === 1 && <img alt="ai" className="image" src={Image2}></img>}
        {slideId === 2 && <img alt="ai" className="image" src={Image3}></img>}
      </div>
      <div className="text-wrap">
        {slideId === 0 && (
          <h2 className="text">Spot faces, Ages, Gender &emotions</h2>
        )}
        {slideId === 1 && (
          <h2 className="text">Discover object what's around</h2>
        )}
        {slideId === 2 && (
          <h2 className="text">Find celebrities-spot the stars</h2>
        )}
      </div>

      <div className="bullets">
      <span
            className={slideId === 0 && "active"}
            onClick={() => changeSlideId(0)}
          ></span>
          <span
            className={slideId === 1 && "active"}
            onClick={() => changeSlideId(1)}
          ></span>
          <span
            className={slideId === 2 && "active"}
            onClick={() => changeSlideId(2)}
          ></span>
      </div>
    </div>
  );
};
export default Slider;

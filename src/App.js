import "./assets/styles/style.css";
import "react-responsive-modal/styles.css";
import logo from "./assets/img/react-ai.png";
import DropZone from "./Components/DropZone";
//import DropZone from "./Components/DropZone2";
import Slider from "./Components/Slider";
import { useState } from "react";
import axios from "axios";

import Modal from "react-responsive-modal";
const api_url = "https://python-api.techsimplus.com/api/amazon-service/";
const App = () => {
  const [values, setValues] = useState({
    image: null,
    Servicetype: "Object  Detection",
  });
  const [loading, setloading] = useState(false);
  const [resultimage, setResultImage] = useState(null);
  const onfileChange = (file) => {
    setValues({ ...values, image: file });
  };
  const onServiceTypeChanges = (type) => {
    setValues({ ...values, service_type: type });
  };
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        let out = reader.result.split(",")[1];
        resolve(out);
      };
      reader.readAsDataURL(file);
    });
  };
  const onSubmitClick = async () => {
    let imageBase64 = await fileToBase64(values.image);
    let newValues = { ...values, image: imageBase64 };
    setloading(true);
    let response = await axios.post(api_url, newValues);
    setResultImage(response.data.data.image);
    setloading(false);
  };
  return (
    <div className="container">
      {resultimage && (
        <Modal onClose={() => setResultImage(null)} open={true}>
          <div className="result-image-container">
            <img alt="" src={resultimage} />
          </div>
        </Modal>
      )}
      {loading && (
        <div className="loading-overlay">
          <div className="loader" />
        </div>
      )}

      <div className="box">
        <div className="left-box">
          <div className="inner-left-box">
            <div className="logo">
              <img src={logo} alt="logo"></img>
              <h4>AI-React</h4>
            </div>
            <div className="heading">
              <h1>AI powered fun with react</h1>
              <h6>Lets play together</h6>
            </div>
            {values.image && (
              <span style={{ color: "darkblue" }}>
                File: {values.image.name}
              </span>
            )}

            <DropZone onfileChange={onfileChange} />
            <div className="service-container">
              <div className="service-item">
                <input
                  onChange={() => onServiceTypeChanges("ObjectDetection")}
                  checked={values.service_type === "ObjectDetection"}
                  type="radio"
                  name="service"
                />
                <label>Object Detection</label>
              </div>
              <div className="service-item">
                <input
                  onChange={() => onServiceTypeChanges("FaceDetection")}
                  checked={values.service_type === "FaceDetection"}
                  type="radio"
                  name="service"
                />
                <label>Face Detection</label>
              </div>

              <div className="service-item">
                <input
                  onChange={() => onServiceTypeChanges("CelebrityDetection")}
                  checked={values.service_type === "CelebrityDetection"}
                  type="radio"
                  name="service"
                />
                <label>Celebrity Detection</label>
              </div>
            </div>
            <button className="magic-btn" onClick={onSubmitClick}>
              See The magic
            </button>
          </div>
        </div>
        <div className="right-box">
          <Slider />
        </div>
      </div>
    </div>
  );
};
export default App;

import React from "react";
import image1 from "./../assets/images/Image1.jpeg";
import svgImage from "./../assets/vectors/folder.svg";
import JSComponent from "./js-component";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="image-div">
      <img src={image1} className="image1" alt="" width={350} height={200} />
      <img src={svgImage} alt="" width={200} height={200} />
      <JSComponent />
    </div>
  );
};

export default App;

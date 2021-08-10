import React, { Suspense, useState } from "react";
import image1 from "./../assets/images/Image1.jpeg";
import svgImage from "./../assets/vectors/folder.svg";

const Component = React.lazy(() => import("./js-component"));

import "./App.scss";

const App: React.FC = () => {
  const [showComponent, setShowComponent] = useState<boolean>(false);

  return (
    <div className="image-div">
      <img src={image1} className="image1" alt="" width={350} height={200} />
      <img src={svgImage} alt="" width={200} height={200} />
      <button
        onClick={() => {
          setShowComponent(true);
        }}
      >
        Load Component
      </button>

      {showComponent ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      ) : null}
    </div>
  );
};

export default App;

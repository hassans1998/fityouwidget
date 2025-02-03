// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function App() {
  const [showCategories, setShowCategories] = useState(false);

  const handleButtonClick = () => {
    setShowCategories(true);
  };

  return (
    <>
      <div className="widget-main">
        {!showCategories ? (
          <div id="departments">
            <div className="container-fluid">
              <div className="depart-main">
                <h3>Which department do you typically shop in?</h3>
                <p>
                  This gives us a starting point to personalize our fit
                  recommendations.
                </p>
                <div className="select-depart">
                  {["Women", "Men", "Boys", "Girls"].map((label) => (
                    <button
                      key={label}
                      className="btn"
                      onClick={handleButtonClick}
                    >
                      <span>{label}</span>
                      <svg
                        className="margin-left image tfp-next-arrow-img"
                        stroke="#23262c"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32.88 28.03"
                      >
                        <defs>
                          <style>{`
                            .tfp-next-arrow-line {
                              fill: none;
                              stroke-linecap: round;
                              stroke-miterlimit: 10;
                              stroke-width: 4px;
                            }
                          `}</style>
                        </defs>
                        <path
                          className="tfp-next-arrow-line"
                          d="M19.58,36H44.44"
                          transform="translate(-17.58 -21.98)"
                        />
                        <path
                          className="tfp-next-arrow-line"
                          d="M35.25,24l12.34,12.1L35.25,48"
                          transform="translate(-17.58 -21.98)"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div id="categories">
            <div className="container-fluid">
              <div className="category-main">
                <h3>What are you shopping for today?</h3>
                {[
                  "Suits",
                  "Dress shirts",
                  "Casual shirts, outerwear or other tops",
                  "Pants, jeans or other bottoms",
                  "Shoes, boots or other footwear",
                ].map((label) => (
                  <button
                    key={label}
                    className="btn"
                    onClick={handleButtonClick}
                  >
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

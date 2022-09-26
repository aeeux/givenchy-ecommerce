import React, { useRef, useState } from "react";
import Header from "../components/Header";
import ImageLink from "../components/ImageLink";
import jsonData from "../data.json";

export type DataType = {
  cover: string;
  title: string;
  color: string;
  slug: string;
};

export default function Home() {
  const [gridVisible, setGridVisible] = useState(false);
  const mapData: DataType[] = Array.from(jsonData);

  return (
    <>
    <Header view={gridVisible} toggleView={(value) => setGridVisible(value)} />
      <div>
        {gridVisible && (
          <div className="grid-container">
            <div className="grid-elements">
              {mapData.map((element, index) => (
                <div className="element">
                  <div className="thumbnail-wrapper">
                    <ImageLink element={element} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {!gridVisible && (
          <div className="list-elements">
            {mapData.map((element, index) => (
              <div className="element">
                <div className="thumbnail-wrapper">
                  <ImageLink element={element} index={index} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

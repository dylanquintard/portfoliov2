import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import * as Icon from "react-feather";
import ProgressiveImage from 'react-progressive-image';
import Portfolios from "../pages/Portfolios";

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const { titre, image, _id, github } = props.content;

  return (
    <div className="mi-portfolio mi-portfolio-visible">
      <div className="mi-portfolio-image">
        <ProgressiveImage
          src={image}
          placeholder="/images/portfolio-image-placeholder.png"
        >
          {src => <img src={src} alt={titre} />}
        </ProgressiveImage>
        <ul>
          <li>
            <a rel="noopener noreferrer" target="_blank" href={`/portfolios/${_id}`}>
              <Icon.ZoomIn />
            </a>
          </li>
          {github && (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={github}>
                <Icon.Code />
              </a>
            </li>
          )}
        </ul>
      </div>
      <h5>{titre}</h5>
    </div>
  );
}

export default Portfolio;

import React from "react";

import "./search-result-block.css";

const SearchResultBlock = ({
  title,
  blockNumber,
  links,
  author,
  date,
  text,
  image,
  imageWidth,
  imageHeight,
  altForImage
}) => {
  return (
    <div className="result-wrapper">
      <div className="flex-row blue-links-wrapper">
        <span>
          {links.map(link => {
            return (
              <a key={Math.random()} href="/" className="blue-link">
                {link}
              </a>
            );
          })}
        </span>
      </div>

      <div className="flex-row">
        <span className="sr-block-number">{blockNumber}</span>
        <input className="sr-checkbox" type="checkbox" name="check" />
        <div className="flex-column">
          <img
            src={image}
            width={imageWidth}
            height={imageHeight}
            alt={altForImage}
          />
        </div>
        <div className="flex-column margin-left-8">
          <a className="rotd-title-link font-size-12" href="/">
            {title}{" "}
          </a>
          <span className="text author">{author} (author). </span>
          <span className="text">
            {text}
            <br /> <span className="review-lightblue">REVIEW.</span> First
            published {date} (Booklist).
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchResultBlock;

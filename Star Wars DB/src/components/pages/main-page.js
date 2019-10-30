import React from 'react';
import swpng from '../../assets/images/SWPNG.png';

const MainPage = () => {
  return (
    <div className="jumbotron d-flex align-items-center main-page">
      <h2>
        Welcome to StarDB. <br />
        May the Force be with you.
      </h2>
      <img src={swpng} alt="Logo"></img>
    </div>
  );
};

export default MainPage;

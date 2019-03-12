import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./nav-advanced-search.css";

import SearchReviewOn from "../../assets/images/nav-advanced-search/searchreviews-on.gif";
import SearchReviewOff from "../../assets/images/nav-advanced-search/searchreviews-off.gif";
import SearchFeaturesOn from "../../assets/images/nav-advanced-search/searchfeatures-on.gif";
import SearchFeaturesOff from "../../assets/images/nav-advanced-search/searchfeatures-off.gif";
import SavedSearchesOn from "../../assets/images/nav-advanced-search/savedsearches-on.gif";
import SavedSearchesOff from "../../assets/images/nav-advanced-search/savedsearches-off.gif";

class NavAdvancedSearch extends Component {
  render() {
    const { srActive, ssActive, sfActive } = this.props;
    return (
      <div className="wrapper">
        <Link to="/search-reviews/">
          <img
            className="tabs"
            src={srActive === true ? SearchReviewOn : SearchReviewOff}
            alt="SR"
            width="94"
            height="36"
          />
        </Link>
        <Link to="/search-features/">
          <img
            className="tabs"
            src={sfActive === true ? SearchFeaturesOn : SearchFeaturesOff}
            alt="SF"
            width="94"
            height="36"
          />
        </Link>
        <Link to="/saved-searches/">
          <img
            className="tabs"
            src={ssActive === true ? SavedSearchesOn : SavedSearchesOff}
            alt="SS"
            width="94"
            height="36"
          />
        </Link>
      </div>
    );
  }
}

export default NavAdvancedSearch;

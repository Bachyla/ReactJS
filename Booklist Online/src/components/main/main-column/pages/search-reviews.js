import React, { Component } from 'react';

import NavAdvancedSearch from '../../../navigation-advanced-search';
import Spinner from '../../../spinner';

import ClearSearchImage from '../../../../assets/images/advanced-search/clear-search.gif';
import SearchNowImage from '../../../../assets/images/advanced-search/search-now.gif';

class SearchReviews extends Component {
    state = {
        isLoading : false,
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             isLoading: false,
    //         })
    //     }, 1000);
    // }

    render() {
        const { isLoading } = this.state;
        return (
            <Spinner isLoading={isLoading}>
                <NavAdvancedSearch srActive={true}/>
                <div className="search-wrapper">
                    <div className="search-buttons-wrapper">
                        <a href="/"><img 
                            src={ClearSearchImage}                 
                            alt="Clear Search"
                            className="search-buttons"
                            width="95"
                            height="25"/></a>
                        <a href="/"><img 
                            src={SearchNowImage}                 
                            alt="Clear Search"
                            className="search-buttons"
                            width="95"
                            height="25"/></a>
                    </div>
            
                    <h3 className="search-title">Advanced Search Reviews</h3>
                        <form className="form-flex">
                            <div>
                                <span className="search-lable">Search On:</span>
                                <div className="flex-column">
                                    <select className="search-for-select">
                                        <option value="A" option="selected">Keyword in title</option> 
                                        <option value="B">Author/Editor</option>
                                        <option value="C">Illustrator</option>
                                        <option value="D">Audiobook Reader</option>
                                        <option value="E">Keyword in Subject</option>
                                        <option value="F">Keyword in Review</option>
                                        <option value="G">Keyword in Review</option>
                                        <option value="H">Publisher Name</option>
                                        <option value="I">Reviewer Name</option>
                                        <option value="J">ISBN</option>
                                    </select>
                                    <select className="search-for-select">
                                        <option value="A" option="selected">Keyword in title</option> 
                                        <option value="B">Author/Editor</option>
                                        <option value="C">Illustrator</option>
                                        <option value="D">Audiobook Reader</option>
                                        <option value="E">Keyword in Subject</option>
                                        <option value="F">Keyword in Review</option>
                                        <option value="G">Keyword in Review</option>
                                        <option value="H">Publisher Name</option>
                                        <option value="I">Reviewer Name</option>
                                        <option value="J">ISBN</option>
                                    </select>
                                    <select className="search-for-select">
                                        <option value="A" option="selected">Keyword in title</option> 
                                        <option value="B">Author/Editor</option>
                                        <option value="C">Illustrator</option>
                                        <option value="D">Audiobook Reader</option>
                                        <option value="E">Keyword in Subject</option>
                                        <option value="F">Keyword in Review</option>
                                        <option value="G">Keyword in Review</option>
                                        <option value="H">Publisher Name</option>
                                        <option value="I">Reviewer Name</option>
                                        <option value="J">ISBN</option>
                                    </select>
                                    <select className="search-for-select">
                                    <select className="search-for-select">
                                        <option value="A" option="selected">Keyword in title</option> 
                                        <option value="B">Author/Editor</option>
                                        <option value="C">Illustrator</option>
                                        <option value="D">Audiobook Reader</option>
                                        <option value="E">Keyword in Subject</option>
                                        <option value="F">Keyword in Review</option>
                                        <option value="G">Keyword in Review</option>
                                        <option value="H">Publisher Name</option>
                                        <option value="I">Reviewer Name</option>
                                        <option value="J">ISBN</option>
                                    </select>
                                        <option value="A" option="selected">Keyword in title</option> 
                                        <option value="B">Author/Editor</option>
                                        <option value="C">Illustrator</option>
                                        <option value="D">Audiobook Reader</option>
                                        <option value="E">Keyword in Subject</option>
                                        <option value="F">Keyword in Review</option>
                                        <option value="G">Keyword in Review</option>
                                        <option value="H">Publisher Name</option>
                                        <option value="I">Reviewer Name</option>
                                        <option value="J">ISBN</option>
                                    </select>
                                    <select className="search-for-select">
                                        <option value="A" option="selected">Keyword in title</option> 
                                        <option value="B">Author/Editor</option>
                                        <option value="C">Illustrator</option>
                                        <option value="D">Audiobook Reader</option>
                                        <option value="E">Keyword in Subject</option>
                                        <option value="F">Keyword in Review</option>
                                        <option value="G">Keyword in Review</option>
                                        <option value="H">Publisher Name</option>
                                        <option value="I">Reviewer Name</option>
                                        <option value="J">ISBN</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className="flex-column">
                                    <span className="search-lable">Search For:</span>
                                    <input
                                        className="search-for-input" 
                                        type="text" 
                                        name="text"/>
                                    <input
                                        className="search-for-input" 
                                        type="text" 
                                        name="text"/>
                                    <input
                                        className="search-for-input" 
                                        type="text" 
                                        name="text"/>
                                    <input
                                        className="search-for-input" 
                                        type="text" 
                                        name="text"/>
                                    <input
                                        className="search-for-input" 
                                        type="text" 
                                        name="text"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex-column">
                                    <select className="and-or-select margin-top-12">
                                        <option value="A" option="selected">and</option> 
                                        <option value="B">or</option>
                                    </select>
                                    <select className="and-or-select">
                                        <option value="A" option="selected">and</option> 
                                        <option value="B">or</option>
                                    </select>
                                    <select className="and-or-select">
                                        <option value="A" option="selected">and</option> 
                                        <option value="B">or</option>
                                    </select>
                                    <select className="and-or-select">
                                        <option value="A" option="selected">and</option> 
                                        <option value="B">or</option>
                                    </select>
                                </div>
                            </div>
                    </form>
                    
                    <div className="search-buttons-wrapper">
                        <a href="/"><img 
                            src={ClearSearchImage}                 
                            alt="Clear Search"
                            className="search-buttons"
                            width="95"
                            height="25"/></a>
                        <a href="/"><img 
                            src={SearchNowImage}                 
                            alt="Clear Search"
                            className="search-buttons"
                            width="95"
                            height="25"/></a>
                    </div>
                </div>
            </Spinner>
        )
    }
}

export default SearchReviews;
import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import leftarrow from '../../../../assets/images/leftarrow.gif';
import rightarrow from '../../../../assets/images/rightarrow.gif';
import selectAllImage from '../../../../assets/images/search-results/select-all.gif';
import selectAllTitlesImage from '../../../../assets/images/search-results/select-all-page.gif';
import clearSelectedImage from '../../../../assets/images/search-results/clear-selected.gif'
import viewSelectedImage from '../../../../assets/images/search-results/viewitems-off.gif';
import addToListImage from '../../../../assets/images/search-results/addtolist.gif';
import downloadImage from '../../../../assets/images/search-results/download.gif';
import printImage from '../../../../assets/images/search-results/print.gif';
import emailImage from '../../../../assets/images/search-results/email.gif';
import bookImage from '../../../../assets/images/search-results/sr-type/book-image.gif';
import ebookImage from '../../../../assets/images/search-results/sr-type/ebook-66.gif';
import videoImage from '../../../../assets/images/search-results/sr-type/camcorder-image.gif';
import audioImage from '../../../../assets/images/search-results/sr-type/headphones-image.gif';
import starImage from '../../../../assets/images/search-results/sr-type/starred-review.gif';


import SearchResultBlock from '../../../search-result-block/';
import Spinner from '../../../spinner/';

class SearchResults extends Component {
    state = {
        isLoading: true,
      }
    
      componentDidMount() {
        setTimeout(() => {
          this.setState({
            isLoading: false,
          })
        }, 1000)
      }

      render() {
        const { isLoading } = this.state;
          return (
                <Fragment>
                <span className="desc">Your Quick search on book returns 20 results</span>
                <div className="search-results-wrapper">
                    <a className="oer-span-a font-size-10 margin-bottom-5 margin-top-12" href="/" target="_blank"><b><u>Save Search</u></b></a>

                    <div className="search-results-nav">
                        <img src={leftarrow} width="6" height="8" alt="arrow"/>
                            <Link className="prev-page-button" to="/search-results/">Previous Page</Link>
                            <Link className="nav-button selected" to="/search-results/"><u>1</u></Link>
                            <Link className="nav-button" to="/page1/">2</Link>
                            <Link className="next-page-button" to="/page1/"><u>Next Page</u></Link>
                        <img src={rightarrow} width="6" height="8" alt="arrow"/>
                    </div>

                    <div className="sort-settings">
                        <div className="flex-column margin-left-right-5">
                            <span className="sort-settings-title">Display:</span>
                            <select>
                                <option value="A">Citation</option>
                                <option value="B">Citation + Partial Text</option>
                            </select>
                        </div>

                        <div className="flex-column margin-left-right-5">
                            <span className="sort-settings-title">Sort:</span>
                            <select>
                                <option value="A">Date</option>
                                <option value="B">Title</option>
                                <option value="B">Author/Editor</option>
                            </select>
                        </div>
                    </div>

                    <div className="sort-settings grey-border">
                        <img src={selectAllImage} alt="Select all Images"/>
                        <img src={selectAllTitlesImage} alt="Select all titles"/>
                        <img src={clearSelectedImage} alt="Clear Selected"/>
                    </div>

                    <div className="sort-settings">
                        <img src={viewSelectedImage} alt="View selected items"/>
                    </div>

                    <div className="sort-settings grey-border">
                        <img src={addToListImage} alt="Add to list"/>
                        <img src={downloadImage} alt="Download"/>
                        <img src={printImage} alt="Print"/>
                        <img src={emailImage} alt="Email"/>
                    </div>
                </div>

                <Spinner isLoading={isLoading}>
                    <SearchResultBlock 
                        title={"The American Flag: An Encyclopedia of the Stars and Stripes in U. S. History, Culture, and Law."}
                        links={["Adult Books - ", "Nonfiction - ", "History - ", "U.S. History"]} 
                        blockNumber={"1."} 
                        author={"Vile, John R."} 
                        date={"February 1, 2019"} 
                        text={"Oct. 2018. 440p. illus. ABC-CLIO, $94 (9781440857881); e-book (9781440857898). 929.9."}
                        image={audioImage}
                        imageWidth={25}
                        imageHeight={25}
                        altForImage={"book"}/>

                    <SearchResultBlock 
                        title={"Unexampled Courage: The Blinding of Sgt. Isaac Woodard and the Awakening of President Harry S. Truman and Judge J. Waties Waring. "}
                        links={["Adult Books - ", "Nonfiction - ", "Social Sciences - ", "Politics & Government - "]} 
                        blockNumber={"2."} 
                        author={"Gergel, Richard"} 
                        date={"October 1, 2018 "} 
                        text={"Jan. 2019. 336p. Farrar/Sarah Crichton, $27 (9780374107895). 323."}
                        image={ebookImage}
                        imageWidth={17}
                        imageHeight={26}
                        altForImage={"ebook"}/>

                    <SearchResultBlock 
                        title={"Two Flags over Iwo Jima: Solving the Mystery of the U. S. Marine’s Corps’ Proudest Moment. "}
                        links={["Adult Books - ", "Nonfiction - ", "History - ", "World History"]} 
                        blockNumber={"3."} 
                        author={"Hammel, Eric"} 
                        date={"October 1, 2018"} 
                        text={"Oct. 2018. 222p. illus. Casemate, $29.95 (9781612006291). 940.54. "}
                        image={bookImage}
                        imageWidth={25}
                        imageHeight={25}
                        altForImage={"book"}/>

                    <SearchResultBlock 
                        title={"U. S. Women’s National Soccer Team. "}
                        links={["Books For Youth - ", "Nonfiction - ", "Sports & Recreation"]} 
                        blockNumber={"4."} 
                        author={"Skinner, J. E."} 
                        date={"October 1, 2018"} 
                        text={"Aug. 2018. 32p. illus. Cherry Lake, paper, $14.21 (9781534132849); Cherry Lake, lib. ed., $29.93 (9781534129641). Grades 4-7. 796.334. "}
                        image={bookImage}
                        imageWidth={25}
                        imageHeight={25}
                        altForImage={"book"}/>

                    <SearchResultBlock 
                        title={"Becoming Mrs. Lewis: The Improbably Love Story of Joy Davidman and C. S. Lewis. "}
                        links={["Books For Youth - ", "Fiction - ", "SHistorical Fiction"]} 
                        blockNumber={"5."} 
                        author={"Skinner, J. E."} 
                        date={"October 1, 2018"} 
                        text={"Oct. 2018. 432p. Thomas Nelson, $25.99 (9780785224501). "}
                        image={bookImage}
                        imageWidth={25}
                        imageHeight={25}
                        altForImage={"book"}/>  

                    <SearchResultBlock 
                        title={"U. S. Women’s National Soccer Team. "}
                        links={["Books For Youth - ", "Nonfiction - ", "Sports & Recreation"]} 
                        blockNumber={"6."} 
                        author={"Skinner, J. E."} 
                        date={"October 1, 2018"} 
                        text={"Aug. 2018. 32p. illus. Cherry Lake, paper, $14.21 (9781534132849); Cherry Lake, lib. ed., $29.93 (9781534129641). Grades 4-7. 796.334. "}
                        image={bookImage}
                        imageWidth={25}
                        imageHeight={25}
                        altForImage={"book"}/>

                    <SearchResultBlock 
                        title={"U. S. Women’s National Soccer Team. "}
                        links={["Books For Youth - ", "Nonfiction - ", "Sports & Recreation"]} 
                        blockNumber={"7."} 
                        author={"Skinner, J. E."} 
                        date={"October 1, 2018"} 
                        text={"Sept. 2014. 9hr. Hachette, CD, $35 (9781478928683)."}
                        image={videoImage}
                        imageWidth={25}
                        imageHeight={25}
                        altForImage={"book"}/>

                    <SearchResultBlock 
                        title={"Two Flags over Iwo Jima: Solving the Mystery of the U. S. Marine’s Corps’ Proudest Moment. "}
                        links={["Adult Books - ", "Nonfiction - ", "History - ", "World History"]} 
                        blockNumber={"8."} 
                        author={"Hammel, Eric"} 
                        date={"October 1, 2018"} 
                        text={"Oct. 2018. 222p. illus. Casemate, $29.95 (9781612006291). 940.54. "}
                        image={bookImage}
                        imageWidth={25}
                        imageHeight={25}
                        altForImage={"book"}/>

                    <SearchResultBlock 
                        title={"Two Flags over Iwo Jima: Solving the Mystery of the U. S. Marine’s Corps’ Proudest Moment. "}
                        links={["Adult Books - ", "Nonfiction - ", "History - ", "World History"]} 
                        blockNumber={"9."} 
                        author={"Hammel, Eric"} 
                        date={"April 12, 2016"} 
                        text={"Feb. 2016. 45min. Dreamscape, DVD, $19.99. "}
                        image={bookImage}
                        imageWidth={25}
                        imageHeight={25}
                        altForImage={"book"}/>

                    <SearchResultBlock 
                        title={"C. S. Lewis’s “Mere Christianity”. "}
                        links={["Adult Books - ", "Nonfiction - ", "Religion"]} 
                        blockNumber={"10."} 
                        author={"Marsden, George M."} 
                        date={"March 1, 2016 "} 
                        text={"Oct. 2018. 222p. illus. Casemate, $29.95 (9781612006291). 940.54. "}
                        image={starImage}
                        imageWidth={17}
                        imageHeight={17}
                        altForImage={"book"}/>
                </Spinner>

                <div className="search-results-wrapper margin-bottom-170">

                    <div className="sort-settings">
                        <img src={viewSelectedImage} alt="View selected items"/>
                    </div>

                    <div className="sort-settings grey-border">
                        <img src={addToListImage} alt="Add to list"/>
                        <img src={downloadImage} alt="Download"/>
                        <img src={printImage} alt="Print"/>
                        <img src={emailImage} alt="Email"/>
                    </div>

                    <div className="sort-settings grey-border">
                        <img src={selectAllTitlesImage} alt="Select all titles"/>
                        <img src={selectAllImage} alt="Select all Images"/>
                        <img src={clearSelectedImage} alt="Clear Selected"/>
                    </div>

                    <div className="sort-settings">
                        <div className="flex-column margin-left-right-5">
                            <span className="sort-settings-title">Display:</span>
                            <select>
                                <option value="A">Citation</option>
                                <option value="B">Citation + Partial Text</option>
                            </select>
                        </div>

                        <div className="flex-column margin-left-right-5">
                            <span className="sort-settings-title">Titles per page:</span>
                            <select>
                                <option value="A">10</option>
                                <option value="B">20</option>
                                <option value="C">30</option>
                            </select>
                        </div>

                        <div className="flex-column margin-left-right-5">
                            <span className="sort-settings-title">Sort:</span>
                            <select>
                                <option value="A">Date</option>
                                <option value="B">Title</option>
                                <option value="B">Author/Editor</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="search-results-nav">
                        <img src={leftarrow} width="6" height="8" alt="arrow"/>
                            <Link className="prev-page-button" to="/search-results/">Previous Page</Link>
                            <Link className="nav-button selected" to="/search-results/"><u>1</u></Link>
                            <Link className="nav-button" to="/page1/">2</Link>
                            <Link className="next-page-button" to="/page1/"><u>Next Page</u></Link>
                        <img src={rightarrow} width="6" height="8" alt="arrow"/>
                    </div>
                </div>
            </Fragment>
          )
      }
}


export default SearchResults;
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import leftarrow from '../../../../../assets/images/leftarrow.gif';
import rightarrow from '../../../../../assets/images/rightarrow.gif';
import selectAllImage from '../../../../../assets/images/search-results/select-all.gif';
import selectAllTitlesImage from '../../../../../assets/images/search-results/select-all-page.gif';
import clearSelectedImage from '../../../../../assets/images/search-results/clear-selected.gif'
import viewSelectedImage from '../../../../../assets/images/search-results/viewitems-off.gif';
import addToListImage from '../../../../../assets/images/search-results/addtolist.gif';
import downloadImage from '../../../../../assets/images/search-results/download.gif';
import printImage from '../../../../../assets/images/search-results/print.gif';
import emailImage from '../../../../../assets/images/search-results/email.gif';
import bookImage from '../../../../../assets/images/search-results/sr-type/book-image.gif';
import ebookImage from '../../../../../assets/images/search-results/sr-type/ebook-66.gif';
import videoImage from '../../../../../assets/images/search-results/sr-type/camcorder-image.gif';
import audioImage from '../../../../../assets/images/search-results/sr-type/headphones-image.gif';
import starImage from '../../../../../assets/images/search-results/sr-type/starred-review.gif';

import SearchResultBlock from '../../../../search-result-block/';

const SearchResPage1 = () => {
    return (
        <Fragment>
            <span className="desc">Your Quick search on book returns 20 results</span>
            <div className="search-results-wrapper">
                <a className="oer-span-a font-size-10 margin-bottom-5 margin-top-12" href="/" target="_blank"><b><u>Save Search</u></b></a>

                <div className="search-results-nav">
                    <img src={leftarrow} width="6" height="8" alt="arrow"/>
                        <Link className="prev-page-button" to="/search-results/">Previous Page</Link>
                        <Link className="nav-button" to="/search-results/"><u>1</u></Link>
                        <Link className="nav-button selected" to="/page1/">2</Link>
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

            <SearchResultBlock 
                title={"Hunter S. Thompson’s Fear and Loathing in Las Vegas. "}
                links={["Adult Books - ", "Fiction - ", "History - ", "Graphic Novels"]} 
                blockNumber={"11."} 
                author={"Little, Troy"} 
                date={"January 1, 2016"} 
                text={"Nov. 2015. 176p. Top Shelf, hardcover, $24.99 (9781603093750). 741.5."}
                image={bookImage}
                imageWidth={25}
                imageHeight={25}
                altForImage={"book"}/>

            <SearchResultBlock 
                title={"Joy: Poet, Seeker, and the Woman Who Captivated C. S. Lewis. "}
                links={["Adult Books - ", "Nonfiction - ", "Literature - ", "Politics & Government - "]} 
                blockNumber={"12."} 
                author={"Gergel, Richard"} 
                date={"October 12, 2018 "} 
                text={"Jan. 2019. 336p. Farrar/Sarah Crichton, $27 (9780374107895). 323."}
                image={ebookImage}
                imageWidth={17}
                imageHeight={26}
                altForImage={"ebook"}/>

            <SearchResultBlock 
                title={"A Hobbit, a Wardrobe, and a Great War: How J. R. R. Tolkien and C. S. Lewis Rediscovered Faith, Friendship, and Heroism in the Cataclysm of 1914–1918."}
                links={["Adult Books - ", "Nonfiction - ", "History - ", "World History"]} 
                blockNumber={"13."} 
                author={"Hammel, Eric"} 
                date={"July, 2015"} 
                text={"June 2015. 244p. Thomas Nelson, hardcover, $24.99 (9780718021764). 820.9."}
                image={bookImage}
                imageWidth={25}
                imageHeight={25}
                altForImage={"book"}/>

            <SearchResultBlock 
                title={"U. S. Women’s National Soccer Team. "}
                links={["Books For Youth - ", "Nonfiction - ", "Sports & Recreation"]} 
                blockNumber={"14."} 
                author={"Skinner, J. E."} 
                date={"November 20, 2018"} 
                text={"Aug. 2018. 32p. illus. Cherry Lake, paper, $14.21 (9781534132849); Cherry Lake, lib. ed., $29.93 (9781534129641). Grades 4-7. 796.334. "}
                image={bookImage}
                imageWidth={25}
                imageHeight={25}
                altForImage={"book"}/>

            <SearchResultBlock 
                title={"Becoming Mrs. Lewis: The Improbably Love Story of Joy Davidman and C. S. Lewis. "}
                links={["Books For Youth - ", "Fiction - ", "SHistorical Fiction"]} 
                blockNumber={"15."} 
                author={"Skinner, J. E."} 
                date={"October 19, 2018"} 
                text={"Oct. 2018. 432p. Thomas Nelson, $25.99 (9780785224501). "}
                image={videoImage}
                imageWidth={25}
                imageHeight={25}
                altForImage={"book"}/>  

            <SearchResultBlock 
                title={"Death of a King: The Real Story of Dr. Martin Luther King Jr.’s Final Year. "}
                links={["Books For Youth - ", "Nonfiction - ", "Sports & Recreation"]} 
                blockNumber={"16."} 
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
                blockNumber={"17."} 
                author={"Skinner, J. E."} 
                date={"October 1, 2018"} 
                text={"Aug. 2018. 32p. illus. Cherry Lake, paper, $14.21 (9781534132849); Cherry Lake, lib. ed., $29.93 (9781534129641). Grades 4-7. 796.334. "}
                image={starImage}
                imageWidth={17}
                imageHeight={17}
                altForImage={"book"}/>

            <SearchResultBlock 
                title={"Two Flags over Iwo Jima: Solving the Mystery of the U. S. Marine’s Corps’ Proudest Moment. "}
                links={["Adult Books - ", "Nonfiction - ", "History - ", "World History"]} 
                blockNumber={"18."} 
                author={"Hammel, Eric"} 
                date={"October 1, 2018"} 
                text={"Oct. 2018. 222p. illus. Casemate, $29.95 (9781612006291). 940.54. "}
                image={bookImage}
                imageWidth={25}
                imageHeight={25}
                altForImage={"book"}/>

            <SearchResultBlock 
                title={"The Fellowship: The Literary Lives of the Inklings; J. R. R. Tolkien and C. S. Lewis. "}
                links={["Adult Books - ", "Nonfiction - ", "History - ", "World History"]} 
                blockNumber={"19."} 
                author={"Zaleski, Philip"} 
                date={"April 12, 2016"} 
                text={"Feb. 2016. 45min. Dreamscape, DVD, $19.99. "}
                image={bookImage}
                imageWidth={25}
                imageHeight={25}
                altForImage={"book"}/>

            <SearchResultBlock 
                title={"Shadow Catcher: How Edward S. Curtis Documented American Indian Dignity and Beauty. "}
                links={["Books For Youth - ", "Nonfiction - ", "Arts"]} 
                blockNumber={"20."} 
                author={"Marsden, George M."} 
                date={"June 1, 2015"} 
                text={"Jan. 2015. 64p. illus. Compass Point, paperback, $8.95 (9780756549985); Compass Point, library edition, $33.99 (9780756549923). Grades 4-7. 973.04. "}
                image={starImage}
                imageWidth={17}
                imageHeight={17}
                altForImage={"book"}/>

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
                        <Link className="nav-button" to="/search-results/"><u>1</u></Link>
                        <Link className="nav-button selected" to="/page1/">2</Link>
                        <Link className="next-page-button" to="/page1/"><u>Next Page</u></Link>
                    <img src={rightarrow} width="6" height="8" alt="arrow"/>
                </div>
            </div>
         </Fragment>
    )
}

export default SearchResPage1;
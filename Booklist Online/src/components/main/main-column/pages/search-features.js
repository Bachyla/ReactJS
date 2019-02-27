import React, { Component, Fragment } from 'react';

import NavAdvancedSearch from '../../../navigation-advanced-search';

import clearSearchImage from '../../../../assets/images/advanced-search/clear-search.gif';
import searchNowImage from '../../../../assets/images/advanced-search/search-now.gif';

class SearchFeatures extends Component {
    render() {
        return (
            <Fragment>
                <NavAdvancedSearch sfActive={true}/>
                <div className="search-wrapper">
                    <div className="search-buttons-wrapper">
                            <a href="/"><img 
                                src={clearSearchImage}                 
                                alt="Clear Search"
                                className="search-buttons"
                                width="95"
                                height="25"/></a>
                            <a href="/"><img 
                                src={searchNowImage}                 
                                alt="Clear Search"
                                className="search-buttons"
                                width="95"
                                height="25"/></a>
                    </div>

                    <h3 className="search-title">Advanced Search Features</h3>
                    
                    <form>
                        <div className="form-flex">
                            <div>
                                <span className="search-lable block">Search On:</span>
                                <div className="flex-column">
                                    <select className="search-for-select">
                                        <option value="A">Keyword in title</option> 
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
                                        <option value="A">Keyword in title</option> 
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
                                        <option value="A">Keyword in title</option> 
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
                                    <span className="search-lable block">Search For:</span>
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
                                        <option value="A">and</option> 
                                        <option value="B">or</option>
                                    </select>
                                    <select className="and-or-select">
                                        <option value="A">and</option> 
                                        <option value="B">or</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-flex">
                            <div>
                                <span className="search-lable block">Booklist Taxonomy: <span className="annotation">(Use CTRL key to multiselect)</span></span>
                                <div className="flex-column">
                                    <select className="taxonomy-select" size="11" multiple="multiple">
                                        <option value="1">ADULT BOOKS</option>
                                        <option value="2">..ADULT NONFICTION</option>
                                        <option value="3">......Adult Arts</option>
                                        <option value="4">............Adult Architecture</option>
                                        <option value="5">............Adult Dance</option>
                                        <option value="6">............Adult Movies &amp; Television</option>
                                        <option value="7">............Adult Music</option>
                                        <option value="8">............Adult Photography</option>
                                        <option value="9">............Adult Theater</option>
                                        <option value="10">......Adult Business</option>
                                        <option value="11">......Adult Child Care</option>
                                        <option value="12">......Adult Computer Science</option>
                                        <option value="13">......Adult Cookery</option>
                                        <option value="14">......Adult Crafts &amp; Hobbies</option>
                                        <option value="15">......Adult Customs &amp; Holidays</option>
                                        <option value="16">......Adult Folklore</option>
                                        <option value="17">......Adult Gardening</option>
                                        <option value="18">......Adult Genealogy</option>
                                        <option value="19">......Adult Geography, Travel, &amp; Culture</option>
                                        <option value="20">......Adult Health &amp; Medicine</option>
                                        <option value="21">......Adult History</option>
                                        <option value="22">............Adult U.S. History</option>
                                        <option value="23">............Adult World History</option>
                                        <option value="24">......Adult Journalism &amp; Publishing</option>
                                        <option value="25">......Adult Language</option>
                                        <option value="26">......Adult Literature</option>
                                        <option value="27">......Adult Paranormal/ Supernatural</option>
                                        <option value="28">......Adult Pets</option>
                                        <option value="29">......Adult Philosophy</option>
                                        <option value="30">......Adult Poetry</option>
                                        <option value="31">......Adult Psychology</option>
                                        <option value="32">......Adult Religion</option>
                                        <option value="33">......Adult Science</option>
                                        <option value="34">............Adult Animals</option>
                                        <option value="35">............Adult Mathematics</option>
                                        <option value="36">............Adult Plants</option>
                                        <option value="37">......Adult Social Sciences</option>
                                        <option value="38">............Adult Economics</option>
                                        <option value="39">............Adult Education</option>
                                        <option value="40">............Adult Law</option>
                                        <option value="41">............Adult Politics &amp; Government</option>
                                        <option value="42">......Adult Sports &amp; Recreation</option>
                                        <option value="43">......Adult Technology</option>
                                        <option value="44">..ADULT FICTION</option>
                                        <option value="45">......Adult General Fiction</option>
                                        <option value="46">......Adult Crime Fiction</option>
                                        <option value="47">............Adult Mystery</option>
                                        <option value="48">............Adult Spy/Espionage</option>
                                        <option value="49">............Adult Thriller/Suspense</option>
                                        <option value="50">......Adult Graphic Novels</option>
                                        <option value="51">......Adult Historical Fiction</option>
                                        <option value="52">......Adult Horror Fiction</option>
                                        <option value="53">......Adult Romance</option>
                                        <option value="54">............Adult Contemporary Romance</option>
                                        <option value="55">............Adult Historical Romance</option>
                                        <option value="56">............Adult Romantic Suspense</option>
                                        <option value="57">......Adult Science Fiction &amp; Fantasy</option>
                                        <option value="58">............Adult Science Fiction</option>
                                        <option value="59">............Adult Fantasy</option>
                                        <option value="60">......Adult Westerns</option>
                                        <option value="61">BOOKS FOR YOUTH</option>
                                        <option value="62">..YOUTH NONFICTION</option>
                                        <option value="63">......Youth Arts</option>
                                        <option value="64">............Youth Performing Arts</option>
                                        <option value="65">............Youth Visual Arts</option>
                                        <option value="66">......Youth Computer Science</option>
                                        <option value="67">......Youth Cookery</option>
                                        <option value="68">......Youth Crafts &amp; Hobbies</option>
                                        <option value="69">......Youth Customs &amp; Holidays</option>
                                        <option value="70">......Youth Feelings &amp; Behavior</option>
                                        <option value="71">......Youth Folklore &amp; Fairy Tales</option>
                                        <option value="72">......Youth Geography, Travel, &amp; Culture</option>
                                        <option value="73">......Youth Health &amp; Medicine</option>
                                        <option value="74">......Youth History</option>
                                        <option value="75">............Youth U.S. History</option>
                                        <option value="76">............Youth World History</option>
                                        <option value="77">......Youth Journalism &amp; Publishing</option>
                                        <option value="78">......Youth Language</option>
                                        <option value="79">......Youth Literature</option>
                                        <option value="80">......Youth Nursery Rhymes</option>
                                        <option value="81">......Youth Paranormal / Supernatural</option>
                                        <option value="82">......Youth Pets</option>
                                        <option value="83">......Youth Philosophy</option>
                                        <option value="84">......Youth Poetry</option>
                                        <option value="85">......Youth Religion</option>
                                        <option value="86">......Youth Science</option>
                                        <option value="87">............Youth Animals</option>
                                        <option value="88">............Youth Mathematics</option>
                                        <option value="89">............Youth Plants</option>
                                        <option value="90">......Youth Social Sciences</option>
                                        <option value="91">............Youth Politics &amp; Government</option>
                                        <option value="92">......Youth Sports &amp; Recreation</option>
                                        <option value="93">......Youth Technology</option>
                                        <option value="94">..YOUTH FICTION</option>
                                        <option value="95">......Youth General Fiction</option>
                                        <option value="96">......Youth Action/Adventure</option>
                                        <option value="97">......Youth Fantasy</option>
                                        <option value="98">......Youth Graphic Novels</option>
                                        <option value="99">......Youth Historical Fiction</option>
                                        <option value="100">......Youth Mystery</option>
                                        <option value="101">......Youth Romance</option>
                                        <option value="102">......Youth Scary Stories</option>
                                        <option value="103">......Youth Science Fiction</option>
                                        <option value="104">......Youth Westerns</option>
                                        <option value="105">MEDIA</option>
                                        <option value="106">..MEDIA ADULT NONFICTION</option>
                                        <option value="107">......Media Arts</option>
                                        <option value="108">......Media Business</option>
                                        <option value="109">......Media Child Care</option>
                                        <option value="110">......Media Computer Science</option>
                                        <option value="111">......Media Cookery</option>
                                        <option value="112">......Media Crafts &amp; Hobbies</option>
                                        <option value="113">......Media Customs &amp; Holidays</option>
                                        <option value="114">......Media Folklore</option>
                                        <option value="115">......Media Gardening</option>
                                        <option value="116">......Media Genealogy</option>
                                        <option value="117">......Media Geography, Travel, &amp; Culture</option>
                                        <option value="118">......Media Health &amp; Medicine</option>
                                        <option value="119">......Media History</option>
                                        <option value="120">......Media Journalism &amp; Publishing</option>
                                        <option value="121">......Media Language</option>
                                        <option value="122">......Media Literature</option>
                                        <option value="123">......Media Paranormal / Supernatural</option>
                                        <option value="124">......Media Pets</option>
                                        <option value="125">......Media Philosophy</option>
                                        <option value="126">......Media Poetry</option>
                                        <option value="127">......Media Psychology</option>
                                        <option value="128">......Media Religion</option>
                                        <option value="129">......Media Science</option>
                                        <option value="130">......Media Social Sciences</option>
                                        <option value="131">......Media Sports &amp; Recreation</option>
                                        <option value="132">......Media Technology</option>
                                        <option value="133">..MEDIA ADULT FICTION</option>
                                        <option value="134">......Media General Fiction</option>
                                        <option value="135">......Media Crime Fiction</option>
                                        <option value="136">............Media Mystery</option>
                                        <option value="137">............Media Spy / Espionage</option>
                                        <option value="138">............Media Thriller / Suspense</option>
                                        <option value="139">......Media Historical Fiction</option>
                                        <option value="140">......Media Horror Fiction</option>
                                        <option value="141">......Media Romance</option>
                                        <option value="142">............Media Contemporary Fiction</option>
                                        <option value="143">............Media Historical Fiction</option>
                                        <option value="144">............Media Romantic Suspense</option>
                                        <option value="145">......Media Science Fiction &amp; Fantasy</option>
                                        <option value="146">............Media Science Fiction</option>
                                        <option value="147">............Media Fantasy</option>
                                        <option value="148">......Media Westerns</option>
                                        <option value="149">..MEDIA YOUTH NONFICTION</option>
                                        <option value="150">......Media Arts</option>
                                        <option value="151">......Media Computer Science</option>
                                        <option value="152">......Media Cookery</option>
                                        <option value="153">......Media Crafts &amp; Hobbies</option>
                                        <option value="154">......Media Customs &amp; Holidays</option>
                                        <option value="155">......Media Feelings &amp; Behavior</option>
                                        <option value="156">......Media Folklore &amp; Fairy Tales</option>
                                        <option value="157">......Media Geography, Travel, &amp; Culture</option>
                                        <option value="158">......Media Health &amp; Medicine</option>
                                        <option value="159">......Media History</option>
                                        <option value="160">......Media Journalism &amp; Publishing</option>
                                        <option value="161">......Media Language</option>
                                        <option value="162">......Media Literature</option>
                                        <option value="163">......Media Nursery Rhymes</option>
                                        <option value="164">......Media Paranormal / Supernatural</option>
                                        <option value="165">......Media Pets</option>
                                        <option value="166">......Media Philosophy</option>
                                        <option value="167">......Media Poetry</option>
                                        <option value="168">......Media Religion</option>
                                        <option value="169">......Media Science</option>
                                        <option value="170">......Media Social Sciences</option>
                                        <option value="171">......Media Sports &amp; Recreation</option>
                                        <option value="172">......Media Technology</option>
                                        <option value="173">..MEDIA YOUTH FICTION</option>
                                        <option value="174">......Media General Fiction</option>
                                        <option value="175">......Media Action/Adventure</option>
                                        <option value="176">......Media Fantasy</option>
                                        <option value="177">......Media Historical Fiction</option>
                                        <option value="178">......Media Mystery</option>
                                        <option value="179">......Media Romance</option>
                                        <option value="180">......Media Scary Stories</option>
                                        <option value="181">......Media Science Fiction</option>
                                        <option value="182">......Media Westerns</option>
                                        <option value="183">REFERENCE</option>
                                        <option value="184">..Reference Arts</option>
                                        <option value="185">......Reference Architecture</option>
                                        <option value="186">......Reference Dance</option>
                                        <option value="187">......Reference Movies &amp; Television</option>
                                        <option value="188">......Reference Music</option>
                                        <option value="189">......Reference Photography</option>
                                        <option value="190">......Reference Theater</option>
                                        <option value="191">..Reference Business</option>
                                        <option value="192">..Reference Child Care</option>
                                        <option value="193">..Reference Computer Science</option>
                                        <option value="194">..Reference Cookery</option>
                                        <option value="195">..Reference Crafts &amp; Hobbies</option>
                                        <option value="196">..Reference Customs &amp; Holidays</option>
                                        <option value="197">..Reference Folklore</option>
                                        <option value="198">..Reference Gardening</option>
                                        <option value="199">..Reference Genealogy</option>
                                        <option value="200">..Reference Geography, Travel, &amp; Culture</option>
                                        <option value="201">..Reference Health &amp; Medicine</option>
                                        <option value="202">..Reference History</option>
                                        <option value="203">......Reference U.S. History</option>
                                        <option value="204">......Reference World History</option>
                                        <option value="205">..Reference Journalism &amp; Publishing</option>
                                        <option value="206">..Reference Language</option>
                                        <option value="207">..Reference Library Science</option>
                                        <option value="208">..Reference Literature</option>
                                        <option value="209">..Reference Paranormal / Supernatural</option>
                                        <option value="210">..Reference Pets</option>
                                        <option value="211">..Reference Philosophy</option>
                                        <option value="212">..Reference Psychology</option>
                                        <option value="213">..Reference Religion</option>
                                        <option value="214">..Reference Science</option>
                                        <option value="215">......Reference Animals</option>
                                        <option value="216">......Reference Mathematics</option>
                                        <option value="217">......Reference Plants</option>
                                        <option value="218">..Reference Social Sciences</option>
                                        <option value="219">......Reference Economics</option>
                                        <option value="220">......Reference Education</option>
                                        <option value="221">......Reference Law</option>
                                        <option value="222">......Reference Politics &amp; Government</option>
                                        <option value="223">..Reference Sports &amp; Recreation</option>
                                        <option value="224">..Reference Technology</option>
                                    </select>
                                </div>
                                <a href="/" onClick={(e) => e.preventDefault()} className="clear-form-button"><u>[Clear Taxonomy]</u></a>
                            </div>
                        </div>

                        <div className="form-flex">
                            <div>
                            <span className="search-lable block">Booklist Print Issue / Booklist Online Publication Date:</span>
                                <select>
                                    <option value="000">All</option>
                                    <option value="JA1">Jan 1 &amp; 15</option>
                                    <option value="FE1">Feb 1</option>
                                    <option value="FE2">Feb 15</option>
                                    <option value="MR1">Mar 1</option>
                                    <option value="MR2">Mar 15</option>
                                    <option value="AP1">Apr 1</option>
                                    <option value="AP2">Apr 15</option>
                                    <option value="MY1">May 1</option>
                                    <option value="MY2">May 15</option>
                                    <option value="JE1">June 1 &amp; 15</option>
                                    <option value="JUL">July</option>
                                    <option value="AUG">Aug</option>
                                    <option value="SE1">Sept 1</option>
                                    <option value="SE2">Sept 15</option>
                                    <option value="OC1">Oct 1</option>
                                    <option value="OC2">Oct 15</option>
                                    <option value="NO1">Nov 1</option>
                                    <option value="NO2">Nov 15</option>
                                    <option value="DE1">Dec 1</option>
                                    <option value="DE2">Dec 15</option>
                                </select>
                                <select className="margin-left-right-5">
                                    <option value="0000">All</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                </select>

                                <span className="search-lable">to</span>

                                <select className="margin-left-right-5">
                                    <option value="000">All</option>
                                    <option value="JA1">Jan 1 &amp; 15</option>
                                    <option value="FE1">Feb 1</option>
                                    <option value="FE2">Feb 15</option>
                                    <option value="MR1">Mar 1</option>
                                    <option value="MR2">Mar 15</option>
                                    <option value="AP1">Apr 1</option>
                                    <option value="AP2">Apr 15</option>
                                    <option value="MY1">May 1</option>
                                    <option value="MY2">May 15</option>
                                    <option value="JE1">June 1 &amp; 15</option>
                                    <option value="JUL">July</option>
                                    <option value="AUG">Aug</option>
                                    <option value="SE1">Sept 1</option>
                                    <option value="SE2">Sept 15</option>
                                    <option value="OC1">Oct 1</option>
                                    <option value="OC2">Oct 15</option>
                                    <option value="NO1">Nov 1</option>
                                    <option value="NO2">Nov 15</option>
                                    <option value="DE1">Dec 1</option>
                                    <option value="DE2">Dec 15</option>
                                </select>
                                <select>
                                    <option value="0000">All</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-flex">
                            <div>
                                <span className="search-lable block margin-bottom-7">Default Sort Order:</span>
                                <div className="flex-column">
                                    <select>
                                        <option value="0">Date</option>
                                        <option value="1">Title</option>
                                        <option value="2">Author</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex-column">
                            <span className="search-lable block margin-bottom-7">Limit Search to:</span>
                            <div className="margin-bottom-7">
                                <span className="flex-row annotation"><input 
                                        className="search-checkbox"
                                        type="checkbox" 
                                        name="username" />
                                        Online-Only Features</span>
                                <span className="flex-row annotation"><input 
                                        className="search-checkbox"
                                        type="checkbox" 
                                        name="username" />
                                        Book Links Features</span>
                            </div>
                        </div>

                        <div className="search-buttons-wrapper">
                            <a href="/"><img 
                                src={clearSearchImage}                 
                                alt="Clear Search"
                                className="search-buttons"
                                width="95"
                                height="25"/></a>
                            <a href="/"><img 
                                src={searchNowImage}                 
                                alt="Clear Search"
                                className="search-buttons"
                                width="95"
                                height="25"/></a>
                        </div>

                        <div className="search-buttons-wrapper">
                            <a href="/" onClick={(e) => e.preventDefault()} className="clear-form-button"><u>Give Us Feedback about Advanced Search</u></a>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default SearchFeatures;
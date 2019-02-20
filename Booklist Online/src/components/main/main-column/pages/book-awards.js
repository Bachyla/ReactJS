import React from 'react';

import AwardsImage from '../../../../assets/images/book awards/awards.jpg';
import ShareButtons from '../../../share-buttons';

const BookAwards = () => {
    return (
            <div className="book-awards-wrapper">

                <ShareButtons />
            
                <h3 className="oer-main-title margin-bottom-15">Book Awards and Media Awards</h3>
                <span className="oer-span font-size-12">The <a className="oer-span-a font-size-12" href="/" target="_blank" title="">American Library Association</a>, of which <em>Booklist Online</em> is a part, juries some of the most highly regarded book and media awards and honors&nbsp;in the world. Follow the links below to see the most current winners; individual books and media are linked to the <em>Booklist</em> reviews when available. <em>Booklist Online</em> subscribers can view archived awards to 1992 and can also limit advanced searches by award winners</span> <br />
                
                <span className="oer-span font-size-12">While we do not have the resources to include every book and media award given, we have selected those that we feel are most relevant to our audience—including a few non-ALA awards such as the National Book Award and the Booker Prize. (Awards not given by ALA are marked with an asterisk.) We begin our list with ALA's first-ever single-title award for adult books, the Andrew Carnegie Medal for Excellence in Fiction and Nonfiction. For more extensive and up-to-date coverage of publishing news and book awards, visit <em><a className="oer-span-a font-size-12" href="/" target="_blank">The Booklist Reader.</a></em></span>

                <h4 className="oer-main-title-small margin-bottom-15">Book Awards for Adults</h4>
                <ul className="oer-list">
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Andrew Carnegie Medal for Excellence in Fiction</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Andrew Carnegie Medal for Excellence in Nonfiction</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Andrew Carnegie Medal for Excellence in Fiction Finalists</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Andrew Carnegie Medal for Excellence in Nonfiction Finalists</a></li>
                    <img src={AwardsImage} className="awards-image" alt="Awards" width="213" height="757"/>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Booklist Top of the List</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Booklist Editors' Choice: Adult Books</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Dartmouth Medal</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Dartmouth Honor</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Notable Books</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Over the Rainbow List</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">The Reading List</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">The Reading List</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">National Book Award</a>*</li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Pulitzer Prize</a>*</li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Man Booker Prize</a>*</li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">National Book Critics Circle Award</a>*</li>
                </ul>

                <h4 className="oer-main-title-small margin-bottom-15">Media Awards for Adults</h4>
                <ul className="oer-list">
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Booklist Editors' Choice: Audio for Adults</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Booklist Top of the List</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">The Listen List</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Notable Videos for Adults</a></li>
                </ul>

                <h4 className="oer-main-title-small margin-bottom-15">Book Awards for Children, Middle-Graders, and Young Adults</h4>
                <ul className="oer-list">
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Alex Awards (adult books for young readers age 12-18)</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Best Fiction for Young Adults</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Booklist Editors' Choice: Adult Books for Young Adults</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Booklist Editors' Choice: Books for Youth</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Booklist Top of the List</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Caldecott Medal</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Caldecott Honor</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Great Graphic Novels for Teens</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Newbery Medal</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Newbery Honor</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Notable Children's Books</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Morris Award</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Morris Award Finalists</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Printz Award</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Printz Honor</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Quick Picks</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Rainbow List</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Sibert Medal</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Sibert Honor</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">YALSA Award for Excellence in Nonfiction</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">YALSA Award for Excellence in Nonfiction Finalists</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">National Book Award</a>*</li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Amelia Bloomer</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Coretta Scott King Award</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Coretta Scott King Honor</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Over the Rainbow List</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Pura Belpre Award</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Pura Belpre Honor</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Stonewall Award</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Stonewall Honor</a></li>
                </ul>

                <h4 className="oer-main-title-small margin-bottom-15">Media Awards for Children, Middle-Graders, and Young Adults</h4>
                <ul className="oer-list">
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Amazing Audiobooks for Young Adults</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Booklist Editors' Choice: Audio for Youth</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Carnegie Medal</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Notable Children's Videos</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Notable Children's Recordings</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Odyssey Award</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Odyssey Honor</a></li>
                </ul>

                <h4 className="oer-main-title-small margin-bottom-15">Book Awards Celebrating Diversity</h4>
                <ul className="oer-list">
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Amelia Bloomer</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Coretta Scott King Award</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Coretta Scott King Honor</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Over the Rainbow List</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Pura Belpre Award</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Pura Belpre Honor</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Odyssey Honor</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Rainbow List</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Stonewall Award</a></li>
                    <li><a className="oer-span-a font-size-12" href="/" target="_blank">Stonewall Honor</a></li>
                </ul>
            </div>
    );
};

export default BookAwards;
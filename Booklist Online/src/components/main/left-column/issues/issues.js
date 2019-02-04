/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';

import './issues.css';

import IssuesTitle from '../../../../assets/images/issues/issues-title.gif'
import IssueImage from '../../../../assets/images/issues/issue-image.jpg'

const Issues = () => {
    return (
        <Fragment>
            <img 
                src={IssuesTitle} 
                alt="Quick Search Title"/>
            <img 
                className="issue-image"
                src={IssueImage} 
                alt="Issue Image"/>
            <div className="issue-list">
                <h3>February 1, 2019 </h3>
                <h3 className="margin-bottom-10">BOOKLIST</h3>
                <p>Spotlight on Diverse Books</p>
                <a  className="font-size-10"
                    href="*">Top 10 Diverse &nbsp;&nbsp; Nonfiction: 2019</a>
                <a  className="font-size-10"
                    href="*">Top 10 Diverse Fiction &nbsp;&nbsp; for Youth: 2019</a>
                <a  className="font-size-10"
                    href="*">Top 10 Diverse Nonfiction for Youth: 2019</a>
                <a  className="font-size-10"
                    href="*">Read-alikes: Tales from the Border</a>
                <a  className="font-size-10"
                    href="*">Now Hear This: Soneela Nankani</a>
                <a  className="font-size-10"
                    href="*">Talking With: Kosoko Jackson</a>
                <a  className="font-size-10"
                    href="*">Writers & Readers: Breaking Boundaries</a>
            </div>
            <div className="issue-list">
                <p>Features</p>
                <a  className="font-size-10"
                    href="*">Spring Youth Preview: &nbsp;&nbsp;&nbsp; 2019</a>
            </div>
            <div className="issue-list">
                <p>The Carnegie Shortlist</p>
                <a  className="font-size-10"
                    href="*">What Esi Edugyan Wants&nbsp;&nbsp;You to Read</a>
                <a  className="font-size-10"
                    href="*">What Rebecca Makkai &nbsp;&nbsp;&nbsp; Wants You to Read</a>
                <a  className="font-size-10"
                    href="*">What Tommy Orange &nbsp;&nbsp;&nbsp; Wants You to Read</a>
                <a  className="font-size-10"
                    href="*">What Francisco Cantú &nbsp;&nbsp;&nbsp; Wants You to Read</a>
                <a  className="font-size-10"
                    href="*">What Kiese Laymon Wants &nbsp;&nbsp;&nbsp; You to Read</a>
                <a  className="font-size-10"
                    href="*">What Beth Macy Wants &nbsp;&nbsp;&nbsp; You to Read</a>
            </div>
        </Fragment>
    );
};

export default Issues;
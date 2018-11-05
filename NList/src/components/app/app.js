import React, { Component } from "react";
import "./app.css";

import News from '../news/news'
import Add from '../add/add'
import Spinner from '../spinner'

  export default class App extends Component {
    state = {
      news: null,
      isLoading: false,
    }
    handleAddNews = (data) => {
      const nextNews = [data, ...this.state.news]
      this.setState({ news: nextNews })
    }
    render() {
      const { news, isLoading } = this.state;
      return (
        <React.Fragment>
          <Add onAddNews={this.handleAddNews}/>
          <h3>Новости</h3>
          {isLoading && <Spinner />}
          {Array.isArray(news) && <News data={news} />}
        </React.Fragment>
      )
    }

    componentDidMount() {
      this.setState({ isLoading: true })
      fetch('http://localhost:3000/data/newsData.json')
        .then(response => {
          return response.json()
        })
        .then(data => {
          setTimeout(() => {
            this.setState({ isLoading: false, news: data })
          }, 3000)
        })
    }
  }

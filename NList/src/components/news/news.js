import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from '../article/article'

export default class News extends Component {

  state = { 
    filteredNews: this.props.data,
  }

  static getDerivedStateFromProps(nextProps) {
    let nextFilteredNews = [...nextProps.data]
  
    nextFilteredNews.forEach((item, index) => {
      if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
        item.bigText = 'СПАМ'
      }
    })
  
    return {
      filteredNews: nextFilteredNews,
    }
  }
  renderNews = () => {
    const { filteredNews } = this.state
    let newsTemplate = null

    if (filteredNews.length) { 
      newsTemplate = filteredNews.map(function(item) {
        return <Article key={item.id} data={item} />
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }

    return newsTemplate
  }
  render() {
    const { filteredNews } = this.state 

    return (
      <div className="news">
        {this.renderNews()}
        {filteredNews.length ? (
          <strong className={'news__count'}>
            Всего новостей: {filteredNews.length}
          </strong>
        ) : null}
      </div>
    )
  }
}

  News.propTypes = {
    data: PropTypes.array.isRequired
  }
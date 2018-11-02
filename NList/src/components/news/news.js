import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from '../article/article'

export default class News extends Component {
    // удалили старое состояние counter: 0 (старый ненужный код)
    renderNews = () => {
      const { data } = this.props
      let newsTemplate = null

      if (data.length) {
        newsTemplate = data.map(function(item) {
          return <Article key={item.id} data={item}/>
        })
      } else {
        newsTemplate = <p>К сожалению новостей нет</p>
      }

      return newsTemplate
    }
    render() {
      const { data } = this.props

      return (
        <div className='news'>
          {this.renderNews()}
          {
            data.length ? <strong className={'news__count'}>Всего новостей: {data.length}</strong> : null
          }
        </div>
      );
    }
  }

  News.propTypes = {
    data: PropTypes.array.isRequired
  }
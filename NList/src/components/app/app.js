import React, { Component } from "react";
import './app.css';

const myNews = [
  {
    id: 1,
    author: "Саша Печкин",
    text: "В четверг, четвертого числа..."
  },
  {
    id: 2,
    author: "Просто Вася",
    text: "Считаю, что $ должен стоить 35 рублей!"
  },
  {
    id: 3,
    author: "Max Frontend",
    text: "Прошло 2 года с прошлых учебников, а $ так и не стоит 35"
  },
  {
    id: 4,
    author: "Гость",
    text: "Бесплатно. Без смс, про реакт"
  }
];

class Article extends Component {
    render() {
        const { author, text } = this.props.data
        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
            </div>
        )
    }
}

class News extends Component {
    renderNews = () => {
        const { data } = this.props;
        let newsTemplate = null;
    
        if (data.length) {
          newsTemplate = data.map(item => {
            return <Article key={item.id} data={item} />
          });
        } else {
          newsTemplate = <p>К сожалению, новостей нет</p>;
        }
        return newsTemplate;
    }
    
  render() {
    const { data } = this.props;

    return (
      <div className="news">
        {this.renderNews()}
        {
            data.length ? <strong>Всего новостей: {data.length}</strong> : null
        }
      </div>
    );
  }
}


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
          <h3>Новости</h3>
        <News data={myNews} />
      </React.Fragment>
    );
  }
}
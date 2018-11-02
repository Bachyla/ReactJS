import React, { Component } from "react";
import PropTypes from "prop-types";
import "./app.css";

const myNews = [
  {
    id: 1,
    author: "Саша Печкин",
    text: "В четверг, четвертого числа...",
    bigText:
      "B четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж."
  },
  {
    id: 2,
    author: "Просто Вася",
    text: "Считаю, что $ должен стоить 35 рублей!",
    bigText: "А евро 42!"
  },
  {
    id: 3,
    author: "Max Frontend",
    text: "Прошло 2 года с прошлых учебников, а $ так и не стоит 35",
    bigText: "А евро опять выше 70."
  },
  {
    id: 4,
    author: "Гость",
    text: "Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru",
    bigText:
      "Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!"
  }
];

class Article extends Component {
  state = {
    visible: false
  };

  handleReadMoreClck = e => {
    e.preventDefault();
    this.setState({ visible: true });
  };

  render() {
    const { author, text, bigText } = this.props.data;
    const { visible } = this.state;
    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        {/* если не visible, то показывай */
        !visible && (
          <a
            onClick={this.handleReadMoreClck}
            href="#"
            className="news__readmore"
          >
            Подробнее
          </a>
        )}
        {/* если visible, то показывай */
        visible && <p className="news__big-text">{bigText}</p>}
      </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired
  })
};

class News extends Component {

  renderNews = () => {
    const { data } = this.props;
    let newsTemplate = null;

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return <Article key={item.id} data={item} />;
      });
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>;
    }

    return newsTemplate;
  };

  render() {
    const { data } = this.props;

    return (
      <div className="news">
        {this.renderNews()}
        {data.length ? (
          <strong onClick={this.handleCounter}>
            Всего новостей: {data.length}
          </strong>
        ) : null}
      </div>
    );
  }
}

class Add extends React.Component {
    onBtnClickHandler = (e) => {
      e.preventDefault()
    }
    render() {
      return (
        <form className='add'>
          <input
            type='text'
            className='add__author'
            placeholder='Ваше имя'
          />
          <textarea
            className='add__text'
            placeholder='Текст новости'
          ></textarea>
          <label className='add__checkrule'>
            <input type='checkbox' /> Я согласен с правилами
          </label>
          <button
            className='add__btn'
            onClick={this.onBtnClickHandler}>
            Показать alert
          </button>
        </form>
      )
    }
  }

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Новости</h3>
        <Add />
        <News data={myNews} />
      </React.Fragment>
    );
  }
}

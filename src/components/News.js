import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "science",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = "React News - " + this.capitalizeWord(this.props.category);
  }

  // componentDidMount() ("init") runs after the render() ("build") function
  async componentDidMount() {
    this.updatePageNews();
  }

  capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  updatePageNews = async () => {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.props.setProgress(70);
      this.setState({
        articles: parsedData.articles,
        loading: false,
      });
      this.props.setProgress(100);
    }
  };

  nextPage = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updatePageNews();
  };

  prevPage = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updatePageNews();
  };

  render() {
    let heading = this.capitalizeWord(this.props.category);

    return (
      <div className="container my-3">
        <h6 style={{ letterSpacing: "10px" }}>TOP HEADLINES</h6>
        <h3 style={{ marginBottom: "30px" }}>{heading}</h3>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                // Returning news item
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}
                    author={element.author}
                    source={element.source["name"]}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between my-5">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.prevPage}
          >
            &larr; Previous
          </button>

          <h3 style={{ fontSize: "17px", color: "grey" }}>
            Page {this.state.page}
          </h3>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.nextPage}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  // CDM runs after the render() function
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=79c438c4094749039a2e537d1d603109&page=${this.state.page}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  nextPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=79c438c4094749039a2e537d1d603109&page=${
      this.state.page + 1
    }&pageSize=20`;

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  prevPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=79c438c4094749039a2e537d1d603109&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ page: this.state.page - 1, articles: parsedData.articles });
  };

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
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
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
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

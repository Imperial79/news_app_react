import React from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Functions ---->
  const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const updatePageNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeWord(props.category)} - ReactNews`;
    updatePageNews();
    // eslint-disable-next-line
  }, []);

  const nextPage = async () => {
    setPage(page + 1);
    updatePageNews();
  };

  const prevPage = async () => {
    setPage(page - 1);
    updatePageNews();
  };

  let heading = capitalizeWord(props.category);

  return (
    <div className="container my-3">
      <h6 style={{ letterSpacing: "10px" }}>TOP HEADLINES</h6>
      <h3 style={{ marginBottom: "30px" }}>{heading}</h3>
      {loading && <Loader />}
      <div className="row">
        {!loading &&
          articles.map((element) => {
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
          disabled={page <= 1}
          className="btn btn-dark"
          onClick={prevPage}
        >
          &larr; Previous
        </button>

        <h3 style={{ fontSize: "17px", color: "grey" }}>Page {page}</h3>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          className="btn btn-dark"
          onClick={nextPage}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;

import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, publishedAt, author, source } =
      this.props;
    let date = new Date(publishedAt);
    return (
      <div>
        <div className="card mb-3">
          <img
            src={
              imgUrl ??
              "https://harshatimbers.com/wp-content/themes/harshatimbers/images/no-img.jpg"
            }
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className="badge text-bg-info my-2">{source}</span>
            {description && <p className="card-text">{description}</p>}
            {author && (
              <p className="card-text">
                <small className="text-muted">by {author}</small>
              </p>
            )}
            <p className="card-text">
              <small className="text-muted">{date.toDateString()}</small>
            </p>
            <a href={newsUrl} target=" " className="btn btn-sm btn-dark">
              Expand
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

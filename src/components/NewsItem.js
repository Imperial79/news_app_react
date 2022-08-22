import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={
              imgUrl ??
              "https://harshatimbers.com/wp-content/themes/harshatimbers/images/no-img.jpgnpm run start"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target=" " className="btn btn-sm btn-primary">
              Expand
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

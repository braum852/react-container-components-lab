import React from 'react'

const Reviews = ({
    headline,
    link,
    byline,
    summary_short
  }) => {
      return (<div
        key={headline}
        className="review"
      >
        <header>
          <a
            className="review-link"
            href={link.url}
          >
            {headline}
          </a>
          <br/>
          <div className="author">{byline}</div>
        </header>
        <summary>{summary_short}</summary>
      </div>
    );
  };
  
  const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Reviews)}</div>;
  
  MovieReviews.defaultProps = {
    reviews: []
  };



export default MovieReviews;
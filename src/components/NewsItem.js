import React from "react";

export default function NewsItem(props) {

    let { title, description, imageUrl, newsUrl, author,date } = props;
    let d= new Date(date)
    d = d.toGMTString();
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl?imageUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Anonymous"} on {d}</small></p>
            <a rel="noreferrer" href={newsUrl} target= "_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

import React from 'react'

const NewsItem =(props)=>{

  let  {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
        <div className="card" >
        <img src={!imageUrl?"https://www.cnet.com/a/img/resize/641e950df9cdfc7a823e5beed53ee7266faa31ab/hub/2024/05/04/cda07449-0069-478e-a0ae-cc730b91b579/the-boys-season-4-antony-starr-key-art-prime-video.jpg?auto=webp&fit=crop&height=675&width=1200":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <span class="badge text-bg-info">Source : {source}</span>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {!author?"Anonymous":author} on {new Date (date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    )

}

export default NewsItem
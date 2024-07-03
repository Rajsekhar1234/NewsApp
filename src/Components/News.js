import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";


const News=(props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

 const capital = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  const updateNews = async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(65);

      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)

    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
   // eslint-disable-next-line
  }, [])

 const handlePrevClick = async () => {
    setPage(page-1)
    updateNews();
  };

 const handleNextClick = async () => {
  setPage(page+1)
    updateNews();
  };

    return (
      <div className="container my-3">
        <br></br>
        <h2 className="text-center"  style={{ margin: "35px 0px" }}>
          Headlines from : {capital(props.category)} category
        </h2>
        {loading && <Spinner />}
        <div className="row">
          {!loading &&
            articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element ? element.title.slice(0, 40) : " "}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-2">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={handlePrevClick}
          >
            &larr; Previous{" "}
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-primary"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );

}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

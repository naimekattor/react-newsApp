import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let API_KEY = "46ce118ed32e454a938e7565e15b869e";
    let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  console.log(articles.title);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge  bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItems
            key={index}
            title={news.title}
            src={news.urlToImage}
            description={news.description}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;

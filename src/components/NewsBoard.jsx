
import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";


export const NewsBoard = ({category}) => {
   
  const [articles, setArticles] = useState([]);
  useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6804663d9dd242dba35ddc87cce489fc
`;    
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setArticles(data.articles || []))
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setArticles([]);
      });
  }, [category]);
  return (
    <div>
    <h2 className="text-center my-4">
      LATEST{" "}
      <img
        className="mx-2"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/BBC_News_2022.svg/1200px-BBC_News_2022.svg.png"
        alt="Bootstrap"
        width="120"
        height="44"
      />
    </h2>
    {Array.isArray(articles) && articles.length > 0 ? (
      articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))
    ) : (
      <p className="text-center my-4">No articles available</p>
    )}
  </div>
  );
};




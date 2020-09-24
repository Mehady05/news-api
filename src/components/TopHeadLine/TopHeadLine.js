import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadLine = () => {
    const [articles, setArticles]= useState([])
    useEffect(()=>{
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=750ad71850c846dc93473f9599bce81e';
        fetch(url)
        .then(res=>res.json())
        .then(data=> setArticles(data.articles))
    } ,[])

    return (
        <div>
            <h2>Top HeadLines:{articles.length}</h2>
            {
               articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadLine;
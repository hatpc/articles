import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from "axios";

const baseURL = "https://5f55a98f39221c00167fb11a.mockapi.io/blogs";

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
      axios.get(`${baseURL}/${id}`).then((response) => {
        setArticle(response.data);
      });
    }, [id]);

    return (
        <>
            <h1 className="text-center">Article</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <Card.Img className="card-img" variant="top" src={article?.image} />
                    </div>
                    <div className='col-12 mt-3'>
                        <h2 className="title">{article?.title}</h2>
                        <p>{article?.content}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Article;
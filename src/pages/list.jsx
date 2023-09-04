import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { Link } from 'react-router-dom';

import PaginationList from "../components/pagination";

const baseURL = "https://5f55a98f39221c00167fb11a.mockapi.io/blogs?page=1&limit=10";

const Articles = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setArticles(response.data);
        });
    }, []);

    return (
        <>
            <h1 className="text-center">Articles</h1>
            {articles?.map((article) => (
                <div className='container my-2'>
                    <div className='row' style={{ border: '1px solid lightgray' }}>
                        <div className='col-2'>
                            <Card.Img className="card-img" variant="top" src={article?.image} />
                        </div>
                        <div className='col-6 text-start '>
                            <Link className="title" to={`articles/${article.id}`}>{article?.title}</Link>
                            <p>{article?.content}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="d-flex justify-content-center">
                <PaginationList />
            </div>
        </>
    );
}

export default Articles;
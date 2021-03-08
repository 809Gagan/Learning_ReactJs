//This project is just for playing with componenets

import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

const Book = () => {
    return (
        <div className="book" >
            <h1>Book</h1>
            <Tittle />
            <Image />
            <AuthorName />
        </div>
    );
}

const Tittle = () => {
    return (
        <h4>Tittle of the book.</h4>
    );
}

const AuthorName = () => {
    return (
        <h4>Author Name</h4>
    );
}

const Image = () => {
    return (
        <img style={{ height: 100, width: 100 }} src="/logo192.png" alt="NOT LOADED" />
    );
}


ReactDom.render(<Book />, document.getElementById('root'));
//This project is just for playing with componenets

import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

const BookList = () => {
    return (
        <React.Fragment>
            <Book />
            <Book />
            <Book />
            <Book />
        </React.Fragment>
    );
}

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
        //in style = {{height:100}} first curly braces is for emntering into javas
        //JavaScripts Mode where as the second braces id for object
        /*
            we can also use 
            styleObject = {
                height : 100,
                color : #fff
            }
            style = {styleObject}
        */
    );
}


ReactDom.render(<BookList />, document.getElementById('root'));
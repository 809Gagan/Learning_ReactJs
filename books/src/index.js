//This project is just for playing with componenets

import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";


/*
Thiskind of Books willl be of same properties 
that is these books have same value of author name, tittle , same image;
If we want to change these properties that is 
if we want to make these properties book specific then we need to pass the properties as an object
to thefunction component (Actually react passes this props object auttomatically to the function compopnent
    all we have to do is add new key an values)

    for eg : <Book Author = "Kali charan"/>
*/


const BookList = () => {
    return (
        <React.Fragment>
            <Book AuthorName="Gagan" />
            <Book AuthorName="Harjot" />
            <Book AuthorName="Balveer" />
            <Book AuthorName="Jagnoor" />
        </React.Fragment>
    );
}

const Book = (props) => {
    return (
        <div className="book" >
            <Image />
            <Tittle />
            <h4>Author: {props.AuthorName}</h4>
        </div>
    );
}

const Tittle = () => {
    return (
        <h4 style={{ fontSize: "20px" }}>Tittle of the book.</h4>
    );
}

const Image = () => {
    return (
        <img id="bookImage" src="/book.jpeg" alt="NOT LOADED" />
        //in style = {{height:100}} first curly braces is for emntering into javas
        //JavaScripts Mode where as the second braces id for object
        /*
            we can also use 
            styleObject = {
                height : 100,
                color : '#fff',
                property : "value"
            }
            style = {styleObject}
        */
    );
}


ReactDom.render(<BookList />, document.getElementById('root'));
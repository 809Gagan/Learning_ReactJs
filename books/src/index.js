//This project is just for playing with componenets

import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";


/*
This kind of Books will be of same properties 
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
            <Book AuthorName="Gagan" BookName="Book is Awesome" />
            <Book AuthorName="Harjot" BookName="telling a lie" />
            <Book AuthorName="Balveer" BookName="johny johny" />
            <Book AuthorName="Jagnoor" BookName="Maal Sangroor ton" />
        </React.Fragment>
    );
}

const Book = (props) => {
    console.log(props)
    const { AuthorName, BookName } = props;//Object Destructuring
    return (
        <div className="book" >
            <Image />
            <h4>{BookName}</h4>
            <h4>Author: {AuthorName}</h4>
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
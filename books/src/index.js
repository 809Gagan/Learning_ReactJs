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
            <Book AuthorName="Gagan" BookName="Book is Awesome" >
                <p>Iam child Tag</p>{/*we can acces these children tags using props.children*/}
            </Book>
            <Book AuthorName="Prashant Babua" BookName="History till yet">
                <p>Iam child Tag</p>
            </Book>
            <Book AuthorName="Balveer" BookName="johny johny">
                <p>Iam child Tag</p>
            </Book>
            <Book AuthorName="Jagnoor" BookName="Maal Sangroor ton">
                <p>Iam child Tag</p>
            </Book>
        </React.Fragment>
    );
}

const Book = (props) => {
    // console.log(props);
    // console.log(props.children);
    const { AuthorName, BookName } = props;//Object Destructuring
    return (
        <div className="book" >
            <Image />
            <h4>{props.children}</h4>
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


let names = ["Vishav", "Jagnoor", "Gagan", "Sukhraj"];

const Names = () => {
    return (
        <h1>{names.map((name) => {
            return <h1>{name}</h1>
        })}</h1>
    );
}

/*
Maps in javascrip
let names = ["Vishav","Jagnoor","Gagan","Sukhraj"];

const newName = names.map((name)=>{
    console.log(name);
});

*/
const newName = names.map((name) => {
    console.log(name);
});




ReactDom.render(<Names />, document.getElementById('root'));
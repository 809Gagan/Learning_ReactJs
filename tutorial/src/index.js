import React from 'react'; // importing React from react library.
import ReactDom from 'react-dom';

/*
JSX rules
return single elements div, section, article,fragment etc
use Camelcase for Html attributes
className instead of class
close every element
formatting
return statement use parenthesis cause we have to wright more than one number of lines most of the times
example 
return (
    <div> 
        <h1>Hello people</h1>
    </div>      
);
*/


function Greeting() {
    return <h1>HELLO BROTHER</h1>;//We import react to convert this JSX to our javascript code
    // React.createElement('Type of Element',{props},'children');
}

const Greetings = () => {
    return React.createElement('h1', {}, "I am children");
};// Function Componenet using Arrow Function

const Greetings2 = () => {
    return (<React.Fragment>
        <h1>Hello i use react fragment</h1>
    </React.Fragment>);
}// react component function only return one fragment 

const Greetings3 = () => {
    return (
        <>
            <h1>Hello I use fragments but in a shortcut way</h1>
        </>
    );
} // ShortCut to use react fragments

const Greeting4 = () => {
    return (
        <h1>HELLO SUKHI</h1>
    )
};

ReactDom.render(<Greetings3 />, document.getElementById("root"))
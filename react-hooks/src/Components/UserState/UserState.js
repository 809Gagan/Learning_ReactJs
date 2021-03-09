import React, { useState } from 'react';
import "./UserState.css";

/* 
useState is a function that is a react hook
which return an array 
which we have colleted in an array collector
where 1st value is a variable 
and second value of the array is a function 
which takes state of the component or anything we 
want to change in the component hence we can use these 
values.
*/

export const UserState = () => {
    const [Text, setText] = useState("Random Text");
    const Handler = () => {
        if (Text == "Random Text") {
            setText("Hello World")
        }
        else {
            setText("Random Text")
        }
    }
    return (
        <React.Fragment>
            <h1>{Text}</h1>
            <button onClick={Handler} className="orangeButton">Change Text</button>
        </React.Fragment>
    )
}
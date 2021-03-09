import React from 'react';
import "./UserState.css";
import { data } from './peopleData'
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
    const [Text, setText] = React.useState("Random Text");
    const Handler = () => {
        if (Text == "Random Text") {
            setText("Hello World")
        }
        else {
            setText("Random Text")
        }
    }
    return (
        <div className="cardChangeText">
            <h1>{Text}</h1>
            <button onClick={Handler} className="orangeButton">Change Text</button>
        </div>
    )
}

export const UseStateArray = () => {
    const [people, setpeople] = React.useState(data);
    return (
        <React.Fragment>
            {
                people.map((person) => {
                    console.log(person.name)
                    return <h1 className="item">{person.name}</h1>
                })
            }
        </React.Fragment>
    )
}
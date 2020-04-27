import React from 'react';

const Event =(props)=>{
    return(
        <ul style={{listStyle:'none'}}>
            <li>ID: {props.values.id}</li>
            <li>NAME: {props.values.name}</li>
            <li>EMAIL: {props.values.email}</li>
            <li>DATE: {props.values.date}</li>
            <li>TIME: {props.values.time}</li>
        </ul>
    )
}

export default Event;
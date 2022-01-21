import React from "react";

export default function Student({props}){
    return (
        <ul style={{backgroundColor: 'aquamarine', width: '100px', padding : '10px', marginLeft: '10px'}}>
            <li>{props.firstname}</li>
            <li>{props.lastName}</li>
        </ul>
    )
}
import React from 'react';

const footerSection = props => (
    <React.Fragment>
        <h2>{props.title}</h2>
        <ul>
            {props.lines.map((line, index) => {
                return <li key={index}> {line}</li>
            })}
        </ul>
    </React.Fragment >
)

export default footerSection;
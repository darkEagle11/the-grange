import React from 'react';

const footerSection = props => (
    <React.Fragment>
        <h2>{props.title}</h2>
        <ul>
            {props.lines.map(line => {
                return <li> {line}</li>
            })}
        </ul>
    </React.Fragment >
)

export default footerSection;
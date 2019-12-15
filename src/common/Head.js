import React, { useState} from 'react';

function Head(props) {
    const [title] = useState(props.title);
    const [subheading] = useState(props.subheading);

    return (
        <>
            <h1>{title}</h1>
            <span className="subheading">{subheading}</span>
        </>
    );
}

export default Head;
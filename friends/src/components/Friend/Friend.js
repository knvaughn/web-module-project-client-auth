import React from 'react';
import './Friend.css';

const Friend = (props) => {
    const {friend} = props;

    return (
        <div className="Friend">
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <a href={`mailto:${friend.email}`}>{friend.email}</a>
        </div>
    );
}
 
export default Friend;
import React from 'react';
 
const UserOutput=(props)=>{
    return (
        <div className="Paragraphs">
            <p>
                Username: {props.username}
            </p>
            <p>
                Email: {props.email}
            </p>
        </div>
    )
}

export default UserOutput; 
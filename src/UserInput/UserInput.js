import React from 'react';

const UserInput=(props)=>{                                  //inline for only one specific element

    const inputstyle={
        border: '2px solid green'
    };

    return <input style={inputstyle} type="text" onChange={props.changed} value={props.currentusername} />;
}

export default UserInput;
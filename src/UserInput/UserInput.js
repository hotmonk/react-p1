import React from 'react';

const UserInput=(props)=>{                                  //inline for only one specific element

    return <input style={inputstyle} type="text" onChange={props.changed} value={props.currentusername} />;
}

export default UserInput;
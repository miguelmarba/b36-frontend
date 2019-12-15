import React from 'react';

function Input(){
    return(
        <div className="form-group">
            <div className="form-label-group">
              <input type="email" 
              id="inputEmail" 
              className="form-control" 
              placeholder="Email address" 
              required="required" autofocus="autofocus" />
              <label for="inputEmail">Email address</label>
            </div>
        </div>
    );
};

export default Input;
import React from 'react';

function InputLogin({label, type, placeholder, change, value, required, name}){
    return(
        <div className="form-group">
            <div className="form-label-group">
              <input 
              id={name}
              name={name}
              type={type} 
              onChange={change}
              value={value}
              className="form-control" 
              placeholder={placeholder} 
              required={required} />
              <label htmlFor={name} >{label}</label>
              <p className="help-block text-danger"></p>
            </div>
        </div>
    );
};

export default InputLogin;
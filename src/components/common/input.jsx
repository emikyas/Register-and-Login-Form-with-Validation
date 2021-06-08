import React from 'react';

const Input = ({ name, label, error, ...rest }) => {

    const invalidError = error ? 'is-invalid' : '';
    const classes = `form-control ${invalidError}`;
    return (
        <div className="form-floating mb-3 w-100">
            <input
                {...rest}
                name={name}
                id={name}
                className={classes}
                placeholder={name}
            />
            { error && <div className="invalid-feedback invalid-input">{error}</div>}
            <label className="px-4" htmlFor={name}>{label}</label>
        </div>
     );
}
 
export default Input;
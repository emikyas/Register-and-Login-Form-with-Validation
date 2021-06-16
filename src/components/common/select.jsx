import React from 'react';

const Select = ({ name, label, options, error, ...rest }) => {
    return (
        
        <div className="form-floating">
            <select className={`form-select required ${error && 'is-invalid'}`} id={name} name={name} {...rest} aria-label="Floating label select example">
                <option name={name} value=''>Please select</option>
                {options.map(option => (
                    <option key={option.id} name={name} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
            { error && <div className="invalid-feedback invalid-input">{error}</div>}
            <label htmlFor={name}>{label}</label>
        </div>
    );
    
}
 
export default Select;
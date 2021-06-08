import React, { Component } from 'react';
import Input from './common/input';

class InputForm extends Component {
    state = {
        form: {},
        errors: {}
    }
    
    handleSubmit = e => {
        e.preventDefault();

        console.log('Submitted!')
    }
    
    handleChange = ({currentTarget: input}) => {
        const form = { ...this.state.form };

        form[input.name] = input.value;
        this.setState({ form });
    }

    renderButton(label) {
        return (
            <button disabled={this.validate()} className="btn btn-primary">
                {label}
            </button>
        );
    };
    renderInput(name, label, type ='text') {
        const { form, errors } = this.state;
        return (
            <Input
                type={type}
                name={name}
                label={label}
                value={form[name]}
                onChange={this.handleChange}
                // error={errors[name]}
            />
        );
    };
}
 
export default InputForm;
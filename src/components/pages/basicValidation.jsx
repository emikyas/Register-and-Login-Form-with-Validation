import React from 'react';
import InputForm from '../inputForm';

class BasicForm extends InputForm {
    state = {
        form: {
            username: '',
            password: '',
            email: '',
            company: '',
            options: '',
            siteLink: '',
            comments: ''
        },
        erros: {}
    } 
    validate = () => {
        return {
            username: 'Username is required.'
        }
    }
    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors });
        if (errors) return;

        console.log('Submitted!')
    }
    renderButton(label) {
        return (
            <button className="btn btn-primary">
                {label}
            </button>
        );
    };
    render() { 
        return ( 
            <form className="row g-3 mt-3" onSubmit={this.handleSubmit}>
                {this.renderInput('username', 'Username')}
                {this.renderInput('password', 'Password')}
                {this.renderInput('email', 'Email')}
                {this.renderInput('company', 'Company Name')}
                {this.renderInput('options', 'Select Options')}
                {this.renderInput('siteLink', 'Website Link')}
                {this.renderInput('comments', 'Comment')}
                {this.renderButton('Save')}
            </form>
        );
    }
}
 
export default BasicForm;
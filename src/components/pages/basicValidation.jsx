import React from 'react';
import { getOptions } from '../../services/formOpt';
import InputForm from '../inputForm';

class BasicForm extends InputForm {
    state = {
        form: {
            username: '',
            password: '',
            email: '',
            company: '',
            selectOpt: '',
            siteLink: '',
            comments: ''
        },
        errors: {}
    } 
    validate = () => {
        
        const errors = {};
        const { form } = this.state;
        if (form.username.trim() === '')
            errors.username = 'Username is required.'
        if (form.password.trim() === '')
            errors.password = 'Password is required.'
        if (form.email.trim() === '')
            errors.email = 'Email is required.'
        if (form.company.trim() === '')
            errors.company = 'Company Name is required.'
        if (form.selectOpt.trim() === '')
            errors.selectOpt = 'Options is required.'
        if (form.siteLink.trim() === '')
            errors.siteLink = 'Website Link is required.'
        if (form.comments.trim() === '')
            errors.comments = 'Comment is required.'
        
        return Object.keys(errors).length === 0 ? null : errors;
    }
    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors: errors || {} });
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
                {this.renderInput('email', 'Email', 'email')}
                {this.renderInput('company', 'Company Name')}
                {this.renderSelect('selectOpt', 'Select Options', getOptions())}
                {this.renderInput('siteLink', 'Website Link', 'url')}
                {this.renderInput('comments', 'Comment')}
                {this.renderButton('Save')}
            </form>
        );
    }
}
 
export default BasicForm;
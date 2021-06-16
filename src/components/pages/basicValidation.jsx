import React from 'react';
import { getOptions } from '../../services/formOpt';
import InputForm from '../inputForm';

class BasicForm extends InputForm {
    state = {
        data: {
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
        const { data } = this.state;
        if (data.username.trim() === '')
            errors.username = 'Username is required.'
        if (data.password.trim() === '')
            errors.password = 'Password is required.'
        if (data.email.trim() === '')
            errors.email = 'Email is required.'
        if (data.company.trim() === '')
            errors.company = 'Company Name is required.'
        if (data.selectOpt.trim() === '')
            errors.selectOpt = 'Options is required.'
        if (data.siteLink.trim() === '')
            errors.siteLink = 'Website Link is required.'
        if (data.comments.trim() === '')
            errors.comments = 'Comment is required.'
        
        return Object.keys(errors).length === 0 ? null : errors;
    }
    validateProperty = ({ name, value }) => {
        if (name === 'username') {
            if (value.trim() === '') return 'Username is required.';
        }
        if (name === 'password') {
            if (value.trim() === '') return 'Password is required.';
        }
        if (name === 'email') {
            if (value.trim() === '') return 'Email is required.';
        }
        if (name === 'company') {
            if (value.trim() === '') return 'Company is required.';
        }
        if (name === 'selectOpt') {
            if (value.trim() === '') return 'Options is required.';
        }
        if (name === 'siteLink') {
            if (value.trim() === '') return 'Website link is required.';
        }
        if (name === 'comments') {
            if (value.trim() === '') return 'Comment section is required.';
        }
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
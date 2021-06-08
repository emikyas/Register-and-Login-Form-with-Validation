import React, { Component } from 'react';
import Joi from 'joi-browser';
import InputForm from './../inputForm';

class JoiForm extends InputForm {
    state = {
        form: {
            username: '',
            password: '',
            email: '',
            company: '',
            options: '',
            siteLink: '',
            comments: ''
        }
    } 
    schema = {
        id: Joi.string(),
        username: Joi.string().alphanum().min(3).max(30).required().label('Username'),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).label('Password'),
        email: Joi.string().email({ tlds: {allow: false} }).required().label('Email'),
        company: Joi.string().required().label('Company Name'),
        options: Joi.string().required().label('Select Option'),
        siteLink: Joi.string().uri().required().label('Website Url'),
        comments: Joi.string().required().label('Comment')
    }
    
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
            </form>
        );
    }
}
 
export default JoiForm;
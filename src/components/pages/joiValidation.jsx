import React from 'react';
import Joi from 'joi-browser';
import InputForm from '../inputForm';
import { getOptions } from '../../services/formOpt';

class JoiForm extends InputForm {
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
    schema = {
        id: Joi.string(),
        username: Joi.string().alphanum().min(3).max(30).required().label('Username'),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).label('Password'),
        email: Joi.string().email({ tlds: {allow: false} }).required().label('Email'),
        company: Joi.string().required().label('Company Name'),
        selectOpt: Joi.string().required().label('Select Option'),
        siteLink: Joi.string().uri().required().label('Website Url'),
        comments: Joi.string().required().label('Comment')
    }
    render() { 
        return ( 
            <section>
                <form className="row g-3 mt-3" onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password')}
                    {this.renderInput('email', 'Email')}
                    {this.renderInput('company', 'Company Name')}
                    {this.renderSelect('selectOpt', 'Select Options', getOptions())}
                    {this.renderInput('siteLink', 'Website Link')}
                    {this.renderInput('comments', 'Comment')}
                    {this.renderButton('Save')}
                </form>
            </section>
        );
    }
}
 
export default JoiForm;